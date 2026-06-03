# Automation Examples

ตัวอย่างการใช้ RMUX สำหรับ automation

## CLI Automation

### Run Command and Capture Output

```bash
# Create detached session
rmux new-session -d -s ci

# Send command
rmux send-keys -t ci "echo 'test result: ok'" Enter

# Wait for completion
rmux wait-for -S ci-done

# Capture output
rmux capture-pane -p -t ci

# Cleanup
rmux kill-session -t ci
```

### Multi-Step Workflow

```bash
# Setup session
rmux new-session -d -s build

# Navigate to project
rmux send-keys -t build "cd /path/to/project" Enter

# Run tests
rmux send-keys -t build "npm test" Enter

# Wait for specific output
rmux wait-for -S tests-done

# Capture results
rmux capture-pane -p -t build > test-results.txt
```

## Rust SDK Automation

### Basic Command Execution

```rust
use rmux::Rmux;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let rmux = Rmux::builder().connect_or_start().await?;
    let session = rmux.ensure_session(
        rmux::EnsureSession::try_named("automation")?
            .create_or_reuse()
            .detached(true),
    ).await?;
    
    let pane = session.pane(0, 0);
    pane.send_text("echo 'Hello from RMUX'\n").await?;
    pane.wait_for_text("Hello from RMUX").await?;
    
    let snapshot = pane.snapshot().await?;
    println!("Output: {}", snapshot);
    
    Ok(())
}
```

### CI/CD Pipeline

```rust
async fn run_ci_pipeline(rmux: &Rmux) -> Result<(), Box<dyn std::error::Error>> {
    let session = rmux.ensure_session(
        EnsureSession::try_named("ci")?
            .create_or_reuse()
            .detached(true),
    ).await?;
    
    let pane = session.pane(0, 0);
    
    // Install dependencies
    pane.send_text("npm install\n").await?;
    pane.wait_for_text("added").await?;
    
    // Run tests
    pane.send_text("npm test\n").await?;
    pane.wait_for_text("passing").await?;
    
    // Build
    pane.send_text("npm run build\n").await?;
    pane.wait_for_text("built").await?;
    
    Ok(())
}
```

### Parallel Execution

```rust
use futures::future::join_all;

async fn run_parallel_tests(rmux: &Rmux) -> Result<(), Box<dyn std::error::Error>> {
    let tasks = vec!["test1", "test2", "test3"];
    
    let futures: Vec<_> = tasks.into_iter().map(|name| {
        let rmux = rmux.clone();
        async move {
            let session = rmux.ensure_session(
                EnsureSession::try_named(name)?
                    .create_or_reuse()
                    .detached(true),
            ).await?;
            let pane = session.pane(0, 0);
            pane.send_text(&format!("npm run {}\n", name)).await?;
            pane.wait_for_text("done").await?;
            Ok::<(), Box<dyn std::error::Error>>(())
        }
    }).collect();
    
    join_all(futures).await;
    Ok(())
}
```
