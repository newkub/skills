---
name: mastra
description: "Comprehensive Mastra framework guide for building agents, workflows, tools, memory, workspaces,..."
triggers: ['user', 'model']
allowed-tools: ['read', 'edit', 'grep', 'glob', 'exec']
---
## Goal

ใช้ Mastra framework สร้าง AI agents, workflows, tools, memory, workspaces, และ storage ด้วย TypeScript


## Scope

ใช้สำหรับ building AI agents, workflows, tools, memory, workspaces, และ storage ด้วย Mastra framework


## Execute

- ติดตั้ง Mastra ด้วย `bun add @mastra/core`
- อ่าน `guide/installation.md` สำหรับการติดตั้งและ setup
- อ่าน `guide/quick-start.md` สำหรับเริ่มต้นใช้งาน
- อ่าน `guide/key-concept.md` สำหรับแนวคิดหลัก
- อ่าน `guide/how-it-works.md` สำหรับวิธีการทำงาน
- อ่าน `key-concepts/agent.md` สำหรับ agent concept
- อ่าน `key-concepts/workflow.md` สำหรับ workflow concept
- อ่าน `key-concepts/tool.md` สำหรับ tool concept
- อ่าน `key-concepts/memory.md` สำหรับ memory concept
- อ่าน `key-concepts/workspace.md` สำหรับ workspace concept
- อ่าน `guide/configuration.md` สำหรับการตั้งค่า
- อ่าน `references/configuration.md` สำหรับ configuration reference
- ตั้งค่า Mastra configuration
- อ่าน `guide/features.md` สำหรับ features ที่มี
- อ่าน `principles/agent-design.md` สำหรับ agent design
- ใช้ `workflows/create-agent.md` สำหรับสร้าง agent
- อ่าน `principles/workflow-orchestration.md` สำหรับ workflow orchestration
- อ่าน `guide/patterns.md` สำหรับ patterns ทั่วไป
- ใช้ `workflows/create-workflow.md` สำหรับสร้าง workflow
- อ่าน `principles/tool-integration.md` สำหรับ tool integration
- อ่าน `guide/integration.md` สำหรับ service integration
- ใช้ `workflows/integrate-tool.md` สำหรับ integration tool
- อ่าน `guide/best-practices.md` สำหรับ best practices
- อ่าน `guide/performance.md` สำหรับ performance optimization
- อ่าน `guide/security.md` สำหรับ security considerations
- อ่าน `guide/troubleshooting.md` สำหรับปัญหาทั่วไป
- อ่าน `references/api.md` สำหรับ API reference
- อ่าน `references/cli.md` สำหรับ CLI commands


## Rules

- ใช้ `bun add @mastra/core` สำหรับ core library
- ติดตั้ง dependencies ที่จำเป็นตาม documentation
- ใช้ TypeScript สำหรับ type safety
- ใช้ backticks สำหรับ `Agent`, `Workflow`, `Tool`, commands
- ใช้ code blocks สำหรับ agent examples
- ใช้ ansi markdown diagrams สำหรับ flow และ architecture
- ใช้ agent design principles ตาม best practices
- ใช้ workflows สำหรับ complex orchestration
- ใช้ tools สำหรับ external integrations
- ใช้ memory สำหรับ context management
- ใช้ storage สำหรับ persistent data
- หลีกเลี่ยง unnecessary API calls


## Expected Outcome

- AI agents ที่ well-designed และ maintainable
- Workflows ที่ orchestrated อย่าง efficient
- Tools ที่ integrated อย่าง seamless
- Memory และ storage ที่ managed อย่าง proper
