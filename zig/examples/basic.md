# Zig Basic Examples

## Hello World

```zig
const std = @import("std");

pub fn main() void {
    std.debug.print("Hello, World!\n", .{});
}
```

## Variables and Constants

```zig
const std = @import("std");

pub fn main() void {
    const constant: i32 = 42;
    var variable: f64 = 3.14;
    
    std.debug.print("const: {}, var: {}\n", .{ constant, variable });
}
```

## Loops

```zig
const std = @import("std");

pub fn main() void {
    var i: i32 = 0;
    while (i < 10) : (i += 1) {
        std.debug.print("{}\n", .{i});
    }
    
    // For loop
    for (0..10) |j| {
        std.debug.print("{}\n", .{j});
    }
}
```

## Arrays and Slices

```zig
const std = @import("std");

pub fn main() void {
    const array = [5]i32{ 1, 2, 3, 4, 5 };
    const slice = array[1..3];
    
    for (slice) |value| {
        std.debug.print("{}\n", .{value});
    }
}
```

## Structs

```zig
const std = @import("std");

const Point = struct {
    x: f64,
    y: f64,
};

pub fn main() void {
    const p = Point{ .x = 1.0, .y = 2.0 };
    std.debug.print("Point: {}, {}\n", .{ p.x, p.y });
}
```

## Error Handling

```zig
const std = @import("std");

const DivideError = error{
    DivisionByZero,
};

fn divide(a: f64, b: f64) !f64 {
    if (b == 0) return error.DivisionByZero;
    return a / b;
}

pub fn main() !void {
    const result = try divide(10.0, 2.0);
    std.debug.print("Result: {}\n", .{result});
}
```
