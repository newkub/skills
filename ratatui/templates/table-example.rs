// Table Example - Tabular data with selection
// Run: cargo run

use ratatui::{
    crossterm::event::{self, Event, KeyCode, KeyEventKind},
    layout::{Alignment, Constraint, Layout},
    style::{Color, Modifier, Style, Stylize},
    widgets::{Block, Borders, Row, Table, TableState},
    DefaultTerminal,
};

fn main() -> std::io::Result<()> {
    let rows = vec![
        Row::new(vec!["Name", "Age", "City"]),
        Row::new(vec!["Alice", "30", "New York"]),
        Row::new(vec!["Bob", "25", "London"]),
        Row::new(vec!["Charlie", "35", "Paris"]),
        Row::new(vec!["Diana", "28", "Tokyo"]),
    ];

    let mut table_state = TableState::default();
    table_state.select(Some(0));

    ratatui::run(|mut terminal: DefaultTerminal| {
        loop {
            terminal.draw(|frame| {
                let chunks = Layout::vertical([
                    Constraint::Length(3),
                    Constraint::Min(0),
                    Constraint::Length(1),
                ])
                .split(frame.area());

                // Title
                let title = Paragraph::new("Table Example")
                    .alignment(Alignment::Center)
                    .style(Style::default().add_modifier(Modifier::BOLD));
                frame.render_widget(title, chunks[0]);

                // Table
                let widths = [
                    Constraint::Percentage(40),
                    Constraint::Percentage(20),
                    Constraint::Percentage(40),
                ];

                let table = Table::new(rows.clone(), widths)
                    .block(Block::bordered().title("Users"))
                    .highlight_style(
                        Style::default()
                            .bg(Color::LightGreen)
                            .fg(Color::Black)
                            .add_modifier(Modifier::BOLD),
                    );

                frame.render_stateful_widget(table, chunks[1], &mut table_state);

                // Footer
                let footer = Paragraph::new("↑/↓: Navigate | q: Quit")
                    .alignment(Alignment::Center);
                frame.render_widget(footer, chunks[2]);
            })?;

            if let Event::Key(key) = event::read()? {
                if key.kind == KeyEventKind::Press {
                    match key.code {
                        KeyCode::Char('q') => return Ok(()),
                        KeyCode::Down => {
                            if let Some(selected) = table_state.selected() {
                                if selected < rows.len() - 1 {
                                    table_state.select(Some(selected + 1));
                                }
                            }
                        }
                        KeyCode::Up => {
                            if let Some(selected) = table_state.selected() {
                                if selected > 0 {
                                    table_state.select(Some(selected - 1));
                                }
                            }
                        }
                        _ => {}
                    }
                }
            }
        }
    })
}
