---
name: Performance Optimization
description: กฎเกี่ยวกับการปรับปรุง performance สำหรับ Dioxus applications
---

# Performance Optimization

## Why

Dioxus ใช้ Virtual DOM และ WebAssembly ซึ่งทำให้มี performance ที่ดี แต่การใช้งานที่ไม่ถูกต้องอาจทำให้ช้าลงได้

## What

กฎเหล่านี้คือ best practices สำหรับการปรับปรุง performance ของ Dioxus applications

## How

### 1. Memoization

- **SHOULD** ใช้ `#[component]` macro สำหรับ automatic props memoization
- **MUST** ใช้ `Clone` และ `PartialEq` สำหรับ props ที่ต้อง memoize
- **AVOID** การสร้าง closures ใหม่ในแต่ละ render
- **BENEFIT**: Dioxus 0.7 automatically batches updates สำหรับ performance

```rust
// ✅ Good - Memoized props
#[component]
fn Button(label: String, onclick: EventHandler<MouseEvent>) -> Element {
    rsx! {
        button { onclick, "{label}" }
    }
}

#[component]
fn App() -> Element {
    rsx! {
        Button {
            label: "Click me".to_string(),
            onclick: move |_| println!("Clicked!")
        }
    }
}

// ❌ Bad - Non-memoized closures
#[component]
fn App() -> Element {
    rsx! {
        button { 
            onclick: move |_| println!("Clicked!"), // ❌ New closure every render
            "Click me" 
        }
    }
}
```

### 2. List Rendering

- **MUST** ใช้ `key` prop สำหรับ list items
- **SHOULD** ใช้ unique IDs สำหรับ keys
- **AVOID** การใช้ index เป็น key ถ้า list มีการเปลี่ยนแปลง

```rust
// ✅ Good - Proper key usage
#[component]
fn TodoList() -> Element {
    let todos = use_signal(|| vec![
        Todo { id: 1, title: "Learn Dioxus".to_string() },
        Todo { id: 2, title: "Build an app".to_string() },
    ]);

    rsx! {
        div {
            for todo in todos.iter() {
                div { key: "{todo.id}", "{todo.title}" }
            }
        }
    }
}

// ❌ Bad - Using index as key
#[component]
fn TodoList() -> Element {
    let todos = use_signal(|| vec![
        Todo { id: 1, title: "Learn Dioxus".to_string() },
        Todo { id: 2, title: "Build an app".to_string() },
    ]);

    rsx! {
        div {
            for (i, todo) in todos.iter().enumerate() {
                div { key: "{i}", "{todo.title}" } // ❌ Bad key
            }
        }
    }
}
```

### 3. Asset Optimization

- **SHOULD** ใช้ `asset!` macro สำหรับ local assets
- **MUST** optimize images ก่อนใช้ใน production
- **AVOID** การใช้ assets ขนาดใหญ่โดยไม่จำเป็น

```rust
// ✅ Good - Optimized assets
#[component]
fn App() -> Element {
    rsx! {
        img { src: asset!("/assets/images/logo.png") }
    }
}

// ❌ Bad - Large unoptimized assets
#[component]
fn App() -> Element {
    rsx! {
        img { src: "/assets/images/huge-raw-image.png" } // ❌ Unoptimized
    }
}
```

### 4. Async Operations

- **SHOULD** ใช้ `use_resource` สำหรับ async data fetching
- **MUST** handle loading และ error states
- **AVOID** การ block UI ด้วย sync operations

```rust
// ✅ Good - Async with use_resource
#[component]
fn DataViewer() -> Element {
    let data = use_resource(|| async move {
        fetch_data().await
    });

    rsx! {
        match data.read().as_ref() {
            Some(Ok(data)) => rsx! { div { "{data}" } },
            Some(Err(e)) => rsx! { div { "Error: {e}" } },
            None => rsx! { div { "Loading..." } },
        }
    }
}

// ❌ Bad - Blocking UI
#[component]
fn DataViewer() -> Element {
    let data = fetch_data_blocking(); // ❌ Blocks UI

    rsx! {
        div { "{data}" }
    }
}
```

### 5. Web Bundle Size

- **SHOULD** enable WASM optimization flags
- **MUST** minimize dependencies
- **SHOULD** use tree-shaking สำหรับ unused code

```toml
# Cargo.toml
[profile.release]
opt-level = "z"
lto = true
codegen-units = 1
panic = "abort"
```

## Examples

### Good Example

```rust
#[component]
fn OptimizedList() -> Element {
    let items = use_signal(|| vec![
        Item { id: 1, name: "Item 1".to_string() },
        Item { id: 2, name: "Item 2".to_string() },
    ]);

    rsx! {
        div {
            for item in items.iter() {
                ListItem {
                    key: "{item.id}", // ✅ Unique key
                    name: item.name.clone(),
                }
            }
        }
    }
}

#[component]
fn ListItem(key: String, name: String) -> Element {
    rsx! {
        div { key, "{name}" }
    }
}
```

### Bad Example

```rust
#[component]
fn UnoptimizedList() -> Element {
    let items = use_signal(|| vec![
        Item { id: 1, name: "Item 1".to_string() },
        Item { id: 2, name: "Item 2".to_string() },
    ]);

    rsx! {
        div {
            for (i, item) in items.iter().enumerate() {
                div { // ❌ No key, no component separation
                    "{item.name}"
                }
            }
        }
    }
}
```

## References

- [Dioxus Performance Guide](https://dioxuslabs.com/learn/0.7/guides/performance)
- [Dioxus Signals Documentation](https://dioxuslabs.com/learn/0.7/essentials/basics/signals)
- [WebAssembly Optimization](https://webassembly.org/docs/future-features/)
- [Dioxus Documentation](https://docs.rs/dioxus/)
