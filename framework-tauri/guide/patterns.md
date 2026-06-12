# Design Patterns ที่ใช้กับ Tauri

## Common Patterns

### 1. Command Pattern (IPC)

**Rust Side**
```rust
#[tauri::command]
async fn read_file(path: String) -> Result<String, String> {
    fs::read_to_string(&path)
        .map_err(|e| e.to_string())
}

#[tauri::command]
async fn write_file(path: String, content: String) -> Result<(), String> {
    fs::write(&path, content)
        .map_err(|e| e.to_string())
}
```

**Frontend Side**
```typescript
import { invoke } from '@tauri-apps/api/core'

const content = await invoke('read_file', { path: '/path/to/file' })
await invoke('write_file', { path: '/path/to/file', content: 'Hello' })
```

### 2. Repository Pattern

**Rust Repository**
```rust
pub struct UserRepository {
    db: Arc<Mutex<Database>>,
}

impl UserRepository {
    pub fn new(db: Arc<Mutex<Database>>) -> Self {
        Self { db }
    }

    pub async fn find_user(&self, id: u32) -> Result<User, Error> {
        let db = self.db.lock().await;
        db.find_user(id).await
    }

    pub async fn save_user(&self, user: User) -> Result<(), Error> {
        let db = self.db.lock().await;
        db.save_user(user).await
    }
}
```

### 3. Service Layer Pattern

**Service Layer**
```rust
pub struct UserService {
    repo: Arc<UserRepository>,
}

impl UserService {
    pub fn new(repo: Arc<UserRepository>) -> Self {
        Self { repo }
    }

    pub async fn create_user(&self, name: String) -> Result<User, Error> {
        let user = User::new(name);
        self.repo.save_user(user).await
    }
}
```

### 4. Observer Pattern (Events)

**Rust Event Emitter**
```rust
use tauri::Emitter;

#[tauri::command]
async fn emit_event(app: tauri::AppHandle) -> Result<(), String> {
    app.emit("user-updated", User { id: 1, name: "John" })
        .map_err(|e| e.to_string())
}
```

**Frontend Event Listener**
```typescript
import { listen } from '@tauri-apps/api/event'

const unlisten = await listen('user-updated', (event) => {
  console.log('User updated:', event.payload)
})

// Cleanup
unlisten()
```

### 5. Factory Pattern

**Window Factory**
```rust
use tauri::{Window, WindowBuilder};

pub struct WindowFactory;

impl WindowFactory {
    pub fn create_settings_window(app: &tauri::App) -> Result<Window, String> {
        WindowBuilder::new(
            app,
            "settings",
            tauri::WindowUrl::App("settings.html".into())
        )
        .title("Settings")
        .build()
        .map_err(|e| e.to_string())
    }
}
```

### 6. Singleton Pattern

**State Management**
```rust
use std::sync::Mutex;
use tauri::State;

pub struct AppState {
    counter: Mutex<i32>,
}

#[tauri::command]
fn increment(state: State<AppState>) -> i32 {
    let mut counter = state.counter.lock().unwrap();
    *counter += 1;
    *counter
}

fn main() {
    tauri::Builder::default()
        .manage(AppState {
            counter: Mutex::new(0),
        })
        .invoke_handler(tauri::generate_handler![increment])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

### 7. Builder Pattern

**Configuration Builder**
```rust
pub struct AppConfigBuilder {
    api_key: Option<String>,
    timeout: Option<u64>,
}

impl AppConfigBuilder {
    pub fn new() -> Self {
        Self {
            api_key: None,
            timeout: None,
        }
    }

    pub fn api_key(mut self, key: String) -> Self {
        self.api_key = Some(key);
        self
    }

    pub fn timeout(mut self, timeout: u64) -> Self {
        self.timeout = Some(timeout);
        self
    }

    pub fn build(self) -> AppConfig {
        AppConfig {
            api_key: self.api_key.unwrap_or_default(),
            timeout: self.timeout.unwrap_or(30),
        }
    }
}
```

### 8. Strategy Pattern

**Storage Strategy**
```rust
pub trait StorageStrategy {
    async fn save(&self, key: String, value: String) -> Result<(), Error>;
    async fn load(&self, key: String) -> Result<String, Error>;
}

pub struct FileStorage;
pub struct MemoryStorage;

impl StorageStrategy for FileStorage {
    async fn save(&self, key: String, value: String) -> Result<(), Error> {
        fs::write(format!("{}.txt", key), value).map_err(Into::into)
    }

    async fn load(&self, key: String) -> Result<String, Error> {
        fs::read_to_string(format!("{}.txt", key)).map_err(Into::into)
    }
}
```

### 9. Middleware Pattern

**IPC Middleware**
```rust
pub struct LoggingMiddleware;

