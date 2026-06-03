# Features

## Purpose

รายการฟีเจอร์ทั้งหมดของ Playwright สำหรับ end-to-end testing

## Core Features

### 1. Multi-browser Support

| Browser | Engine | Platforms |
|---------|--------|-----------|
| **Chromium** | Blink | Windows, macOS, Linux |
| **Firefox** | Gecko | Windows, macOS, Linux |
| **WebKit** | WebKit | Windows, macOS, Linux |

### 2. Auto-waiting

| Action | Auto-wait |
|--------|-----------|
| **click** | Element visible + enabled |
| **fill** | Input enabled |
| **selectOption** | Options available |
| **check** | Checkbox visible |
| **hover** | Element visible |
| **drag** | Elements visible |

### 3. Locator API

| Locator | Example |
|---------|---------|
| **getByRole** | `page.getByRole('button', { name: 'Submit' })` |
| **getByLabel** | `page.getByLabel('Email')` |
| **getByText** | `page.getByText('Hello')` |
| **getByPlaceholder** | `page.getByPlaceholder('Enter name')` |
| **getByTestId** | `page.getByTestId('submit-btn')` |
| **locator** | `page.locator('.class')` |
| **nth** | `page.locator('.item').nth(0)` |
| **first/last** | `page.locator('.item').last` |

### 4. Network Interception

```typescript
// Mock API
await page.route('**/api/*', route => {
  route.fulfill({
    status: 200,
    body: JSON.stringify({ data: 'mock' }),
  })
})

// Abort requests
await page.route('**/*.png', route => route.abort())

// Modify requests
await page.route('**/api/**', route => {
  const request = route.request()
  route.continue({
    headers: { ...request.headers(), 'X-Custom': 'value' },
  })
})
```

### 5. Mobile Device Emulation

```typescript
// iPhone
const context = await browser.newContext({
  device: 'iPhone 12',
})

// Custom device
const context = await browser.newContext({
  viewport: { width: 375, height: 812 },
  deviceScaleFactor: 3,
  hasTouch: true,
  isMobile: true,
})
```

### 6. File Upload

```typescript
await page.setInputFiles('input[type="file"]', 'file.pdf')

// Multiple files
await page.setInputFiles('input[type="file"]', ['file1.pdf', 'file2.pdf'])

// Clear files
await page.setInputFiles('input[type="file"]', [])
```

### 7. Downloads

```typescript
const [download] = await Promise.all([
  page.waitForEvent('download'),
  page.click('#download'),
])

const path = await download.path()
```

### 8. Drag and Drop

```typescript
await page.dragAndDrop('#source', '#target')
```

## Advanced Features

### 1. iframe Handling

```typescript
// Locator
const iframe = page.frameLocator('#iframe')

// Interact
await iframe.getByRole('button').click()
```

### 2. WebSockets

```typescript
page.on('websocket', ws => {
  ws.on('frames', frame => console.log(frame.text()))
  ws.on('close', () => console.log('closed'))
})
```

### 3. Permissions

```typescript
const context = await browser.newContext({
  permissions: ['geolocation', 'notifications'],
})
```

### 4. Proxy

```typescript
const context = await browser.newContext({
  proxy: {
    server: 'http://myproxy:3128',
    username: 'user',
    password: 'password',
  },
})
```

### 5.-har Recording

```typescript
await context.routeFromHAR('har file', {
  url: '**/api/**',
  update: true,
})
```

## Test Isolation

### BeforeEach/AfterEach

```typescript
test.beforeEach(async ({ page }) => {
  await page.goto('https://example.com')
})

test.afterEach(async ({ page }) => {
  await page.screenshot()
})
```

### Fixtures

```typescript
export default { page: async ({}, use) => {
  const page = await browser.newPage()
  await use(page)
  await page.close()
}}
```

## Summary

| Category | Features |
|----------|----------|
| **Browser** | Chromium, Firefox, WebKit |
| **Locators** | getByRole, getByLabel, getByText |
| **Actions** | click, fill, select, drag |
| **Network** | Mock, abort, modify |
| **Mobile** | Device emulation |
| **Files** | Upload, download |