# Rust Standard Library API

## Core APIs Overview

The Rust standard library provides essential functionality for Rust programs. This document covers the most commonly used APIs.

## Primitive Types

### Integer Types

```rust
// Signed integers
let x: i8 = 127;
let y: i16 = 32767;
let z: i32 = 2147483647;
let w: i64 = 9223372036854775807;
let v: i128 = 170141183460469231731687303715884105727;
let isize = 4; // Platform-dependent

// Unsigned integers
let a: u8 = 255;
let b: u16 = 65535;
let c: u32 = 4294967295;
let d: u64 = 18446744073709551615;
let e: u128 = 340282366920938463463374607431768211455;
let usize = 8; // Platform-dependent
```

### Floating Point Types

```rust
let x: f32 = 3.14159;
let y: f64 = 2.718281828459045;

// Operations
let sum = x + y;
let product = x * y;
let sqrt = y.sqrt();
let round = x.round();
```

### Boolean Type

```rust
let is_true: bool = true;
let is_false: bool = false;

// Logical operations
let result = is_true && is_false; // false
let result = is_true || is_false; // true
let result = !is_true; // false
```

### Character Type

```rust
let c: char = 'a';
let emoji: char = '😊';
let unicode: char = '∞';

// Methods
let is_digit = c.is_ascii_digit();
let is_upper = c.is_uppercase();
let to_upper = c.to_uppercase();
```

## Collections

### Vec<T> - Dynamic Array

```rust
// Creation
let mut vec = Vec::new();
let vec = vec![1, 2, 3, 4, 5];
let vec_with_capacity = Vec::with_capacity(10);

// Operations
vec.push(6);
vec.pop();
vec.insert(0, 0);
vec.remove(2);
vec.clear();

// Access
let first = vec[0];
let maybe_first = vec.get(0);
let len = vec.len();
let is_empty = vec.is_empty();

// Iteration
for item in &vec {
    println!("{}", item);
}

for item in &mut vec {
    *item *= 2;
}

// Functional methods
let doubled: Vec<i32> = vec.iter().map(|x| x * 2).collect();
let sum: i32 = vec.iter().sum();
let filtered: Vec<i32> = vec.iter().filter(|&&x| x > 3).cloned().collect();
```

### String - UTF-8 String

```rust
// Creation
let mut s = String::new();
let s = String::from("hello");
let s = "hello".to_string();
let s = format!("{} {}", "hello", "world");

// Operations
s.push('!');
s.push_str(" world");
s.pop();
s.clear();

// Access and slicing
let len = s.len();
let chars = s.chars();
let bytes = s.bytes();
let substring = &s[0..5];

// Methods
let is_empty = s.is_empty();
let contains = s.contains("world");
let starts_with = s.starts_with("hello");
let ends_with = s.ends_with("world");
let replaced = s.replace("world", "Rust");
let trimmed = s.trim();
```

### HashMap<K, V> - Key-Value Store

```rust
use std::collections::HashMap;

// Creation
let mut map = HashMap::new();
let map = HashMap::from([("a", 1), ("b", 2)]);

// Operations
map.insert("c", 3);
map.remove("a");
map.clear();

// Access
let value = map.get("b");
let value_or_default = map.get(&"d").unwrap_or(&0);
let entry = map.entry("e").or_insert(5);

// Iteration
for (key, value) in &map {
    println!("{}: {}", key, value);
}

// Methods
let contains_key = map.contains_key(&"b");
let is_empty = map.is_empty();
let len = map.len();
```

## Option<T> - Nullable Values

```rust
// Creation
let some_value: Option<i32> = Some(42);
let no_value: Option<i32> = None;

// Pattern matching
match some_value {
    Some(value) => println!("Value: {}", value),
    None => println!("No value"),
}

// Methods
let is_some = some_value.is_some();
let is_none = some_value.is_none();
let unwrapped = some_value.unwrap();
let unwrapped_or = no_value.unwrap_or(0);
let unwrapped_or_else = no_value.unwrap_or(|| 0);
let mapped = some_value.map(|x| x * 2);
let filtered = some_value.filter(|&x| x > 40);
let and_then = some_value.and_then(|x| if x > 0 { Some(x * 2) } else { None });
```

## Result<T, E> - Error Handling

```rust
use std::fs;

// Creation
let ok_result: Result<i32, &str> = Ok(42);
let err_result: Result<i32, &str> = Err("error");

// Pattern matching
match ok_result {
    Ok(value) => println!("Success: {}", value),
    Err(error) => println!("Error: {}", error),
}

// Methods
let is_ok = ok_result.is_ok();
let is_err = ok_result.is_err();
let unwrapped = ok_result.unwrap();
let unwrapped_or = err_result.unwrap_or(0);
let mapped = ok_result.map(|x| x * 2);
let mapped_err = err_result.map_err(|e| format!("Error: {}", e));

// ? operator for propagation
fn read_file() -> Result<String, std::io::Error> {
    let content = fs::read_to_string("file.txt")?;
    Ok(content)
}
```

## Iterators

