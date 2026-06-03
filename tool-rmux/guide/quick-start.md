# Quick Start

เริ่มต้นใช้งาน RMUX ภายใน 5 นาที

## Basic Usage

### Create Session

```bash
# Create new session
rmux new-session -s mysession

# Create detached session
rmux new-session -d -s mysession
```

### Attach to Session

```bash
# Attach by name
rmux attach-session -t mysession

# Attach to last session
rmux attach
```

### List Sessions

```bash
rmux list-sessions
```

### Kill Session

```bash
rmux kill-session -t mysession
```

## Pane Operations

```bash
# Split pane horizontally
rmux split-window -h

# Split pane vertically
rmux split-window -v

# Navigate panes (prefix + arrow keys)
# Default prefix: Ctrl-b
```

## Automation Example

```bash
# Create detached session
rmux new-session -d -s ci

# Send command
rmux send-keys -t ci "echo 'Hello RMUX'" Enter

# Wait for output
rmux wait-for -S ci-done

# Capture pane
rmux capture-pane -p -t ci
```

## Rust SDK Quick Start

```rust
use rmux::Rmux;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let rmux = Rmux::builder().connect_or_start().await?;
    let session = rmux.ensure_session(
        rmux::EnsureSession::try_named("mysession")?
            .create_or_reuse()
            .detached(true),
    ).await?;
    
    let pane = session.pane(0, 0);
    pane.send_text("echo 'Hello from Rust'\n").await?;
    
    Ok(())
}
```

## Next Steps

- อ่าน `guide/configuration.md` สำหรับตั้งค่า
- อ่าน `guide/best-practices.md` สำหรับ best practices
- ดู `examples/automation.md` สำหรับตัวอย่างเพิ่มเติม
