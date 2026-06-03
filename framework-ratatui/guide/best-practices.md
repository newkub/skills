# Best Practices

## Error Handling

### Use Result Types

```rust
fn main() -> Result<(), Box<dyn std::error::Error>> {
    ratatui::run(|terminal| {
        terminal.draw(|frame| {
            // Handle potential errors
        })?;
        Ok(())
    })
}
```

### Graceful Shutdown

```rust
use ratatui::events::{Event, KeyCode};

fn run() -> Result<(), Box<dyn std::error::Error>> {
    let backend = CrosstermBackend::new(std::io::stdout());
    let mut terminal = Terminal::new(backend)?;

    enable_raw_mode()?;
    terminal.clear()?;

    let res = run_app(&mut terminal);

    disable_raw_mode()?;
    execute(LeaveAlternateScreen)?;
    reset terminals
    res
}
```

## State Management

### Centralized State

```rust
struct App {
    counter: u32,
    todos: Vec<Todo>,
    selected: usize,
}

impl App {
    fn new() -> Self {
        Self {
            counter: 0,
            todos: Vec::new(),
            selected: 0,
        }
    }

    fn update(&mut self, event: Event) {
        match event {
            Event::Key(KeyCode::Up) => {
                self.selected = self.selected.saturating_sub(1);
            }
            Event::Key(KeyCode::Down) => {
                self.selected = (self.selected + 1).min(self.todos.len());
            }
            _ => {}
        }
    }
}
```

## Performance Tips

### Avoid Allocations in Render

```rust
// ❌ Bad - Allocation in render
frame.render_widget(
    Paragraph::new(format!("Value: {}", self.value)),
    area,
);

// ✅ Good - Pre-allocate
let text = Text::raw(format!("Value: {}", self.value));
frame.render_widget(Paragraph::new(text), area);
```

### Use Buffers Wisely

```rust
// Reuse buffers across frames
struct App {
    render_buf: String,
}
```

## Layout Best Practices

### Responsive Layout

```rust
use ratatui::layout::{Constraint, Direction};

let horizontal = Layout::default()
    .direction(Direction::Horizontal)
    .constraints([
        Constraint::Percentage(30),  // Sidebar
        Constraint::Percentage(70),  // Main content
    ])
    .split(frame.area());
```

### Nested Layouts

```rust
let main_chunks = Layout::default()
    .direction(Direction::Vertical)
    .constraints([Constraint::Length(3), Constraint::Min(0)])
    .split(frame.area());

let content_chunks = Layout::default()
    .direction(Direction::Horizontal)
    .constraints([Constraint::Percentage(50), Constraint::Percentage(50)])
    .split(main_chunks[1]);
```

## Widget Composition

### Builder Pattern

```rust
let widget = Paragraph::new("Text")
    .style(Style::default().fg(Color::Red))
    .alignment(Alignment::Center)
    .wrap(true);

frame.render_widget(widget, area);
```

### Component Pattern

```rust
fn render_header(frame: &mut Frame, title: &str) {
    let block = Block::default()
        .borders(Borders::ALL)
        .title(title);
    frame.render_widget(block, frame.area());
}
```

## Testing

### Unit Test Widgets

```rust
#[cfg(test)]
mod tests {
    use super::*;
    use ratatui::assert_has_widget;

    #[test]
    fn test_render_paragraph() {
        let mut terminal = TestTerminal::new();
        terminal.draw(|f| {
            let paragraph = Paragraph::new("Test");
            f.render_widget(paragraph, Rect::new(0, 0, 10, 1));
        });
    }
}
```

## Keyboard Navigation

### Consistent Hotkeys

| Action | Key | Description |
|--------|-----|-------------|
| Quit | `q` | Exit application |
| Up | `↑` / `k` | Move up |
| Down | `↓` / `j` | Move down |
| Enter | `⏎` | Select/confirm |
| Escape | `Esc` | Cancel/back |