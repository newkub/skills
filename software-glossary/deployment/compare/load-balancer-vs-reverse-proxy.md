# Load Balancer vs Reverse Proxy

## เปรียบเทียบ

| หัวข้อ | Load Balancer | Reverse Proxy |
|--------|---------------|---------------|
| **Primary Role** | Distribute traffic | Forward requests |
| **Health Checks** | Built-in | Basic or none |
| **Algorithms** | Round-robin, least connections | Simple routing |
| **SSL Termination** | Common feature | Often included |
| **Caching** | Rare | Common |
| **Compression** | Uncommon | Common |
| **Examples** | AWS ALB, NGINX Plus, HAProxy | NGINX, Apache, Varnish |
| **Use Case** | High availability | Security, caching |
| **Layer** | L4 (TCP) or L7 (HTTP) | Usually L7 |
| **Best For** | Scaling, redundancy | Edge layer, optimization |

## เมื่อไหร่ใช้อะไร

- **Load Balancer**: Multiple backends, high availability, scaling
- **Reverse Proxy**: Caching, SSL termination, security layer