impl LoggingMiddleware {
    pub async fn log_command<F, R>(command: &str, f: F) -> Result<R, String>
    where
        F: FnOnce() -> Result<R, String>,
    {
        println!("Executing command: {}", command);
        let result = f();
        println!("Command {} completed", command);
        result
    }
}

#[tauri::command]
async fn my_command() -> Result<String, String> {
    LoggingMiddleware::log_command("my_command", || {
        // Actual command logic
        Ok("Success".to_string())
    }).await
}
```

### 10. Adapter Pattern

**Database Adapter**
```rust
pub trait DatabaseAdapter {
    async fn query(&self, sql: String) -> Result<Vec<Row>, Error>;
}

pub struct SqliteAdapter {
    connection: Arc<Mutex<Connection>>,
}

pub struct PostgresAdapter {
    connection: Arc<Mutex<Client>>,
}

impl DatabaseAdapter for SqliteAdapter {
    async fn query(&self, sql: String) -> Result<Vec<Row>, Error> {
        let conn = self.connection.lock().await;
        // SQLite-specific implementation
        Ok(vec![])
    }
}
```

## Frontend Patterns

### 1. Composition Pattern (Vue)

```vue
<template>
  <div>
    <Header />
    <Sidebar />
    <Content />
    <Footer />
  </div>
</template>
```

### 2. Provider Pattern (React)

```typescript
const AppContext = createContext<AppState>(null!)

export function AppProvider({ children }) {
  const [state, setState] = useState<AppState>(initialState)
  
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  )
}
```

### 3. Hook Pattern (React)

```typescript
function useTauriCommand<T>(command: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const execute = async (args?: any) => {
    setLoading(true)
    try {
      const result = await invoke<T>(command, args)
      setData(result)
    } catch (e) {
      setError(e as Error)
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, execute }
}
```

### 4. Store Pattern (Pinia)

```typescript
export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  
  async function fetchUser(id: number) {
    user.value = await invoke('get_user', { id })
  }
  
  return { user, fetchUser }
})
```

## Architecture Patterns

### 1. Layered Architecture

```
┌─────────────────┐
│   Presentation  │ (Frontend UI)
├─────────────────┤
│  Application    │ (Business Logic)
├─────────────────┤
│    Domain       │ (Core Logic)
├─────────────────┤
│  Infrastructure │ (File System, Network)
└─────────────────┘
```

### 2. Clean Architecture

```
┌─────────────────────────────┐
│         Frameworks           │ (Tauri, React)
├─────────────────────────────┤
│      Interface Adapters      │ (Controllers, Presenters)
├─────────────────────────────┤
│         Use Cases            │ (Application Logic)
├─────────────────────────────┤
│           Entities          │ (Business Rules)
└─────────────────────────────┘
```

### 3. Event-Driven Architecture

```
┌──────────┐    Event    ┌──────────┐
│  Sender  │ ─────────> │ Receiver │
└──────────┘            └──────────┘
    │                       │
    v                       v
┌──────────┐            ┌──────────┐
│  Emitter │            │ Listener │
└──────────┘            └──────────┘
```

## Best Practices

### 1. Error Handling

```rust
#[tauri::command]
async fn safe_operation() -> Result<String, String> {
    match perform_operation() {
        Ok(result) => Ok(result),
        Err(e) => Err(format!("Operation failed: {}", e)),
    }
}
```

### 2. Async/Await

```rust
#[tauri::command]
async fn async_command() -> Result<String, String> {
    let result = tokio::time::sleep(Duration::from_secs(1)).await;
    Ok("Completed".to_string())
}
```

### 3. Resource Cleanup

```rust
#[tauri::command]
async fn with_cleanup() -> Result<String, String> {
    let resource = Resource::new();
    let result = resource.do_something();
    resource.cleanup();
    result
}
```

## Anti-Patterns to Avoid

### 1. Tight Coupling

```rust
// Bad: Direct dependency
#[tauri::command]
async fn command() -> Result<String, String> {
    let db = Database::new(); // Hard dependency
    db.query().map_err(|e| e.to_string())
}

// Good: Dependency injection
#[tauri::command]
async fn command(db: State<Database>) -> Result<String, String> {
    db.query().map_err(|e| e.to_string())
}
```

### 2. God Objects

```rust
// Bad: Single large struct
struct AppState {
    db: Database,
    cache: Cache,
    logger: Logger,
    config: Config,
    // ... many more fields
}

// Good: Separate concerns
struct DatabaseState(Mutex<Database>);
struct CacheState(Mutex<Cache>);
```

### 3. Blocking Operations

```rust
// Bad: Blocking
#[tauri::command]
fn blocking_command() -> String {
    std::thread::sleep(Duration::from_secs(5));
    "Done".to_string()
}

// Good: Async
#[tauri::command]
async fn async_command() -> String {
    tokio::time::sleep(Duration::from_secs(5)).await;
    "Done".to_string()
}
```
