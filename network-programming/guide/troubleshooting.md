# Troubleshooting

## การแก้ปัญหาที่พบบ่อยใน Network Programming

### Connection Issues

### Problem: Connection Timeout

**Symptoms**:
- Request hangs
- Timeout errors
- No response

**Causes**:
1. Server down
2. Network issues
3. Firewall blocking
4. DNS resolution failure

**Solutions**:

```rust
// ✅ Good: Set timeout
use reqwest::Client;
use std::time::Duration;

async fn timeout_solution() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::builder()
        .timeout(Duration::from_secs(30))
        .build()?;
    
    // ✅ Good: Handle timeout
    match client.get(url).await {
        Ok(resp) => {
            // Use response
        }
        Err(e) => {
            eprintln!("Timeout: {}", e);
        }
    }
    
    // ✅ Good: Retry with backoff
    for i in 0..3 {
        match client.get(url).await {
            Ok(resp) => return Ok(()),
            Err(_) => tokio::time::sleep(Duration::from_secs((i + 1) as u64)).await,
        }
    }
    
    Ok(())
}
```

### Problem: Connection Refused

**Symptoms**:
- Connection refused error
- ECONNREFUSED

**Causes**:
1. Server not running
2. Wrong port
3. Firewall blocking

**Solutions**:

```bash
# Check if server is running
netstat -an | grep 8080

# Check firewall
sudo ufw status

# Test with telnet
telnet localhost 8080
```

### Performance Issues

### Problem: Slow Response Time

**Symptoms**:
- High latency
- Slow page load
- Timeout errors

**Causes**:
1. Network latency
2. Server load
3. Inefficient queries
4. Large payload

**Solutions**:

````

### Problem: High Memory Usage

**Symptoms**:
- Out of memory errors
- Slow performance
- Process crashes

**Causes**:
1. Large responses
2. Memory leaks
3. Connection leaks

**Solutions**:

````

### WebSocket Issues

### Problem: Connection Drops

**Symptoms**:
- WebSocket disconnects
- Intermittent failures
- Connection lost

**Causes**:
1. Network issues
2. Server restart
3. Timeout
4. Firewall

**Solutions**:

```javascript
// ✅ Good: Handle disconnects
ws.onclose = (event) => {
    console.log('Disconnected:', event.code);
    
    // Reconnect logic
    if (event.code !== 1000) {
        setTimeout(connect, 3000);
    }
};

// ✅ Good: Use heartbeat
setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
        ws.send('ping');
    }
}, 30000);
```

### Problem: Message Not Received

**Symptoms**:
- Messages not arriving
- One-way communication

**Causes**:
1. Server not sending
2. Client not listening
3. Buffer overflow

**Solutions**:

```javascript
// ✅ Good: Check connection state
if (ws.readyState === WebSocket.OPEN) {
    ws.send(message);
} else {
    console.error('WebSocket not connected');
}

// ✅ Good: Handle errors
ws.onerror = (error) => {
    console.error('WebSocket error:', error);
};
```

### SSL/TLS Issues

### Problem: Certificate Error

**Symptoms**:
- Certificate validation failed
- SSL handshake error
- x509: certificate signed by unknown authority

**Causes**:
1. Self-signed certificate
2. Expired certificate
3. Wrong hostname

**Solutions**:

````

### Problem: Protocol Mismatch

**Symptoms**:
- Protocol error
- Version mismatch
- Handshake failure

**Causes**:
1. Client/server version mismatch
2. Wrong protocol
3. Incompatible features

**Solutions**:

````

### DNS Issues

### Problem: DNS Resolution Failure

**Symptoms**:
- DNS lookup failed
- Unknown host
- NXDOMAIN

**Causes**:
1. DNS server down
2. Wrong DNS configuration
3. Network issues

**Solutions**:

```bash
# Check DNS configuration
cat /etc/resolv.conf

# Test DNS resolution
nslookup example.com

# Use different DNS server
nslookup example.com 8.8.8.8
```

### Debugging Tips

### 1. Enable Debug Logging

```rust
// Enable debug logging
use env_logger::Env;

fn init_logging() {
    env_logger::Builder::from_env(Env::default().default_filter_or("debug"))
        .init();
}
```

### 2. Use Network Tools

```bash
# Use curl with verbose
curl -v https://api.example.com

# Use tcpdump
tcpdump -i any port 8080

# Use Wireshark
# GUI network analyzer
```

### 3. Check Network Connectivity

```bash
# Ping test
ping api.example.com

# Traceroute
traceroute api.example.com

# Port scan
nmap -p 8080 api.example.com
```

### 4. Monitor Connections

```bash
# Check active connections
netstat -an | grep 8080

# Check socket statistics
ss -s
```

### Common Pitfalls

### 1. Not Setting Timeout

````

### 2. Not Closing Connections

````

### 3. Ignoring Errors

````

### 4. Using HTTP Instead of HTTPS

````

### 5. Not Validating Input

````

