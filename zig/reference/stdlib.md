# Zig Standard Library Reference

## Common Modules

### std.debug

```zig
const std = @import("std");

pub fn main() void {
    std.debug.print("Debug output: {}\n", .{42});
}
```

### std.fs

```zig
const std = @import("std");

pub fn main() !void {
    const file = try std.fs.cwd().openFile("test.txt", .{});
    defer file.close();
    
    const content = try file.readToEndAlloc(std.heap.page_allocator, 1024);
    defer std.heap.page_allocator.free(content);
}
```

### std.mem

```zig
const std = @import("std");

pub fn main() void {
    const a = [_]u8{ 1, 2, 3, 4, 5 };
    const slice = a[1..3]; // [2, 3]
}
```

### std.heap

```zig
const std = @import("std");

pub fn main() !void {
    var arena = std.heap.ArenaAllocator.init(std.heap.page_allocator);
    defer arena.deinit();
    
    const allocator = arena.allocator();
    const data = try allocator.alloc(u8, 100);
    defer allocator.free(data);
}
```

## Useful Functions

### @import

```zig
const std = @import("std");
```

### @sizeof

```zig
const size = @sizeof(i32); // 4
```

### @alignOf

```zig
const alignment = @alignOf(i32);
```

### @typeInfo

```zig
const type_info = @typeInfo(i32);
```
