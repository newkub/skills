# Transpilers

## คำอธิบาย
เครื่องมือที่แปลงโค้ดจากเวอร์ชันหนึ่งของภาษาไปเป็นเวอร์ชันอื่น (เช่น ES6 → ES5)

## ลักษณะเฉพาะ
- **Syntax Transformation**: แปลง syntax ใหม่เป็นเก่า
- **Polyfill Injection**:  เพิ่ม polyfills สำหรับ features ใหม่
- **Browser Compatibility**: ทำงานได้บับrowsers เก่า
- **Feature Detection**: ตรวจสอบ supported features

## ประเภทของ Transpilers
- **Babel**: JavaScript transpiler ยอดนิยม
- **TypeScript**: TypeScript → JavaScript
- **Sucrase**: Fast transpiler
- **Traceur**: ES6 transpiler

## ข้อดี
- Browser compatibility
- Modern syntax usage
- Future-proof code
- Gradual migration

## ข้อเสีย
- Build overhead
- Larger bundle size
- Debugging complexity
- Configuration needed

## เหมาะกับ
- Browser applications
- Legacy browser support
- Modern JavaScript development
- Library development

---

**หมวดหมู่**: Build Types
