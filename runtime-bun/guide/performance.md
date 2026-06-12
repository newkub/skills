# Performance

## ประสิทธิภาพของ Bun

### Runtime Performance

- **เร็วกว่า Node.js 10-20 เท่า** ในการ execute JavaScript
- **Startup time เร็ว** - ใช้ Zig แทน C++
- **Memory usage ต่ำกว่า** - Efficient garbage collection

### Package Manager

- **ติดตั้ง dependencies เร็วกว่า npm 20 เท่า**
- **Efficient caching** - ไม่ต้อง download ซ้ำ
- **Parallel installation** - ติดตั้งหลาย packages พร้อมกัน

### Bundler

- **Bundling เร็ว** - ใช้ native code
- **Tree-shaking** อัตโนมัติ
- **Code splitting** รองรับ

## Optimization Tips

### 1. ใช้ Bun APIs แทน Node.js APIs

```typescript
// ❌ Node.js style
import { readFileSync } from 'fs';
const data = readFileSync('file.txt');

// ✅ Bun style
const data = await Bun.file('file.txt').text();
```

### 2. ใช้ `bun build` สำหรับ production

```bash
bun build src/index.ts --outdir ./dist --minify
```

### 3. ใช้ `--watch` สำหรับ development

```bash
bun --watch run src/index.ts
```

### 4. ใช้ `bun test` สำหรับ fast testing

```bash
bun test
```

### 5. ใช้ TypeScript แต่ compile เฉพาะเมื่อจำเป็น

Bun รัน TypeScript ได้โดยตรง ไม่ต้อง compile ก่อน

## Benchmarks

| Operation | Node.js | Bun | Speedup |
|-----------|---------|-----|---------|
| Startup | 200ms | 50ms | 4x |
| JSON Parse | 100ms | 20ms | 5x |
| File Read | 50ms | 10ms | 5x |
| HTTP Server | 10k req/s | 50k req/s | 5x |
