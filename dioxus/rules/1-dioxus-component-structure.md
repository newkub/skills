---
name: Component Structure and Best Practices
description: กฎเกี่ยวกับโครงสร้างและ best practices สำหรับ Dioxus components
---

# Component Structure and Best Practices

## Why

การจัดโครงสร้าง components อย่างถูกต้องช่วยให้:
- Code อ่านง่ายและ maintain ได้
- Reuse components ได้ง่ายขึ้น
- Performance ดีขึ้น
- Debug ง่ายขึ้น

## What

กฎเหล่านี้คือ best practices สำหรับการจัดโครงสร้าง Dioxus components

## How

### 1. Component Naming

- **USE** PascalCase สำหรับ component names
- **MUST** ใช้ `#[component]` attribute สำหรับทุก component
- **SHOULD** ตั้งชื่อ component ให้สื่อความหมายชัดเจน

```rust
// ✅ Good
#[component]
fn UserProfile(name: String, age: u32) -> Element {
    rsx! {
        div { "Name: {name}, Age: {age}" }
    }
}

// ❌ Bad
fn user_profile(name: String, age: u32) -> Element {
    rsx! {
        div { "Name: {name}, Age: {age}" }
    }
}
```

### 2. Props Structure

- **MUST** ใช้ `#[component]` macro สำหรับสร้าง props struct
- **SHOULD** ใช้ `Clone` และ `PartialEq` สำหรับ props ที่เป็น primitive types
- **MUST** wrap props ที่ไม่สามารถ clone ได้ใน `ReadSignal` หรือ `Rc`

```rust
// ✅ Good - Primitive props
#[component]
fn Button(label: String, onclick: EventHandler<MouseEvent>) -> Element {
    rsx! {
        button { onclick, "{label}" }
    }
}

// ✅ Good - Non-cloneable props wrapped in ReadSignal
#[component]
fn DataViewer(data: ReadSignal<Vec<String>>) -> Element {
    rsx! {
        div { "Data: {data}" }
    }
}
```

### 3. Component Composition

- **SHOULD** แยก components ให้เล็กและมีหน้าที่ชัดเจน (Single Responsibility)
- **MUST** ใช้ props สำหรับการส่งข้อมูลระหว่าง components
- **AVOID** การใช้ global state ใน components

```rust
// ✅ Good - Small, focused components
#[component]
fn Header(title: String) -> Element {
    rsx! {
        h1 { "{title}" }
    }
}

#[component]
fn Button(label: String, onclick: EventHandler<MouseEvent>) -> Element {
    rsx! {
        button { onclick, "{label}" }
    }
}

#[component]
fn App() -> Element {
    rsx! {
        Header { title: "My App" }
        Button { label: "Click me", onclick: move |_| println!("Clicked!") }
    }
}

// ❌ Bad - Monolithic component
#[component]
fn App() -> Element {
    rsx! {
        div {
            h1 { "My App" }
            button { onclick: move |_| println!("Clicked!"), "Click me" }
        }
    }
}
```

### 4. State Management

- **MUST** ใช้ `use_signal` สำหรับ local state
- **SHOULD** ใช้ `use_resource` สำหรับ async operations
- **AVOID** การ mutate state โดยตรงใน render

```rust
// ✅ Good - Proper state management
#[component]
fn Counter() -> Element {
    let mut count = use_signal(|| 0);
    
    rsx! {
        div { "Count: {count}" }
        button { onclick: move |_| count += 1, "Increment" }
    }
}

// ❌ Bad - Direct state mutation
#[component]
fn Counter() -> Element {
    let mut count = use_signal(|| 0);
    count.set(10); // ❌ Don't mutate state in render
    
    rsx! {
        div { "Count: {count}" }
    }
}
```

### 5. Hooks Usage

- **MUST** เรียก hooks ในลำดับเดียวกันทุกครั้ง (Rules of Hooks)
- **MUST** เรียก hooks เฉพาะใน component body หรือ hook อื่น
- **SHOULD** ตั้งชื่อ hooks ด้วย prefix `use_`

```rust
// ✅ Good - Proper hooks usage
#[component]
fn App() -> Element {
    let count = use_signal(|| 0);
    let data = use_resource(|| async move { fetch_data().await });
    
    rsx! {
        div { "Count: {count}" }
    }
}

// ❌ Bad - Hooks in conditional
#[component]
fn App(condition: bool) -> Element {
    if condition {
        let count = use_signal(|| 0); // ❌ Don't call hooks in conditionals
    }
    
    rsx! {
        div { "Hello" }
    }
}
```

## Examples

### Good Example

```rust
#[component]
fn TodoItem(
    title: String,
    completed: bool,
    on_toggle: EventHandler<MouseEvent>,
    on_delete: EventHandler<MouseEvent>,
) -> Element {
    rsx! {
        div { class: "todo-item" }
            input { 
                type: "checkbox", 
                checked: completed,
                onclick: on_toggle
            }
            span { "{title}" }
            button { onclick: on_delete, "Delete" }
    }
}

#[component]
fn TodoList() -> Element {
    let mut todos = use_signal(|| vec![
        ("Learn Dioxus".to_string(), false),
        ("Build an app".to_string(), false),
    ]);
    
    rsx! {
        div {
            for (i, (title, completed)) in todos.iter().enumerate() {
                TodoItem {
                    title: title.clone(),
                    completed: *completed,
                    on_toggle: move |_| {
                        todos.with_mut(|todos| todos[i].1 = !todos[i].1);
                    },
                    on_delete: move |_| {
                        todos.with_mut(|todos| { todos.remove(i); });
                    }
                }
            }
        }
    }
}
```

### Bad Example

```rust
// ❌ Monolithic component with poor structure
#[component]
fn TodoApp() -> Element {
    let mut todos = use_signal(|| vec![
        ("Learn Dioxus".to_string(), false),
        ("Build an app".to_string(), false),
    ]);
    
    rsx! {
        div {
            h1 { "Todo List" }
            ul {
                for (i, (title, completed)) in todos.iter().enumerate() {
                    li {
                        input { 
                            type: "checkbox", 
                            checked: completed,
                            onclick: move |_| todos.with_mut(|todos| todos[i].1 = !todos[i].1)
                        }
                        span { "{title}" }
                        button { 
                            onclick: move |_| todos.with_mut(|todos| { todos.remove(i); }),
                            "Delete" 
                        }
                    }
                }
            }
        }
    }
}
```

## References

- [Dioxus Components Documentation](https://dioxuslabs.com/learn/0.7/essentials/ui/components)
- [Dioxus Hooks Documentation](https://dioxuslabs.com/learn/0.7/essentials/basics/hooks)
- [Dioxus Best Practices](https://docs.rs/dioxus/)
