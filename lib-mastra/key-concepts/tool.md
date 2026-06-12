# Tool

Tool concept และ integration ใน Mastra

## คำนิยาม

Tool เป็น functional units ที่:
- เชื่อมต่อกับ external APIs หรือ services
- มี input/output schemas ที่ชัดเจน
- รองรับ error handling และ validation
- สามารถ reuse ได้หลาย agents

## ความสำคัญ

Tool เป็นสิ่งสำคัญเพราะ:
- ทำให้ agents สามารถเชื่อมต่อกับ external services
- มี schema validation สำหรับ input/output
- สามารถ reuse ได้ข้าม agents
- มี error handling และ retries built-in

## เมื่อไรควรใช้

ใช้ Tool เมื่อ:
- ต้องการเชื่อมต่อกับ external APIs
- ต้องการ validate input/output
- ต้องการ reuse functionality
- ต้องการ error handling และ retries

## ตัวอย่าง

### REST API Tool

```typescript
const apiTool = new Tool({
  name: 'api-tool',
  description: 'Call REST API',
  schema: {
    type: 'object',
    properties: {
      url: { type: 'string' },
      method: { type: 'string' }
    }
  },
  execute: async (input) => {
    const response = await fetch(input.url, { method: input.method });
    return response.json();
  }
});
```

### Database Tool

```typescript
const dbTool = new Tool({
  name: 'db-tool',
  description: 'Query database',
  execute: async (input) => {
    const result = await pool.query(input.query);
    return result.rows;
  }
});
```

### File Tool

```typescript
const fileTool = new Tool({
  name: 'file-tool',
  description: 'Read file',
  execute: async (input) => {
    const content = await fs.readFile(input.path, 'utf-8');
    return content;
  }
});
```

## ข้อดีและข้อเสีย

### ข้อดี

- **Reusability:** สามารถ reuse ได้ข้าม agents
- **Validation:** Schema validation สำหรับ input/output
- **Error Handling:** Built-in error handling และ retries
- **Type Safety:** TypeScript support

### ข้อเสีย

- **Complexity:** ต้อง define schemas และ logic
- **Testing:** ต้อง test tools แยกจาก agents
- **Dependencies:** อาจมี external dependencies
- **Maintenance:** ต้อง maintain tools แยกจาก agents
