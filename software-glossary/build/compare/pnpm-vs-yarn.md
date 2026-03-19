# pnpm vs Yarn

## เปรียบเทียบ

| หัวข้อ | pnpm | Yarn |
|--------|------|------|
| **Disk Usage** | Minimal (hard links) | Standard (copies) |
| **Speed** | Fastest | Fast |
| **Lock File** | pnpm-lock.yaml | yarn.lock |
| **Monorepo** | Built-in workspaces | Workspaces |
| **Plug-n-Play** | No | Yes (optional) |
| **Strictness** | Content-addressable | Standard |
| **Migration** | Easy from npm/yarn | Easy from npm |
| **Global Store** | Shared | Per-project |
| **Hoisting** | Strict | Flexible |
| **Best For** | Disk space, speed, strictness | Zero-install, PnP |

## เมื่อไหร่ใช้อะไร

- **pnpm**: Disk space concern, monorepos, strict dependency management
- **Yarn**: Zero-install needs, PnP preference, existing workflows
