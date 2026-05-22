# JavaScript Core Concepts

## แนวคิดพื้นฐานของ JavaScript

### 1. ประเภทข้อมูล (Data Types)

- **Primitive Types**: string, number, boolean, null, undefined, symbol, bigint
- **Reference Types**: object, array, function

### 2. Scope และ Hoisting

- **Global Scope**: ตัวแปรที่เข้าถึงได้จากทุกที่
- **Function Scope**: ตัวแปรที่เข้าถึงได้เฉพาะใน function
- **Block Scope**: ตัวแปรที่เข้าถึงได้เฉพาะใน block (let, const)

### 3. Asynchronous Programming

- **Callbacks**: ฟังก์ชันที่ส่งให้ฟังก์ชันอื่นเรียก
- **Promises**: อ็อบเจกต์สำหรับจัดการ async operations
- **Async/Await**: syntax สำหรับจัดการ promises อย่างง่าย

### 4. Object-Oriented Programming

- **Prototypes**: กลไกการสืบทอดใน JavaScript
- **Classes**: syntax sugar สำหรับ prototype-based inheritance
- **Modules**: การแบ่ง code เป็นส่วนๆ ที่นำกลับมาใช้ใหม่ได้

### 5. Event Loop

- **Call Stack**: จัดการ function calls
- **Task Queue**: จัดการ async callbacks
- **Microtask Queue**: จัดการ promise callbacks
