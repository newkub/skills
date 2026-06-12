---
description: Patterns และ best practices สำหรับ Bun
---

## Goal

อธิบาย patterns และ best practices สำหรับการพัฒนาด้วย Bun

## Scope

สำหรับโปรเจกต์ที่ใช้ Bun เป็น runtime

## Common Patterns

### 1. Async/Await Pattern

Bun รองรับ async/await อย่างเต็มที่:

```typescript
async function fetchData() {
  const response = await fetch('https://api.example.com');
  const data = await response.json();
  return data;
}
```

### 2. Server Pattern

ใช้ `Bun.serve()` สำหรับ HTTP server:

```typescript
Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response('Hello from Bun!');
  },
});
```

### 3. File I/O Pattern

ใช้ `Bun.file()` สำหรับ file operations:

```typescript
const file = Bun.file('data.json');
const content = await file.text();
```

### 4. Worker Pattern

ใช้ workers สำหรับ CPU-intensive tasks:

```typescript
const worker = new Worker('./worker.ts');
worker.postMessage({ task: 'heavy' });
```

## Best Practices

### 1. ใช้ TypeScript

```typescript
interface User {
  id: number;
  name: string;
}

function getUser(id: number): User {
  // ...
}
```

### 2. Error Handling

```typescript
try {
  const data = await fetchData();
} catch (error) {
  console.error('Failed to fetch:', error);
}
```

### 3. Environment Variables

```typescript
const apiKey = process.env.API_KEY;
if (!apiKey) {
  throw new Error('API_KEY is required');
}
```

### 4. Modular Code

แยก logic ออกเป็น modules:

```typescript
// lib/utils.ts
export function formatDate(date: Date): string {
  return date.toISOString();
}

// src/index.ts
import { formatDate } from './lib/utils';
```

## Anti-Patterns

### ❌ Synchronous File Operations

```typescript
// อย่าใช้ sync operations
const data = fs.readFileSync('file.txt');
```

### ✅ Async File Operations

```typescript
// ใช้ async operations
const data = await Bun.file('file.txt').text();
```
