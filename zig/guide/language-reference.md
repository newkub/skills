# Zig Language Reference

## Types

### Primitives

```zig
// Integers
const a: u8 = 255;      // unsigned 8-bit
const b: i32 = -100;     // signed 32-bit
const c: usize = 100;    // platform-dependent unsigned

// Floats
const d: f32 = 3.14;     // 32-bit float
const e: f64 = 2.718;    // 64-bit float

// Boolean
const f: bool = true;

// Arrays
const g: [5]u8 = [5]u8{ 1, 2, 3, 4, 5 };

// Slices
const h: []const u8 = "hello";
```

### Structs

```zig
const Point = struct {
    x: f64,
    y: f64,

    pub fn distance(p: Point, other: Point) f64 {
        const dx = p.x - other.x;
        const dy = p.y - other.y;
        return @sqrt(dx * dx + dy * dy);
    }
};

pub fn main() void {
    const p1 = Point{ .x = 0, .y = 0 };
    const p2 = Point{ .x = 3, .y = 4 };
    std.debug.print("{}\n", .{Point.distance(p1, p2)});
}
```

### Enums

```zig
const Color = enum {
    red,
    green,
    blue,
};

pub fn main() void {
    const c = Color.blue;
    std.debug.print("{}\n", .{@intFromEnum(c)});
}
```

## Functions

### Basic Functions

```zig
pub fn greet(name: []const u8) void {
    std.debug.print("Hello, {s}!\n", .{name});
}
```

### Error Unions

```zig
const FileError = error{
    FileNotFound,
    PermissionDenied,
};

pub fn readFile(path: []const u8) ![]const u8 {
    // implementation
    return error.FileNotFound;
}
```

## Optionals

```zig
pub fn findUser(id: u32) ?User {
    if (id == 0) return null;
    return User{ .id = id };
}

pub fn main() void {
    const user = findUser(1) orelse return;
    std.debug.print("Found user {}\n", .{user.id});
}
```

## Comptime

```zig
pub fn factorial(n: comptime_int) comptime_int {
    var result: comptime_int = 1;
    var i: comptime_int = 1;
    while (i <= n) : (i += 1) {
        result *= i;
    }
    return result;
}

pub fn main() void {
    const x = factorial(5); // computed at compile time
    std.debug.print("{}\n", .{x});
}
```
