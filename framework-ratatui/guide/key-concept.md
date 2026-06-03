# Key Concepts

## Core Traits

### Widget Trait

```rust
use ratatui::widgets::Widget;

pub trait Widget {
    fn render(self, area: Rect, buf: &mut Buffer);
    fn render_ref(&self, area: Rect, buf: &mut Buffer);
}
```

### StatefulWidget Trait

```rust
pub trait StatefulWidget {
    type State;
    fn render(self, area: Rect, buf: &mut Buffer, state: &mut Self::State);
}
```

## Layout System

### Constraint-based Layout

```rust
use ratatui::layout::{Layout, Direction, Constraint};

Layout::default()
    .direction(Direction::Vertical)
    .constraints([
        Constraint::Length(3),
        Constraint::Min(10),
        Constraint::Percentage(20),
    ])
```

## Style System

### Text Styling

```rust
use ratatui::style::{Color, Stylize};

let styled_text = "Hello"
    .red()
    .bold()
    .on_blue();
```

## Backends

| Backend | Feature | Description |
|---------|---------|-------------|
| **crossterm** | Default | Cross-platform terminal operations |
| **termion** | termion | Lightweight alternative |
| **termwiz** | termwiz | Feature-rich alternative |

## Component Hierarchy

```
┌─────────────────────────────────────────────────────────────────┐
│                    Ratatui Component Hierarchy                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   Application                                                    │
│       │                                                           │
│       ▼                                                           │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │                    Terminal                             │   │
│   │                                                          │   │
│   │   Layout                                                  │   │
│   │   ├── Constraint::Percentage(20)                          │   │
│   │   ├── Constraint::Length(3)                              │   │
│   │   └── Constraint::Min(10)                                │   │
│   │       │                                                   │   │
│   │       ▼                                                   │   │
│   │   ┌─────────────────────────────────────────────────┐   │   │
│   │   │                 Frame                           │   │   │
│   │   │                                                  │   │   │
│   │   │   Block::bordered()                              │   │   │
│   │   │       │                                           │   │   │
│   │   │       ├── Paragraph                              │   │   │
│   │   │       ├── List                                   │   │   │
│   │   │       ├── Table                                  │   │   │
│   │   │       └── Chart                                  │   │   │
│   │   │                                                  │   │   │
│   │   └─────────────────────────────────────────────────┘   │   │
│   │                                                          │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

## Key Types

| Type | Module | คำอธิบาย |
|------|--------|----------|
| `Frame` | ratatui | Drawing surface |
| `Buffer` | ratatui | Character buffer |
| `Rect` | layout | Area in terminal |
| `Color` | style | Color values |
| `Style` | style | Text styling |