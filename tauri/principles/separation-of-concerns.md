# Separation of Concerns

## หลักการ

แยก responsibilities ออกจากกันเพื่อให้แต่ละส่วนมีหน้าที่ชัดเจนและ maintainable

## Application Layers

```
┌─────────────────────────────┐
│      Presentation Layer     │ (Frontend UI)
│      - Components          │
│      - Views               │
│      - User Interactions   │
└─────────────┬───────────────┘
              │ IPC
              v
┌─────────────────────────────┐
│      Application Layer       │ (Business Logic)
│      - Commands             │
│      - Services            │
│      - Use Cases           │
└─────────────┬───────────────┘
              │
              v
┌─────────────────────────────┐
│      Domain Layer          │ (Core Logic)
│      - Entities            │
│      - Value Objects       │
│      - Business Rules      │
└─────────────┬───────────────┘
              │
              v
┌─────────────────────────────┐
│   Infrastructure Layer     │ (External Systems)
│      - File System         │
│      - Network             │
│      - Database            │
└─────────────────────────────┘
```

## Implementation

### 1. Frontend Layer (Presentation)

**Responsibilities**
- UI rendering
- User interactions
- Display data
- Collect user input

**Example**
```vue
<template>
  <div>
    <input v-model="name" placeholder="Enter name" />
    <button @click="greet">Greet</button>
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { invoke } from '@tauri-apps/api/core'

const name = ref('')
const message = ref('')

async function greet() {
  message.value = await invoke('greet', { name: name.value })
}
</script>
```

### 2. Application Layer (Business Logic)

**Responsibilities**
- Coordinate use cases
- IPC command handlers
- Service orchestration
- Error handling

**Example**
```rust
// commands.rs
use crate::services::greeting_service::GreetingService;

#[tauri::command]
async fn greet(name: String, service: State<GreetingService>) -> Result<String, String> {
    service.generate_greeting(name).await
}
```

```rust
// services/greeting_service.rs
pub struct GreetingService {
    // Dependencies
}

impl GreetingService {
    pub async fn generate_greeting(&self, name: String) -> Result<String, String> {
        // Business logic
        Ok(format!("Hello, {}!", name))
    }
}
```

### 3. Domain Layer (Core Logic)

**Responsibilities**
- Business rules
- Domain entities
- Value objects
- Domain services

**Example**
```rust
// domain/greeting.rs
pub struct Greeting {
    pub message: String,
    pub timestamp: DateTime<Utc>,
}

impl Greeting {
    pub fn new(message: String) -> Self {
        Self {
            message,
            timestamp: Utc::now(),
        }
    }
    
    pub fn is_valid(&self) -> bool {
        !self.message.is_empty()
    }
}
```

### 4. Infrastructure Layer (External Systems)

**Responsibilities**
- File system operations
- Network calls
- Database access
- External APIs

**Example**
```rust
// infrastructure/file_repository.rs
use std::fs;
use std::path::Path;

pub struct FileRepository;

impl FileRepository {
    pub fn save(&self, path: &Path, content: &str) -> Result<(), std::io::Error> {
        fs::write(path, content)
    }
    
    pub fn load(&self, path: &Path) -> Result<String, std::io::Error> {
        fs::read_to_string(path)
    }
}
```

## Benefits

### 1. Maintainability

- แต่ละ layer มีหน้าที่ชัดเจน
- ง่ายต่อการ locate bugs
- ง่ายต่อการ add features

### 2. Testability

- Test แต่ละ layer แยกกัน
- Mock dependencies ง่ายขึ้น
- Unit tests มีประสิทธิภาพ

### 3. Flexibility

- เปลี่ยน implementation โดยไม่กระทบ layers อื่น
- Swap technologies ง่ายขึ้น
- Scale แต่ละ layer แยกกัน

## Best Practices

### 1. Dependency Direction

```
Presentation → Application → Domain ← Infrastructure
```

