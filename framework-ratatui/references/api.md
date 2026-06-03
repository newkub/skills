# API Reference

## Core Functions

### ratatui::run

```rust
pub fn run<F>(run_fn: F) -> Result<(), Box<dyn Error>>
where
    F: FnOnce(&mut Terminal<impl Backend>) -> Result<(), Box<dyn Error>>;
```

Main entry point for Ratatui applications.

## Widgets

### Display Widgets

| Widget | Description |
|--------|-------------|
| `Paragraph` | Multi-line text |
| `Gauge` | Progress indicator |
| `Sparkline` | Mini line chart |
| `BarChart` | Bar chart |
| `Calendar` | Calendar view |

### List Widgets

| Widget | Description |
|--------|-------------|
| `List` | Scrollable list |
| `Table` | Tabular data |
| `Tree` | Hierarchical view |
| `Tabs` | Tab container |

### Container Widgets

| Widget | Description |
|--------|-------------|
| `Block` | Borders and padding |
| `Clear` | Clear area |
| `Pad` | Padding wrapper |

## Layout

### Layout Struct

```rust
pub struct Layout {
    direction: Direction,
    constraints: Vec<Constraint>,
    margin: Margin,
}
```

### Constraint Types

| Type | Description |
|------|-------------|
| `Length(u16)` | Fixed size in rows/cols |
| `Percentage(u16)` | Percentage of available space |
| `Ratio(u16, u16)` | Ratio-based sizing |
| `Min(u16)` | Minimum size |
| `Max(u16)` | Maximum size |

### Direction Enum

```rust
pub enum Direction {
    Horizontal,
    Vertical,
}
```

## Style

### Stylize Trait

```rust
use ratatui::style::Stylize;

let styled = "text".red().bold().on_blue();
```

### Color Types

```rust
pub enum Color {
    Black,
    Red,
    Green,
    Yellow,
    Blue,
    Magenta,
    Cyan,
    White,
    Rgb(u8, u8, u8),
    Indexed(u8),
}
```

### Modifier Types

| Modifier | Effect |
|----------|--------|
| `Bold` | Bold text |
| `Italic` | Italic text |
| `Underline` | Underlined text |
| `CrossedOut` | Strikethrough |
| `Dim` | Dim text |
| `Hidden` | Hidden text |
| `Reverse` | Reverse colors |

## Backend

### Crossterm Backend

```rust
use ratatui::backend::CrosstermBackend;
use std::io::stdout;

let backend = CrosstermBackend::new(stdout());
let mut terminal = Terminal::new(backend)?;
```

### Termion Backend

```rust
use ratatui::backend::TermionBackend;
use std::io::stdout;

let backend = TermionBackend::new(stdout());
let mut terminal = Terminal::new(backend)?;
```

## Frame

### Frame Methods

```rust
impl Frame {
    pub fn render_widget<W>(&mut self, widget: W, area: Rect)
    where
        W: Widget;

    pub fn area(&self) -> Rect;

    pub fn size(&self) -> Rect;
}
```

## Events

### Event Types

```rust
pub enum Event {
    Key(KeyEvent),
    Mouse(MouseEvent),
    Resize(u16, u16),
}
```

### KeyCode

```rust
pub enum KeyCode {
    Char(char),
    Left,
    Right,
    Up,
    Down,
    Enter,
    Escape,
    Backspace,
    Home,
    End,
}
```