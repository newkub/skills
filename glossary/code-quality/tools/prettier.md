# Prettier

## คำอธิบาย
Opinionated code formatter ที่จัดรูปแบบโค้ดอัตโนมัติ

## ลักษณะเฉพาะ
- **Opinionated**: มี style ที่กำหนดไว้ ไม่ต้องปรับแต่ง
- **Consistent**: รูปแบบโค้ดสม่ำเสมอเสมอ
- **Multi-language**: รองรับหลายภาษา
- **IDE Integration**: ทำงานร่วมกับ editors ได้ดี

## คุณสมบัติหลัก
- **Automatic Formatting**: จัดรูปแบบโค้ดอัตโนมัติ
- **Configurable Options**: ปรับแต่งพื้นฐานได้บางส่วน
- **Ignore Files**: กำหนดไฟล์ที่ไม่ต้อง formatting
- **Integration**: ทำงานกับ Git hooks, CI/CD

## ตัวอย่างการตั้งค่า
```json
// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}

// .prettierignore
node_modules
dist
build
*.min.js
```

## ข้อดี
- Zero configuration
- Consistent formatting
- Team collaboration
- Reduced code review time

## ข้อเสีย
- Opinionated style
- Limited customization
- May conflict with team preferences
- Build step addition

## เหมาะกับ
- Team projects
- Open source development
- Code reviews
- Consistent code style

---

**หมวดหมู่**: Code Quality Tools
