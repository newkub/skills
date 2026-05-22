# Code Splitting Pattern

## คำอธิบาย
Pattern ที่แบ่งโค้ดออกเป็น chunks หลายๆ ส่วนเพื่อโหลดตามต้องการ

## ลักษณะเฉพาะ
- **Chunk Division**: แบ่งโค้ดเป็น chunks ขนาดเล็ก
- **Dynamic Imports**: ใช้ dynamic import() สำหรับ lazy loading
- **Bundle Optimization**: ลดขนาด initial bundle
- **Parallel Loading**: โหลด chunks หลายๆ อันพร้อมกัน

## ประเภทของ Code Splitting
- **Entry Points**: แบ่งตาม entry files
- **Dynamic Imports**: แบ่งตาม dynamic import()
- **Vendor Splitting**: แยก vendor libraries
- **Route-based**: แบ่งตาม routes

## ข้อดี
- Faster initial load
- Better caching
- Parallel loading
- Reduced bundle size

## ข้อเสีย
- Complexity in management
- More network requests
- Debugging challenges
- Build configuration

## เหมาะกับ
- Large applications
- SPAs (Single Page Applications)
- Progressive Web Apps
- Mobile applications

---

**หมวดหมู่**: Build Patterns
