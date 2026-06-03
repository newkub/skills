# Configuration

## Cargo.toml Configuration

### Minimal Setup

```toml
[dependencies]
ratatui = "0.30"
```

### With Backend

```toml
[dependencies]
ratatui = "0.30"
crossterm = "0.28"
```

### Full Setup

```toml
[dependencies]
ratatui = { version = "0.30", features = ["unicode-width", "box-drawing"] }
crossterm = "0.28"
tokio = { version = "1", features = ["rt", "time"] }
```

## Application State Pattern

```rust
use ratatui::widgets::Widget;

struct AppState {
    scroll: usize,
    selected: Option<usize>,
    items: Vec<String>,
}

impl AppState {
    fn new() -> Self {
        Self {
            scroll: 0,
            selected: None,
            items: vec!["Item 1".to_string(), "Item 2".to_string()],
        }
    }

    fn handle_key(&mut self, key: KeyCode) {
        match key {
            KeyCode::Up => self.scroll = self.scroll.saturating_sub(1),
            KeyCode::Down => self.scroll += 1,
            KeyCode::Enter => self.selected = Some(self.scroll),
            _ => {}
        }
    }
}
```

## Layout Configuration

```rust
use ratatui::layout::{Layout, Constraint, Direction, Alignment};

let layout = Layout::default()
    .direction(Direction::Vertical)
    .constraints([
        Constraint::Length(3),        // Header
        Constraint::Min(10),          // Main content
        Constraint::Length(1),        // Footer
    ])
    .split(frame.area());

let header_layout = Layout::default()
    .direction(Direction::Horizontal)
    .constraints([
        Constraint::Percentage(50),
        Constraint::Percentage(50),
    ])
    .alignment(Alignment::Center);
```

## Style Configuration

```rust
use ratatui::style::{Style, Color, Modifier};

// Default styles
let default_style = Style::default()
    .fg(Color::White)
    .bg(Color::Black);

// Custom theme
let theme = Theme {
    primary: Color::Cyan,
    secondary: Color::Magenta,
    background: Color::Black,
    text: Color::White,
};
```

## Terminal Configuration

```rust
use ratatui::{backend::CrosstermBackend, Terminal};

let backend = CrosstermBackend::new(std::io::stderr());
let terminal = Terminal::new(backend)?;

terminal.clear()?;
terminal.hide_cursor()?;

// Enable raw mode for more control
enable_raw_mode()?;
```

## State Management

| Pattern | Use Case |
|---------|----------|
| **Simple struct** | Single app state |
| **Arc<Mutex<>>** | Shared state |
| **App with substates** | Complex apps |
| **Reducer pattern** | Predictable updates |

## Environment Variables

```bash
# For debugging
RATATUI_LOG=debug

# Terminal size hints
TERM=dumb
COLUMNS=80
LINES=24
```