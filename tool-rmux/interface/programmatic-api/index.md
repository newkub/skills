# Programmatic API

สรุป Rust SDK API สำหรับ RMUX automation

## Core Types

| Type | Description |
|------|-------------|
| `Rmux` | Main client for RMUX connection |
| `Session` | Handle to a RMUX session |
| `Pane` | Handle to a pane within a session |
| `Window` | Handle to a window within a session |
| `EnsureSession` | Builder for session creation/reuse |

## Connection

```rust
use rmux::Rmux;

// Connect or start RMUX server
let rmux = Rmux::builder().connect_or_start().await?;

// Connect to specific socket
let rmux = Rmux::builder()
    .socket_path("/tmp/rmux-default")
    .connect_or_start()
    .await?;

// Start new server
let rmux = Rmux::builder().start_new().await?;
```

## Session Management

```rust
// Ensure session exists
let session = rmux.ensure_session(
    EnsureSession::try_named("mysession")?
        .create_or_reuse()
        .detached(true),
).await?;

// Get existing session
let session = rmux.session("mysession").await?;

// List sessions
let sessions = rmux.sessions().await?;
```

## Pane Operations

```rust
// Get pane
let pane = session.pane(0, 0);

// Send text
pane.send_text("echo 'hello'\n").await?;

// Wait for text
pane.wait_for_text("hello").await?;

// Snapshot pane
let snapshot = pane.snapshot().await?;

// Get dimensions
let (rows, cols) = pane.dimensions().await?;
```

## Synchronization

```rust
// Wait for custom signal
rmux.wait_for("my-signal").await?;

// Send signal
rmux.signal("my-signal").await?;

// Wait with timeout
use tokio::time::{timeout, Duration};
timeout(Duration::from_secs(5), pane.wait_for_text("done")).await?;
```

## Error Handling

```rust
use rmux::Error;

match rmux.connect_or_start().await {
    Ok(rmux) => println!("Connected"),
    Err(Error::ConnectionFailed(e)) => eprintln!("Connection failed: {}", e),
    Err(Error::SessionNotFound) => eprintln!("Session not found"),
    Err(e) => eprintln!("Error: {}", e),
}
```
