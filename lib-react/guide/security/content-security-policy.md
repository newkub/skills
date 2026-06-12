# Content Security Policy

## ภาพรวม

วิธีการ implement Content Security Policy (CSP) ใน React applications

## 1. CSP Headers

Implement CSP headers

```javascript
// Server-side
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
  );
  next();
});
```

## 2. Meta Tag

ใช้ CSP meta tag สำหรับ static sites

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'">
```

## สรุป

Content Security Policy:
1. Implement CSP headers บน server
2. ใช้ CSP meta tag สำหรับ static sites
