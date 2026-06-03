# Features

Features ทั้งหมดของ mise

## Core Features

| Feature | Description |
|---------|-------------|
| **Tool Management** | ติดตั้งและจัดการ versions ของ tools |
| **Auto-switch** | รู้จัก `.mise.toml` และ switch อัตโนมัติ |
| **Config-based** | ใช้ config file แทน environment variables |
| **Plugin System** | รองรับหลาย tools ผ่าน plugins |
| **shims** | สร้าง binaries สำหรับ version switching |

## Supported Tools

| Tool | Description |
|------|-------------|
| **node** | Node.js version management |
| **python** | Python version management |
| **ruby** | Ruby version management |
| **go** | Go version management |
| **rust** | Rust version management |
| **deno** | Deno version management |
| **npm** | npm package runner |
| **pip** | Python package manager |

## Commands

| Command | Description |
|---------|-------------|
| `mise use <tool>@<version>` | ใช้ version เฉพาะใน project |
| `mise install <tool>@<version>` | ติดตั้ง tool version |
| `mise list` | แสดงรายการ installed tools |
| `mise plugins` | แสดงรายการ available plugins |
| `mise current` | แสดง current tool versions |
| `mise exec -- <command>` | รัน command ด้วย mise environment |
