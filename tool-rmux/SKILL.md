---
title: RMUX
description: Terminal multiplexer สำหรับ automation ที่เขียนด้วย Rust เข้ากันได้กับ tmux และมี Rust SDK สำหรับ programmatic control
auto_execution_mode: 3
---

## When to use

ใช้ skill นี้เมื่อต้องการ:
- ใช้ terminal multiplexer สำหรับ automation
- เขียน Rust code เพื่อ control tmux sessions
- Programmatic terminal management
- Session automation และ scripting

## Skills Related

- `/lang-rust` - Rust programming
- `/follow-rust` - Rust best practices

## References

### guide/

| No | File | Description |
|----|------|-------------|
| 1 | key-concept.md | แนวคิดหลักของ RMUX |
| 2 | quick-start.md | เริ่มต้นใช้งานอย่างรวดเร็ว |
| 3 | installation.md | การติดตั้ง |
| 4 | configuration.md | การตั้งค่า |
| 5 | best-practices.md | Best practices |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | cli.md | CLI commands และ usage |
| 2 | configuration.md | Configuration options |
| 3 | api.md | Rust SDK API |

## Quick Commands

```bash
# Create session
rmux new-session -s mysession

# Attach to session
rmux attach -t mysession

# List sessions
rmux ls
```