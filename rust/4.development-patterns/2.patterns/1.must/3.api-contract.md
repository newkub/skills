# Rust Ownership and Borrowing

## Why

Ownership and borrowing are Rust's core safety features. They prevent memory leaks, data races, and use-after-free errors at compile time without runtime overhead.

## Anti-patterns

- Unnecessary cloning of data
- Ignoring borrow checker errors
- Using unsafe code when safe alternatives exist
- Complex lifetime annotations when simple ones suffice
- Fighting the borrow checker instead of working with it

## Best Practices

Embrace ownership semantics and use borrowing to share data safely without sacrificing performance.

## Rules

### 1. Prefer References Over Cloning

Use references to avoid unnecessary allocations:

```rust
// Bad - unnecessary cloning
fn process_string(s: String) -> usize {
    s.len()
}

// Good - use reference
fn process_string(s: &str) -> usize {
    s.len()
}

// Usage
let text = String::from("Hello, world!");
let length = process_string(&text); // No cloning
```

### 2. Use Mutable References When Modification Needed

Prefer mutable references over returning new values:

```rust
// Bad - creates new string
fn add_suffix(s: String) -> String {
    format!("{}_suffix", s)
}

// Good - modifies in place
fn add_suffix(s: &mut String) {
    s.push_str("_suffix");
}

// Usage
let mut text = String::from("hello");
add_suffix(&mut text);
```

### 3. Follow Borrowing Rules

Never violate borrowing rules:

```rust
fn demonstrate_borrowing_rules() {
    let mut data = vec![1, 2, 3];

    // Multiple immutable borrows are OK
    let r1 = &data;
    let r2 = &data;
    println!("r1: {:?}, r2: {:?}", r1, r2);

    // Only one mutable borrow at a time
    let r3 = &mut data;
    r3.push(4);
    // let r4 = &data; // Error: cannot borrow while mutable borrow exists
}
```

### 4. Use Lifetime Annotations Sparingly

Let the compiler infer lifetimes when possible:

```rust
// Bad - unnecessary lifetime annotation
fn first_word<'a>(s: &'a str) -> &'a str {
    let bytes = s.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];
        }
    }

    s
}

// Good - lifetime elision
fn first_word(s: &str) -> &str {
    let bytes = s.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];
        }
    }

    s
}
```

### 5. Use Cow for Conditional Ownership

Use Clone-on-Write when ownership might be needed:

```rust
use std::borrow::Cow;

fn process_text(text: &str) -> Cow<str> {
    if text.is_ascii() {
        // No need to allocate, just borrow
        Cow::Borrowed(text)
    } else {
        // Need to allocate for transformation
        Cow::Owned(text.to_uppercase())
    }
}
```

### 6. Handle Move Semantics Correctly

Understand when values are moved:

```rust
fn demonstrate_moves() {
    let s1 = String::from("hello");
    let s2 = s1; // s1 is moved to s1

    // println!("{}", s1); // Error: s1 is no longer valid
    println!("{}", s2); // OK

    // Copy types can be copied
    let x = 5;
    let y = x; // x is copied to y
    println!("x: {}, y: {}", x, y); // Both valid
}
```

### 7. Use Struct Fields Wisely

Design structs to work well with borrowing:

```rust
// Bad - makes borrowing difficult
struct User {
    name: String,
    posts: Vec<Post>,
}

// Good - separates concerns
struct User {
    name: String,
}

struct Post {
    author_id: u64,
    content: String,
}

struct Blog {
    users: HashMap<u64, User>,
    posts: Vec<Post>,
}
```

### 8. Avoid Fighting the Borrow Checker

Restructure code to work with borrowing rules:

```rust
// Bad - fights borrow checker
fn process_data_bad(data: &mut Vec<i32>) -> Vec<i32> {
    let mut result = Vec::new();
    for item in data.iter() {
        result.push(item * 2);
        // data.push(item + 1); // Error: cannot borrow while iterating
    }
    result
}

// Good - works with borrow checker
fn process_data_good(data: &mut Vec<i32>) -> Vec<i32> {
    let result: Vec<i32> = data.iter().map(|item| item * 2).collect();
    for item in data.iter() {
        data.push(item + 1);
    }
    result
}
```

## Impact

Violating ownership and borrowing best practices leads to:

- Performance issues from unnecessary cloning
- Complex and hard-to-maintain code
- Compilation errors and frustration
- Memory safety risks if unsafe is used incorrectly
- Reduced code readability

## References

- [The Rust Book - Chapter 4: Understanding Ownership](https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html)
- [The Rust Book - Chapter 10: Lifetimes](https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html)
- [Rust by Example - Ownership](https://doc.rust-lang.org/rust-by-example/ownership.html)
