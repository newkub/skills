# Testing UnoCSS

## ภาพรวม

Testing UnoCSS สำหรับ ensure ว่า CSS ถูก generate อย่างถูกต้องและ consistent

## Unit Testing

### Test Rules

Test custom rules ที่กำหนด

```typescript
// rules.test.ts
import { createGenerator } from 'unocss'

describe('Custom Rules', () => {
  it('should generate text-red', async () => {
    const generator = createGenerator({
      rules: [
        ['text-red', { color: 'red' }],
      ],
    })
    
    const { css } = await generator.generate('text-red')
    expect(css).toContain('.text-red{color:red}')
  })
})
```

### Test Shortcuts

Test shortcuts ที่กำหนด

```typescript
// shortcuts.test.ts
import { createGenerator } from 'unocss'

describe('Shortcuts', () => {
  it('should expand btn shortcut', async () => {
    const generator = createGenerator({
      shortcuts: {
        'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
      },
    })
    
    const { css } = await generator.generate('btn')
    expect(css).toContain('.px-4{padding:1rem}')
    expect(css).toContain('.py-2{padding:0.5rem}')
  })
})
```

### Test Theme

Test theme configuration

```typescript
// theme.test.ts
import { createGenerator } from 'unocss'

describe('Theme', () => {
  it('should use custom colors', async () => {
    const generator = createGenerator({
      theme: {
        colors: {
          primary: '#3b82f6',
        },
      },
    })
    
    const { css } = await generator.generate('text-primary')
    expect(css).toContain('.text-primary{color:#3b82f6}')
  })
})
```

## Integration Testing

### Test CSS Generation

Test CSS generation ใน real environment

```typescript
// integration.test.ts
import { createGenerator } from 'unocss'

describe('CSS Generation', () => {
  it('should generate CSS for real HTML', async () => {
    const generator = createGenerator({
      presets: [presetUno()],
    })
    
    const html = '<div class="text-red p-4">Content</div>'
    const { css } = await generator.generate(html)
    
    expect(css).toContain('.text-red')
    expect(css).toContain('.p-4')
  })
})
```

### Test Framework Integration

Test integration กับ frameworks

```typescript
// vite.test.ts
import { describe, it, expect } from 'vitest'
import { build } from 'vite'

describe('Vite Integration', () => {
  it('should build with UnoCSS', async () => {
    const result = await build({
      configFile: 'vite.config.ts',
    })
    
    expect(result).toBeDefined()
  })
})
```

## Visual Testing

### Test Visual Output

Test visual output ด้วย screenshot testing

```typescript
// visual.test.ts
import { test, expect } from '@playwright/test'

test('Button visual test', async ({ page }) => {
  await page.goto('http://localhost:3000')
  
  const button = page.locator('.btn-primary')
  await expect(button).toHaveScreenshot()
})
```

### Test Responsive Design

Test responsive design

```typescript
// responsive.test.ts
import { test, expect } from '@playwright/test'

test('Responsive design', async ({ page }) => {
  await page.goto('http://localhost:3000')
  
  // Mobile
  await page.setViewportSize({ width: 375, height: 667 })
  await expect(page.locator('.container')).toHaveCSS('padding', '16px')
  
  // Desktop
  await page.setViewportSize({ width: 1280, height: 720 })
  await expect(page.locator('.container')).toHaveCSS('padding', '32px')
})
```

## E2E Testing

### Test User Flows

Test user flows ด้วย E2E testing

```typescript
// e2e.test.ts
import { test, expect } from '@playwright/test'

test('User flow', async ({ page }) => {
  await page.goto('http://localhost:3000')
  
  // Test button click
  await page.click('.btn-primary')
  await expect(page).toHaveURL('/success')
  
  // Test form submission
  await page.fill('.input', 'test')
  await page.click('.btn-submit')
  await expect(page.locator('.success')).toBeVisible()
})
```

## Performance Testing

### Test CSS Size

Test CSS size ใน production

```typescript
// performance.test.ts
import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'

describe('CSS Size', () => {
  it('should have reasonable CSS size', () => {
    const css = readFileSync('dist/assets/*.css', 'utf-8')
    const size = Buffer.byteLength(css, 'utf8')
    
    expect(size).toBeLessThan(50000) // 50KB
  })
})
```

### Test Build Time

Test build time

```typescript
// build-time.test.ts
import { describe, it, expect } from 'vitest'
import { build } from 'vite'

describe('Build Time', () => {
  it('should build in reasonable time', async () => {
    const start = Date.now()
    await build({ configFile: 'vite.config.ts' })
    const duration = Date.now() - start
    
    expect(duration).toBeLessThan(10000) // 10 seconds
  })
})
```

## Regression Testing

### Test Breaking Changes

Test breaking changes หลัง update

```typescript
// regression.test.ts
import { describe, it, expect } from 'vitest'

describe('Regression Tests', () => {
  it('should maintain backward compatibility', async () => {
    const generator = createGenerator({
      presets: [presetUno()],
    })
    
    const { css } = await generator.generate('text-red p-4')
    expect(css).toContain('.text-red')
    expect(css).toContain('.p-4')
  })
})
```

## Testing Best Practices

### 1. Test Rules Separately

Test rules แยกจากกัน

```typescript
// Test แต่ละ rule อย่างละเอียด
describe('Rule: text-red', () => {
  it('should generate correct CSS', async () => {
    // ...
  })
})
```

### 2. Test Shortcuts

Test shortcuts อย่างละเอียด

```typescript
// Test แต่ละ shortcut
describe('Shortcut: btn', () => {
  it('should expand correctly', async () => {
    // ...
  })
})
```

### 3. Test Theme

Test theme configuration

```typescript
// Test theme values
describe('Theme: colors', () => {
  it('should use correct colors', async () => {
    // ...
  })
})
```

### 4. Test Integration

Test integration กับ frameworks

```typescript
// Test framework integration
describe('Integration: Vite', () => {
  it('should work with Vite', async () => {
    // ...
  })
})
```

### 5. Test Visual Output

Test visual output อย่างละเอียด

```typescript
// Test visual output
describe('Visual: Button', () => {
  it('should look correct', async () => {
    // ...
  })
})
```

## Testing Tools

### Vitest

Unit testing สำหรับ UnoCSS

```bash
bun add -D vitest @vitest/ui
```

### Playwright

E2E และ visual testing

```bash
bun add -D @playwright/test
```

### Chrome DevTools

Debug CSS ใน browser

```typescript
// Enable inspector
export default defineConfig({
  inspector: true,
})
```

## Conclusion

Testing UnoCSS ประกอบด้วย:
- Unit testing สำหรับ rules, shortcuts, theme
- Integration testing สำหรับ frameworks
- Visual testing สำหรับ UI
- E2E testing สำหรับ user flows
- Performance testing สำหรับ optimization

ใช้ testing tools ที่เหมาะสมสำหรับ ensure quality
