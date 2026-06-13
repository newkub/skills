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

## Related Topics

- **Pattern Matching** - อ่าน `pattern-matching.md` สำหรับ pattern matching
- **Traits** - อ่าน `traits.md` สำหรับ traits system
- **Enums** - อ่าน `enums.md` สำหรับ algebraic data types
- **Error Handling** - อ่าน `error-handling.md` สำหรับ Result และ Option
- **Concurrency** - อ่าน `concurrency.md` สำหรับ threads และ async
