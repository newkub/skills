# วิธีทดสอบ Tauri Applications

## Testing Strategies

### 1. Unit Testing

**Rust Unit Tests**

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add() {
        assert_eq!(add(2, 2), 4);
    }

    #[test]
    fn test_command() {
        let result = my_command("test");
        assert!(result.is_ok());
    }
}
```

Run with:
```bash
cargo test
```

**JavaScript Unit Tests**

```typescript
// src/utils.test.ts
import { describe, it, expect } from 'vitest'
import { add } from './utils'

describe('utils', () => {
  it('should add numbers', () => {
    expect(add(2, 2)).toBe(4)
  })
})
```

Run with:
```bash
npm test
```

### 2. Integration Testing

**Tauri Commands**

```rust
#[tauri::command]
async fn greet(name: String) -> String {
    format!("Hello, {}!", name)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_greet() {
        assert_eq!(greet("World".to_string()).await, "Hello, World!");
    }
}
```

### 3. E2E Testing

**Playwright Setup**

```bash
npm install -D @playwright/test
npx playwright install
```

**E2E Test Example**

```typescript
// tests/e2e/app.spec.ts
import { test, expect } from '@playwright/test'

test('app loads', async ({ page }) => {
  await page.goto('http://localhost:1420')
  await expect(page).toHaveTitle(/My App/)
})

test('button click', async ({ page }) => {
  await page.goto('http://localhost:1420')
  await page.click('button#greet')
  await expect(page.locator('#result')).toHaveText('Hello, World!')
})
```

Run with:
```bash
npm run tauri build
npx playwright test
```

### 4. IPC Testing

**Test IPC Commands**

```rust
#[cfg(test)]
mod ipc_tests {
    use super::*;
    use tauri::Manager;

    #[test]
    fn test_ipc_command() {
        let app = tauri::Builder::default()
            .build(tauri::generate_context!())
            .expect("error while building tauri application");

        let result = app.invoke("greet", Some("World"));
        assert_eq!(result, "Hello, World!");
    }
}
```

## Testing Frameworks

### Rust Testing

**Built-in Testing**
```rust
#[test]
fn test_example() {
    assert!(true);
}
```

**External Libraries**
- `cargo-nextest` - Faster test runner
- `criterion` - Benchmarking
- `proptest` - Property-based testing

### JavaScript Testing

**Vitest** (Recommended)
```bash
npm install -D vitest @vitest/ui
```

```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    environment: 'jsdom'
  }
})
```

**Jest**
```bash
npm install -D jest @types/jest
```

**React Testing Library**
```bash
npm install -D @testing-library/react @testing-library/jest-dom
```

## Testing Configuration

### Tauri Configuration for Testing

```json
// tauri.conf.json
{
  "tauri": {
    "bundle": {
      "active": true,
      "targets": "all"
    }
  }
}
```

### CI/CD Configuration

**GitHub Actions**

```yaml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
    
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - uses: dtolnay/rust-toolchain@stable
      
      - name: Install dependencies
        run: npm install
      
      - name: Run tests
        run: npm test
      
      - name: Run Rust tests
        run: cargo test
```

## Test Coverage

### Rust Coverage

```bash
cargo install cargo-tarpaulin
cargo tarpaulin --out Html
```

### JavaScript Coverage

```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html']
    }
  }
})
```

## Mocking

### Mocking Tauri APIs

```typescript
// __mocks__/@tauri-apps/api/tauri.ts
export const invoke = jest.fn()

// test file
import { invoke } from '@tauri-apps/api/tauri'

jest.mock('@tauri-apps/api/tauri')

test('mock invoke', async () => {
  invoke.mockResolvedValue('Hello')
  const result = await invoke('greet', { name: 'World' })
  expect(result).toBe('Hello')
})
```

### Mocking File System

```rust
#[cfg(test)]
mod tests {
    use super::*;
    use std::fs;
    use tempfile::TempDir;

    #[test]
    fn test_file_operations() {
        let dir = TempDir::new().unwrap();
        let file_path = dir.path().join("test.txt");
        
        fs::write(&file_path, "Hello").unwrap();
        let content = fs::read_to_string(&file_path).unwrap();
        
        assert_eq!(content, "Hello");
    }
}
```

## Performance Testing

### Benchmarking Rust Code

```rust
#[cfg(test)]
mod benches {
    use super::*;
    use criterion::{black_box, criterion_group, criterion_main, Criterion};

    fn bench_function(c: &mut Criterion) {
        c.bench_function("my_function", |b| {
            b.iter(|| my_function(black_box(100)))
        });
    }

    criterion_group!(benches, bench_function);
    criterion_main!(benches);
}
```

Run with:
```bash
cargo bench
```

## Accessibility Testing

```bash
npm install -D @axe-core/playwright
```

```typescript
import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('accessibility', async ({ page }) => {
  await page.goto('http://localhost:1420')
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
  expect(accessibilityScanResults.violations).toEqual([])
})
```

## Best Practices

### 1. Test Organization

- Group tests by feature
- Use descriptive test names
- Keep tests independent
- Mock external dependencies

### 2. Test Data Management

- Use fixtures for test data
- Clean up after tests
- Use deterministic data
- Avoid hardcoding paths

### 3. Continuous Testing

- Run tests on every commit
- Use pre-commit hooks
- Monitor test coverage
- Fix failing tests immediately

### 4. Test Environment

- Isolate test environments
- Use consistent configurations
- Mock external services
- Test on target platforms

## Common Testing Issues

### 1. Async Tests

```typescript
test('async operation', async () => {
  const result = await asyncFunction()
  expect(result).toBe('expected')
})
```

### 2. Timeout Issues

```typescript
test('slow operation', async () => {
  const result = await slowFunction()
  expect(result).toBe('expected')
}, 10000) // 10 second timeout
```

### 3. Platform-Specific Tests

```rust
#[cfg(target_os = "windows")]
#[test]
fn test_windows_only() {
    // Windows-specific test
}
```

## Resources

- [Tauri Testing Guide](https://tauri.app/v1/guides/testing)
- [Rust Testing Book](https://doc.rust-lang.org/book/ch11-00-testing.html)
- [Vitest Documentation](https://vitest.dev)
- [Playwright Documentation](https://playwright.dev)