- ไม่มี dependencies จาก lower layers ไป upper layers
- Domain layer ไม่ขึ้นกับ layers อื่น
- Infrastructure implements interfaces จาก Domain

### 2. Interface Segregation

```rust
// domain/repository.rs
pub trait UserRepository {
    async fn find(&self, id: u32) -> Result<User, Error>;
    async fn save(&self, user: User) -> Result<(), Error>;
}

// infrastructure/sqlite_repository.rs
pub struct SqliteUserRepository {
    // SQLite-specific implementation
}

impl UserRepository for SqliteUserRepository {
    async fn find(&self, id: u32) -> Result<User, Error> {
        // SQLite implementation
    }
    
    async fn save(&self, user: User) -> Result<(), Error> {
        // SQLite implementation
    }
}
```

### 3. Single Responsibility

```rust
// Good: Single responsibility
#[tauri::command]
async fn read_file(path: String) -> Result<String, String> {
    fs::read_to_string(path).map_err(|e| e.to_string())
}

#[tauri::command]
async fn process_file(content: String) -> Result<String, String> {
    // Process content
    Ok(processed)
}

// Bad: Multiple responsibilities
#[tauri::command]
async fn read_and_process(path: String) -> Result<String, String> {
    let content = fs::read_to_string(path).map_err(|e| e.to_string())?;
    // Process content
    Ok(processed)
}
```

## Common Violations

### 1. Business Logic in Frontend

```typescript
// Bad: Business logic in frontend
async function calculateDiscount(price: number) {
  if (price > 1000) {
    return price * 0.9
  }
  return price
}

// Good: Move to backend
const discountedPrice = await invoke('calculate_discount', { price })
```

### 2. Direct Infrastructure Access from Frontend

```typescript
// Bad: Direct file system access
import { readTextFile } from '@tauri-apps/plugin-fs'
const content = await readTextFile('data.txt')

// Good: Use IPC command
const content = await invoke('read_file', { path: 'data.txt' })
```

### 3. Tight Coupling Between Layers

```rust
// Bad: Tight coupling
#[tauri::command]
async fn process_data() -> Result<String, String> {
    let db = Database::new(); // Direct dependency
    let file = FileRepository::new(); // Direct dependency
    // Process
    Ok("Done".to_string())
}

// Good: Dependency injection
#[tauri::command]
async fn process_data(
    db: State<Database>,
    repo: State<FileRepository>
) -> Result<String, String> {
    // Process with injected dependencies
    Ok("Done".to_string())
}
```

## Migration Strategy

### 1. Incremental Refactoring

1. Identify code with mixed concerns
2. Extract business logic to services
3. Create interfaces for dependencies
4. Implement infrastructure layer
5. Update frontend to use IPC

### 2. Testing During Migration

1. Write tests for existing behavior
2. Refactor while maintaining tests
3. Add new tests for separated concerns
4. Verify all tests pass

## Example: Complete Separation

```rust
// Domain Layer
pub struct User {
    pub id: u32,
    pub name: String,
}

pub trait UserRepository {
    async fn find(&self, id: u32) -> Result<User, Error>;
    async fn save(&self, user: User) -> Result<(), Error>;
}

// Application Layer
pub struct UserService<R: UserRepository> {
    repo: R,
}

impl<R: UserRepository> UserService<R> {
    pub fn new(repo: R) -> Self {
        Self { repo }
    }
    
    pub async fn get_user(&self, id: u32) -> Result<User, Error> {
        self.repo.find(id).await
    }
}

// Infrastructure Layer
pub struct SqliteUserRepository {
    // SQLite implementation
}

impl UserRepository for SqliteUserRepository {
    async fn find(&self, id: u32) -> Result<User, Error> {
        // SQLite implementation
    }
    
    async fn save(&self, user: User) -> Result<(), Error> {
        // SQLite implementation
    }
}

// IPC Layer
#[tauri::command]
async fn get_user(id: u32, service: State<UserService<SqliteUserRepository>>) -> Result<User, String> {
    service.get_user(id).await.map_err(|e| e.to_string())
}
```
