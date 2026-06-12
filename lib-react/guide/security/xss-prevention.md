# XSS Prevention

## ภาพรวม

วิธีการป้องกัน XSS attacks ใน React applications

## 1. Automatic Escaping

React จะ escape content ใน JSX อัตโนมัติ

```javascript
// ❌ XSS attack blocked
const userInput = '<script>alert("XSS")</script>';
return <div>{userInput}</div>; // Renders as text, not executed
```

## 2. dangerouslySetInnerHTML

ใช้เฉพาะเมื่อจำเป็นและ sanitize input

```javascript
// ❌ ไม่ปลอดภัย
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// ✅ ปลอดภัย - sanitize ก่อน
import DOMPurify from 'dompurify';

const sanitizedHtml = DOMPurify.sanitize(userInput);
<div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
```

## 3. URL Validation

Validate URLs ก่อนใช้

```javascript
function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

// ✅ Validate ก่อนใช้
if (isValidUrl(userInput)) {
  <a href={userInput}>Link</a>;
}
```

## สรุป

XSS prevention:
1. React escapes content อัตโนมัติใน JSX
2. Sanitize input ก่อนใช้ dangerouslySetInnerHTML
3. Validate URLs ก่อนใช้
