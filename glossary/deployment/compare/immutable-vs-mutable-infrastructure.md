# Immutable Infrastructure vs Mutable Infrastructure

## เปรียบเทียบ

| หัวข้อ | Immutable Infrastructure | Mutable Infrastructure |
|--------|-------------------------|----------------------|
| **Changes** | Replace entire instance | Modify in place |
| **Configuration Drift** | Impossible | Common problem |
| **Rollback** | Deploy previous version | Undo changes manually |
| **Server Identity** | Cattle (replaceable) | Pets (maintain) |
| **Deployment** | New instances, switch traffic | Update existing |
| **Debugging** | Reproducible | Environment-specific |
| **Speed** | Slower (provision new) | Faster (patch existing) |
| **Consistency** | Guaranteed | Requires discipline |
| **Tooling** | Containers, Packer, AMIs | Ansible, Chef, Puppet |
| **Best For** | Cloud-native, containers | Legacy, physical servers |

## เมื่อไหร่ใช้อะไร

- **Immutable**: Cloud, containers, microservices, reproducible environments
- **Mutable**: Legacy systems, stateful services, gradual migration
