# tool-git

## Overview

แนวทางการใช้งาน Git สำหรับ version control และ collaborative development

## What is Git?

Git เป็น distributed version control system ที่ใช้ติดตามการเปลี่ยนแปลงของ code และประสานงานการทำงานระหว่าง developers

## File Structure

| Folder | Description |
|--------|-------------|
| guide/ | Guides และ tutorials สำหรับการใช้งาน |
| references/ | References สำหรับ CLI, configuration, และ website |
| knowledge/ | Knowledge เกี่ยวกับ best practices |

## Quick Start

```bash
# Initialize new repository
git init

# Clone existing repository
git clone https://github.com/user/repo.git

# Add files and commit
git add .
git commit -m "Initial commit"

# Push to remote
git push origin main
```

## Core Concepts

| Concept | Description |
|---------|-------------|
| **Repository** | ที่เก็บ project และ history ของการเปลี่ยนแปลง |
| **Commit** | Snapshot ของไฟล์ในช่วงเวลาหนึ่ง |
| **Branch** | เส้นทางการพัฒนาที่แยกออกมา |
| **Merge** | รวม branches เข้าด้วยกัน |
| **Remote** | Repository บน server สำหรับ collaboration |

## Guide Files

| File | Description |
|------|-------------|
| [installation.md](guide/installation.md) | วิธีติดตั้ง Git บนระบบต่างๆ |
| [quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งาน Git อย่างรวดเร็ว |
| [key-concept.md](guide/key-concept.md) | แนวคิดหลักของ Git |
| [how-it-works.md](guide/how-it-works.md) | หลักการทำงานและ architecture |
| [features.md](guide/features.md) | Features ทั้งหมดของ Git |
| [configuration.md](guide/configuration.md) | การตั้งค่า Git |
| [best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |

## Reference Files

| Folder | Files |
|--------|-------|
| references/ | [cli.md](references/cli.md) - Git CLI commands reference |
| references/ | [configuration.md](references/configuration.md) - Configuration options |
| references/ | [api.md](references/api.md) - Programmatic API |
| references/ | [website.md](references/website.md) - Official website และ resources |

## Version

- Current: v2.x (latest stable)
- Website: https://git-scm.com
- GitHub: https://github.com/git/git