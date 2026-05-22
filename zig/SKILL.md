---
name: zig
description: General-purpose programming language and toolchain for maintaining robust, optimal, and reusable software. Use for systems programming, embedded development, and performance-critical applications.
---

# Zig Programming Language

General-purpose programming language and toolchain for robust, optimal, and reusable software.

## When to Use

- Systems programming and embedded development
- Performance-critical applications
- Cross-platform development
- Building libraries and tools
- WebAssembly compilation
- C interoperability

## Summary Table

| Category | File | Purpose |
|---|---|---|
| **Guide** | [Getting Started](guide/getting-started.md) | Installation, hello world, basic syntax |
| **Guide** | [Language Reference](guide/language-reference.md) | Types, functions, control flow |
| **Reference** | [Standard Library](reference/stdlib.md) | Common algorithms and data structures |
| **Examples** | [Basic Programs](examples/basic.md) | Hello world, variables, loops |

## Quick Start

```bash
# Install Zig
# Visit https://ziglang.org/download

# Hello World
const std = @import("std")

pub fn main() void {
    std.debug.print("Hello, World!\n", .{});
}
```

```bash
zig run hello.zig
```

## Core Features

- **No Hidden Control Flow**: Explicit error handling
- **No Hidden Memory Allocations**: Manual memory management
- **Compile-Time Execution**: Run code at compile time
- **Cross-Compilation**: Build for any target from any platform
- **C Interop**: Seamless C interoperability
- **Single Source**: All documentation in one file

## References

- [Zig Documentation](https://ziglang.org/documentation/master/)
- [Zig Standard Library](https://ziglang.org/documentation/master/std/)
- [GitHub Repository](https://github.com/ziglang/zig)
