# Best Practices

## แนวทางปฏิบัติที่ดีในการใช้ Lefthook

### Configuration Best Practices

| Practice | Description |
|----------|-------------|
| **Keep it simple** | เริ่มต้นด้วย config ง่ายๆ แล้วค่อยๆ เพิ่ม |
| **Use parallel wisely** | เปิด parallel สำหรับ independent commands |
| **Group related commands** | รวม commands ที่เกี่ยวข้องกัน |
| **Set proper timeouts** | กำหนด timeout เพื่อหลีกเลี่ยง deadlocks |

### Performance Best Practices

```yaml
# ใช้ parallel สำหรับ independent commands
pre-commit:
  parallel: true
  commands:
    eslint:
      glob: "*.{js,ts}"
      run: npx eslint {staged_files}
    prettier:
      glob: "*.{js,ts,json}"
      run: npx prettier --check {staged_files}
    tsc:
      run: npx tsc --noEmit

# ใช้ sequential สำหรับ dependent commands
pre-build:
  commands:
    lint:
      run: npm run lint
    test:                               # depends on lint passing
      run: npm run test
```

### Pre-commit Hook Best Practices

| Practice | Description |
|----------|-------------|
| **Fast checks first** | รัน lint ก่อน tests |
| **Use staged_files** | ตรวจสอบเฉพาะไฟล์ที่ stage |
| **Skip expensive checks** | ข้าม full build ใน pre-commit |
| **Exit fast on failure** | ใช้ fail-fast mode |

### Recommended Pre-commit Order

```yaml
# 1. Fast checks (seconds)
pre-commit:
  parallel: true
  commands:
    # 1. Formatting (very fast)
    prettier:
      glob: "*.{js,ts,json,css}"
      run: npx prettier --check {staged_files}
    
    # 2. Linting (fast)
    eslint:
      glob: "*.{js,ts,jsx,tsx}"
      run: npx eslint {staged_files}
    
    # 3. Type checking (medium)
    tsc:
      glob: "*.{ts,tsx}"
      run: npx tsc --noEmit
    
    # 4. Tests (slow - optional)
    test:
      glob: "*.{ts,tsx}"
      run: npm run test -- --bail
```

### Pre-push Hook Best Practices

| Practice | Description |
|----------|-------------|
| **Run full test suite** | ตรวจสอบทุกอย่างก่อน push |
| **Include build** | ตรวจสอบว่า build ได้ |
| **Consider time** | pre-push อาจใช้เวลานาน |

```yaml
pre-push:
  parallel: true
  commands:
    test:
      run: npm run test:ci
    build:
      run: npm run build
    audit:
      run: npm audit --audit-level=high
```

### Security Best Practices

| Practice | Description |
|----------|-------------|
| **Don't commit secrets** | ใช้ lint-staged กับ .gitignore |
| **Validate all inputs** | ตรวจสอบไฟล์ก่อนรัน |
| **Use absolute paths** | ระบุ cwd ชัดเจน |
| **Review commands** | ตรวจสอบ commands ที่รัน |

### Team Collaboration

```yaml
# แชร์ base config ผ่าน extends
# lefthook.shared.yml (in root repo)
pre-commit:
  commands:
    eslint:
      run: npx eslint {staged_files}

# lefthook.local.yml (local overrides)
extends:
  - ./lefthook.shared.yml

pre-commit:
  commands:
    custom-check:
      run: npm run custom-check
```

### Common Pitfalls to Avoid

| Pitfall | Solution |
|---------|----------|
| Slow pre-commit | ใช้ staged_files, skip expensive checks |
| Overwhelming output | ใช้ quiet mode สำหรับ CI |
| Timeout issues | Set proper timeout values |
| Config conflicts | ใช้ extends อย่างถูกต้อง |
| Broken hooks | ตรวจสอบด้วย `lefthook run` |