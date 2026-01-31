# Browser Extension Development Best Practices

## Security

### Principle of Least Privilege

ใช้ permissions ที่จำเป็นเท่านั้น:

```typescript
// ❌ Bad: Too many permissions
permissions: ['tabs', 'bookmarks', 'history', 'downloads', 'notifications']

// ✅ Good: Only necessary permissions
permissions: ['storage', 'activeTab']
```

### Content Security Policy

ใช้ CSP อย่างเหมาะสม:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline';">
```

### Validate User Input

ตรวจสอบ input ก่อนใช้:

```typescript
function sanitizeInput(input: string): string {
  return input.replace(/[<>]/g, '');
}
```

### Avoid eval()

หลีกเลี่ยงการใช้ `eval()` และ `innerHTML` โดยตรง:

```typescript
// ❌ Bad
element.innerHTML = userInput;

// ✅ Good
element.textContent = userInput;
```

## Performance

### Lazy Loading

Load resources เมื่อจำเป็น:

```typescript
// Lazy load content script
export default defineContentScript({
  matches: ['*://*/*'],
  registration: 'runtime',
  async main(ctx) {
    // Check if needed before loading
    if (shouldLoad()) {
      await loadResources();
    }
  },
});
```

### Debounce/Throttle

ใช้ debounce/throttle สำหรับ frequent events:

```typescript
function debounce(func: Function, wait: number) {
  let timeout: any;
  return function(...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
```

### Optimize Bundle Size

- Tree-shake unused code
- Minify CSS
- Use dynamic imports
- Avoid large dependencies

## User Experience

### Provide Feedback

แจ้งผู้ใช้เมื่อมีการทำงาน:

```typescript
// Show notification
browser.notifications.create({
  type: 'basic',
  iconUrl: 'icon-48.png',
  title: 'Extension Name',
  message: 'Action completed',
});
```

### Handle Errors Gracefully

Handle errors อย่างเหมาะสม:

```typescript
try {
  await doSomething();
} catch (error) {
  console.error('Error:', error);
  // Show user-friendly error message
}
```

### Responsive Design

ใช้ responsive design สำหรับ UI:

```css
@media (max-width: 600px) {
  .container {
    width: 100%;
  }
}
```

## Accessibility

### ARIA Labels

ใช้ ARIA labels:

```html
<button aria-label="Close dialog">×</button>
```

### Keyboard Navigation

รองรับ keyboard navigation:

```typescript
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
```

### Focus Management

จัดการ focus อย่างเหมาะสม:

```typescript
function openModal() {
  modal.style.display = 'block';
  modal.querySelector('button').focus();
}
```

## Testing

### Unit Testing

Test functions แยก:

```typescript
describe('sanitizeInput', () => {
  it('should remove HTML tags', () => {
    expect(sanitizeInput('<script>alert(1)</script>')).toBe('alert(1)');
  });
});
```

### Integration Testing

Test interactions ระหว่าง components:

```typescript
describe('Messaging', () => {
  it('should send message from content script to background', async () => {
    const response = await browser.runtime.sendMessage({ type: 'test' });
    expect(response).toEqual({ success: true });
  });
});
```

### E2E Testing

Test user flows:

```typescript
test('complete user flow', async ({ page }) => {
  await page.goto('https://example.com');
  await page.click('.extension-button');
  await expect(page.locator('.result')).toBeVisible();
});
```

## Cross-Browser Compatibility

### Feature Detection

ตรวจสอบ features ก่อนใช้:

```typescript
if (browser.runtime.getManifest().version === '3') {
  // MV3 specific code
} else {
  // MV2 specific code
}
```

### Polyfills

ใช้ polyfills สำหรับ older browsers:

```typescript
import 'core-js/stable';
```

### Browser-specific APIs

Handle browser-specific APIs:

```typescript
// Chrome/Edge
if (browser.sidePanel) {
  browser.sidePanel.open();
}

// Firefox
if (browser.sidebarAction) {
  browser.sidebarAction.open();
}
```

## Documentation

### README

สร้าง README ที่ชัดเจน:

```markdown
# Extension Name

Description of what the extension does.

## Installation

1. Download the extension
2. Install in your browser

## Usage

How to use the extension

## Development

How to develop the extension
```

### Code Comments

ใส่ comments ที่ชัดเจน:

```typescript
/**
 * Sanitizes user input to prevent XSS attacks
 * @param input - The user input to sanitize
 * @returns The sanitized input
 */
function sanitizeInput(input: string): string {
  return input.replace(/[<>]/g, '');
}
```

## Versioning

### Semantic Versioning

ใช้ semantic versioning:

```json
{
  "version": "1.2.3"
}
```

### Changelog

เก็บ changelog:

```markdown
## [1.2.3] - 2024-01-15

### Added
- New feature

### Fixed
- Bug fixes

### Changed
- Breaking changes
```

## Deployment

### Environment Variables

ใช้ environment variables:

```typescript
const API_URL = import.meta.env.VITE_API_URL;
```

### Build Verification

Test builds ก่อน deploy:

```bash
wxt build
wxt zip
# Test zip file in browser
```

### Store Guidelines

Follow store guidelines:
- Chrome Web Store
- Firefox Add-ons
- Edge Add-ons
- Safari App Store
