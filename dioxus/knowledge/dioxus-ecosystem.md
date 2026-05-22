---
name: Dioxus Ecosystem
description: ความรู้เกี่ยวกับ ecosystem และ tools ของ Dioxus
---

# Dioxus Ecosystem

## CLI Tool (dx)

`dx` เป็น command-line tool หลักของ Dioxus:

### Installation

```bash
cargo install cargo-binstall
cargo binstall dioxus-cli
```

### Common Commands

```bash
# Create new project
dx new my-app

# Start development server
dx serve --desktop
dx serve --web
dx serve --android
dx serve --ios

# Build for production
dx bundle --web
dx bundle --desktop
dx bundle --android
dx bundle --ios
```

## Renderers

### Web Renderer (`dioxus-web`)

- Compile ไปเป็น WebAssembly
- Support browser APIs
- SSR และ hydration support

### Desktop Renderer (`dioxus-desktop`)

- WebView-based rendering
- Native window management
- System tray, menu bar support

### Mobile Renderer (`dioxus-mobile`)

- Android (JNI integration)
- iOS (CoreFoundation integration)
- Native API access

## Key Libraries

### `dioxus`

Core library สำหรับ Dioxus framework

### `dioxus-web`

Web renderer สำหรับ browser applications

### `dioxus-desktop`

Desktop renderer สำหรับ native applications

### `dioxus-mobile`

Mobile renderer สำหรับ Android และ iOS

### `dioxus-router`

Type-safe routing สำหรับ Dioxus applications

### `dioxus-fullstack`

Fullstack framework ด้วย Axum integration:

- Server functions ด้วย `#[get]`, `#[post]` macros
- WebSocket support
- Server Events
- Streaming support
- Form handling

### `dioxus-hooks`

Collection ของ custom hooks สำหรับ Dioxus

### `dioxus-primitives`

Component library 28 foundational components:

- Radix-UI equivalents
- Unstyled components
- Keyboard shortcuts
- ARIA accessibility
- Cross-platform support

## Configuration

### `dx.toml`

Configuration file สำหรับ Dioxus projects:

```toml
[application]
name = "My App"
default_platform = "web"

[web]
out_dir = "dist"

[desktop]
icon = "assets/icon.png"

[android]
package_name = "com.example.myapp"
```

### `Cargo.toml`

Dependencies สำหรับ Dioxus:

```toml
[dependencies]
dioxus = "0.7"
dioxus-web = "0.7"
dioxus-desktop = "0.7"
dioxus-mobile = "0.7"
```

## Development Tools

### Hot Reloading & Hot-Patching

- Real-time updates ขณะ development
- Support RSX และ assets
- Subsecond hot-patching สำหรับ Rust code
- `dx serve` command

### Debugger

- Integrated VSCode debugger
- Press `d` ใน `dx serve` เพื่อ attach debugger
- Support web, desktop, mobile
- DWARF symbols สำหรับ proper symbol demangling

### Automatic Tailwind

- Auto-detect `tailwind.css` ที่ project root
- Support Tailwind V3 และ V4
- Start watcher โดยอัตโนมัติ
- ไม่ต้อง manual setup

## Community Resources

### Documentation

- [Official Docs](https://dioxuslabs.com/learn/0.7/)
- [API Reference](https://docs.rs/dioxus/)
- [Examples](https://github.com/DioxusLabs/dioxus/tree/main/examples)

### Community

- [Discord](https://discord.gg/XgGxMSkvUM)
- [GitHub](https://github.com/DioxusLabs/dioxus)
- [Twitter](https://twitter.com/dioxuslabs)

## References

- [Dioxus CLI Documentation](https://dioxuslabs.com/learn/0.7/guides/cli/)
- [Dioxus Configuration](https://dioxuslabs.com/learn/0.7/guides/configuration/)
- [Dioxus Ecosystem](https://dioxuslabs.com/learn/0.7/ecosystem/)
- [Dioxus 0.7 Release](https://github.com/DioxusLabs/dioxus/releases/tag/v0.7.0)
