# features

## Core Features

| Feature | Description |
|---------|-------------|
| **Speed** | Warm installs 8.8x faster than pnpm, 4.9x faster than Bun |
| **Lockfiles** | Read/write pnpm-lock.yaml, package-lock.json, yarn.lock, bun.lock |
| **Global Store** | Content-addressable store, shared across projects |
| **Auto-Install** | aubr run auto-installs stale deps before running script |
| **Security** | Paranoid defaults: block exotic deps, lifecycle script jail |

## Commands

| Command | Description |
|---------|-------------|
| `aube add <pkg>` | เพิ่ม dependency |
| `aube remove <pkg>` | ลบ dependency |
| `aube install` | install เฉยๆ |
| `aube ci` | CI mode - clean frozen install |
| `aube list` | แสดง dependencies |
| `aube outdated` | เช็คว่ามี version ใหม่ไหม |
| `aube audit` | security audit |
| `aube approve-builds` | approve build scripts |

## Shortcuts

| Shortcut | Full Command |
|----------|--------------|
| `aubr test` | `aube run test` |
| `aubx cowsay` | `aube dlx cowsay` |

## Lockfile Support

```bash
# aube อ่าน+เขียน lockfiles ที่มีอยู่แล้ว
# ถ้ามี pnpm-lock.yaml ก็ใช้ต่อได้เลย
pnpm-lock.yaml  →  aube เขียนกลับที่เดิม
package-lock.json → aube เขียนกลับที่เดิม
yarn.lock        → aube เขียนกลับที่เดิม
```