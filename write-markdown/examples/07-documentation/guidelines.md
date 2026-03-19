---
description: แนวทางปฏิบัติในการเขียน Markdown
title: guidelines
tags: [markdown, best-practices, guidelines]
goals:
  - แสดงแนวทางปฏิบัติในการเขียน Markdown
  - สอนวิธีเขียนเอกสารที่มีคุณภาพ
---

## Code Examples

````markdown
### ✅ Good Practice

```typescript
// ใช้ descriptive names
const getUserById = (id: string) => {
  return users.find(user => user.id === id);
};
```

### ❌ Bad Practice

```typescript
// ใช้ non-descriptive names
const get = (i: string) => {
  return users.find(u => u.id === i);
};
```
````

## Writing Tips

1. **Use clear headings** - ใช้หัวข้อที่ชัดเจน
2. **Provide examples** - มีตัวอย่างการใช้งานเสมอ
3. **Include error handling** - แสดงวิธีจัดการข้อผิดพลาด
4. **Keep it updated** - อัพเดตเอกสารให้ทันสมัย

## Document Structure

````markdown
## Document Structure

1. **Introduction** - What is this about?
2. **Prerequisites** - What do you need?
3. **Installation** - How to set it up
4. **Usage** - How to use it
5. **Examples** - Real-world examples
6. **Troubleshooting** - Common issues
7. **Reference** - Detailed reference
````
