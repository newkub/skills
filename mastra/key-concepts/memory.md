# Memory

Memory concept และ storage ใน Mastra

## คำนิยาม

Memory เป็น storage layer ที่:
- เก็บ conversation history
- เก็บ context และ state
- รองรับ retrieval และ search
- มี multiple backends (in-memory, database, vector store)

## ความสำคัญ

Memory เป็นสิ่งสำคัญเพราะ:
- ทำให้ agents มี context ของ conversations
- รองรับ semantic search ด้วย vector stores
- มี retention policies สำหรับ data management
- รองรับ multiple storage backends

## เมื่อไรควรใช้

ใช้ Memory เมื่อ:
- ต้องการเก็บ conversation history
- ต้องการ semantic search
- ต้องการ context retention
- ต้องการ flexible storage backends

## ตัวอย่าง

### In-Memory Memory

```typescript
const memory = new Memory({
  store: new InMemoryStore(),
  retention: '1h'
});
```

### Vector Store Memory

```typescript
const memory = new Memory({
  store: new VectorStore({
    provider: 'pinecone',
    apiKey: process.env.PINECONE_API_KEY
  }),
  retrieval: {
    topK: 5,
    threshold: 0.7
  }
});
```

### Database Memory

```typescript
const memory = new Memory({
  store: new PostgresStore({
    connectionString: process.env.DATABASE_URL
  })
});
```

### Hierarchical Memory

```typescript
const memory = new Memory({
  stores: {
    short: new InMemoryStore({ retention: '1h' }),
    long: new VectorStore({ retention: '30d' })
  },
  policy: 'tiered'
});
```

## ข้อดีและข้อเสีย

### ข้อดี

- **Context:** เก็บ context สำหรับ conversations
- **Search:** รองรับ semantic search
- **Flexibility:** Multiple storage backends
- **Retention:** Built-in retention policies

### ข้อเสีย

- **Complexity:** ต้อง setup และ configure storage
- **Cost:** Vector stores อาจมี cost
- **Latency:** External storage อาจช้า
- **Maintenance:** ต้อง maintain storage backends
