# Quick Start

## Create New Project

```powershell
# Create binary project
cargo new hello-world
cd hello-world

# Create library project
cargo new --lib my-lib

# Create example
cargo new --example my-example
```

## Basic Project Structure

```
hello-world/
├── Cargo.toml
├── src/
│   └── main.rs
└── target/           # Generated
```

## Hello World Example

```rust
// src/main.rs
fn main() {
    println!("Hello, world!");
}
```

```powershell
cargo run
# Output: Hello, world!
```

## Variables and Mutability

```rust
fn main() {
    // Immutable by default
    let x = 5;
    // x = 6; // ERROR: cannot assign twice

    // Mutable variable
    let mut y = 5;
    y = 6; // OK

    // Constants
    const MAX_POINTS: u32 = 100_000;

    // Shadowing
    let z = 5;
    let z = z + 1; // OK: new variable with same name
}
```

## Functions

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b  // No semicolon = return value
}

fn greet(name: &str) {
    println!("Hello, {}!", name);
}

fn main() {
    let result = add(5, 3);
    greet("Rust");
    println!("Result: {}", result);
}
```

## Control Flow

```rust
fn main() {
    // if expression
    let number = 7;
    if number < 5 {
        println!("less than 5");
    } else if number < 10 {
        println!("between 5 and 10");
    } else {
        println!("10 or more");
    }

    // Loop
    let mut count = 0;
    let result = loop {
        count += 1;
        if count == 10 {
            break count * 2;
        }
    };
    println!("Result: {}", result);

    // While
    let mut n = 3;
    while n > 0 {
        println!("{}", n);
        n -= 1;
    }

    // For
    for i in 1..=5 {
        println!("{}", i);
    }
}
```

## Collections

```rust
fn main() {
    // Vector
    let mut v: Vec<i32> = Vec::new();
    v.push(1);
    v.push(2);
    v.push(3);

    // Array literal
    let v2 = vec![1, 2, 3];

    // HashMap
    use std::collections::HashMap;
    let mut scores = HashMap::new();
    scores.insert("Blue", 10);
    scores.insert("Yellow", 50);
}
```

## Struct and Impl

```rust
struct User {
    name: String,
    email: String,
    active: bool,
}

impl User {
    fn new(name: String, email: String) -> Self {
        User {
            name,
            email,
            active: true,
        }
    }

    fn greet(&self) {
        println!("Hello, I'm {}", self.name);
    }
}

fn main() {
    let user = User::new(
        String::from("Alice"),
        String::from("alice@example.com"),
    );
    user.greet();
}
```

## Enum and Match

```rust
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
}

fn process(msg: Message) {
    match msg {
        Message::Quit => println!("Quit"),
        Message::Move { x, y } => println!("Move to ({}, {})", x, y),
        Message::Write(text) => println!("Write: {}", text),
    }
}

fn main() {
    process(Message::Quit);
    process(Message::Move { x: 10, y: 20 });
    process(Message::Write(String::from("Hello")));
}
```

## Error Handling

```rust
use std::fs::File;
use std::io;

fn read_file(path: &str) -> Result<String, io::Error> {
    let mut file = File::open(path)?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    Ok(contents)
}

fn main() {
    match read_file("test.txt") {
        Ok(content) => println!("{}", content),
        Err(e) => eprintln!("Error: {}", e),
    }
}
```

## Run and Build

```powershell
# Run in dev mode
cargo run

# Build for release
cargo build --release

# Run with arguments
cargo run -- arg1 arg2

# Run tests
cargo test

# Check code without building
cargo check
```