---
name: Dioxus Core Concepts
description: ความรู้พื้นฐานเกี่ยวกับ Dioxus framework
---

# Dioxus Core Concepts

## Overview

Dioxus เป็น cross-platform framework สำหรับ Rust ที่ช่วยให้คุณสร้าง applications สำหรับ web, desktop, และ mobile ด้วย codebase เดียว

## Key Concepts

### 1. Virtual DOM

Dioxus ใช้ Virtual DOM สำหรับ efficient rendering:
- สร้าง virtual representation ของ UI
- เปรียบเทียบ virtual DOM เก่าและใหม่
- Apply changes ที่จำเป็นเท่านั้นไปยัง actual DOM

### 2. RSX (Rust Syntax Extension)

RSX เป็น macro สำหรับการสร้าง UI markup:
- คล้าย JSX ใน React
- ใช้ syntax ของ Rust
- Compile-time type checking

```rust
rsx! {
    div {
        class: "container",
        h1 { "Hello World" }
        button { onclick: move |_| println!("Clicked"), "Click me" }
    }
}
```

### 3. Components

Components เป็นฟังก์ชันที่ return `Element`:
- Reusable UI building blocks
- ใช้ `#[component]` attribute
- Support props สำหรับ passing data

```rust
#[component]
fn Button(label: String, onclick: EventHandler<MouseEvent>) -> Element {
    rsx! {
        button { onclick, "{label}" }
    }
}
```

### 4. Signals

Signals เป็น reactive state management:
- `use_signal` สำหรับ local state
- `ReadSignal` สำหรับ reading state
- `WriteSignal` สำหรับ writing state
- Automatic batching สำหรับ performance

```rust
let mut count = use_signal(|| 0);
count.set(10);
let value = count.read();
```

### 5. Stores

Stores เป็น primitive ใหม่สำหรับ nested reactive state:
- ใช้ `#[derive(Store)]` macro
- Zoom เข้าไปยังส่วนเฉพาะของ state
- Fine-grained reactivity สำหรับ nested structures

```rust
#[derive(Store)]
struct Directory {
    children: BTreeMap<String, Directory>,
}

let mut children = directory.children();
```

### 6. Hooks

Hooks เป็น reusable logic:
- เริ่มต้นด้วย `use_` prefix
- เรียกใช้ใน component body เท่านั้น
- ต้องเรียกในลำดับเดียวกันทุกครั้ง

```rust
let count = use_signal(|| 0);
let data = use_resource(|| async { fetch_data().await });
```

## Platform Support

### Web
- Compile ไปเป็น WebAssembly
- ใช้ `dioxus-web` renderer
- Support SSR และ hydration

### Desktop
- ใช้ WebView สำหรับ rendering
- Support macOS, Linux, Windows
- Native API access

### Mobile
- Support Android และ iOS
- WebView หรือ WGPU rendering
- JNI และ CoreFoundation access

## Best Practices

1. **Component Design**: แยก components ให้เล็กและมีหน้าที่ชัดเจน
2. **State Management**: ใช้ signals สำหรับ atomic state, stores สำหรับ nested state
3. **Performance**: Memoize props และใช้ keys สำหรับ lists
4. **Cross-Platform**: ใช้ conditional compilation สำหรับ platform-specific code
5. **Hot-Patching**: ใช้ Subsecond สำหรับ rapid iteration

## References

- [Dioxus Documentation](https://dioxuslabs.com/learn/0.7/)
- [Dioxus on GitHub](https://github.com/DioxusLabs/dioxus)
- [Dioxus on docs.rs](https://docs.rs/dioxus/)
