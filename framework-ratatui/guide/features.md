# Features

## Core Features

| Feature | คำอธิบาย |
|---------|----------|
| **Immediate Mode** | Simple rendering model |
| **Zero Dependencies** | No runtime overhead |
| **Cross-Platform** | Windows, macOS, Linux |
| **Backend Agnostic** | crossterm, termion, termwiz |
| **Rich Widgets** | Comprehensive widget library |

## Built-in Widgets

### Display Widgets

| Widget | คำอธิบาย |
|--------|----------|
| **Paragraph** | Multi-line text with styling |
| **Gauge** | Progress bar indicator |
| **Sparkline** | Mini line chart |
| **BarChart** | Bar chart visualization |
| **Calendar** | Monthly calendar view |

### List Widgets

| Widget | คำอธิบาย |
|--------|----------|
| **List** | Scrollable item list |
| **Table** | Tabular data display |
| **Tree** | Hierarchical structure |
| **Tabs** | Tabbed interface |

### Input Widgets

| Widget | คำอธิบาย |
|--------|----------|
| **Checkbox** | Toggle selection |
| **Radio** | Single selection |
| **Scrollbar** | Scrollable area indicator |

### Container Widgets

| Widget | คำอธิบาย |
|--------|----------|
| **Block** | Border and padding |
| **Clear** | Clear area |
| **Pad** | Padding wrapper |

## Layout Features

| Feature | Description |
|---------|-------------|
| **Constraint-based** | Percentage, fixed, min/max |
| **Direction** | Vertical, horizontal |
| **Alignment** | Left, center, right, bottom |
| **Margin** | Outer spacing |

## Style Features

| Feature | คำอธิบาย |
|---------|----------|
| **256 Colors** | Full color palette |
| **Modifiers** | Bold, italic, underline |
| **Foreground/Background** | Text and background colors |
| **Custom Symbols** | Box drawing characters |

## Backend Features

| Backend | Features |
|---------|----------|
| **crossterm** | Full event support, mouse, colors |
| **termion** | Lightweight, minimal deps |
| **termwiz** | Advanced rendering, sixel |

## Special Features

### Animation Support

```rust
use std::time::{Duration, Instant};

let start = Instant::now();
loop {
    let elapsed = start.elapsed();
    let progress = (elapsed.as_secs_f32() % 1.0);
    // Update widget with animation
}
```

### Scrollable Areas

```rust
List::new(items)
    .start_corner(Corner::TopLeft)
    .scroll_padding(1)
    .style(Style::default().cyan())
```

### Custom Rendering

```rust
impl Widget for CustomWidget {
    fn render(self, area: Rect, buf: &mut Buffer) {
        // Custom rendering logic
    }
}
```