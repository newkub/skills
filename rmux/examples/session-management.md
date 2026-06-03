# Session Management Examples

ตัวอย่างการจัดการ sessions ใน RMUX

## CLI Session Management

### Create and Manage Sessions

```bash
# Create new session
rmux new-session -s myproject

# Create detached session
rmux new-session -d -s myproject

# List all sessions
rmux list-sessions

# Attach to session
rmux attach -t myproject

# Detach from session
# Press: Ctrl-b d

# Kill session
rmux kill-session -t myproject

# Kill all sessions
rmux kill-server
```

### Session Naming and Organization

```bash
# Create with descriptive name
rmux new-session -s project-name

# Rename session
rmux rename-session -t old-name new-name

# Switch between sessions
rmux switch-client -t other-session
```

## Rust SDK Session Management

### Ensure Session Pattern

```rust
use rmux::{Rmux, EnsureSession};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let rmux = Rmux::builder().connect_or_start().await?;
    
    // Create or reuse session
    let session = rmux.ensure_session(
        EnsureSession::try_named("myproject")?
            .create_or_reuse()
            .detached(true),
    ).await?;
    
    println!("Session ready: {}", session.name());
    
    Ok(())
}
```

### List and Filter Sessions

```rust
async fn list_project_sessions(rmux: &Rmux, project: &str) -> Result<Vec<String>, Box<dyn std::error::Error>> {
    let sessions = rmux.sessions().await?;
    let project_sessions: Vec<_> = sessions
        .into_iter()
        .filter(|s| s.name().starts_with(project))
        .map(|s| s.name().to_string())
        .collect();
    
    Ok(project_sessions)
}
```

### Session Cleanup

```rust
async fn cleanup_old_sessions(rmux: &Rmux, max_age_hours: i64) -> Result<(), Box<dyn std::error::Error>> {
    let sessions = rmux.sessions().await?;
    let now = chrono::Utc::now();
    
    for session in sessions {
        let created = session.created_at()?;
        let age = now.signed_duration_since(created);
        
        if age.num_hours() > max_age_hours {
            println!("Killing old session: {}", session.name());
            session.kill().await?;
        }
    }
    
    Ok(())
}
```

### Multi-Session Workflow

```rust
async fn setup_dev_environment(rmux: &Rmux) -> Result<(), Box<dyn std::error::Error>> {
    // Create main dev session
    let dev = rmux.ensure_session(
        EnsureSession::try_named("dev")?
            .create_or_reuse()
            .detached(true),
    ).await?;
    
    // Create test session
    let test = rmux.ensure_session(
        EnsureSession::try_named("test")?
            .create_or_reuse()
            .detached(true),
    ).await?;
    
    // Create build session
    let build = rmux.ensure_session(
        EnsureSession::try_named("build")?
            .create_or_reuse()
            .detached(true),
    ).await?;
    
    println!("Setup complete: dev, test, build sessions ready");
    
    Ok(())
}
```
