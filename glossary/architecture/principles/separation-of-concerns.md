# Separation of Concerns (SoC)

## คำอธิบาย
หลักการที่แบ่งระบบออกเป็นส่วนๆ ที่มีความรับผิดชอบที่แตกต่างกัน

## ลักษณะเฉพาะ
- **Modular Design**: แบ่งโปรแกรมเป็น modules ที่ทำงานเฉพาะทาง
- **Single Responsibility**: แต่ละส่วนมีความรับผิดชอบเดียว
- **Loose Coupling**: modules ขึ้นต่อกันน้อย
- **High Cohesion**: ฟังก์ชันที่เกี่ยวข้องอยู่ใน module เดียวกัน

## ระดับของ Separation
- **Architectural Layer**: Presentation, Business, Data layers
- **Module Level**: Separate modules สำหรับ features ต่างๆ
- **Component Level**: UI components ที่ทำงานเฉพาะทาง
- **Function Level**: Functions ที่ทำงานเดียว

## ตัวอย่างการประยุกต์
```javascript
// Bad - Mixed concerns
function saveUser(userData) {
  // Validation
  if (!userData.email) throw new Error('Email required');
  
  // Database operation
  db.users.insert(userData);
  
  // Email notification
  emailService.sendWelcome(userData.email);
}

// Good - Separated concerns
class UserService {
  validate(userData) { /* validation logic */ }
  save(userData) { /* database logic */ }
  notify(userData) { /* notification logic */ }
}
```

## ข้อดี
- Better maintainability
- Easier testing
- Code reusability
- Team collaboration

## ข้อเสีย
- More files/classes
- Initial complexity
- Overhead in simple projects
- Communication between layers

## เหมาะกับ
- Large applications
- Team development
- Complex systems
- Long-term projects

---

**หมวดหมู่**: Architecture Principles
