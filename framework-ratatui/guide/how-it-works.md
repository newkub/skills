# How It Works

## Architecture Flow

```
┌──────────────────────────────────────────────────────────────────┐
│                      Ratatui Architecture                         │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  1. User Input (Terminal)                                        │
│  ┌─────────────────────────────────────┐                          │
│  │  Keyboard / Mouse Events            │                          │
│  │  (crossterm / termion / termwiz)    │                          │
│  └────────────────┬────────────────────┘                         │
│                   │                                               │
│                   ▼                                               │
│  2. Event Loop                                                   │
│  ┌─────────────────────────────────────┐                          │
│  │  ┌─────────┐  ┌─────────┐          │                          │
│  │  │  poll   │→ │ process │          │                          │
│  │  └─────────┘  └─────────┘          │                          │
│  │       │                               │                          │
│  │       ▼                               │                          │
│  │  ┌─────────────────────────────────┐ │                          │
│  │  │  App State Update               │ │                          │
│  │  └─────────────────────────────────┘ │                          │
│  └────────────────┬────────────────────┘                         │
│                   │                                               │
│                   ▼                                               │
│  3. Render Phase                                                 │
│  ┌─────────────────────────────────────┐                          │
│  │  terminal.draw(|f| {                 │                          │
│  │    // Clear & redraw all widgets   │                          │
│  │  })                                 │                          │
│  │       │                               │                          │
│  │       ▼                               │                          │
│  │  ┌─────────────────────────────────┐ │                          │
│  │  │  Buffer::with_rows()            │ │                          │
│  │  │  Render to terminal             │ │                          │
│  │  └─────────────────────────────────┘ │                          │
│  └─────────────────────────────────────┘                          │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

## Main Loop Pattern

```rust
use ratatui::{Terminal, backend::CrosstermBackend};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    ratatui::run(|terminal| {
        terminal.draw(|f| {
            // Your UI code here
        })?;
        Ok(())
    })
}
```

## Rendering Pipeline

```
┌─────────────────────────────────────────────────────────────────┐
│                    Rendering Pipeline                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  Widget Definition                                               │
│       │                                                           │
│       ▼                                                           │
│  ┌─────────────────┐                                             │
│  │ Widget::render  │  ──► Calculate positions                    │
│  │ (self, area,    │                                             │
│  │  buf)          │                                             │
│  └────────┬────────┘                                             │
│           │                                                       │
│           ▼                                                       │
│  ┌─────────────────┐                                             │
│  │ Buffer mutation │  ──► Write to cells                         │
│  │                 │                                             │
│  └────────┬────────┘                                             │
│           │                                                       │
│           ▼                                                       │
│  ┌─────────────────┐                                             │
│  │ Terminal.draw() │  ──► Flush to terminal                      │
│  └────────┬────────┘                                             │
│           │                                                       │
│           ▼                                                       │
│  ┌─────────────────┐                                             │
│  │    VT100 /      │                                             │
│  │    ANSI escape  │                                             │
│  └─────────────────┘                                             │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

## Immediate Mode Rendering

| Aspect | คำอธิบาย |
|--------|----------|
| **Redraw every frame** | No state tracking needed |
| **Full re-render** | Simpler code, consistent UI |
| **Performance** | Only changed cells are written |
| **State management** | User manages app state separately |

## Event Handling

```rust
use ratatui::{backend::CrosstermBackend, events::{Event, KeyCode}};

loop {
    match events.next()? {
        Event::Key(key) => match key.code {
            KeyCode::Char('q') => break,
            KeyCode::Down => state.scroll_down(),
            KeyCode::Up => state.scroll_up(),
            _ => {}
        },
        Event::Resize(w, h) => state.resize(w, h),
        _ => {}
    }
    terminal.draw(|f| render(f, &state))?;
}
```