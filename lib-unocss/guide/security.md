# Security Considerations

## ภาพรวม

UnoCSS มี security considerations ที่ต้องพิจารณาเมื่อใช้ใน production

## CSS Injection

### Risk

User input อาจ cause CSS injection ถ้าไม่ sanitize

```html
<!-- ❌ Risky - User input ใน class -->
<div class="<%= userInput %>">
  Content
</div>
```

### Prevention

Sanitize user input ก่อนใช้ใน class names

```typescript
// Sanitize class names
function sanitizeClass(input: string): string {
  return input.replace(/[^a-zA-Z0-9-_:\[\]]/g, '')
}

const safeClass = sanitizeClass(userInput)
```

## Content Security Policy

### CSP Configuration

Configure CSP สำหรับ UnoCSS

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; style-src 'self' 'unsafe-inline';">
```

### Inline Styles

หลีกเลี่ยง inline styles ที่ไม่จำเป็น

```html
<!-- ❌ Bad - Inline styles -->
<div style="color: red;">
  Content
</div>

<!-- ✅ Good - Utility classes -->
<div class="text-red">
  Content
</div>
```

## Third-Party Presets

### Risk

Third-party presets อาจมี malicious code

```typescript
// ❌ Risky - Untrusted preset
import { maliciousPreset } from 'untrusted-package'
```

### Prevention

ใช้ presets จาก trusted sources เท่านั้น

```typescript
// ✅ Good - Official preset
import { presetUno } from 'unocss'
```

## Build Process Security

### Dependency Scanning

Scan dependencies สำหรับ vulnerabilities

```bash
# Scan dependencies
bun audit

# หรือใช้ Snyk
bunx snyk test
```

### Lock Files

Use lock files สำหรับ consistent dependencies

```bash
# Generate lock file
bun install

# Commit lock file
git add bun.lockb
```

## Development Security

### Dev Server Security

Secure dev server ใน production-like environments

```typescript
// vite.config.ts
export default {
  server: {
    host: 'localhost', // ไม่ bind ไปทุก interface
    strictPort: true,
  },
}
```

### Environment Variables

Use environment variables สำหรับ sensitive config

```typescript
// .env
UNOCSS_API_KEY=your-api-key

// uno.config.ts
export default defineConfig({
  // Use environment variables
  apiKey: process.env.UNOCSS_API_KEY,
})
```

## CSS Minification Security

### Source Maps

Handle source maps อย่างปลอดภัย

```typescript
export default defineConfig({
  // Disable source maps ใน production
  sourceMap: process.env.NODE_ENV === 'development',
})
```

### CSS Obfuscation

Consider CSS obfuscation สำหรับ sensitive applications

```typescript
// ใช้ CSS obfuscation tools
// สำหรับ protect intellectual property
```

## Best Practices

### 1. Sanitize Input

Sanitize user input ก่อนใช้ใน class names

```typescript
function sanitizeClass(input: string): string {
  return input.replace(/[^a-zA-Z0-9-_:\[\]]/g, '')
}
```

### 2. Use Trusted Sources

ใช้ presets และ packages จาก trusted sources เท่านั้น

```typescript
// Official packages only
import { presetUno } from 'unocss'
```

### 3. Regular Audits

Audit dependencies อย่างสม่ำเสมอ

```bash
# Regular security audits
bun audit
```

### 4. CSP Configuration

Configure CSP อย่างเหมาะสม

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; style-src 'self' 'unsafe-inline';">
```

### 5. Environment Variables

Use environment variables สำหรับ sensitive config

```typescript
const apiKey = process.env.UNOCSS_API_KEY
```

## Common Vulnerabilities

### 1. CSS Injection

User input ใน class names โดยไม่ sanitize

```html
<!-- ❌ Vulnerable -->
<div class="<%= userInput %>">
```

**Fix:** Sanitize input

```typescript
const safeClass = sanitizeClass(userInput)
```

### 2. Third-Party Presets

ใช้ presets จาก untrusted sources

```typescript
// ❌ Vulnerable
import { maliciousPreset } from 'untrusted-package'
```

**Fix:** ใช้ official presets

```typescript
// ✅ Safe
import { presetUno } from 'unocss'
```

### 3. Inline Styles

ใช้ inline styles ที่ไม่จำเป็น

```html
<!-- ❌ Vulnerable -->
<div style="<%= userInput %>">
```

**Fix:** ใช้ utility classes

```html
<!-- ✅ Safe -->
<div class="text-red">
```

## Monitoring

### Security Headers

Use security headers สำหรับ CSS delivery

```typescript
// Configure security headers
export default {
  headers: {
    'Content-Security-Policy': "default-src 'self'; style-src 'self' 'unsafe-inline';",
  },
}
```

### Access Control

Control access สำหรับ CSS files

```typescript
// Configure access control
export default {
  server: {
    headers: {
      'Access-Control-Allow-Origin': 'https://yourdomain.com',
    },
  },
}
```

## Conclusion

UnoCSS security considerations:
- Sanitize user input
- Use trusted sources
- Configure CSP
- Regular audits
- Monitor dependencies

ใช้ best practices เพื่อ secure applications
