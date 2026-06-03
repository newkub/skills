# Best Practices

## Purpose

แนวทางปฏิบัติที่ดีในการใช้งาน Playwright เพื่อให้ได้ประสิทธิภาพและความเชื่อถือได้ที่ดีที่สุด

## Scope

- Locators
- Assertions
- Performance
- CI/CD
- Debugging

## Locators

### Use Accessible Locators

```typescript
// ✅ Good - accessible
await page.getByRole('button', { name: 'Submit' })
await page.getByLabel('Email')

// ⚠️ Less reliable
await page.locator('.btn-primary')
await page.locator('button:first-child')
```

### Priority

1. **getByRole** - ARIA roles
2. **getByLabel** - Form labels
3. **getByText** - Visible text
4. **getByTestId** - Test IDs
5. **locator** - CSS fallback

### Test IDs

```typescript
// Add data-testid
<button data-testid="submit-btn">Submit</button>

// Use in test
await page.getByTestId('submit-btn').click()
```

## Assertions

### Be Specific

```typescript
// ✅ Good - specific
await expect(page.getByRole('heading')).toHaveText('Welcome')

// ⚠️ Vague
await expect(page.locator('h1')).toBeVisible()
```

### Soft Assertions

```typescript
// Continue on failure
await expect(page.locator('.count')).toHaveText('10', {
  timeout: 5000,
})
```

### Network Assertions

```typescript
await expect(page.getByRole('progressbar')).toBeHidden()
```

## Performance

### Parallel Workers

```typescript
// playwright.config.ts
export default defineConfig({
  workers: process.env.CI ? 1 : 4,
})
```

### Context Reuse

```typescript
// Share context in fixture
test.use({ baseURL: 'http://localhost:3000' })
```

### Skip Expensive Setup

```typescript
test.describe.configure({ mode: 'parallel' })
```

## CI/CD

### Forbid Only

```typescript
export default defineConfig({
  forbidOnly: !!process.env.CI,
})
```

### Retry Flaky

```typescript
export default defineConfig({
  retries: process.env.CI ? 2 : 0,
})
```

### Shard Tests

```bash
# Split across workers
npx playwright test --shard=1/4
```

## Debugging

### Trace Viewer

```typescript
// Enable on first retry
trace: 'on-first-retry'
```

### Screenshots

```typescript
test('failure', async ({ page }) => {
  await page.goto('/')
  // On failure, screenshot is saved
})
```

### Video

```typescript
export default defineConfig({
  use: {
    video: 'on-first-retry',
  },
})
```

## Common Pitfalls

### 1. Timing Issues

```typescript
// ⚠️ Bad - race condition
await page.click('.modal button')
await page.fill('.input', 'text')

// ✅ Good - wait for element
await page.getByRole('button', { name: 'Submit' }).click()
```

### 2. Hard-coded Waits

```typescript
// ⚠️ Bad
await page.waitForTimeout(2000)

// ✅ Good
await page.waitForSelector('.loading', { state: 'hidden' })
```

### 3. Missing Assertions

```typescript
// ⚠️ Bad - no verification
await page.click('#submit')

// ✅ Good
await expect(page.getByText('Success')).toBeVisible()
```

## Summary

| Category | Best Practice |
|----------|---------------|
| **Locators** | Use accessible locators |
| **Assertions** | Be specific, use soft asserts |
| **Performance** | Parallel workers, context reuse |
| **CI/CD** | Retry, forbid only, sharding |
| **Debug** | Trace, screenshots, video |
| **Pitfalls** | Avoid timing issues |