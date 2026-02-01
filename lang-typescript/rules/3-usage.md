## Usage

ใช้งาน TypeScript ในการพัฒนาแอปพลิเคชัน

### Description
เทคนิคการใช้งาน TypeScript ให้ได้ประโยชน์สูงสุด

### Examples
```typescript
// ใช้ interfaces สำหรับ objects
interface User {
  id: number;
  name: string;
}

// ใช้ generics สำหรับ reusable code
function getData<T>(url: string): Promise<T> {
  return fetch(url).then(res => res.json());
}
```

### Anti-patterns
- ใช้ any type
- ไม่กำหนด return types
- ไม่ใช้ type guards

### Rules
1. ห้ามใช้ any type
2. ต้องกำหนด types ที่ชัดเจน
3. ต้องใช้ type guards เมื่อจำเป็น
4. ควรใช้ interfaces สำหรับ objects
