# Snapshots Examples

ตัวอย่างการใช้ snapshots สำหรับ inspection และ testing

## CLI Snapshots

### Capture Pane Content

```bash
# Capture pane to stdout
rmux capture-pane -p -t session:0.0

# Capture to file
rmux capture-pane -p -t session:0.0 > output.txt

# Capture with line limit
rmux capture-pane -p -S -100 -E -1 -t session:0.0
```

### Save and Restore

```bash
# Save session layout
rmux list-windows -t session > layout.txt

# Use snapshot for verification
rmux capture-pane -p -t session | grep "expected-text"
```

## Rust SDK Snapshots

### Basic Snapshot

```rust
use rmux::Rmux;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let rmux = Rmux::builder().connect_or_start().await?;
    let session = rmux.session("mysession").await?;
    let pane = session.pane(0, 0);
    
    // Take snapshot
    let snapshot = pane.snapshot().await?;
    println!("Pane content:\n{}", snapshot);
    
    Ok(())
}
```

### Wait and Snapshot Pattern

```rust
async fn run_and_capture(rmux: &Rmux) -> Result<String, Box<dyn std::error::Error>> {
    let session = rmux.ensure_session(
        EnsureSession::try_named("test")?
            .create_or_reuse()
            .detached(true),
    ).await?;
    
    let pane = session.pane(0, 0);
    
    // Run command
    pane.send_text("ls -la\n").await?;
    
    // Wait for output
    pane.wait_for_text("total").await?;
    
    // Capture result
    let snapshot = pane.snapshot().await?;
    
    Ok(snapshot)
}
```

### Assertion Testing

```rust
async fn test_command_output(rmux: &Rmux) -> Result<bool, Box<dyn std::error::Error>> {
    let session = rmux.ensure_session(
        EnsureSession::try_named("test")?
            .create_or_reuse()
            .detached(true),
    ).await?;
    
    let pane = session.pane(0, 0);
    pane.send_text("echo 'success'\n").await?;
    pane.wait_for_text("success").await?;
    
    let snapshot = pane.snapshot().await?;
    
    // Assert expected content
    Ok(snapshot.contains("success"))
}
```

### Snapshot with Filtering

```rust
async fn capture_errors_only(rmux: &Rmux) -> Result<Vec<String>, Box<dyn std::error::Error>> {
    let pane = rmux.session("build").await?.pane(0, 0);
    let snapshot = pane.snapshot().await?;
    
    // Filter for error lines
    let errors: Vec<_> = snapshot
        .lines()
        .filter(|line| line.contains("error") || line.contains("Error"))
        .map(|s| s.to_string())
        .collect();
    
    Ok(errors)
}
```

### Continuous Monitoring

```rust
use tokio::time::{interval, Duration};

async fn monitor_pane(rmux: &Rmux) -> Result<(), Box<dyn std::error::Error>> {
    let pane = rmux.session("monitor").await?.pane(0, 0);
    let mut ticker = interval(Duration::from_secs(5));
    
    loop {
        ticker.tick().await;
        let snapshot = pane.snapshot().await?;
        
        if snapshot.contains("ALERT") {
            println!("Alert detected in pane!");
            break;
        }
    }
    
    Ok(())
}
```
