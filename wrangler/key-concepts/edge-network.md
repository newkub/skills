# Edge Network

Cloudflare's edge network คือ infrastructure ที่กระจายอยู่ทั่วโลก

## คุณสมบัติ

- **300+ Locations** - Data centers ทั่วโลก
- **Low Latency** - Response เร็วเนื่องจากใกล้ผู้ใช้
- **Automatic Scaling** - Scale อัตโนมัติ
- **DDoS Protection** - Built-in security

## Request Routing

```
User Request → Nearest Edge → Worker Execution → Response
```

1. User ส่ง request
2. Request ถูก route ไปยัง nearest edge location
3. Worker execute ใน isolated environment
4. Response ถูก return กลับไปยัง user

## Benefits

### Performance

- Latency ต่ำเนื่องจากใกล้ผู้ใช้
- Zero cold starts
- Fast execution ด้วย V8 isolates

### Reliability

- High availability ด้วย multiple locations
- Automatic failover
- Redundant infrastructure

### Security

- DDoS protection
- Web Application Firewall
- SSL/TLS termination

## Smart Placement

ใช้ placement สำหรับ optimize performance

```jsonc
{
  "placement": {
    "mode": "smart"
  }
}
```

## Use Cases

- **Global APIs** - Services ที่ต้องการ low latency
- **Content Delivery** - Serve content ใกล้ผู้ใช้
- **Real-time Apps** - Applications ที่ต้องการ fast response
- **Geo-Distributed** - Services ที่กระจายทั่วโลก
