# Type Declarations

## Automatic Generation

Bunup generate TypeScript declarations อัตโนมัติ:
- **dts: true** - เปิดใช้งาน
- **Source Maps** - generate source maps สำหรับ declarations
- **Export Types** - include type exports

## Configuration

```typescript
export default {
  dts: true,
};
```

## Output

- `.d.ts` files ถูก generate ไว้ใน `dist/`
- รองรับ complex types
- รองรับ re-exports
