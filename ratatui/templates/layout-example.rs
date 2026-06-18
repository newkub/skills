// Layout Example - Complex nested layouts
// Run: cargo run

use ratatui::{
    crossterm::event::{self, Event, KeyCode},
    layout::{Alignment, Constraint, Direction, Layout},
    style::{Color, Modifier, Style, Stylize},
    widgets::{Block, Borders, Paragraph},
    DefaultTerminal,
};

fn main() -> std::io::Result<()> {
    ratatui::run(|mut terminal: DefaultTerminal| {
        loop {
            terminal.draw(|frame| {
                // Vertical split: header, main, footer
                let vertical = Layout::vertical([
                    Constraint::Length(3),
                    Constraint::Min(0),
                    Constraint::Length(1),
                ])
                .split(frame.area());

                // Header
                let header = Paragraph::new("Layout Example")
                    .alignment(Alignment::Center)
                    .style(Style::default().add_modifier(Modifier::BOLD));
                frame.render_widget(header, vertical[0]);

                // Main area - horizontal split
                let horizontal = Layout::horizontal([
                    Constraint::Percentage(30),
                    Constraint::Percentage(70),
                ])
                .split(vertical[1]);

                // Left sidebar
                let sidebar = Block::bordered()
                    .title("Sidebar")
                    .borders(Borders::ALL);
                frame.render_widget(sidebar, horizontal[0]);

                // Right content - vertical split
                let content = Layout::vertical([
                    Constraint::Percentage(50),
                    Constraint::Percentage(50),
                ])
                .split(horizontal[1]);

                // Top content
                let top = Block::bordered()
                    .title("Top Content")
                    .borders(Borders::ALL);
                frame.render_widget(top, content[0]);

                // Bottom content
                let bottom = Block::bordered()
                    .title("Bottom Content")
                    .borders(Borders::ALL);
                frame.render_widget(bottom, content[1]);

                // Footer
                let footer = Paragraph::new("Press 'q' to quit")
                    .alignment(Alignment::Center);
                frame.render_widget(footer, vertical[2]);
            })?;

            if let Event::Key(key) = event::read()? {
                if key.code == KeyCode::Char('q') {
                    return Ok(());
                }
            }
        }
    })
}
