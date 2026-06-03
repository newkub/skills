# Architecture

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    Ratatui Architecture                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                    Application Layer                       │  │
│  │  ┌─────────────────────────────────────────────────────┐ │  │
│  │  │  App State ──► Event Handling ──► Widget Rendering   │ │  │
│  │  └─────────────────────────────────────────────────────┘ │  │
│  └────────────────────────┬──────────────────────────────────┘  │
│                           │                                       │
│  ┌────────────────────────▼──────────────────────────────────┐  │
│  │                    Ratatui Core                            │  │
│  │                                                           │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │  │
│  │  │   Widgets   │  │   Layout    │  │    Style    │       │  │
│  │  │  Paragraph  │  │ Constraint  │  │   Colors    │       │  │
│  │  │  List      │  │ Direction   │  │  Modifiers  │       │  │
│  │  │  Table     │  │ Alignment   │  │   Stylize   │       │  │
│  │  │  Chart     │  │ Split       │  │             │       │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘       │  │
│  │                                                           │  │
│  └────────────────────────┬──────────────────────────────────┘  │
│                           │                                       │
│  ┌────────────────────────▼──────────────────────────────────┐  │
│  │                     Backend Layer                          │  │
│  │                                                           │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │  │
│  │  │  Crossterm  │  │   Termion   │  │   Termwiz   │       │  │
│  │  │             │  │             │  │             │       │  │
│  │  │  Terminal   │  │  Terminal   │  │   Advanced  │       │  │
│  │  │  Input      │  │  Input      │  │   Rendering │       │  │
│  │  │  Colors     │  │  Colors     │  │   Sixel     │       │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘       │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

## Core Modules

### Widget System

```rust
// Widget trait hierarchy
pub trait Widget {
    fn render(self, area: Rect, buf: &mut Buffer);
    fn render_ref(&self, area: Rect, buf: &mut Buffer);
}

pub trait StatefulWidget {
    type State;
    fn render(self, area: Rect, buf: &mut Buffer, state: &mut Self::State);
}

pub trait WidgetExt: Widget {
    fn styled(self, style: Style) -> Styled<Self>;
    fn block(self, block: Block) -> BlockedWidget<Self>;
}
```

### Layout System

```rust
pub enum Constraint {
    Length(u16),        // Fixed number of rows/cols
    Percentage(u16),     // Percentage of available space
    Ratio(u16, u16),    // Ratio-based sizing
    Min(u16),           // Minimum size
    Max(u16),           // Maximum size
}

pub enum Direction {
    Horizontal,
    Vertical,
}
```

### Style System

```rust
pub struct Style {
    fg: Option<Color>,
    bg: Option<Color>,
    add_modifier: Modifier,
    sub_modifier: Modifier,
}

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

## Rendering Pipeline

```
┌─────────────────────────────────────────────────────────────────┐
│                    Rendering Pipeline Detail                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  Input                                                           │
│  ┌─────────┐                                                     │
│  │ App     │ ──► State                                           │
│  │ State   │                                                     │
│  └────┬────┘                                                     │
│       │                                                          │
│       ▼                                                          │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                    Layout Calculation                       │ │
│  │                                                             │ │
│  │  Layout::default()                                          │ │
│  │      .direction(Direction::Vertical)                       │ │
│  │      .constraints([...])                                   │ │
│  │      .split(area)                                          │ │
│  │                                                             │ │
│  └──────────────────────────┬──────────────────────────────────┘ │
│                             │                                    │
│                             ▼                                    │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                    Widget Rendering                         │ │
│  │                                                             │ │
│  │  for widget in widgets {                                   │ │
│  │      widget.render(area, buffer)                           │ │
│  │  }                                                         │ │
│  │                                                             │ │
│  └──────────────────────────┬──────────────────────────────────┘ │
│                             │                                    │
│                             ▼                                    │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                    Buffer Update                           │ │
│  │                                                             │ │
│  │  Buffer: Vec<Vec<Cell>>                                    │ │
│  │  Cell: { char, fg, bg, modifier }                          │ │
│  │                                                             │ │
│  └──────────────────────────┬──────────────────────────────────┘ │
│                             │                                    │
│                             ▼                                    │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                    Terminal Output                          │ │
│  │                                                             │ │
│  │  crossterm::execute!(                                       │ │
│  │      terminal,                                             │ │
│  │      Print(cell.render())                                  │ │
│  │  )                                                         │ │
│  │                                                             │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

## Key Traits

| Trait | Module | คำอธิบาย |
|-------|--------|----------|
| `Widget` | widgets | Base trait for all widgets |
| `StatefulWidget` | widgets | Widget with state |
| `Backend` | backend | Terminal backend trait |
| `BackendTerm` | backend | Backend terminal type |
| `Stylize` | style | Text styling extension |