---
name: Cross-Platform Development
description: กฎเกี่ยวกับการพัฒนา cross-platform applications ด้วย Dioxus
---

# Cross-Platform Development

## Why

Dioxus รองรับหลาย platforms (Web, Desktop, Mobile) แต่แต่ละ platform มีความต้องการและ limitations ที่แตกต่างกัน

## What

กฎเหล่านี้คือ best practices สำหรับการพัฒนา cross-platform applications ด้วย Dioxus

## How

### 1. Platform-Specific Code

- **SHOULD** ใช้ conditional compilation สำหรับ platform-specific code
- **MUST** test บนทุก platforms ที่รองรับ
- **AVOID** การใช้ APIs ที่ไม่รองรับบาง platforms

```rust
// ✅ Good - Platform-specific code
#[cfg(target_os = "windows")]
fn get_native_window() -> HWND {
    // Windows-specific code
}

#[cfg(target_os = "macos")]
fn get_native_window() -> NSWindow {
    // macOS-specific code
}

#[component]
fn App() -> Element {
    let window = use_resource(|| async move {
        #[cfg(target_os = "windows")]
        {
            get_native_window()
        }
        #[cfg(target_os = "macos")]
        {
            get_native_window()
        }
    });
    
    rsx! {
        div { "Hello World" }
    }
}

// ❌ Bad - Non-portable code
fn get_window() -> HWND { // ❌ Windows-only
    // Windows-specific code
}
```

### 2. Asset Management

- **SHOULD** ใช้ `asset!` macro สำหรับ cross-platform assets
- **MUST** ใช้ relative paths สำหรับ assets
- **AVOID** การใช้ absolute paths

```rust
// ✅ Good - Cross-platform assets
#[component]
fn App() -> Element {
    rsx! {
        img { src: asset!("/assets/images/logo.png") }
    }
}

// ❌ Bad - Platform-specific paths
#[component]
fn App() -> Element {
    rsx! {
        img { src: "C:/assets/images/logo.png" } // ❌ Windows-only
    }
}
```

### 3. Responsive Design

- **MUST** ใช้ responsive CSS สำหรับ desktop/mobile
- **SHOULD** ใช้ CSS Grid หรือ Flexbox สำหรับ layout
- **AVOID** การ hardcode pixel values

```css
/* ✅ Good - Responsive design */
.container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

@media (min-width: 768px) {
    .container {
        flex-direction: row;
    }
}
```

```rust
// ❌ Bad - Hardcoded values
#[component]
fn App() -> Element {
    rsx! {
        div { 
            style: "width: 500px; height: 300px;", // ❌ Not responsive
            "Content" 
        }
    }
}
```

### 4. Platform Testing

- **MUST** test บนทุก platforms ก่อน release
- **SHOULD** ใช้ emulators สำหรับ mobile testing
- **MUST** handle platform-specific errors

```rust
// ✅ Good - Platform-aware error handling
#[component]
fn App() -> Element {
    let result = use_resource(|| async move {
        #[cfg(target_arch = "wasm32")]
        {
            fetch_data_from_web().await
        }
        #[cfg(not(target_arch = "wasm32"))]
        {
            fetch_data_from_native().await
        }
    });
    
    rsx! {
        match result.read().as_ref() {
            Some(Ok(data)) => rsx! { div { "{data}" } },
            Some(Err(e)) => rsx! { div { "Error: {e}" } },
            None => rsx! { div { "Loading..." } },
        }
    }
}
```

### 5. CLI Usage

- **SHOULD** ใช้ `dx serve --platform <platform>` สำหรับ testing
- **MUST** ใช้ `dx bundle` สำหรับ production builds
- **SHOULD** configure platform-specific settings ใน `dx.toml`

```bash
# ✅ Good - Platform-specific serving
dx serve --platform web
dx serve --platform desktop
dx serve --platform android
dx serve --platform ios

# ✅ Good - Production builds
dx bundle --platform web
dx bundle --platform desktop
```

```toml
# dx.toml
[application]
name = "My App"

[web]
out_dir = "dist"

[desktop]
icon = "assets/icon.png"

[android]
package_name = "com.example.myapp"
```

## Examples

### Good Example

```rust
#[component]
fn CrossPlatformApp() -> Element {
    let data = use_resource(|| async move {
        #[cfg(target_arch = "wasm32")]
        {
            fetch_from_web_api().await
        }
        #[cfg(not(target_arch = "wasm32"))]
        {
            fetch_from_native_api().await
        }
    });
    
    rsx! {
        div { class: "container" }
            h1 { "My App" }
            img { src: asset!("/assets/logo.png") }
            {match data.read().as_ref() {
                Some(Ok(data)) => rsx! { div { "{data}" } },
                Some(Err(e)) => rsx! { div { "Error: {e}" } },
                None => rsx! { div { "Loading..." } },
            }}
    }
}
```

### Bad Example

```rust
#[component]
fn PlatformSpecificApp() -> Element {
    let data = fetch_from_web_api_blocking(); // ❌ Not cross-platform
    
    rsx! {
        div { 
            style: "width: 500px; height: 300px;", // ❌ Not responsive
            h1 { "My App" }
            img { src: "C:/assets/logo.png" } // ❌ Windows-only path
        }
    }
}
```

## References

- [Dioxus Web Guide](https://dioxuslabs.com/learn/0.6/guides/web/)
- [Dioxus Desktop Guide](https://dioxuslabs.com/learn/0.6/guides/desktop/)
- [Dioxus Mobile Guide](https://dioxuslabs.com/learn/0.6/guides/mobile/)
- [Dioxus Fullstack Guide](https://dioxuslabs.com/learn/0.6/guides/fullstack/)
