# Browser Extension Architecture Patterns

## Architecture Overview

Browser extensions มีหลาย components ที่ทำงานร่วมกัน:

```
┌─────────────────────────────────────────────────┐
│                   Browser                        │
├─────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────┐  │
│  │   Popup     │  │   Options   │  │  Pages  │  │
│  │   Page      │  │   Page      │  │         │  │
│  └──────┬──────┘  └──────┬──────┘  └────┬────┘  │
│         │                 │               │      │
│  ┌──────▼─────────────────▼───────────────▼────┐ │
│  │              Background Script              │ │
│  │         (Service Worker / Page)             │ │
│  └──────┬─────────────────┬────────────────────┘ │
│         │                 │                      │
│  ┌──────▼────────┐  ┌─────▼────────────────┐     │
│  │ Content       │  │  Storage API        │     │
│  │ Scripts       │  │                      │     │
│  └───────────────┘  └──────────────────────┘     │
│                                                 │
└─────────────────────────────────────────────────┘
```

## Component Responsibilities

### Background Script

**Responsibilities:**
- Long-running processes
- Event handling
- State management
- Communication hub
- API calls

**Example:**

```typescript
export default defineBackground({
  main() {
    // Handle extension lifecycle
    browser.runtime.onInstalled.addListener((details) => {
      if (details.reason === 'install') {
        initializeExtension();
      }
    });

    // Handle messages
    browser.runtime.onMessage.addListener((message, sender) => {
      return handleMessage(message, sender);
    });

    // Handle alarms
    browser.alarms.onAlarm.addListener((alarm) => {
      handleAlarm(alarm);
    });
  },
});
```

### Content Scripts

**Responsibilities:**
- DOM manipulation
- Page content analysis
- UI injection
- User interaction
- Data collection

**Example:**

```typescript
export default defineContentScript({
  matches: ['*://*/*'],
  main(ctx) {
    // Inject UI
    const ui = createShadowRootUi({
      name: 'my-extension',
      position: 'inline',
      anchor: 'body',
      mount(container) {
        container.innerHTML = '<div class="extension-ui">...</div>';
      },
      remove(container) {
        container.innerHTML = '';
      },
    });

    // Listen to page changes
    ctx.addEventListener('DOMContentLoaded', () => {
      analyzePage();
    });
  },
});
```

### Popup Page

**Responsibilities:**
- Quick actions
- Settings access
- Status display
- User input

**Example:**

```typescript
// popup.ts
import { createApp } from 'vue';

createApp({
  data() {
    return {
      settings: {},
      status: 'idle',
    };
  },
  async mounted() {
    this.settings = await browser.storage.local.get(['settings']);
  },
  methods: {
    async saveSettings() {
      await browser.storage.local.set({ settings: this.settings });
    },
  },
}).mount('#app');
```

### Options Page

**Responsibilities:**
- Configuration
- Preferences
- Account management
- Advanced settings

**Example:**

```typescript
// options.ts
import { createApp } from 'vue';

createApp({
  data() {
    return {
      preferences: {
        theme: 'light',
        notifications: true,
      },
    };
  },
  async mounted() {
    this.preferences = await browser.storage.local.get(['preferences']);
  },
  methods: {
    async savePreferences() {
      await browser.storage.local.set({ preferences: this.preferences });
    },
  },
}).mount('#app');
```

## Communication Patterns

### One-way Messaging

**Content Script → Background:**

```typescript
// Content script
const response = await browser.runtime.sendMessage({
  type: 'analyze',
  url: window.location.href,
});

// Background script
browser.runtime.onMessage.addListener((message, sender) => {
  if (message.type === 'analyze') {
    return analyzeUrl(message.url);
  }
});
```

### Two-way Messaging

**Background → Content Script:**

