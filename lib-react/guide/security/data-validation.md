# Data Validation

## ภาพรวม

วิธีการ validate ข้อมูลใน React applications

## 1. Input Validation

Validate ข้อมูลทั้ง client-side และ server-side

```javascript
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required()
});

async function handleSubmit(values) {
  try {
    await schema.validate(values);
    // Submit to server
  } catch (error) {
    // Handle validation error
  }
}
```

## 2. Output Encoding

Encode output ก่อนแสดงผล

```javascript
import DOMPurify from 'dompurify';

function UserContent({ content }) {
  const sanitized = DOMPurify.sanitize(content);
  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
}
```

## 3. Type Checking

ใช้ TypeScript สำหรับ type safety

```typescript
interface User {
  id: string;
  name: string;
  email: string;
}

function UserProfile({ user }: { user: User }) {
  return <div>{user.name}</div>;
}
```

## สรุป

Data validation:
1. Validate input ทั้ง client-side และ server-side
2. Encode output ก่อนแสดงผล
3. ใช้ TypeScript สำหรับ type safety
