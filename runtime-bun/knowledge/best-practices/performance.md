# Performance Best Practices

## Concepts

ประสิทธิภาพเป็นปัจจัยสำคัญใน SDK development Bun มีความเร็วสูงแต่ต้องใช้งานอย่างถูกต้องเพื่อให้ได้ประโยชน์สูงสุด

## Best Practices

1. **ใช้ native TypeScript execution** - ไม่ต้อง compile ใน development
2. **ใช้ tree-shaking** - export modules แยกกันเพื่อลดขนาด bundle
3. **Lazy loading** - โหลด modules หนักเมื่อจำเป็นเท่านั้น
4. **Minimize dependencies** - ลดจำนวน dependencies เพื่อเพิ่มความเร็วติดตั้ง
5. **ใช้ Bun's parallel installation** - ติดตั้ง dependencies พร้อมกัน

## Examples

```typescript
// Tree-shakeable exports
export { MySDKClient } from './client/MySDKClient';
export { UsersAPI } from './client/users';

// Lazy loading
export function createLazyLoader<T>(loader: () => Promise<T>) {
  let instance: T | null = null;
  let loading: Promise<T> | null = null;

  return async (): Promise<T> => {
    if (instance) return instance;

    if (!loading) {
      loading = loader().then(result => {
        instance = result;
        return result;
      });
    }

    return loading;
  };
}
```
