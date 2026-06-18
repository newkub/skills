# Agent

Agent concept และการใช้งานใน Mastra

## คำนิยาม

Agent เป็นหน่วยหลักของ Mastra ที่ทำหน้าที่:
- รับ input จาก user หรือ external sources
- ประมวลผลด้วย AI models
- ตัดสินใจว่าจะใช้ tools ไหน
- จัดการ conversation state
- สื่อสารกับ memory และ workflows

## ความสำคัญ

Agent เป็น core component ที่:
- เป็น interface หลักระหว่าง user และ system
- มีความสามารถในการตัดสินใจอัตโนมัติ
- สามารถเชื่อมต่อกับ tools และ services ต่างๆ
- เก็บ context ผ่าน memory

## เมื่อไรควรใช้

ใช้ Agent เมื่อ:
- ต้องการ AI ที่สามารถตัดสินใจได้
- ต้องการ automation ที่ซับซ้อน
- ต้องการ conversation ที่มี context
- ต้องการ integration กับ external services

## ตัวอย่าง

### Basic Agent

```typescript
import { Agent } from '@mastra/core';

const agent = new Agent({
  name: 'my-agent',
  description: 'A simple agent',
  tools: {},
  llm: new OpenAIProvider({ model: 'gpt-4' })
});
```

### Agent with Tools

```typescript
const agent = new Agent({
  name: 'api-agent',
  description: 'Agent that uses API tools',
  tools: {
    apiTool: new Tool({
      name: 'api-tool',
      execute: async (input) => {
        return await fetch(input.url);
      }
    })
  }
});
```

### Agent with Memory

```typescript
const agent = new Agent({
  name: 'memory-agent',
  description: 'Agent with memory',
  memory: new Memory({
    store: new VectorStore()
  })
});
```

### Agent with Workflow

```typescript
const agent = new Agent({
  name: 'workflow-agent',
  description: 'Agent with workflow',
  workflow: new Workflow({
    name: 'my-workflow',
    steps: [...]
  })
});
```

## ข้อดีและข้อเสีย

### ข้อดี

- **Flexibility:** สามารถปรับแต่งได้ตาม needs
- **Extensibility:** สามารถเพิ่ม tools และ capabilities
- **Intelligence:** ใช้ AI สำหรับ decision making
- **Context-aware:** เก็บ context ผ่าน memory

### ข้อเสีย

- **Complexity:** ต้อง setup และ configure
- **Cost:** ใช้ AI models อาจมี cost
- **Latency:** AI inference อาจช้า
- **Debugging:** ยากที่จะ debug AI decisions
