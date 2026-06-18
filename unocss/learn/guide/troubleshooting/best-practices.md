# Best Practices

## 1. Check Configuration First

ตรวจสอบ configuration ก่อนอื่น

```typescript
// ตรวจสอบ uno.config.ts
// ตรวจสอบ framework config
```

## 2. Use Inspector

ใช้ inspector สำหรับ debugging

```typescript
export default defineConfig({
  inspector: true,
})
```

## 3. Check Dependencies

ตรวจสอบ dependencies

```bash
# ตรวจสอบ package.json
cat package.json

# ตรวจสอบ lock file
cat bun.lockb
```

## 4. Test Incrementally

Test ทีละส่วน

```typescript
// Test rules
// Test shortcuts
// Test theme
```

## 5. Document Issues

Document issues ที่พบ

```markdown
# Known Issues

## Issue 1
- Description: ...
- Solution: ...
```
