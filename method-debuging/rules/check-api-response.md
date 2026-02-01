# Debug Network

## Rationale

การ debug network ช่วยให้เข้าใจการสื่อสารระหว่าง client และ server และตรวจสอบปัญหา HTTP requests

## Good Practice

ใช้ network tools สำหรับ debugging

```bash
# Network statistics
netstat -tulpn
ss -tulpn

# Packet capture
tcpdump -i any port 3000

# HTTP debugging
curl -v http://localhost:3000
http GET http://localhost:3000
```

## Usage

### Network Monitoring
- `netstat` - Network statistics
- `ss` - Socket statistics
- `tcpdump` - Packet capture

### HTTP Debugging
- `curl` - HTTP client with verbose output
- `httpie` - User-friendly HTTP client

## References

- [curl Documentation](https://curl.se/docs/)
- [httpie Documentation](https://httpie.io/docs)
