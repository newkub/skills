# Type Safety

## หลักการ

ใช้ type system เพื่อ prevent errors ที่ compile-time และ ensure data integrity

## Rust Type Safety

### 1. Strong Typing

```rust
// Good: Explicit types
fn process_user(id: u32, name: String, age: u8) -> Result<User, Error> {
    // ...
}

// Bad: Ambiguous types
fn process_user(id, name, age) {
    // ...
}
```

### 2. Enum for State

```rust
enum AppState {
    Loading,
    Ready { data: Data },
    Error { message: String },
}

fn handle_state(state: AppState) {
    match state {
        AppState::Loading => println!("Loading..."),
        AppState::Ready { data } => println!("Ready: {:?}", data),
        AppState::Error { message } => println!("Error: {}", message),
    }
}
```

### 3. Result for Error Handling

```rust
fn read_file(path: &str) -> Result<String, std::io::Error> {
    fs::read_to_string(path)
}

// Usage
match read_file("data.txt") {
    Ok(content) => println!("{}", content),
    Err(e) => eprintln!("Error: {}", e),
}
```

### 4. Option for Nullable Values

```rust
fn find_user(id: u32) -> Option<User> {
    // Returns Some(user) or None
}

// Usage
if let Some(user) = find_user(1) {
    println!("Found: {}", user.name);
} else {
    println!("Not found");
}
```

## TypeScript Type Safety

### 1. Interface Definitions

```typescript
interface User {
  id: number
  name: string
  email: string
  age?: number // Optional
}

function processUser(user: User): string {
  return `User: ${user.name}`
}
```

### 2. Type Guards

```typescript
function isString(value: unknown): value is string {
  return typeof value === 'string'
}

function process(value: unknown) {
  if (isString(value)) {
    console.log(value.toUpperCase())
  }
}
```

### 3. Union Types

```typescript
type Result = 
  | { success: true; data: Data }
  | { success: false; error: string }

function handleResult(result: Result) {
  if (result.success) {
    console.log(result.data)
  } else {
    console.error(result.error)
  }
}
```

### 4. Generic Types

```typescript
interface Repository<T> {
  find(id: number): Promise<T | null>
  save(item: T): Promise<void>
}

class UserRepository implements Repository<User> {
  async find(id: number): Promise<User | null> {
    // Implementation
  }
  
  async save(user: User): Promise<void> {
    // Implementation
  }
}
```

## IPC Type Safety

### 1. Shared Types

```typescript
// types.ts
export interface UserData {
  id: number
  name: string
  email: string
}

export interface CommandResponse<T> {
  success: boolean
  data?: T
  error?: string
}
```

```rust
// types.rs
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct UserData {
    pub id: u32,
    pub name: String,
    pub email: String,
}

#[derive(Serialize, Deserialize)]
pub struct CommandResponse<T> {
    pub success: bool,
    pub data: Option<T>,
    pub error: Option<String>,
}
```

### 2. Type-Safe Commands

```rust
#[tauri::command]
fn typed_command(data: UserData) -> Result<CommandResponse<UserData>, String> {
    Ok(CommandResponse {
        success: true,
        data: Some(data),
        error: None,
    })
}
```

```typescript
const response = await invoke<CommandResponse<UserData>>('typed_command', {
  data: { id: 1, name: 'John', email: 'john@example.com' }
})
```

### 3. Validation with Types

```rust
use validator::Validate;

#[derive(Validate, Serialize, Deserialize)]
struct CreateUser {
    #[validate(length(min = 1, max = 100))]
    name: String,
    
    #[validate(email)]
    email: String,
    
    #[validate(range(min = 18, max = 120))]
    age: u8,
}

#[tauri::command]
fn create_user(user: CreateUser) -> Result<User, String> {
    user.validate().map_err(|e| e.to_string())?;
    // Create user
    Ok(User::from(user))
}
```

## Best Practices

### 1. Use Types Instead of Primitives

