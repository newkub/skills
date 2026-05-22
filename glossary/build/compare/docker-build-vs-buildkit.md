# Docker Build vs BuildKit

## เปรียบเทียบ

| หัวข้อ | Docker Build (Legacy) | BuildKit |
|--------|-----------------------|----------|
| **Speed** | Slower | Faster, parallel |
| **Caching** | Layer-based | Improved, granular |
| **Secrets** | Not supported | Build secrets |
| **SSH Forwarding** | No | Yes |
| **Mount Types** | Limited | Cache, tmpfs, bind |
| **Output Formats** | Image only | OCI, local, tar |
| **Concurrency** | Sequential | Parallel stages |
| **Default** | Old Docker | Docker 23+ |
| **Syntax** | Standard Dockerfile | # syntax=docker/dockerfile |
| **Best For** | Legacy setups | Modern builds |

## เมื่อไหร่ใช้อะไร

- **Docker Build (Legacy)**: Existing setups, simple images
- **BuildKit**: Modern Docker, complex builds, performance
