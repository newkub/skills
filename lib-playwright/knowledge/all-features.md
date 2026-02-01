# Playwright All Features

## Overview
Playwright มีฟีเจอร์ครบครันสำหรับ E2E testing ครอบคลุมทุกด้านของ web application testing

## Core Features

### 1. Multi-Browser Support
- **Chromium**: Chrome, Edge, Opera
- **Firefox**: Firefox browser
- **WebKit**: Safari engine
- **Mobile**: Chrome Mobile, Safari Mobile

### 2. Auto-Waiting Mechanism
- DOM element พร้อม
- Element visible
- Element enabled
- Element stable (ไม่กำลัง animate)
- Network idle

### 3. Powerful Locators
```typescript
// By role (semantics)
page.getByRole('button', { name: 'Submit' })

// By text content
page.getByText('Welcome')

// By label
page.getByLabel('Email address')

// By placeholder
page.getByPlaceholder('Enter email')

// By alt text
page.getByAltText('Company logo')

// By title
page.getByTitle('Close dialog')
```

### 4. Network Control
```typescript
// Intercept and mock requests
await page.route('**/api/**', route => {
  route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify({ success: true })
  });
});

// Wait for specific request
const response = await page.waitForResponse('**/api/users');
const data = await response.json();

// Monitor network activity
page.on('request', request => {
  console.log('Request:', request.url());
});
```

### 5. File Operations
```typescript
// File upload
await page.locator('input[type="file"]').setInputFiles('path/to/file.pdf');

// Multiple files
await page.locator('input[type="file"]').setInputFiles([
  'file1.pdf',
  'file2.jpg'
]);

// File download
const downloadPromise = page.waitForEvent('download');
await page.locator('a[download]').click();
const download = await downloadPromise;
await download.saveAs('/path/to/save/file.pdf');
```

### 6. Screenshots and Videos
```typescript
// Full page screenshot
await page.screenshot({ path: 'full-page.png', fullPage: true });

// Element screenshot
await page.locator('.header').screenshot({ path: 'header.png' });

// Video recording (automatic in test runner)
// Configured in playwright.config.ts
```

### 7. Emulation
```typescript
// Device emulation
const iPhone = devices['iPhone 12'];
await page.emulate(iPhone);

// Geolocation
await page.setGeolocation({ latitude: 52.52, longitude: 13.39 });

// Network throttling
await page.route('**/*', route => {
  // Simulate slow 3G
  setTimeout(() => route.continue(), 1000);
});
```

### 8. Parallel Execution
- Tests ทำงาน parallel โดย default
- Worker processes แยกกัน
- Configurable parallelism
- Sharding for CI

### 9. Test Runner Features
- **HTML Reporter**: Interactive test reports
- **Trace Viewer**: Detailed execution traces
- **Code Generation**: Generate tests from user actions
- **Debug Mode**: Step-by-step debugging
- **VS Code Extension**: Integrated development experience

### 10. Advanced Interactions
```typescript
// Mouse movements
await page.mouse.move(100, 100);
await page.mouse.down();
await page.mouse.move(200, 200);
await page.mouse.up();

// Keyboard actions
await page.keyboard.press('Control+A');
await page.keyboard.type('Hello World');

// Touch gestures (mobile)
await page.locator('.swipe-area').swipe('left');

// Drag and drop
await page.locator('#source').dragTo(page.locator('#target'));
```

### 11. Frame and Iframe Handling
```typescript
// Get frame
const frame = page.frame('iframe-name');

// Interact with frame elements
await frame.locator('button').click();

// Nested frames
const nestedFrame = frame.frame('nested-iframe');
```

### 12. Shadow DOM Support
```typescript
// Pierce shadow DOM
await page.locator('custom-element >> .shadow-button').click();

// Work with shadow root
const element = await page.locator('custom-element').elementHandle();
const shadowRoot = await element.evaluateHandle(el => el.shadowRoot);
```

### 13. Web Components and SPA Support
- Automatic waiting for route changes
- Hash navigation support
- History API navigation
- Client-side routing

### 14. Accessibility Testing
```typescript
// Accessibility tree snapshot
const snapshot = await page.accessibility.snapshot();

// Check accessibility violations
await page.checkA11y(); // With axe-playwright plugin
```

### 15. Performance Testing
```typescript
// Performance metrics
const metrics = await page.evaluate(() => {
  return JSON.stringify(window.performance.timing);
});

// Core Web Vitals
const vitals = await page.evaluate(() => {
  return new Promise(resolve => {
    new PerformanceObserver(list => {
      const entries = list.getEntries();
      resolve(entries);
    }).observe({ entryTypes: ['largest-contentful-paint'] });
  });
});
```

## Configuration Features

### 1. Environment-Specific Configs
```typescript
// Different configs for different environments
const config = {
  development: { baseURL: 'http://localhost:3000' },
  staging: { baseURL: 'https://staging.example.com' },
  production: { baseURL: 'https://example.com' }
};
```

### 2. Global Setup/Teardown
```typescript
// global-setup.ts
import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  // Setup database
  // Start services
  // Generate test data
}

export default globalSetup;
```

### 3. Custom Reporters
```typescript
// Custom reporter implementation
class CustomReporter {
  onTestBegin(test) {
    console.log(`Starting: ${test.title}`);
  }
  
  onTestEnd(test, result) {
    console.log(`Finished: ${test.title} - ${result.status}`);
  }
}
```

## Best Practices

1. **Use data-testid selectors** for stability
2. **Write isolated tests** that don't depend on each other
3. **Leverage auto-waiting** instead of manual waits
4. **Use Page Object Model** for maintainability
5. **Configure proper timeouts** for your environment
6. **Use fixtures** for test data management
7. **Enable trace on failure** for debugging
8. **Run tests in parallel** for faster execution

## References
- [Playwright Features](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Test Runner Guide](https://playwright.dev/docs/test-runner)
