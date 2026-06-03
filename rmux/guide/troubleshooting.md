# Troubleshooting

แก้ไขปัญหาที่พบบ่อยเมื่อใช้ RMUX

## Common Issues

### Session Not Found

**Problem**: `rmux attach-session -t name` แจ้งว่า session ไม่พบ

**Solution**:
```bash
# List all sessions
rmux list-sessions

# Create new session if not exists
rmux new-session -d -s name
```

### Permission Denied

**Problem**: Cannot create socket or connect to session

**Solution**:
```bash
# Check socket permissions
ls -la /tmp/rmux-*

# Remove old socket
rm /tmp/rmux-*

# Restart RMUX server
rmux kill-server
```

### Pane Not Responding

**Problem**: Commands sent to pane don't execute

**Solution**:
```bash
# Check pane status
rmux list-panes -t session

# Send newline to flush buffer
rmux send-keys -t session:0.0 Enter

# Restart pane
rmux respawn-pane -t session:0.0
```

### Rust SDK Connection Failed

**Problem**: `Rmux::builder().connect_or_start()` fails

**Solution**:
```rust
// Check if RMUX server is running
let rmux = Rmux::builder()
    .socket_path("/tmp/rmux-default")
    .connect_or_start()
    .await?;

// Or start fresh
let rmux = Rmux::builder()
    .start_new()
    .await?;
```

## Debug Mode

Enable debug logging:

```bash
# CLI debug
RMUX_LOG=debug rmux new-session -s test

# Rust SDK debug
env_logger::init();
```

## Performance Issues

**Slow Pane Response**:
- Reduce history limit: `set-option -g history-limit 1000`
- Close unused sessions
- Check system resources

**High Memory Usage**:
- Kill old sessions: `rmux kill-session -t old`
- Limit pane count per session

## Platform-Specific

### Windows

**Path Issues**:
```powershell
# Use forward slashes in config
set-option -g default-shell "C:/Program Files/Git/bin/bash.exe"
```

**Terminal Compatibility**:
- Use Windows Terminal or ConEmu
- Avoid old Command Prompt

### macOS

**Permission Issues**:
```bash
# Fix socket permissions
chmod 700 /tmp/rmux-*
```

**Homebrew Installation**:
```bash
brew install rmux
```

## Getting Help

- Check [GitHub Issues](https://github.com/Helvesec/rmux/issues)
- Read [Official Docs](https://rmux.io/docs)
- Join community discussions
