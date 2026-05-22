# Zig Getting Started Guide

## Installation

Visit [ziglang.org/download](https://ziglang.org/download) to download Zig for your platform.

## Hello World

```zig
const std = @import("std");

pub fn main() void {
    std.debug.print("Hello, World!\n", .{});
}
```

Run with:
```bash
zig run hello.zig
```

## Basic Syntax

### Variables

```zig
const constant: i32 = 42;
var variable: f64 = 3.14;
```

### Functions

```zig
pub fn add(a: i32, b: i32) i32 {
    return a + b;
}
```

### Control Flow

```zig
pub fn main() void {
    const x = 10;

    if (x > 5) {
        std.debug.print("x is greater than 5\n", .{});
    }

    var i: i32 = 0;
    while (i < 10) : (i += 1) {
        std.debug.print("{}\n", .{i});
    }
}
```

## Error Handling

```zig
const std = @import("std");

pub fn main() !void {
    const file = try std.fs.cwd().openFile("test.txt", .{});
    defer file.close();
    
    const content = try file.readToEndAlloc(std.heap.page_allocator, 1024);
    defer std.heap.page_allocator.free(content);
    
    std.debug.print("{s}\n", .{content});
}
```

## Compile and Run

```bash
# Compile
zig build-exe hello.zig

# Run
./hello

# Or directly
zig run hello.zig
```
