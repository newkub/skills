# Integration

## C/C++ Integration

### Using bindgen

```toml
[dependencies]
bindgen = "0.68"
```

```rust
// build.rs
fn main() {
    let bindings = bindgen::Builder::default()
        .header("src/header.h")
        .generate()
        .expect("Unable to generate bindings");

    bindings.write_to_file("src/bindings.rs").unwrap();
}
```

```c
// src/header.h
typedef struct {
    int x;
    int y;
} Point;

int add(int a, int b);
```

```rust
// src/lib.rs
include!("bindings.rs");

fn main() {
    let result = unsafe { add(1, 2) };
    println!("Result: {}", result);
}
```

### Unsafe Blocks

```rust
// Use unsafe for raw pointer operations
let mut value = 5i32;
let r1 = &mut value as *mut i32;
unsafe {
    *r1 = 10;
}

// Extern functions
extern "C" {
    fn c_function(arg: i32) -> i32;
}
```

## WebAssembly Integration

### wasm-pack Setup

```powershell
# Install wasm-pack
cargo install wasm-pack

# Build for web
wasm-pack build --target web

# Build for bundlers
wasm-pack build --target bundler
```

### Cargo.toml for WASM

```toml
[package]
name = "my-wasm"
version = "0.1.0"
edition = "2021"

[lib]
crate-type = ["cdylib", "rlib"]

[dependencies]
wasm-bindgen = "0.2"
js-sys = "0.3"

[dependencies.web-sys]
version = "0.3"
features = ["Window", "Document", "Element"]
```

### WASM Example

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[wasm_bindgen]
pub struct Counter {
    count: u32,
}

#[wasm_bindgen]
impl Counter {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Counter { count: 0 }
    }

    #[wasm_bindgen]
    pub fn increment(&mut self) {
        self.count += 1;
    }

    #[wasm_bindgen]
    pub fn get_count(&self) -> u32 {
        self.count
    }
}
```

## Python Integration (PyO3)

```toml
[package]
name = "my-python-module"
version = "0.1.0"
edition = "2021"

[lib]
name = "my_module"
crate-type = ["cdylib"]

[dependencies]
pyo3 = { version = "0.20", features = ["extension-module"] }
```

```rust
use pyo3::prelude::*;
use pyo3::wrap_pyfunction;

#[pyfunction]
fn sum_as_string(a: i32, b: i32) -> String {
    (a + b).to_string()
}

#[pymodule]
fn my_module(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(sum_as_string, m)?)?;
    Ok(())
}
```

## JavaScript Integration (wasm-bindgen)

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn run() {
    log("Hello from Rust!");
}
```

## Database Integration

### SQLx

```toml
[dependencies]
sqlx = { version = "0.7", features = ["runtime-tokio", "postgres", "macros"] }
```

```rust
use sqlx::PgPool;

#[derive(sqlx::FromRow)]
struct User {
    id: i32,
    name: String,
    email: String,
}

async fn get_user(pool: &PgPool, id: i32) -> Result<User, sqlx::Error> {
    sqlx::query_as!(
        User,
        "SELECT id, name, email FROM users WHERE id = $1",
        id
    )
    .fetch_one(pool)
    .await
}
```

### rusqlite

```toml
[dependencies]
rusqlite = { version = "0.31", features = ["bundled"] }
```

```rust
use rusqlite::{Connection, Result};

fn main() -> Result<()> {
    let conn = Connection::open("test.db")?;
    
    conn.execute(
        "CREATE TABLE person (id INTEGER PRIMARY KEY, name TEXT)",
        [],
    )?;
    
    conn.execute(
        "INSERT INTO person (name) VALUES (?1)",
        ["Alice"],
    )?;
    
    let mut stmt = conn.prepare("SELECT id, name FROM person")?;
    let persons = stmt.query_map([], |row| {
        Ok((row.get(0)?, row.get(1)?))
    })?;
    
    for person in persons {
        println!("{:?}", person);
    }
    Ok(())
}
```

## API Integration (HTTP Client)

```toml
[dependencies]
reqwest = { version = "0.11", features = ["json"] }
tokio = { version = "1", features = ["full"] }
serde = { version = "1", features = ["derive"] }
serde_json = "1"
```

```rust
use reqwest::Client;
use serde::{Deserialize, Serialize};

#[derive(Deserialize)]
struct ApiResponse {
    data: String,
}

async fn fetch_data() -> Result<(), reqwest::Error> {
    let client = Client::new();
    
    let response = client
        .get("https://api.example.com/data")
        .header("Authorization", "Bearer token")
        .send()
        .await?;
    
    let data: ApiResponse = response.json().await?;
    println!("{}", data.data);
    
    Ok(())
}
```

## gRPC Integration

```toml
[dependencies]
tonic = "0.10"
prost = "0.12"
```

```rust
use tonic::{transport::Server, Request, Response, Status};
use hello_world::greeter_server::{Greeter, GreeterServer};
use hello_world::{HelloRequest, HelloReply};

pub mod hello_world {
    tonic::include_proto!("helloworld");
}

#[derive(Default)]
pub struct MyGreeter {}

#[tonic::async_trait]
impl Greeter for MyGreeter {
    async fn say_hello(
        &self,
        request: Request<HelloRequest>,
    ) -> Result<Response<HelloReply>, Status> {
        let reply = HelloReply {
            message: format!("Hello {}!", request.into_inner().name),
        };
        Ok(Response::new(reply))
    }
}
```