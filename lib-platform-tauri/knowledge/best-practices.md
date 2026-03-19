# Best Practices

## Architecture

### 1. Separation of Concerns

แยก concerns อย่างชัดเจน:

- **Frontend**: UI และ user interactions
- **Backend**: Business logic และ system operations
- **IPC Layer**: Communication interface

### 2. Modular Design

แบ่ง code เป็น modules:

```rust
// src-tauri/src/commands.rs
pub mod file_commands;
pub mod network_commands;
pub mod system_commands;

// src-tauri/src/main.rs
mod commands;
```

### 3. Error Handling

ใช้ Result types อย่างถูกต้อง:

```rust
#[tauri::command]
fn safe_operation() -> Result<String, String> {
    // Return Ok on success
    Ok("Success".to_string())

    // Return Err on failure
    // Err("Error message".to_string())
}
```

## Performance

### 1. Use Async Operations

ใช้ async/await สำหรับ blocking operations:

```rust
#[tauri::command]
async fn fetch_data(url: String) -> Result<String, String> {
    let response = reqwest::get(&url).await?;
    Ok(response.text().await?)
}
```

### 2. Debounce Events

Debounce events ที่เกิดบ่อย:

```typescript
import { debounce } from 'lodash'

const debouncedSearch = debounce((query: string) => {
  invoke('search', { query })
}, 300)
```

### 3. Lazy Loading

Load resources เมื่อจำเป็น:

```typescript
const loadModule = async () => {
  const module = await import('./heavy-module')
  module.doSomething()
}
```

### 4. Optimize Bundle Size

ลดขนาด bundle:

- ใช้ tree-shaking
- ลบ unused code
- ใช้ dynamic imports

## Security

### 1. Principle of Least Privilege

อนุญาตเฉพาะที่จำเป็น:

```json
{
  "allowlist": {
    "all": false,
    "fs": {
      "readFile": true,
      "scope": ["$HOME/documents/*"]
    }
  }
}
```

### 2. Validate All Inputs

ตรวจสอบ inputs ทั้งหมด:

```rust
#[tauri::command]
fn process_input(input: String) -> Result<String, String> {
    if input.len() > 1000 {
        return Err("Input too long".to_string());
    }
    Ok(process(&input))
}
```

### 3. Use HTTPS Only

บังคับใช้ HTTPS:

```rust
#[tauri::command]
async fn make_request(url: String) -> Result<String, String> {
    if !url.starts_with("https://") {
        return Err("Only HTTPS allowed".to_string());
    }
    // Make request
}
```

### 4. Sanitize User Content

Sanitize content จาก users:

```rust
use ammonia::clean;

#[tauri::command]
fn save_html(content: String) -> Result<(), String> {
    let sanitized = clean(&content);
    std::fs::write("file.html", sanitized)
        .map_err(|e| e.to_string())
}
```

## Code Quality

### 1. Type Safety

ใช้ types อย่างเต็มที่:

```typescript
interface User {
  id: number
  name: string
  email: string
}

const getUser = async (id: number): Promise<User> => {
  return await invoke<User>('get_user', { id })
}
```

### 2. Error Boundaries

ใช้ error boundaries ใน React:

```typescript
<ErrorBoundary fallback={<ErrorFallback />}>
  <App />
</ErrorBoundary>
```

### 3. Consistent Naming

ใช้ naming conventions ที่สอดคล้องกัน:

- Rust: snake_case
- TypeScript: camelCase
- Files: kebab-case

### 4. Documentation

เขียน documentation สำหรับ public APIs:

```rust
/// Greets the user
/// 
/// # Arguments
/// * `name` - The name to greet
/// 
/// # Returns
/// A greeting message
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}
```

## Testing

### 1. Unit Tests

ทดสอบ functions แยก:

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_greet() {
        assert_eq!(greet("World"), "Hello, World!");
    }
}
```

### 2. Integration Tests

ทดสอบ IPC communication:

```typescript
import { invoke } from '@tauri-apps/api/tauri'

test('command works', async () => {
  const result = await invoke('command_name', { param: 'test' })
  expect(result).toBe('expected')
})
```

### 3. E2E Tests

ทดสอบ user flows:

```typescript
import { test, expect } from '@playwright/test'

test('user flow', async ({ page }) => {
  await page.goto('http://localhost:5173')
  await page.click('button')
  await expect(page.locator('text')).toBeVisible()
})
```

### 4. Test Coverage

รักษา test coverage สูง:

- ตั้งเป้าหมาย 80%+
- ทดสอบ critical paths
- ทดสอบ error cases

## Development Workflow

### 1. Version Control

ใช้ Git อย่างถูกต้อง:

```bash
git checkout -b feature/new-feature
git commit -m "feat: add new feature"
git push origin feature/new-feature
```

### 2. Code Review

ทำ code review อย่างเคร่งครัด:

- Review logic และ security
- Check performance implications
- Verify test coverage

### 3. CI/CD

ใช้ CI/CD pipelines:

```yaml
# .github/workflows/build.yml
name: Build
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions-rs/toolchain@v1
      - run: npm install
      - run: npm run tauri build
```

### 4. Documentation

รักษา documentation อัปเดต:

- README.md
- API documentation
- Contributing guidelines

## User Experience

### 1. Responsive Design

รองรับหลายขนาดหน้าจอ:

```css
.container {
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
}
```

### 2. Loading States

แสดง loading states:

```typescript
const [loading, setLoading] = useState(false)

const handleClick = async () => {
  setLoading(true)
  try {
    await invoke('operation')
  } finally {
    setLoading(false)
  }
}
```

### 3. Error Handling

แสดง errors อย่างชัดเจน:

```typescript
try {
  await invoke('operation')
} catch (error) {
  alert(`Error: ${error}`)
}
```

### 4. Accessibility

รักษา accessibility:

- ใช้ semantic HTML
- เพิ่ม ARIA labels
- รองรับ keyboard navigation

## Deployment

### 1. Build Optimization

Optimize builds:

```json
{
  "build": {
    "beforeBuildCommand": "npm run build",
    "withGlobalTauri": true
  }
}
```

### 2. Code Signing

Sign applications:

```json
{
  "bundle": {
    "macOS": {
      "signingIdentity": "Developer ID Application"
    }
  }
}
```

### 3. Version Management

ใช้ semantic versioning:

- MAJOR.MINOR.PATCH
- เพิ่ม MAJOR เมื่อ breaking changes
- เพิ่ม MINOR เมื่อเพิ่ม features
- เพิ่ม PATCH เมื่อ bug fixes

### 4. Update Mechanism

ใช้ built-in updater:

```typescript
import { checkUpdate, installUpdate } from '@tauri-apps/api/updater'

const update = await checkUpdate()
if (update.shouldUpdate) {
  await installUpdate()
}
```

## Monitoring

### 1. Error Tracking

ใช้ error tracking:

```typescript
import * as Sentry from '@sentry/react'

Sentry.init({
  dsn: 'your-dsn-here'
})
```

### 2. Analytics

ติดตาม usage:

```typescript
import { invoke } from '@tauri-apps/api/tauri'

invoke('track_event', { event: 'button_clicked' })
```

### 3. Logging

ใช้ logging อย่างเหมาะสม:

```rust
use log::{info, error};

#[tauri::command]
fn operation() {
    info!("Operation started");
    // Do work
    error!("Operation failed");
}
```

### 4. Performance Monitoring

ติดตาม performance:

```typescript
const start = performance.now()
await operation()
const duration = performance.now() - start
console.log(`Operation took ${duration}ms`)
```
