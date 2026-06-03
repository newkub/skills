# lang-go

## Overview

แนวทางการพัฒนา Go ตาม best practices สำหรับ concurrent programming ที่เน้น simplicity, performance และ reliability โดยเป็น statically typed compiled language ที่ออกแบบมาสำหรับ cloud-native และ backend development

## Directory Structure

```
lang-go/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   ├── best-practices.md
│   ├── integration.md
│   └── architecture.md
├── key-concepts/
│   ├── goroutines.md
│   ├── channels.md
│   └── interfaces.md
└── references/
    └── website.md
```

## File Categories

### guide/

| File | Description |
|------|-------------|
| key-concept.md | แนวคิดหลักของ Go (Goroutines, Channels, Interfaces) |
| how-it-works.md | วิธีการทำงานของ Go runtime และ garbage collector |
| features.md | คุณสมบัติหลักของ Go (Concurrency, Error Handling, Packages) |
| installation.md | วิธีติดตั้ง Go และ tools ที่เกี่ยวข้อง |
| configuration.md | การตั้งค่า go.mod, GOPATH และ gofmt |
| quick-start.md | เริ่มต้นใช้งาน Go อย่างรวดเร็ว |
| best-practices.md | best practices สำหรับ Go (naming, idioms, patterns) |
| integration.md | การเชื่อมต่อกับ databases, APIs และ tools |
| architecture.md | สถาปัตยกรรมของ Go projects |

### key-concepts/

| File | Description |
|------|-------------|
| goroutines.md | Goroutine concurrency และ scheduling |
| channels.md | Channel communication และ synchronization |
| interfaces.md | Interface implicit implementation และ polymorphism |

### references/

| File | Description |
|------|-------------|
| website.md | ลิงก์ไปยังเว็บไซต์และเอกสารอย่างเป็นทางการ |

## When to Use

- Backend services และ API development
- Cloud-native applications (Kubernetes, Docker)
- Network programming และ microservices
- CLI tools และ command-line applications
- Data pipelines และ concurrent processing
- DevOps tools และ infrastructure software
- โปรเจกต์ที่ต้องการ high performance และ simplicity

## Core Features

- **Goroutines**: Lightweight concurrent functions
- **Channels**: Type-safe communication between goroutines
- **Interfaces**: Implicit implementation for polymorphism
- **Packages**: Code organization and modularity
- **Error Handling**: Explicit error values instead of exceptions
- **Garbage Collection**: Automatic memory management
- **Strong Standard Library**: Built-in support for I/O, networking, crypto
- **Static Typing**: Compile-time safety with dynamic feel