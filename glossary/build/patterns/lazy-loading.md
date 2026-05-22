# Lazy Loading Pattern

## คำอธิบาย
Pattern ที่โหลด resources เฉพาะตอนที่จำเป็นต้องใช้จริง

## ลักษณะเฉพาะ
- **On-demand Loading**: โหลดเมื่อต้องการใช้
- **Performance Optimization**: ลด initial load time
- **Memory Efficiency**: ใช้ memory เฉพาะส่วนที่ต้องการ
- **User Experience**: แสดง UI ทันที โหลดข้อมูลทีหลัง

## ประเภทของ Lazy Loading
- **Component Lazy Loading**: React.lazy(), Vue async components
- **Route Lazy Loading**: Code splitting ตาม routes
- **Image Lazy Loading**: โหลดรูปเมื่อ scroll ถึง
- **Data Lazy Loading**: Infinite scroll, pagination

## ข้อดี
- Faster initial load
- Reduced bandwidth usage
- Better user experience
- Memory optimization

## ข้อเสีย
- Loading delays
- Complex implementation
- SEO considerations
- Error handling complexity

## เหมาะกับ
- Large applications
- Image-heavy sites
- Mobile applications
- Performance-critical apps

---

**หมวดหมู่**: Build Patterns
