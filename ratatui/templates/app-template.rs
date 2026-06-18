// App Template - Full application structure with state management
// Run: cargo run

use ratatui::{
    crossterm::event::{self, Event, KeyCode, KeyEventKind},
    layout::{Alignment, Constraint, Layout},
    style::{Color, Modifier, Style, Stylize},
    widgets::{Block, Borders, List, ListItem, ListState, Paragraph},
    DefaultTerminal,
};

#[derive(Debug, Clone)]
enum AppState {
    Menu,
    Details,
}

struct App {
    state: AppState,
    items: Vec<String>,
    list_state: ListState,
    should_quit: bool,
}

impl App {
    fn new() -> Self {
        let items = vec![
            "Option 1".to_string(),
            "Option 2".to_string(),
            "Option 3".to_string(),
        ];

        let mut list_state = ListState::default();
        list_state.select(Some(0));

        Self {
            state: AppState::Menu,
            items,
            list_state,
            should_quit: false,
        }
    }

    fn handle_key(&mut self, key: KeyCode) {
        match self.state {
            AppState::Menu => match key {
                KeyCode::Char('q') => self.should_quit = true,
                KeyCode::Enter => self.state = AppState::Details,
                KeyCode::Down => {
                    if let Some(selected) = self.list_state.selected() {
                        if selected < self.items.len() - 1 {
                            self.list_state.select(Some(selected + 1));
                        }
                    }
                }
                KeyCode::Up => {
                    if let Some(selected) = self.list_state.selected() {
                        if selected > 0 {
                            self.list_state.select(Some(selected - 1));
                        }
                    }
                }
                _ => {}
            },
            AppState::Details => match key {
                KeyCode::Char('q') | KeyCode::Esc => self.state = AppState::Menu,
                _ => {}
            },
        }
    }

    fn render(&self, frame: &mut ratatui::Frame) {
        let chunks = Layout::vertical([
            Constraint::Length(3),
            Constraint::Min(0),
            Constraint::Length(1),
        ])
        .split(frame.area());

        // Title
        let title = match self.state {
            AppState::Menu => "Menu",
            AppState::Details => "Details",
        };
        let title_paragraph = Paragraph::new(title)
            .alignment(Alignment::Center)
            .style(Style::default().add_modifier(Modifier::BOLD));
        frame.render_widget(title_paragraph, chunks[0]);

        // Content
        match self.state {
            AppState::Menu => {
                let list_items: Vec<ListItem> = self
                    .items
                    .iter()
                    .map(|item| ListItem::new(item.clone()))
                    .collect();

                let list = List::new(list_items)
                    .block(Block::bordered().title("Options"))
                    .highlight_style(
                        Style::default()
                            .bg(Color::LightBlue)
                            .fg(Color::Black)
                            .add_modifier(Modifier::BOLD),
                    );

                frame.render_stateful_widget(list, chunks[1], &mut self.list_state.clone());
            }
            AppState::Details => {
                if let Some(selected) = self.list_state.selected() {
                    let text = format!("Selected: {}", self.items[selected]);
                    let paragraph = Paragraph::new(text)
                        .block(Block::bordered().title("Details"));
                    frame.render_widget(paragraph, chunks[1]);
                }
            }
        }

        // Footer
        let footer = match self.state {
            AppState::Menu => "↑/↓: Navigate | Enter: Select | q: Quit",
            AppState::Details => "Esc: Back | q: Quit",
        };
        let footer_paragraph = Paragraph::new(footer).alignment(Alignment::Center);
        frame.render_widget(footer_paragraph, chunks[2]);
    }
}

fn main() -> std::io::Result<()> {
    let mut app = App::new();

    ratatui::run(|mut terminal: DefaultTerminal| {
        loop {
            terminal.draw(|frame| {
                app.render(frame);
            })?;

            if app.should_quit {
                return Ok(());
            }

            if let Event::Key(key) = event::read()? {
                if key.kind == KeyEventKind::Press {
                    app.handle_key(key.code);
                }
            }
        }
    })
}
