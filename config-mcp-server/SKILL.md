---
name: mcp-server
description: Best practices for building MCP (Model Context Protocol) servers including protocol implementation and tool development
goal: พัฒนา MCP servers ตาม best practices
outcome: MCP servers ที่มีความน่าเชื่อถือ ปฏิบัติตาม protocol และ integrate ได้จริง
---

# MCP Server

## When to Use

ใช้ Skill นี้เมื่อต้องการพัฒนา MCP servers ที่มีคุณภาพสูง

- เมื่อสร้าง MCP server ใหม่และต้องการโครงสร้างที่ถูกต้อง
- เมื่อต้องการ implement MCP protocol อย่างสมบูรณ์
- เมื่อต้องการสร้าง custom tools และ resources
- เมื่อต้องการจัดการ error handling และ validation
- เมื่อต้องการ integrate กับ AI models และ applications

## Quick Start

1. ตั้งค่า MCP server project ตาม [1-mcp-project-structure.md](./rules/1-mcp-project-structure.md)
2. Implement MCP protocol ตาม [2-mcp-protocol.md](./rules/2-mcp-protocol.md)
3. สร้าง tools และ resources ตาม [3-mcp-tools.md](./rules/3-mcp-tools.md)
4. จัดการ error handling ตาม [4-mcp-error-handling.md](./rules/4-mcp-error-handling.md)
5. ทดสอบ server ด้วย [5-mcp-testing.md](./rules/5-mcp-testing.md)

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [1-mcp-project-structure.md](./rules/1-mcp-project-structure.md) | Project Structure | โครงสร้าง MCP server project ที่ถูกต้อง | `mcp-` | เมื่อสร้าง project |
| 2 | `CRITICAL` | [2-mcp-protocol.md](./rules/2-mcp-protocol.md) | Protocol | Implement MCP protocol อย่างสมบูรณ์ | `mcp-` | เมื่อ implement protocol |
| 3 | `HIGH` | [3-mcp-tools.md](./rules/3-mcp-tools.md) | Tools | สร้าง tools และ resources อย่างมีประสิทธิภาพ | `mcp-` | เมื่อสร้าง tools |
| 4 | `HIGH` | [4-mcp-error-handling.md](./rules/4-mcp-error-handling.md) | Error Handling | จัดการ errors และ validation อย่างเหมาะสม | `mcp-` | เมื่อจัดการ errors |
| 5 | `HIGH` | [5-mcp-testing.md](./rules/5-mcp-testing.md) | Testing | ทดสอบ MCP server อย่างครอบคลุม | `mcp-` | เมื่อทดสอบ |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| [core-concepts.md](./knowledge/core-concepts.md) | Core Concepts | ความรู้เกี่ยวกับ concepts หลักของ MCP | `mcp-` |
| [all-features.md](./knowledge/all-features.md) | All Features | ความรู้เกี่ยวกับฟีเจอร์ทั้งหมดของ MCP | `mcp-` |
| [best-practices.md](./knowledge/best-practices.md) | Best Practices | best practices สำหรับ MCP development | `mcp-` |

## Verification

1. ตรวจสอบว่า MCP server สามารถเชื่อมต่อได้ด้วย MCP client
2. ทดสอบด้วยการเรียกใช้ tools และตรวจสอบว่าทำงานได้ถูกต้อง
3. ตรวจสอบว่า protocol implementation สอดคล้องกับ MCP specification
4. ตรวจสอบว่า error handling ทำงานได้ครอบคลุมทุกกรณี
