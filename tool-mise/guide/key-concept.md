# Key Concept

## What is mise?

mise เป็นเครื่องมือจัดการ runtime versions ที่เรียกว่า "version manager" เช่นเดียวกับ nvm, pyenv, rbenv แต่รวมทุกอย่างไว้ใน tool เดียว

## Core Concepts

| Concept | Description |
|---------|-------------|
| **Tool** | programming languages และ tools (node, python, ruby, etc.) |
| **Version** | เวอร์ชันเฉพาะของ tool |
| **Plugin** | plugin สำหรับแต่ละ tool |
| **Config** | `.mise.toml` หรือ `mise.toml` สำหรับกำหนด versions |

## Why mise?

| Feature | Description |
|---------|-------------|
| **Unified** | จัดการทุก tools ในที่เดียว |
| **Fast** | เขียนด้วย Rust เลยเร็วมาก |
| **Cross-platform** | รองรับ Linux, macOS, Windows |
| **Config-based** | ใช้ config file แทน environment variables |
| **Auto-switch** | รู้จัก `.mise.toml` และ switch version อัตโนมัติ |
