# All Features

ฟีเจอร์ทั้งหมดของ RMUX สำหรับ terminal automation

## Core Features

**Session Management**
- Create named sessions
- Attach/detach sessions
- List all sessions
- Kill sessions
- Detached mode for background execution

**Pane Control**
- Send text to panes
- Wait for specific text output
- Capture pane snapshots
- Split panes (horizontal/vertical)
- Navigate between panes

**Window Management**
- Create windows
- Switch between windows
- Rename windows
- Close windows

**Automation**
- Wait for synchronization points
- Programmatic text injection
- Output capture and parsing
- Session state inspection

## CLI Features

**tmux Compatibility**
- 90+ commands compatible with tmux
- Same key-binding support
- Drop-in replacement for tmux

**Cross-platform**
- Native Windows support
- macOS and Linux support
- Consistent behavior across platforms

## Rust SDK Features

**Type-Safe API**
- Strongly typed session/pane handles
- Async/await support
- Error handling with Result types

**Session Builder**
- Connect to existing sessions
- Create new sessions
- Ensure session exists with policies

**Pane Operations**
- Send text with newline control
- Wait for text patterns
- Snapshot pane content
- Get pane dimensions

**Synchronization**
- Wait for custom signals
- Signal completion
- Coordinate multiple operations
