# Key Concepts

แนวคิดหลักของ Qoder ที่ควรเข้าใจก่อนใช้งาน

## Editor Workspace vs Quest Workspace

Qoder มี 2 workspaces หลักสำหรับทำงาน:

### Editor Workspace

- **NEXT**: Inline suggestion panel สำหรับ code completion
- **Inline Chat**: Chat ในไฟล์โดยตรง
- **Chat Panel**: แชท panel ด้านข้างสำหรับ conversational programming
- เหมาะสำหรับ: rapid iteration, pair programming, quick fixes

### Quest Workspace

- หน้าต่างแยกสำหรับ autonomous delegation
- **Task Boards**: จัดการ tasks หลายตัว
- **Progress Tracking**: ติดตามสถานะการทำงาน
- **Artifact Review**: ดูผลลัพธ์จาก agent execution
- เหมาะสำหรับ: complex multi-step tasks, long-running work

## Context Engineering

Qoder มีระบบ context ที่ทรงพลัง:

- **Project Context**: เข้าใจทั้ง codebase, dependencies, patterns
- **Knowledge Engine**: สะสม business knowledge อัตโนมัติ
- **Semantic Search**: ค้นหา code โดยใช้ความหมาย

## Agent Mode

### Cloud Agents

Autonomous agents ที่ทำงานได้หลายขั้นตอน:

- **Sessions**: การสนทนากับ agent
- **Environments**: Cloud execution environments
- **Memory Stores**: จัดเก็บความรู้และ context
- **Skills**: ความสามารถเฉพาะทางของ agent

### Agent Tools

Agents มีเครื่องมือหลายอย่าง:

- **Search**: ค้นหา codebase
- **Read**: อ่านไฟล์
- **Edit**: แก้ไขไฟล์
- **Bash**: รัน terminal commands

## Model Context Protocol (MCP)

มาตรฐานการเชื่อมต่อกับ external tools:

- เชื่อมต่อกับ databases, APIs, documentation
- ใช้ Vaults เพื่อเก็บ credentials อย่างปลอดภัย
- ขยายความสามารถของ agent ได้ไม่จำกัด

## Credits System

Qoder ใช้ระบบ Credits สำหรับ:

- จำกัดการใช้งาน AI
- ซื้อ add-on credits เพิ่มได้
- Teams plan มี shared credits

## Summary Table

| Concept | Description |
|---------|-------------|
| **Editor Workspace** | In-flow collaboration, inline chat |
| **Quest Workspace** | Autonomous delegation, task boards |
| **Context** | Project-wide understanding |
| **Cloud Agents** | Autonomous task execution |
| **MCP** | External tool integration |
| **Memory Stores** | Knowledge persistence |