```typescript
// Background script
const [tab] = await browser.tabs.query({ active: true });
const response = await browser.tabs.sendMessage(tab.id, {
  type: 'highlight',
  selector: '.important',
});

// Content script
browser.runtime.onMessage.addListener((message) => {
  if (message.type === 'highlight') {
    highlightElement(message.selector);
  }
});
```

### Long-lived Connections

```typescript
// Content script
const port = browser.runtime.connect({ name: 'my-connection' });

port.onMessage.addListener((message) => {
  console.log('Received:', message);
});

port.postMessage({ type: 'init' });

// Background script
browser.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener((message) => {
    port.postMessage({ type: 'response', data: '...' });
  });
});
```

## State Management

### Local Storage

```typescript
// Save state
await browser.storage.local.set({ state: { count: 0 } });

// Load state
const { state } = await browser.storage.local.get(['state']);

// Listen to changes
browser.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === 'local' && changes.state) {
    handleStateChange(changes.state.newValue);
  }
});
```

### Sync Storage

```typescript
// Sync across devices
await browser.storage.sync.set({ preferences: { theme: 'dark' } });

// Load preferences
const { preferences } = await browser.storage.sync.get(['preferences']);
```

## Event-driven Architecture

### Event Types

```typescript
// Extension lifecycle
browser.runtime.onInstalled
browser.runtime.onStartup
browser.runtime.onUpdateAvailable

// Tab events
browser.tabs.onCreated
browser.tabs.onUpdated
browser.tabs.onRemoved
browser.tabs.onActivated

// Navigation events
browser.webNavigation.onCompleted
browser.webNavigation.onErrorOccurred

// Storage events
browser.storage.onChanged

// Messaging events
browser.runtime.onMessage
browser.runtime.onConnect
```

### Event Handlers

```typescript
export default defineBackground({
  main() {
    // Extension lifecycle
    browser.runtime.onInstalled.addListener((details) => {
      handleInstall(details);
    });

    // Tab events
    browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      if (changeInfo.status === 'complete') {
        handleTabComplete(tab);
      }
    });

    // Storage events
    browser.storage.onChanged.addListener((changes, areaName) => {
      handleStorageChange(changes, areaName);
    });
  },
});
```

## Error Handling

### Try-Catch

```typescript
try {
  await riskyOperation();
} catch (error) {
  console.error('Error:', error);
  // Show user-friendly error message
  showError('Something went wrong');
}
```

### Error Boundaries

```typescript
function withErrorBoundary(fn: Function) {
  return async (...args: any[]) => {
    try {
      return await fn(...args);
    } catch (error) {
      console.error('Error:', error);
      // Handle error gracefully
      return null;
    }
  };
}

const safeOperation = withErrorBoundary(riskyOperation);
```

## Testing Strategy

### Unit Tests

```typescript
describe('sanitizeInput', () => {
  it('should remove HTML tags', () => {
    expect(sanitizeInput('<script>alert(1)</script>')).toBe('alert(1)');
  });
});
```

### Integration Tests

```typescript
describe('Messaging', () => {
  it('should send message from content script to background', async () => {
    const response = await browser.runtime.sendMessage({ type: 'test' });
    expect(response).toEqual({ success: true });
  });
});
```

### E2E Tests

```typescript
test('complete user flow', async ({ page }) => {
  await page.goto('https://example.com');
  await page.click('.extension-button');
  await expect(page.locator('.result')).toBeVisible();
});
```

## Best Practices

1. **Separate Concerns**: แยก responsibilities ของแต่ละ component
2. **Use Messaging**: ใช้ messaging สำหรับ communication
3. **Handle Errors**: Handle errors อย่างเหมาะสม
4. **Test Thoroughly**: Test ทุกส่วนของ extension
5. **Document Architecture**: Document architecture อย่างชัดเจน
6. **Use TypeScript**: ใช้ TypeScript สำหรับ type safety
7. **Optimize Performance**: Optimize performance อย่างเหมาะสม
8. **Follow Browser Guidelines**: Follow browser store guidelines
