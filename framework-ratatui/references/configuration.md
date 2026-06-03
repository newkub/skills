# Configuration Reference

## Cargo.toml

### Dependencies

```toml
[dependencies]
ratatui = "0.30"
```

### Feature Flags

| Feature | Default | Description |
|---------|---------|-------------|
| `crossterm` | Yes | crossterm backend |
| `termion` | No | termion backend |
| `termwiz` | No | termwiz backend |
| `unicode-width` | Yes | Unicode width calculation |
| `box-drawing` | Yes | Box drawing characters |

### Full Example

```toml
[dependencies]
ratatui = { version = "0.30", default-features = false, features = ["crossterm", "unicode-width", "box-drawing"] }
crossterm = "0.28"
```

## Backend Configuration

### Crossterm

```rust
use ratatui::backend::CrosstermBackend;
use std::io::stdout;

let backend = CrosstermBackend::new(stdout());
let mut terminal = ratatui::Terminal::new(backend)?;
```

### Termion

```rust
use ratatui::backend::TermionBackend;
use std::io::stdout;

let backend = TermionBackend::new(stdout());
let mut terminal = ratatui::Terminal::new(backend)?;
```

## Application State

### Basic State

```rust
struct AppState {
    items: Vec<String>,
    selected: usize,
}

impl AppState {
    fn new() -> Self {
        Self {
            items: Vec::new(),
            selected: 0,
        }
    }
}
```

### State with Rendering Buffer

```rust
struct AppState {
    items: Vec<String>,
    selected: usize,
    scroll_offset: usize,
    render_buf: String,
}
```

## Layout Configuration

### Vertical Layout

```rust
use ratatui::layout::{Layout, Constraint, Direction};

let chunks = Layout::default()
    .direction(Direction::Vertical)
    .constraints([
        Constraint::Length(3),   // Header
        Constraint::Min(0),      // Content (flexible)
        Constraint::Length(1),   // Footer
    ])
    .split(frame.area());
```

### Horizontal Layout

```rust
let chunks = Layout::default()
    .direction(Direction::Horizontal)
    .constraints([
        Constraint::Percentage(20),  // Sidebar
        Constraint::Percentage(80),  // Main content
    ])
    .split(frame.area());
```

### Nested Layout

```rust
let main_chunks = Layout::default()
    .direction(Direction::Vertical)
    .constraints([Constraint::Length(3), Constraint::Min(0)])
    .split(area);

let content_chunks = Layout::default()
    .direction(Direction::Horizontal)
    .constraints([Constraint::Percentage(50), Constraint::Percentage(50)])
    .split(main_chunks[1]);
```

## Style Configuration

### Basic Style

```rust
use ratatui::style::{Style, Color};

let style = Style::default()
    .fg(Color::White)
    .bg(Color::Black);
```

### Using Stylize

```rust
use ratatui::style::Stylize;

let styled_text = "Hello".red().bold().on_black();
```

## Terminal Setup

### Raw Mode

```rust
use crossterm::{execute, style::ResetColor, terminal::{EnterAlternateScreen, LeaveAlternateScreen}};

fn setup() -> Result<(), Box<dyn Error>> {
    enable_raw_mode()?;
    execute!(stdout(), EnterAlternateScreen)?;
    Ok(())
}

fn cleanup() -> Result<(), Box<dyn Error>> {
    disable_raw_mode()?;
    execute!(stdout(), LeaveAlternateScreen, ResetColor)?;
    Ok(())
}
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `TERM` | Terminal type |
| `COLUMNS` | Terminal columns |
| `LINES` | Terminal lines |
| `RATATUI_LOG` | Log level (debug, info, warn, error) |

## Build Configuration

### Release Profile

```toml
[profile.release]
opt-level = 3
lto = true
codegen-units = 1
strip = true
```