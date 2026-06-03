# Key Concept

## What is Elixir?

Elixir เป็น dynamic, functional programming language ที่ designed สำหรับ building scalable และ maintainable applications บน BEAM virtual machine (Erlang VM)

## Core Features

- **Immutable Data**: ข้อมูลเปลี่ยนแปลงไม่ได้ เลือกใช้ pattern matching แทน mutation
- **Pattern Matching**: จับคู่ data structures เพื่อเลือก execution path
- **Lightweight Processes**: Concurrency model ที่ใช้ processes แทน threads
- **Fault Tolerance**: "Let it crash" philosophy พร้อม OTP supervisors
- **Metaprogramming**: Macros สำหรับสร้าง DSLs และ code generation
- **Protocols**: Polymorphism ผ่าน protocol dispatch
- **Structs**: Extended maps พร้อม default values และ compile-time checks

## Elixir vs Other Languages

| Feature | Elixir | Ruby | Python | Java | Go |
|---------|--------|------|--------|------|-----|
| Paradigm | Functional | OOP | Multi-paradigm | OOP | Concurrent |
| VM | BEAM | Ruby VM | CPython | JVM | Runtime |
| Concurrency | Processes | Threads | GIL | Threads | Goroutines |
| Fault Tolerance | Built-in OTP | Manual | Manual | Try-catch | Error handling |
| Pattern Matching | Yes | No | No | Switch | No |
| Macros | Yes | No | No | Annotations | No |
| Scalability | Excellent | Good | Moderate | Good | Excellent |

## When to Use

- Web applications (Phoenix framework)
- Distributed systems และ microservices
- Real-time applications (chat, gaming, IoT)
- Data pipelines และ stream processing
- High-concurrency servers
- Embedded systems (Nerves)
- โปรเจกต์ที่ต้องการ fault tolerance