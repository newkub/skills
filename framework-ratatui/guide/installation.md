# Installation

## Requirements

| Requirement | Version | คำอธิบาย |
|-------------|---------|----------|
| **Rust** | 1.56+ | Rust toolchain |
| **Cargo** | Latest | Package manager |
| **Terminal** | ANSI-compatible | For rendering |

## Add to Cargo.toml

### Default (crossterm)

```toml
[dependencies]
ratatui = "0.30"
```

### Termion Backend

```toml
[dependencies]
ratatui = { version = "0.30", default-features = false, features = ["termion"] }
```

### Termwiz Backend

```toml
[dependencies]
ratatui = { version = "0.30", default-features = false, features = ["termwiz"] }
```

## Using cargo add

```bash
# Default (crossterm)
cargo add ratatui

# With termion
cargo add ratatui --no-default-features --features termion

# With termwiz
cargo add ratatui --no-default-features --features termwiz
```

## Feature Flags

| Feature | Default | คำอธิบาย |
|---------|---------|----------|
| `crossterm` | Yes | crossterm backend |
| `termion` | No | termion backend |
| `termwiz` | No | termwiz backend |
| `unicode-width` | Yes | Unicode support |
| `box-drawing` | Yes | Box drawing chars |

## Additional Dependencies

### For crossterm backend

```toml
[dependencies]
ratatui = "0.30"
crossterm = "0.28"
```

### For animations

```toml
[dependencies]
ratatui = "0.30"
crossterm = "0.28"
tokio = { version = "1", features = ["time"] }
```

## Project Setup

```rust
// src/main.rs
use ratatui::{
    backend::CrosstermBackend,
    widgets::{Block, Paragraph},
    style::Stylize,
    Terminal,
};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    ratatui::run(|terminal| {
        terminal.draw(|frame| {
            let block = Block::bordered().title("My App");
            let text = Paragraph::new("Hello, Ratatui!").centered().red();
            frame.render_widget(text, frame.area());
        })?;
        Ok(())
    })
}
```

## VS Code Setup

```json
// .vscode/tasks.json
{
  "version": "2.0.0",
  "tasks": [{
    "label": "Run Ratatui App",
    "type": "shell",
    "command": "cargo run",
    "problemMatcher": ["$rustc"]
  }]
}
```