```rust
let numbers = vec![1, 2, 3, 4, 5];

// Create iterator
let iter = numbers.iter();

// Iterator methods
let doubled: Vec<i32> = iter.clone().map(|x| x * 2).collect();
let filtered: Vec<i32> = iter.clone().filter(|&&x| x > 2).cloned().collect();
let sum: i32 = iter.clone().sum();
let product: i32 = iter.clone().product();
let count = iter.clone().count();
let min = iter.clone().min();
let max = iter.clone().max();

// Chaining operations
let result: Vec<i32> = numbers
    .iter()
    .filter(|&&x| x > 1)
    .map(|&x| x * 2)
    .filter(|&x| x < 10)
    .collect();

// Consumer methods
numbers.iter().for_each(|x| println!("{}", x));
let any_greater_than_3 = numbers.iter().any(|&x| x > 3);
let all_positive = numbers.iter().all(|&x| x > 0);
let find_first = numbers.iter().find(|&&x| x > 3);
let position = numbers.iter().position(|&x| x == 3);
```

## File I/O

```rust
use std::fs::{self, File};
use std::io::{self, Read, Write, BufRead, BufReader};

// Reading files
let content = fs::read_to_string("file.txt")?;
let bytes = fs::read("file.bin")?;

// Writing files
fs::write("output.txt", "Hello, world!")?;
fs::write("output.bin", &[1, 2, 3, 4])?;

// File operations
let mut file = File::create("file.txt")?;
file.write_all(b"Hello, world!")?;
file.flush()?;

let mut file = File::open("file.txt")?;
let mut content = String::new();
file.read_to_string(&mut content)?;

// Buffered reading
let file = File::open("file.txt")?;
let reader = BufReader::new(file);
for line in reader.lines() {
    println!("{}", line?);
}
```

## Threading

```rust
use std::thread;
use std::sync::{Arc, Mutex};
use std::time::Duration;

// Basic thread
let handle = thread::spawn(|| {
    println!("Hello from thread!");
    42
});

let result = handle.join().unwrap();

// Thread with move closure
let data = vec![1, 2, 3];
let handle = thread::spawn(move || {
    println!("Data: {:?}", data);
});

// Shared state
let counter = Arc::new(Mutex::new(0));
let counter_clone = Arc::clone(&counter);

thread::spawn(move || {
    let mut num = counter_clone.lock().unwrap();
    *num += 1;
});
```

## Time

```rust
use std::time::{Duration, Instant, SystemTime, UNIX_EPOCH};

// Duration
let duration = Duration::from_secs(60);
let duration = Duration::from_millis(1000);
let duration = Duration::from_nanos(1_000_000);

// Instant for measuring time
let start = Instant::now();
thread::sleep(Duration::from_millis(100));
let elapsed = start.elapsed();

// System time
let now = SystemTime::now();
let unix_timestamp = now.duration_since(UNIX_EPOCH)?;
```

## Path Manipulation

```rust
use std::path::{Path, PathBuf};

// Path operations
let path = Path::new("/home/user/file.txt");
let path_buf = PathBuf::from("/home/user/file.txt");

// Methods
let exists = path.exists();
let is_file = path.is_file();
let is_dir = path.is_dir();
let parent = path.parent();
let file_name = path.file_name();
let extension = path.extension();
let file_stem = path.file_stem();

// Path joining
let joined = path.join("subdir").join("file.txt");

// Path components
for component in path.components() {
    println!("{:?}", component);
}
```

## Environment Variables

```rust
use std::env;

// Get environment variable
let path = env::var("PATH")?;
let home = env::var("HOME").unwrap_or("/".to_string());

// Set environment variable
env::set_var("MY_VAR", "my_value");

// Check if variable exists
let has_var = env::var("MY_VAR").is_ok();

// Command line arguments
let args: Vec<String> = env::args().collect();
let program_name = env::args().next().unwrap();
```

## Error Types

```rust
use std::error::Error;
use std::fmt;

// Custom error type
#[derive(Debug)]
enum MyError {
    Io(std::io::Error),
    Parse(String),
}

impl fmt::Display for MyError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            MyError::Io(err) => write!(f, "IO error: {}", err),
            MyError::Parse(msg) => write!(f, "Parse error: {}", msg),
        }
    }
}

impl Error for MyError {}

// Error conversion
impl From<std::io::Error> for MyError {
    fn from(err: std::io::Error) -> Self {
        MyError::Io(err)
    }
}
```

## Common Traits

### Clone

```rust
#[derive(Clone)]
struct Point {
    x: i32,
    y: i32,
}

let p1 = Point { x: 1, y: 2 };
let p2 = p1.clone(); // Deep copy
```

### Copy

```rust
#[derive(Copy, Clone)]
struct Point {
    x: i32,
    y: i32,
}

let p1 = Point { x: 1, y: 2 };
let p2 = p1; // Copy, not move
```

### Debug

```rust
#[derive(Debug)]
struct Point {
    x: i32,
    y: i32,
}

let p = Point { x: 1, y: 2 };
println!("{:?}", p);
println!("{:#?}", p); // Pretty print
```

### PartialEq and Eq

```rust
#[derive(PartialEq, Eq)]
struct Point {
    x: i32,
    y: i32,
}

let p1 = Point { x: 1, y: 2 };
let p2 = Point { x: 1, y: 2 };
assert_eq!(p1, p2);
```

### Hash

```rust
use std::collections::HashMap;
use std::hash::{Hash, Hasher};

#[derive(Hash, PartialEq, Eq)]
struct Point {
    x: i32,
    y: i32,
}

let mut map = HashMap::new();
map.insert(Point { x: 1, y: 2 }, "value");
```
