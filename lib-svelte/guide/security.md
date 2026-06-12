# Security

## ภาพรวม

Security best practices สำหรับ Svelte applications

## XSS Prevention

### Automatic Escaping

Svelte  escape HTML อัตโนมัติ:

```svelte
<script>
  let userInput = '<script>alert("XSS")</script>';
</script>

<!-- ✅ Safe - Auto escaped -->
<div>{userInput}</div>

<!-- ❌ Dangerous - Manual HTML injection -->
<div>{@html userInput}</div>
```

### Sanitization

ถ้าต้องใช้ `@html`:

```bash
bun add sanitize-html
```

```javascript
import sanitize from 'sanitize-html';

let safeHtml = sanitize(userInput);
```

## Content Security Policy

### Setup CSP

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self'">
```

### Inline Scripts

```svelte
<!-- ✅ Good - External script -->
<script src="app.js"></script>

<!-- ❌ Bad - Inline script -->
<script>
  alert('XSS');
</script>
```

## Authentication

### JWT Handling

```javascript
// ✅ Good - Store in httpOnly cookie
// Server-side cookie

// ❌ Bad - Store in localStorage
localStorage.setItem('token', token);
```

### Route Protection

```javascript
function requireAuth() {
  const token = getCookie('token');
  if (!token) {
    window.location.href = '/login';
  }
}
```

## API Security

### CORS

```javascript
// Server-side
app.use(cors({
  origin: 'https://your-domain.com'
}));
```

### Input Validation

```javascript
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

function validateInput(data) {
  return schema.parse(data);
}
```

## Dependencies

### Audit Dependencies

```bash
bun audit
```

### Update Regularly

```bash
bun update
```

## Environment Variables

### Never Commit Secrets

```bash
# .env
API_KEY=secret_key
DATABASE_URL=postgres://...

# .gitignore
.env
.env.local
```

### Access in Svelte

```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

## HTTPS

### Force HTTPS

```javascript
if (location.protocol !== 'https:') {
  location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
```

## Summary

Security best practices:
- ใช้ auto escaping เสมอ
- Sanitize HTML ก่อนใช้ @html
- Setup CSP headers
- Store tokens in httpOnly cookies
- Validate inputs
- Audit dependencies
- Never commit secrets
- Use HTTPS
