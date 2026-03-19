# DRY (Don't Repeat Yourself)

## คำอธิบาย
หลักการที่ไม่ให้ซ้ำโค้ดหรือ logic เดิมๆ ในหลายๆ ที่

## ลักษณะเฉพาะ
- **Single Source of Truth**: มี source เดียวสำหรับแต่ละ logic
- **Code Reusability**: ใช้โค้ดซ้ำได้
- **Maintenance Efficiency**: แก้ไขที่เดียว ใช้ได้ทั้งระบบ
- **Consistency**: ลดความไม่สม่ำเสมอของโค้ด

## การปฏิบัติ
- **Extract Functions**: แยก logic ที่ซ้ำกันเป็น functions
- **Use Libraries**: ใช้ libraries ที่มีอยู่แล้ว
- **Inheritance/Composition**: ใช้ OOP patterns
- **Templates/Generics**: ใช้ generic programming

## ตัวอย่างที่ควรหลีกเรียง
```javascript
// Bad - Repeated logic
function calculateDiscount(price) {
  return price * 0.9;
}
function calculateTax(price) {
  return price * 0.1;
}

// Good - Extract common logic
function calculatePercentage(price, percentage) {
  return price * percentage;
}
```

## ข้อดี
- Reduced maintenance
- Fewer bugs
- Consistency
- Easier testing

## ข้อเสีย
- Over-abstraction risk
- Performance overhead
- Complexity increase
- Premature optimization

## เหมาะกับ
- All software development
- Large codebases
- Team projects
- Long-term maintenance

---

**หมวดหมู่**: Architecture Principles
