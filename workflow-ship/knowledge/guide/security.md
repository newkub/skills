# Security

## ความปลอดภัยและ Security Best Practices สำหรับ Workflow-Ship

### Overview

Workflow-Ship ต้องรักษาความปลอดภัยในทุกขั้นตอน ตั้งแต่ ship-code ไปจนถึง run-dev

### Build Security

#### 1. Dependency Security

**Practices:**
- ตรวจสอบ vulnerabilities ใน dependencies
- ใช้ dependencies ที่เชื่อถือได้
- Update dependencies อย่างสม่ำเสมอ
- ใช้ lock files

**Implementation:**
```bash
# ตรวจสอบ vulnerabilities
bun audit

# Update dependencies
bun update
```

#### 2. Code Security

**Practices:**
- ไม่ hardcode secrets
- ใช้ environment variables
- ตรวจสอบ sensitive data
- ใช้ secure coding practices

**Implementation:**
```typescript
// ❌ ผิด: Hardcode secrets
const apiKey = "secret-key"

// ✅ ถูก: ใช้ environment variables
const apiKey = process.env.API_KEY
```

#### 3. Build Artifacts Security

**Practices:**
- ไม่รวม source maps ใน production
- ไม่รวม development tools
- Minify code
- Obfuscate ถ้าจำเป็น

**Implementation:**
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    sourcemap: false,
    minify: 'terser'
  }
})
```

### Test Security

#### 1. Test Data Security

**Practices:**
- ไม่ใช้ real data ใน tests
- ใช้ mock data
- Sanitize test data
- ไม่ log sensitive data

**Implementation:**
```typescript
// ❌ ผิด: ใช้ real data
const user = { email: "real@email.com", password: "secret" }

// ✅ ถูก: ใช้ mock data
const user = { email: "test@example.com", password: "mock-password" }
```

#### 2. Test Environment Security

**Practices:**
- ใช้ test environment แยก
- ไม่เชื่อมต่อ production
- ใช้ test databases
- Clean up test data

**Implementation:**
```bash
# ใช้ test environment
NODE_ENV=test bun test
```

### Dev Server Security

#### 1. Dev Server Configuration

**Practices:**
- ไม่ expose dev server ไป public
- ใช้ authentication ถ้าจำเป็น
- จำกัด access
- ใช้ HTTPS ใน production

**Implementation:**
```typescript
// vite.config.ts
export default defineConfig({
  server: {
    host: 'localhost',
    port: 3000,
    strictPort: true
  }
})
```

#### 2. Hot Module Replacement Security

**Practices:**
- ตรวจสอบ HMR updates
- ไม่ accept updates จาก sources ที่ไม่น่าเชื่อถือ
- Validate HMR payloads

**Implementation:**
```typescript
// vite.config.ts
export default defineConfig({
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost'
    }
  }
})
```

### Error Handling Security

#### 1. Error Message Security

**Practices:**
- ไม่ expose sensitive data ใน error messages
- ใช้ generic error messages
- Log errors อย่างปลอดภัย
- ไม่ expose stack traces ใน production

**Implementation:**
```typescript
// ❌ ผิด: Expose sensitive data
throw new Error(`Failed to connect to ${databaseUrl}`)

// ✅ ถูก: ใช้ generic message
throw new Error('Failed to connect to database')
```

#### 2. Error Logging Security

**Practices:**
- Sanitize logs
- ไม่ log sensitive data
- ใช้ secure logging
- Encrypt logs ถ้าจำเป็น

**Implementation:**
```typescript
function sanitizeLog(data: any) {
  const sensitiveKeys = ['password', 'token', 'secret']
  const sanitized = { ...data }
  
  for (const key of sensitiveKeys) {
    if (key in sanitized) {
      sanitized[key] = '***REDACTED***'
    }
  }
  
  return sanitized
}
```

### Environment Variables Security

#### 1. Environment Variables Management

**Practices:**
- ไม่ commit .env files
- ใช้ .env.example
- ใช้ secrets management
- Rotate secrets อย่างสม่ำเสมอ

**Implementation:**
```bash
# .gitignore
.env
.env.local
.env.*.local
```

#### 2. Secrets Management

**Practices:**
- ใช้ secrets management tools
- ไม่ hardcode secrets
- ใช้ environment-specific secrets
- Audit secrets อย่างสม่ำเสมอ

**Implementation:**
```bash
# ใช้ environment variables
export API_KEY=$(bun run get-secret API_KEY)
```

### Git Security

#### 1. Git Configuration

**Practices:**
- ใช้ .gitignore อย่างเหมาะสม
- ไม่ commit sensitive files
- ใช้ git hooks
- Review changes ก่อน commit

**Implementation:**
```bash
# .gitignore
node_modules/
.env
dist/
*.log
```

#### 2. Git Hooks

**Practices:**
- ใช้ pre-commit hooks
- ใช้ pre-push hooks
- Run security checks
- Validate changes

**Implementation:**
```bash
# package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "bun run lint && bun run test"
    }
  }
}
```

### CI/CD Security

#### 1. CI/CD Configuration

**Practices:**
- ใช้ secrets ใน CI/CD
- ไม่ expose secrets ใน logs
- ใช้ secure runners
- Audit CI/CD pipelines

**Implementation:**
```yaml
# .github/workflows/ci.yml
env:
  API_KEY: ${{ secrets.API_KEY }}
```

#### 2. Artifact Security

**Practices:**
- Sign artifacts
- Verify artifacts
- ใช้ secure storage
- จำกัด access

**Implementation:**
```bash
# Sign artifacts
bun run sign-artifact dist/
```

### Security Best Practices

1. **Principle of Least Privilege:** ให้ access เฉพาะที่จำเป็น
2. **Defense in Depth:** ใช้ multiple layers ของ security
3. **Security by Design:** คิดเรื่อง security ตั้งแต่เริ่ม
4. **Regular Audits:** Audit security อย่างสม่ำเสมอ
5. **Keep Updated:** Update dependencies และ tools อย่างสม่ำเสมอ

### Security Checklist

ก่อน ship code:

- [ ] ตรวจสอบ dependencies vulnerabilities
- [ ] ไม่ hardcode secrets
- [ ] ใช้ environment variables
- [ ] ไม่ include source maps
- [ ] Minify code
- [ ] ไม่ expose sensitive data ใน errors
- [ ] Sanitize logs
- [ ] ใช้ .gitignore อย่างเหมาะสม
- [ ] ใช้ git hooks
- [ ] Configure CI/CD security
- [ ] Sign artifacts
- [ ] Audit security

### Next Steps

- อ่าน [Migration](migration.md) สำหรับการย้าย
- อ่าน [Ecosystem](ecosystem.md) สำหรับระบบนิเวศ
- อ่าน [Testing](testing.md) สำหรับการทดสอบ
