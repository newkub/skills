# Clean Code Principles

## คำอธิบาย
หลักการเขียนโค้ดที่อ่านง่าย เข้าใจง่าย และดูแลรักษาง่าย

## ลักษณะเฉพาะ
- **Readable**: อ่านง่าย เหมือนอ่านภาษาที่เขียน
- **Simple**: ซับซ้อนน้อยที่สุดที่ทำงานได้
- **Expressive**: บอกความหมายได้ชัดเจน
- **Maintainable**: แก้ไขและขยายง่าย

## หลักการสำคัญ
- **Meaningful Names**: ใช้ชื่อที่บอกความหมาย
- **Small Functions**: functions ทำงานเดียว สั้นๆ
- **No Comments**: โค้ดควรบอกความหมายเอง
- **Error Handling**: จัดการ errors อย่างเหมาะสม
- **DRY**: ไม่ซ้ำโค้ด

## ตัวอย่างการประยุกต์
```javascript
// Bad - Unclear
function proc(d) {
  if (d.length > 0) {
    return d.map(x => x.id).filter(x => x > 10);
  }
  return [];
}

// Good - Clean and expressive
function getActiveUserIds(users) {
  return users
    .filter(user => user.isActive)
    .map(user => user.id);
}
```

## Best Practices
- **Naming**: ใช้ nouns สำหรับ classes, verbs สำหรับ functions
- **Functions**: 3 arguments หรือน้อยกว่า
- **Comments**: อธิบาย "why" ไม่ใช่ "what"
- **Formatting**: consistent indentation and spacing
- **Testing**: โค้ดควอ่างง่ายต่อการทดสอบ

## ข้อดี
- Reduced bugs
- Faster development
- Better collaboration
- Easier onboarding

## ข้อเสีย
- Initial learning curve
- May seem verbose
- Requires discipline
- Refactoring time

## เหมาะกับ
- All software development
- Team projects
- Long-term maintenance
- Open source projects

---

**หมวดหมู่**: Code Quality Principles
