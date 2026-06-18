// Hello World - Minimal Ratatui Example
// Run: cargo run

use ratatui::{
    crossterm::event::{self, Event, KeyCode},
    widgets::Paragraph,
    DefaultTerminal,
};

fn main() -> std::io::Result<()> {
    ratatui::run(|mut terminal: DefaultTerminal| {
        loop {
            terminal.draw(|frame| {
                let paragraph = Paragraph::new("Hello World! Press 'q' to quit.");
                frame.render_widget(paragraph, frame.area());
            })?;

            if let Event::Key(key) = event::read()? {
                if key.code == KeyCode::Char('q') {
                    return Ok(());
                }
            }
        }
    })
}
