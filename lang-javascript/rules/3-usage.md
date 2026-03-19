# Usage Patterns

## Description

รูปแบบการใช้งาน JavaScript ที่แนะนำสำหรับการพัฒนา applications

## Examples

```javascript
// Modern ES6+ syntax
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Module pattern
export class UserService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async getUser(id) {
    return await fetchData(`${this.apiUrl}/users/${id}`);
  }
}
```

## Anti-patterns

❌ ใช้ `var` แทน `const/let` - สร้างปัญหา hoisting และ scope
❌ ไม่มี error handling - ทำให้ application crash ได้ง่าย
❌ ใช้ callback hell - ทำให้ code อ่านยาก
❌ ไม่ใช้ strict mode - ทำให้มี bugs ที่ไม่คาดคิด

## Verification

1. ตรวจสอบว่า code ใช้ ES6+ syntax ที่เหมาะสม
2. ยืนยันว่ามี proper error handling ใน async operations
3. ทดสอบว่า modules ถูก export/import อย่างถูกต้อง
