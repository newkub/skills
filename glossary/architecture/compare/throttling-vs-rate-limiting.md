# Throttling vs Rate Limiting

## เปรียบเทียบ

| หัวข้อ | Throttling | Rate Limiting |
|--------|-----------|---------------|
| **Purpose** | Control processing speed | Limit request count |
| **Granularity** | Per-client, adaptive | Fixed thresholds |
| **Response** | Slow down (backpressure) | Reject requests |
| **Client Experience** | Slower but successful | Hard errors |
| **Algorithm** | Token bucket, leaky bucket | Fixed window, sliding window |
| **Resource Protection** | Smooth load | Prevent overload |
| **HTTP Status** | 200 (slow) | 429 Too Many Requests |
| **Implementation** | Queue processing | Middleware/API Gateway |
| **Use Case** | Background jobs, processing | API protection, fairness |
| **Best For** | Internal systems, queues | Public APIs, multi-tenant |

## เมื่อไหร่ใช้อะไร

- **Throttling**: Smooth resource usage, graceful degradation, internal systems
- **Rate Limiting**: API protection, cost control, fair usage, external APIs
