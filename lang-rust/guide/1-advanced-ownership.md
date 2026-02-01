# Advanced Ownership Patterns

## Complex Ownership Scenarios

### Struct Field Ownership
Design structs to work well with Rust's ownership system:

```rust
// Good - separates concerns
struct User {
    id: u64,
    name: String,
}

struct Post {
    id: u64,
    author_id: u64,
    title: String,
    content: String,
}

struct Blog {
    users: HashMap<u64, User>,
    posts: Vec<Post>,
}

// Bad - makes borrowing difficult
struct UserWithPosts {
    name: String,
    posts: Vec<Post>, // Complex ownership
}
```

### Reference Counting with Rc and Arc
Use reference counting for shared ownership:

```rust
use std::rc::Rc;
use std::sync::Arc;

// Single-threaded reference counting
fn single_threaded_sharing() {
    let data = Rc::new(String::from("shared data"));
    let data_clone1 = Rc::clone(&data);
    let data_clone2 = Rc::clone(&data);
    
    println!("Data: {}", data);
    println!("Clone 1: {}", data_clone1);
    println!("Clone 2: {}", data_clone2);
}

// Thread-safe reference counting
use std::sync::Arc;
use std::thread;

fn multi_threaded_sharing() {
    let data = Arc::new(String::from("thread-safe data"));
    let mut handles = vec![];
    
    for i in 0..3 {
        let data_clone = Arc::clone(&data);
        let handle = thread::spawn(move || {
            println!("Thread {}: {}", i, data_clone);
        });
        handles.push(handle);
    }
    
    for handle in handles {
        handle.join().unwrap();
    }
}
```

### Interior Mutability with RefCell
Use RefCell for runtime borrow checking:

```rust
use std::cell::RefCell;

struct Message {
    content: String,
    read_count: RefCell<u32>,
}

impl Message {
    fn new(content: &str) -> Self {
        Self {
            content: content.to_string(),
            read_count: RefCell::new(0),
        }
    }
    
    fn read(&self) -> &str {
        *self.read_count.borrow_mut() += 1;
        &self.content
    }
    
    fn read_count(&self) -> u32 {
        *self.read_count.borrow()
    }
}

fn interior_mutability_example() {
    let message = Message::new("Hello, Rust!");
    
    println!("Content: {}", message.read());
    println!("Content: {}", message.read());
    println!("Read count: {}", message.read_count());
}
```

### Cow (Clone-on-Write) for Conditional Ownership
Use Cow for efficient string handling:

```rust
use std::borrow::Cow;

fn process_text(text: &str) -> Cow<str> {
    if text.is_ascii() {
        // No allocation needed
        Cow::Borrowed(text)
    } else {
        // Allocate only when necessary
        Cow::Owned(text.to_uppercase())
    }
}

fn cow_example() {
    let ascii_text = "Hello, World!";
    let unicode_text = "Hello, 世界!";
    
    let processed_ascii = process_text(ascii_text);
    let processed_unicode = process_text(unicode_text);
    
    println!("ASCII: {}", processed_ascii);
    println!("Unicode: {}", processed_unicode);
}
```

## Lifetime Annotations

### Complex Lifetime Relationships
Handle complex lifetime scenarios:

```rust
struct Context<'a> {
    name: &'a str,
    data: Vec<&'a str>,
}

impl<'a> Context<'a> {
    fn new(name: &'a str) -> Self {
        Self {
            name,
            data: Vec::new(),
        }
    }
    
    fn add_data(&mut self, item: &'a str) {
        self.data.push(item);
    }
    
    fn get_data(&self, index: usize) -> Option<&'a str> {
        self.data.get(index).copied()
    }
}

fn lifetime_example() {
    let name = String::from("my_context");
    let item1 = String::from("item1");
    let item2 = String::from("item2");
    
    let mut context = Context::new(&name);
    context.add_data(&item1);
    context.add_data(&item2);
    
    println!("Context: {}", context.name);
    println!("Data: {:?}", context.data);
}
```

### Lifetime Subtyping
Understand lifetime subtyping:

```rust
// 'static is a subtype of any shorter lifetime
fn print_static(s: &'static str) {
    println!("Static: {}", s);
}

fn print_any<'a>(s: &'a str) {
    println!("Any: {}", s);
}

fn lifetime_subtyping() {
    let static_str = "I live forever";
    let string = String::from("I'm temporary");
    
    print_static(static_str); // OK
    // print_static(&string); // Error: not 'static
    
    print_any(static_str); // OK
    print_any(&string); // OK
}
```

### Higher-Ranked Trait Bounds (HRTB)
Use HRTB for closures with lifetimes:

```rust
fn apply_closure<F>(f: F) -> String
where
    F: for<'a> Fn(&'a str) -> String,
{
    f("hello")
}

fn hrtb_example() {
    let result = apply_closure(|s| format!("{} world", s));
    println!("Result: {}", result);
}
```

## Advanced Borrowing Patterns

### Struct Field Borrowing
Borrow multiple fields simultaneously:

```rust
struct Point {
    x: f64,
    y: f64,
}

impl Point {
    fn x(&self) -> &f64 {
        &self.x
    }
    
    fn y(&self) -> &f64 {
        &self.y
    }
    
    fn coords(&self) -> (&f64, &f64) {
        (&self.x, &self.y)
    }
    
    fn set_x(&mut self, x: f64) {
        self.x = x;
    }
    
    fn set_y(&mut self, y: f64) {
        self.y = y;
    }
}

fn struct_borrowing() {
    let mut point = Point { x: 1.0, y: 2.0 };
    
    let (x, y) = point.coords();
    println!("Point: ({}, {})", x, y);
    
    point.set_x(3.0);
    point.set_y(4.0);
    println!("Updated: ({}, {})", point.x(), point.y());
}
```

