# How It Works

## Architecture

Cargo เป็น Rust package manager ที่ downloads dependencies, compiles packages, makes distributable packages และ uploads ไปยัง crates.io:

```
┌─────────────────────────────────────┐
│          Cargo Architecture             │
├─────────────────────────────────────┤
│  Package Manager  │  Build Tool       │
├─────────────────────────────────────┤
│  Dependency Resolution  │  Compilation │
├─────────────────────────────────────┤
│  crates.io Registry  │  Workspace     │
├─────────────────────────────────────┤
│  Binary Distribution  │  Documentation │
└─────────────────────────────────────┘
```

## Workflow

1. **Initialize** - สร้าง new project ด้วย `cargo new` หรือ `cargo init`
2. **Build** - Compile project ด้วย `cargo build`
3. **Run** - Run project ด้วย `cargo run`
4. **Test** - Run tests ด้วย `cargo test`
5. **Publish** - Publish ไปยัง crates.io ด้วย `cargo publish`
6. **Check** - Check สำหรับ errors โดยไม่ build ด้วย `cargo check`

## Key Concepts

- **Package Manager** - Downloads และ manages dependencies
- **Build Tool** - Compiles Rust packages
- **Crates** - Rust packages ที่ publish ไปยัง crates.io
- **Workspace** - Multiple related packages ใน single project
- **Dependency Resolution** - Automatically resolves และ downloads dependencies
- **Binary Distribution** - Creates distributable binaries
- **Cargo.toml** - Manifest file สำหรับ package metadata และ dependencies
- **Cargo.lock** - Lock file สำหรับ reproducible builds
