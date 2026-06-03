# Best Practices

แนวทางการใช้งาน RMUX ให้มีประสิทธิภาพและปลอดภัย

## Session Management

**Use Named Sessions**
```bash
# Good
rmux new-session -d -s project-name

# Avoid
rmux new-session -d
```

**Clean Up Old Sessions**
```bash
# Kill old sessions periodically
rmux kill-session -t old-project
```

**Use Detached Mode for Automation**
```bash
# Always use -d for background tasks
rmux new-session -d -s ci
```

## Automation

**Wait for Output, Not Time**
```rust
// Good
pane.wait_for_text("done").await?;

// Avoid
tokio::time::sleep(Duration::from_secs(5)).await;
```

**Use Snapshots for Verification**
```rust
let snapshot = pane.snapshot().await?;
assert!(snapshot.contains("expected text"));
```

**Handle Errors Gracefully**
```rust
match pane.send_text("command\n").await {
    Ok(_) => println!("Command sent"),
    Err(e) => eprintln!("Failed: {}", e),
}
```

## Configuration

**Keep Config Portable**
```conf
# Use relative paths where possible
set-option -g status-right "#(date)"
```

**Document Custom Key Bindings**
```conf
# Add comments for custom bindings
# F12: Toggle monitoring
bind-key F12 monitor-activity
```

## Performance

**Limit History Size**
```conf
# Reduce memory usage
set-option -g history-limit 5000
```

**Avoid Too Many Panes**
- ใช้ sessions แยกกันสำหรับ projects ต่างๆ
- ปิด panes ที่ไม่ใช้งาน

## Security

**Don't Store Secrets in Config**
```conf
# Avoid
set-option -g api-key "secret-key"

# Use environment variables instead
set-option -g api-key "#{?env:API_KEY,#(echo $API_KEY),}"
```

**Review Session Permissions**
- ตรวจสอบ socket permissions
- ใช้ user-level isolation

## Rust SDK

**Reuse Connections**
```rust
// Good: Single connection
let rmux = Rmux::builder().connect_or_start().await?;

// Avoid: Multiple connections
let rmux1 = Rmux::builder().connect_or_start().await?;
let rmux2 = Rmux::builder().connect_or_start().await?;
```

**Use Typed Builders**
```rust
// Good
let session = rmux.ensure_session(
    EnsureSession::try_named("name")?
        .create_or_reuse()
        .detached(true),
).await?;
```