### Slice Borrowing
Work with slices efficiently:

```rust
fn process_chunks(data: &[i32]) -> Vec<i32> {
    data.chunks(2)
        .map(|chunk| chunk.iter().sum())
        .collect()
}

fn slice_windows(data: &[i32]) -> Vec<i32> {
    data.windows(3)
        .map(|window| window.iter().product())
        .collect()
}

fn slice_splitting(data: &[i32]) -> (Vec<i32>, Vec<i32>) {
    let mid = data.len() / 2;
    let (first, second) = data.split_at(mid);
    (first.to_vec(), second.to_vec())
}

fn slice_operations() {
    let data = vec![1, 2, 3, 4, 5, 6];
    
    let chunks = process_chunks(&data);
    println!("Chunks sum: {:?}", chunks);
    
    let windows = slice_windows(&data);
    println!("Windows product: {:?}", windows);
    
    let (first, second) = slice_splitting(&data);
    println!("Split: {:?}, {:?}", first, second);
}
```

## Memory Management Strategies

### Arena Allocation
Use arena patterns for efficient memory management:

```rust
struct Arena<T> {
    data: Vec<T>,
    free_list: Vec<usize>,
}

impl<T> Arena<T> {
    fn new() -> Self {
        Self {
            data: Vec::new(),
            free_list: Vec::new(),
        }
    }
    
    fn allocate(&mut self, item: T) -> usize {
        if let Some(index) = self.free_list.pop() {
            self.data[index] = item;
            index
        } else {
            self.data.push(item);
            self.data.len() - 1
        }
    }
    
    fn deallocate(&mut self, index: usize) {
        self.free_list.push(index);
    }
    
    fn get(&self, index: usize) -> Option<&T> {
        self.data.get(index)
    }
    
    fn get_mut(&mut self, index: usize) -> Option<&mut T> {
        self.data.get_mut(index)
    }
}

fn arena_example() {
    let mut arena = Arena::new();
    
    let idx1 = arena.allocate("first");
    let idx2 = arena.allocate("second");
    let idx3 = arena.allocate("third");
    
    println!("Item 1: {}", arena.get(idx1).unwrap());
    println!("Item 2: {}", arena.get(idx2).unwrap());
    println!("Item 3: {}", arena.get(idx3).unwrap());
    
    arena.deallocate(idx2);
    
    let idx4 = arena.allocate("fourth");
    println!("Item 4: {}", arena.get(idx4).unwrap());
}
```

### Object Pool Pattern
Reuse objects to reduce allocations:

```rust
use std::sync::Mutex;

struct ObjectPool<T> {
    objects: Mutex<Vec<T>>,
    create_fn: Box<dyn Fn() -> T>,
}

impl<T> ObjectPool<T> {
    fn new<F>(create_fn: F) -> Self
    where
        F: Fn() -> T + 'static,
    {
        Self {
            objects: Mutex::new(Vec::new()),
            create_fn: Box::new(create_fn),
        }
    }
    
    fn get(&self) -> T {
        let mut objects = self.objects.lock().unwrap();
        objects.pop().unwrap_or_else(|| (self.create_fn)())
    }
    
    fn return_object(&self, object: T) {
        let mut objects = self.objects.lock().unwrap();
        objects.push(object);
    }
}

fn object_pool_example() {
    let pool = ObjectPool::new(|| Vec::new());
    
    let vec1 = pool.get();
    let vec2 = pool.get();
    
    println!("Got vectors from pool");
    
    pool.return_object(vec1);
    pool.return_object(vec2);
    
    println!("Returned vectors to pool");
}
```

## Performance Considerations

### Zero-Copy Operations
Minimize unnecessary copying:

```rust
fn process_data_efficiently(data: &[u8]) -> Vec<u8> {
    data.iter()
        .map(|&b| b.wrapping_add(1))
        .collect()
}

fn process_data_inefficiently(data: &[u8]) -> Vec<u8> {
    let mut result = data.to_vec(); // Unnecessary copy
    for byte in &mut result {
        *byte = byte.wrapping_add(1);
    }
    result
}

fn zero_copy_example() {
    let data = vec![1, 2, 3, 4, 5];
    
    let efficient = process_data_efficiently(&data);
    let inefficient = process_data_inefficiently(&data);
    
    println!("Efficient: {:?}", efficient);
    println!("Inefficient: {:?}", inefficient);
}
```

### Memory Layout Optimization
Optimize struct layout for better cache performance:

```rust
// Bad - poor cache locality due to padding
struct BadLayout {
    a: u8,     // 1 byte + 7 bytes padding
    b: u64,    // 8 bytes
    c: u8,     // 1 byte + 7 bytes padding
    d: u64,    // 8 bytes
} // Total: 32 bytes

// Good - better cache locality
struct GoodLayout {
    b: u64,    // 8 bytes
    d: u64,    // 8 bytes
    a: u8,     // 1 byte
    c: u8,     // 1 byte + 6 bytes padding
} // Total: 24 bytes

fn layout_optimization() {
    println!("Bad layout size: {}", std::mem::size_of::<BadLayout>());
    println!("Good layout size: {}", std::mem::size_of::<GoodLayout>());
}
```

## Best Practices

1. **Prefer borrowing over cloning** - Avoid unnecessary allocations
2. **Use reference counting wisely** - Only when shared ownership is needed
3. **Leverage Cow for conditional ownership** - Clone only when necessary
4. **Understand lifetime relationships** - Write clear lifetime annotations
5. **Optimize memory layout** - Consider cache performance
6. **Use arena allocation** - For many similar objects
7. **Profile before optimizing** - Measure actual performance impact
