# Quick Start

## 1. Create Project

```bash
cargo new my-tui-app
cd my-tui-app
cargo add ratatui
```

## 2. Basic Structure

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
            let text = Paragraph::new("Hello, Ratatui!")
                .centered()
                .bold();

            frame.render_widget(text, frame.area());
        })?;
        Ok(())
    })
}
```

## 3. Run the App

```bash
cargo run
```

## 4. Add Interactivity

```rust
use ratatui::{
    backend::CrosstermBackend,
    events::{Event, KeyCode},
    Terminal,
};

struct App {
    count: i32,
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut app = App { count: 0 };

    ratatui::run(|terminal| {
        terminal.draw(|f| {
            let text = format!("Count: {}", app.count);
            let paragraph = Paragraph::new(text);
            f.render_widget(paragraph, f.area());
        })?;

        // Handle events
        if let Event::Key(key) = events.next()? {
            match key.code {
                KeyCode::Char('+') => app.count += 1,
                KeyCode::Char('-') => app.count -= 1,
                KeyCode::Char('q') => return Ok(()),
                _ => {}
            }
        }
        Ok(())
    })
}
```

## 5. Add a List Widget

```rust
use ratatui::widgets::{Block, List, ListItem};

fn render_list(frame: &mut Frame, items: &[String]) {
    let list_items: Vec<ListItem> = items
        .iter()
        .map(|s| ListItem::new(s.as_str()))
        .collect();

    let list = List::new(list_items)
        .block(Block::bordered().title("Items"))
        .highlight_style(Style::new().italic());

    frame.render_widget(list, frame.size());
}
```

## 6. Add Layout

```rust
use ratatui::layout::{Layout, Constraint, Direction};

fn render_layout(frame: &mut Frame, state: &AppState) {
    let chunks = Layout::default()
        .direction(Direction::Vertical)
        .constraints([
            Constraint::Length(3),   // Header
            Constraint::Min(0),      // Content
            Constraint::Length(1),    // Status
        ])
        .split(frame.area());

    // Render header
    let header = Paragraph::new("My TUI App");
    frame.render_widget(header, chunks[0]);

    // Render content
    render_list(frame, &state.items, chunks[1]);

    // Render status
    let status = Paragraph::new(format!("Items: {}", state.items.len()));
    frame.render_widget(status, chunks[2]);
}
```

## 7. Event Loop

```rust
use ratatui::{
    backend::CrosstermBackend,
    events::{Event, KeyCode, poll, Duration},
};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut terminal = Terminal::new(CrosstermBackend::new(std::io::stdout()))?;
    let mut app = App::new();

    loop {
        if poll(Duration::from_millis(100))? {
            match events.next()? {
                Event::Key(KeyCode::Char('q')) => break,
                Event::Key(KeyCode::Down) => app.next(),
                Event::Key(KeyCode::Up) => app.prev(),
                _ => {}
            }
        }
        terminal.draw(|f| render(f, &app))?;
    }

    Ok(())
}
```

## Next Steps

| Topic | Description |
|-------|-------------|
| [Installation](installation.md) | Setup development environment |
| [Features](features.md) | Learn about widgets and features |
| [Best Practices](best-practices.md) | Write better TUI apps |