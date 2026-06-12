# Workspace

Workspace concept และ organization ใน Mastra

## คำนิยาม

Workspace เป็น organizational unit ที่:
- รวม agents, workflows, tools, และ memory เข้าด้วยกัน
- ให้ isolation ระหว่าง different contexts
- จัดการ configuration และ settings
- รองรับ multi-tenancy

## ความสำคัญ

Workspace เป็นสิ่งสำคัญเพราะ:
- ทำให้สามารถ organize resources ได้
- ให้ isolation ระหว่าง different teams/projects
- จัดการ configuration ได้ centralized
- รองรับ multi-tenancy

## เมื่อไรควรใช้

ใช้ Workspace เมื่อ:
- ต้องการ organize agents และ workflows
- ต้องการ isolation ระหว่าง projects
- ต้องการ centralized configuration
- ต้องการ multi-tenancy

## ตัวอย่าง

### Basic Workspace

```typescript
const workspace = new Workspace({
  name: 'my-workspace',
  agents: {
    agent1,
    agent2
  },
  workflows: {
    workflow1,
    workflow2
  }
});
```

### Workspace with Isolation

```typescript
const workspace = new Workspace({
  name: 'isolated-workspace',
  isolation: {
    memory: true,
    tools: true,
    agents: true
  }
});
```

### Workspace with Configuration

```typescript
const workspace = new Workspace({
  name: 'configured-workspace',
  config: {
    llm: {
      provider: 'openai',
      model: 'gpt-4'
    },
    memory: {
      retention: '7d'
    }
  }
});
```

## ข้อดีและข้อเสีย

### ข้อดี

- **Organization:** จัดระเบียบ resources ได้
- **Isolation:** Isolation ระหว่าง projects
- **Configuration:** Centralized configuration
- **Multi-tenancy:** รองรับ multiple tenants

### ข้อเสีย

- **Complexity:** ต้อง manage workspaces
- **Overhead:** มี overhead จาก isolation
- **Learning Curve:** ต้องเรียนรู้ workspace concepts
- **Maintenance:** ต้อง maintain workspace configurations
