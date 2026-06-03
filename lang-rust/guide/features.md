# Features

## Ownership & Borrowing

### Ownership Rules

```rust
// Rule 1: Each value has a single owner
let s = String::from("hello");  // s owns the String

// Rule 2: Assignment transfers ownership (move)
let s2 = s;                     // s2 owns it now, s is invalid

// Rule 3: Owner going out of scope drops the value
{
    let s = String::from("temp");
    // s is dropped here
}
```

### Borrowing Patterns

```rust
// Immutable borrow - multiple allowed
fn print(s: &String) {
    println!("{}", s);
}
let s = String::from("hello");
print(&s);
print(&s);  // ✓ OK

// Mutable borrow - only one at a time
fn append(s: &mut String) {
    s.push_str("!");
}
let mut s = String::from("hello");
append(&mut s);
```

## Pattern Matching

### Basic Patterns

```rust
let x = 1;

match x {
    1 => println!("one"),
    2 => println!("two"),
    3 => println!("three"),
    _ => println!("other"),
}

// With guards
match x {
    n if n > 0 => println!("positive: {}", n),
    n if n < 0 => println!("negative: {}", n),
    _ => println!("zero"),
}
```

### Destructuring

```rust
// Tuple destructuring
let (a, b) = (1, "hello");

// Struct destructuring
struct Point { x: i32, y: i32 }
let p = Point { x: 10, y: 20 };
let Point { x, y } = p;

// Nested destructuring
let ((a, b), Point { x, y }) = ((1, 2), Point { x: 3, y: 4 });
```

### Option & Result

```rust
// Option pattern matching
fn maybe_double(opt: Option<i32>) -> i32 {
    match opt {
        Some(n) => n * 2,
        None => 0,
    }
}

// Result pattern matching
fn parse_number(s: &str) -> Result<i32, ParseIntError> {
    match s.parse::<i32>() {
        Ok(n) => Ok(n),
        Err(e) => Err(e),
    }
}

// Using if let for cleaner code
if let Some(value) = option {
    println!("Got: {}", value);
}
```

## Traits

### Defining Traits

```rust
trait Drawable {
    fn draw(&self);
    fn area(&self) -> f64;
}

struct Circle { radius: f64 }
struct Rectangle { width: f64, height: f64 }

impl Drawable for Circle {
    fn draw(&self) {
        println!("Circle with radius {}", self.radius);
    }
    fn area(&self) -> f64 {
        std::f64::consts::PI * self.radius * self.radius
    }
}

impl Drawable for Rectangle {
    fn draw(&self) {
        println!("Rectangle {}x{}", self.width, self.height);
    }
    fn area(&self) -> f64 {
        self.width * self.height
    }
}
```

### Default Implementation

```rust
trait Greeting {
    fn name(&self) -> &str;
    fn greet(&self) {
        println!("Hello, {}!", self.name());
    }
}
```

### Trait Bounds

```rust
// Single trait bound
fn print_debug(item: &impl std::fmt::Debug) {
    println!("{:?}", item);
}

// Multiple bounds
fn print_display_debug(item: &(impl std::fmt::Display + std::fmt::Debug)) {
    println!("{} {:?}", item, item);
}

// Where clause
fn some_function<T, U>(t: &T, u: &U) -> i32
where
    T: std::fmt::Display + Clone,
    U: std::fmt::Debug + Clone,
{
    42
}
```

## Enums & Algebraic Data Types

### Basic Enums

```rust
enum Direction {
    North,
    South,
    East,
    West,
}

let dir = Direction::North;
match dir {
    Direction::North => println!("Going north"),
    Direction::South => println!("Going south"),
    Direction::East => println!("Going east"),
    Direction::West => println!("Going west"),
}
```

### Enums with Data

```rust
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

fn process(msg: Message) {
    match msg {
        Message::Quit => println!("Quit"),
        Message::Move { x, y } => println!("Move to ({}, {})", x, y),
        Message::Write(text) => println!("Write: {}", text),
        Message::ChangeColor(r, g, b) => println!("Color: {}, {}, {}", r, g, b),
    }
}
```

### Standard Library Enums

```rust
// Option<T> - represents optional value
fn find_user(id: u32) -> Option<String> {
    if id == 1 {
        Some("Alice".to_string())
    } else {
        None
    }
}

// Result<T, E> - represents errors
fn divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err("Division by zero".to_string())
    } else {
        Ok(a / b)
    }
}
```

## Error Handling

### Result Type

```rust
use std::fs::File;
use std::io::Read;

fn read_file(path: &str) -> Result<String, std::io::Error> {
    let mut file = File::open(path)?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    Ok(contents)
}

// Using match
match read_file("test.txt") {
    Ok(content) => println!("{}", content),
    Err(e) => eprintln!("Error: {}", e),
}
```

### Option Type

```rust
fn find_first_word(s: &str) -> Option<&str> {
    let bytes = s.as_bytes();
    for (i, &byte) in bytes.iter().enumerate() {
        if byte == b' ' {
            return Some(&s[0..i]);
        }
    }
    None
}

// Using unwrap/expect
let word = find_first_word("hello world").unwrap();

// Using unwrap_or
let word = find_first_word("hello").unwrap_or("");

// Using if let
if let Some(word) = find_first_word("hello world") {
    println!("First word: {}", word);
}
```

## Concurrency

### Threads

```rust
use std::thread;
use std::time::Duration;

let handle = thread::spawn(|| {
    for i in 1..5 {
        println!("Thread: {}", i);
        thread::sleep(Duration::from_millis(100));
    }
});

handle.join().unwrap();
```

### Message Passing

```rust
use std::sync::mpsc;

let (tx, rx) = mpsc::channel();

thread::spawn(move || {
    tx.send(42).unwrap();
});

let received = rx.recv().unwrap();
println!("Got: {}", received);
```

### Mutex

```rust
use std::sync::Mutex;

let counter = Mutex::new(0);

let mut handles = vec![];
for _ in 0..10 {
    let handle = thread::spawn(move || {
        let mut num = counter.lock().unwrap();
        *num += 1;
    });
    handles.push(handle);
}

for handle in handles {
    handle.join().unwrap();
}

println!("Result: {}", *counter.lock().unwrap());
```