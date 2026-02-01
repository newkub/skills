## Configuration

ตั้งค่า TypeScript compiler options ให้เหมาะกับ project

### Description
ปรับแต่ง tsconfig.json ให้ได้ performance และ type safety ที่ดีที่สุด

### Examples
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### Anti-patterns
- ปิด strict mode
- ใช้ target เก่าไป
- ไม่กำหนด module resolution

### Rules
1. ต้องเปิด strict mode
2. ต้องกำหนด target ใหม่ที่เหมาะสม
3. ต้องตั้งค่า module ให้ถูกต้อง
4. ต้องเปิด esModuleInterop