```rust
// Bad: Primitive types
fn process_user(id: u32, name: String) {
    // ...
}

// Good: Custom types
type UserId = u32;
type UserName = String;

fn process_user(id: UserId, name: UserName) {
    // ...
}
```

### 2. Newtype Pattern

```rust
#[derive(Debug, Clone, PartialEq, Eq, Hash)]
struct UserId(u32);

impl UserId {
    fn new(id: u32) -> Self {
        Self(id)
    }
    
    fn value(&self) -> u32 {
        self.0
    }
}

fn process_user(id: UserId) {
    // Type-safe user ID
}
```

### 3. Exhaustive Pattern Matching

```rust
enum Status {
    Active,
    Inactive,
    Pending,
}

fn handle_status(status: Status) {
    match status {
        Status::Active => println!("Active"),
        Status::Inactive => println!("Inactive"),
        Status::Pending => println!("Pending"),
        // Compiler warns if case missing
    }
}
```

### 4. Type-Level Constraints

```rust
fn divide<N: Into<u32>, D: Into<u32>>(numerator: N, denominator: D) -> Result<f64, String> {
    let n = numerator.into();
    let d = denominator.into();
    
    if d == 0 {
        return Err("Division by zero".to_string());
    }
    
    Ok(n as f64 / d as f64)
}
```

## Common Pitfalls

### 1. Type Coercion

```typescript
// Bad: Implicit coercion
const result = "10" + 5 // "105"

// Good: Explicit conversion
const result = Number("10") + 5 // 15
```

### 2. Any Type

```typescript
// Bad: Using any
function process(data: any) {
  return data.value
}

// Good: Using specific type
function process(data: { value: string }) {
  return data.value
}
```

### 3. Unsafe Rust

```rust
// Bad: Unsafe without justification
unsafe {
    let ptr = 0x1234 as *const i32;
    let value = *ptr;
}

// Good: Use safe alternatives
let value: i32 = 42;
```

## Tooling

### 1. Rust Tools

```bash
# Type checking
cargo check

# Linting
cargo clippy

# Documentation
cargo doc
```

### 2. TypeScript Tools

```bash
# Type checking
tsc --noEmit

# Linting
eslint

# Type checking with strict mode
tsc --strict
```

### 3. Shared Type Definitions

```typescript
// Use code generation for shared types
// https://github.com/microsoft/ts-rs
```

## Benefits

### 1. Compile-Time Error Detection

```rust
// This won't compile
let x: i32 = "hello"; // Type mismatch
```

### 2. Self-Documenting Code

```rust
// Types serve as documentation
fn process_user(user: User) -> Result<UserResponse, Error> {
    // Clear what this function does
}
```

### 3. Refactoring Safety

```rust
// Change type and compiler finds all uses
type UserId = String; // Changed from u32
```

### 4. IDE Support

- Autocomplete
- Type hints
- Refactoring tools
- Error detection

## Advanced Patterns

### 1. Phantom Types

```rust
use std::marker::PhantomData;

struct Meter<T> {
    value: f64,
    _phantom: PhantomData<T>,
}

struct Length;
struct Time;

fn calculate_speed(distance: Meter<Length>, time: Meter<Time>) -> f64 {
    distance.value / time.value
}
```

### 2. Type-Level State Machines

```rust
struct Locked;
struct Unlocked;

struct Door<State> {
    _state: PhantomData<State>,
}

impl Door<Locked> {
    fn unlock(self) -> Door<Unlocked> {
        Door { _state: PhantomData }
    }
}

impl Door<Unlocked> {
    fn lock(self) -> Door<Locked> {
        Door { _state: PhantomData }
    }
}
```

### 3. Dependent Types (Simulation)

```rust
struct Vector<const N: usize> {
    data: [f64; N],
}

impl<const N: usize> Vector<N> {
    fn new(data: [f64; N]) -> Self {
        Self { data }
    }
    
    fn dot(&self, other: Vector<N>) -> f64 {
        self.data.iter()
            .zip(other.data.iter())
            .map(|(a, b)| a * b)
            .sum()
    }
}
```
