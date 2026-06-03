# Best Practices

## Writing Patterns

### 1. Start Simple

```bash
# เริ่มจาก pattern ง่ายๆ
ast-grep -p 'console.log($ARG)' -l ts ./src

# ค่อยเพิ่ม complexity
ast-grep -p 'console.log($ARG)' -l ts -s 'inside: { kind: function_declaration }' ./src
```

### 2. Be Specific

```bash
# แยก TypeScript จาก JavaScript
ast-grep -p '$ID' -l ts ./src

# ระบุ exact type
ast-grep -p '$VAL:string' -l ts ./src
```

### 3. Test Before Rewrite

```bash
# ค้นหาก่อน
ast-grep -p '$OLD' -l ts ./src

# ค่อย rewrite
ast-grep -p '$OLD' -l ts -r '$NEW' --interactive ./src
```

## Rule Writing

### Clear Rule ID

```yaml
id: prefer-const-for-immutable
# ใช้ชื่อที่สื่อความหมาย
```

### Descriptive Message

```yaml
id: no-console-log
message: "Don't use console.log. Use a proper logging library like pino or winston."
```

### Add Examples

```yaml
id: no-console-log
message: "Don't use console.log. Use a proper logging library."
example:
  match: console.log("debug")
  should: logger.info("debug")
```

## Performance

### Use globs

```bash
# exclude test files
ast-grep -p '$PATTERN' --globs '**/*.ts' --globs '!**/*.test.ts' ./src
```

### Specify Language

```bash
# เร็วขึ้นเพราะ parse เฉพาะ TypeScript
ast-grep -p '$PATTERN' -l ts ./src
```

### Limit Results

```bash
# หาเฉพาะ 10 ผลลัพธ์แรก
ast-grep -p '$PATTERN' -l ts --limit 10 ./src
```

## Project Structure

### Recommended Layout

```
project/
├── sg.config.yml
├── rules/
│   ├── security.yml
│   ├── style.yml
│   └── best-practices.yml
└── src/
```

### sg.config.yml

```yaml
ruleDirs:
  - rules/
language: typescript
```

## Workflows

### Refactoring Workflow

1. **Search**: ค้นหาทั้งหมดก่อน
2. **Analyze**: วิเคราะห์ผลลัพธ์
3. **Test**: รัน tests ก่อนแก้ไข
4. **Rewrite**: แก้ไขทีละ step
5. **Verify**: ตรวจสอบผลลัพธ์

### CI Integration

```yaml
# .github/workflows/lint.yml
- name: Run ast-grep
  run: sg run --rule security
```

## Common Pitfalls

| Pitfall | Solution |
|---------|----------|
| Pattern กว้างเกิน | ใช้ more specific patterns |
| แก้ไขทั้งหมดในครั้งเดียว | ใช้ `--interactive` |
| ไม่รัน tests | รัน tests ก่อนทุกครั้ง |
| ไม่ backup | ใช้ git ก่อนแก้ไข |

## Testing Rules

### Dry Run

```bash
# ดูผลลัพธ์ก่อน apply
ast-grep -p '$OLD' -r '$NEW' ./src | head -20
```

### Local Rule Testing

```bash
# สร้าง test file
echo 'console.log("test")' > test.ts

# test pattern
ast-grep -p 'console.log($ARG)' -l ts test.ts

# cleanup
rm test.ts
```