# ESLint

## คำอธิบาย
Linter สำหรับ JavaScript/TypeScript ที่ยอดนิยมและ configurable สูง

## ลักษณะเฉพาะ
- **Pluggable**: ขยายฟังก์ชันผ่าน plugins
- **Configurable**: ปรับแต่ง rules ได้อย่างละเอียด
- **Auto-fix**: แก้ไข issues อัตโนมัติ
- **Framework Support**: รองรับ React, Vue, TypeScript

## คุณสมบัติหลัก
- **Rules**: กฎการตรวจสอบโค้ด
- **Plugins**: เพิ่ม capabilities ใหม่
- **Configs**: ชุดการตั้งค่าที่กำหนดไว้
- **Formatters**: ทำงานร่วมกับ Prettier

## ตัวอย่างการตั้งค่า
```javascript
// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/no-unused-vars': 'error'
  }
};
```

## ข้อดี
- Highly customizable
- Large plugin ecosystem
- Auto-fix capabilities
- Industry standard

## ข้อเสีย
- Configuration complexity
- Performance overhead
- Learning curve
- False positives

## เหมาะกับ
- JavaScript/TypeScript projects
- Team development
- Code quality enforcement
- Large codebases

---

**หมวดหมู่**: Code Quality Tools
