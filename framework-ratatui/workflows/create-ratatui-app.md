# Create Ratatui App

Workflow for creating a Ratatui TUI application.

## Steps

1. **Create new project**
   ```bash
   cargo new my-tui-app
   cd my-tui-app
   ```

2. **Add dependencies**
   ```toml
   [dependencies]
   ratatui = "0.26"
   crossterm = "0.27"
   ```

3. **Implement TUI**
   ```rust
   use ratatui::{
       backend::CrosstermBackend,
       widgets::{Block, Borders, Paragraph},
       layout::{Layout, Constraint, Direction},
       Terminal,
   };
   use std::io;

   fn main() -> Result<(), Box<dyn std::error::Error>> {
       let stdout = io::stdout();
       let backend = CrosstermBackend::new(stdout);
       let mut terminal = Terminal::new(backend)?;

       terminal.draw(|f| {
           let size = f.size();
           let block = Block::default()
               .title("Hello Ratatui")
               .borders(Borders::ALL);
           f.render_widget(block, size);
       })?;

       Ok(())
   }
   ```

4. **Run application**
   ```bash
   cargo run
   ```

## Best Practices

- Handle terminal resize events
- Clean up terminal on exit
- Use proper error handling
- Test on different terminals
