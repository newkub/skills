# Key Concepts

RMUX เป็น terminal multiplexer ที่เขียนด้วย Rust ออกแบบมาสำหรับ automation และ agent integration

## Core Concepts

**Terminal Multiplexer**: จัดการ terminal sessions หลายๆ ตัวใน window เดียว เหมือน tmux

**Agent-First Design**: ออกแบบมาให้ code/agents เป็นผู้ควบคุม ไม่ใช่ keyboard เท่านั้น

**Persistent Sessions**: Sessions คงอยู่แม้ว่าจะ disconnect สามารถ return มาได้ทุกเมื่อ

**Snapshots**: Capture state ของ pane ได้ทุกเมื่อสำหรับ inspection และ testing

**Typed Orchestration**: Rust SDK ให้ type-safe API สำหรับ automation

## Key Differences from tmux

| Feature | tmux | RMUX |
|---------|------|------|
| Primary User | Keyboard | Code/Agents |
| SDK | Shell scripting | Rust SDK |
| Automation | Limited | First-class |
| Snapshots | Manual | Programmatic |
| Type Safety | None | Full Rust types |

## Architecture

RMUX ใช้ Rust async runtime สำหรับ performance สูง และ support:

- **CLI Interface**: Compatible กับ tmux commands
- **Rust SDK**: Full programmatic control
- **Cross-platform**: Windows, macOS, Linux
- **Session Management**: Create, attach, detach, kill
- **Pane Control**: Send text, wait for text, snapshot
