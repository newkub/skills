// List Example - Scrollable list with selection
// Run: cargo run

use ratatui::{
    crossterm::event::{self, Event, KeyCode, KeyEventKind},
    layout::{Alignment, Constraint, Layout, Rect},
    style::{Color, Modifier, Style, Stylize},
    widgets::{Block, Borders, List, ListItem, ListState},
    DefaultTerminal,
};

fn main() -> std::io::Result<()> {
    let items = vec![
        "Item 1", "Item 2", "Item 3", "Item 4", "Item 5",
        "Item 6", "Item 7", "Item 8", "Item 9", "Item 10",
    ];

    let mut list_state = ListState::default();
    list_state.select(Some(0));

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
                let title = Paragraph::new("List Example")
                    .alignment(Alignment::Center)
                    .style(Style::default().add_modifier(Modifier::BOLD));
                frame.render_widget(title, chunks[0]);

                // List
                let list_items: Vec<ListItem> = items
                    .iter()
                    .map(|item| ListItem::new(*item))
                    .collect();

                let list = List::new(list_items)
                    .block(Block::bordered().title("Items"))
                    .highlight_style(
                        Style::default()
                            .bg(Color::LightBlue)
                            .fg(Color::Black)
                            .add_modifier(Modifier::BOLD),
                    );

                frame.render_stateful_widget(list, chunks[1], &mut list_state);

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
                            if let Some(selected) = list_state.selected() {
                                if selected < items.len() - 1 {
                                    list_state.select(Some(selected + 1));
                                }
                            }
                        }
                        KeyCode::Up => {
                            if let Some(selected) = list_state.selected() {
                                if selected > 0 {
                                    list_state.select(Some(selected - 1));
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
