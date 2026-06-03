# Quick Start

## Basic Search

ค้นหา pattern ที่ตรงกับ code structure:

```bash
ast-grep --pattern '$PROP && $PROP()' --lang ts ./src
```

### Pattern Syntax

| Pattern | ความหมาย |
|---------|----------|
| `console.log($ARG)` | match console.log ที่มี arguments |
| `$A && $A()` | match การเรียก method หลังจาก check null |
| `await $EXPR` | match await expression |

### Metavariables

ใช้ `$` + ตัวพิมพ์ใหญ่ เพื่อ match any AST node:

```bash
# Match any function call
ast-grep -p '$CALL()' -l ts ./src

# Match any identifier
ast-grep -p '$ID' -l ts ./src

# Match multiple nodes
ast-grep -p 'const $NAME = $VALUE' -l ts ./src
```

## Rewrite

เปลี่ยน code ด้วย rewrite pattern:

```bash
ast-grep -p '$A && $A()' -l ts -r '$A?.()' --interactive ./src
```

### Interactive Mode

```bash
# แสดง preview ก่อน apply
ast-grep -p 'var $VAR = $VAL' -l ts -r 'let $VAR = $VAL' --interactive ./src
```

### Auto Apply

```bash
# apply โดยไม่ต้องยืนยัน
ast-grep -p '$OLD' -l ts -r '$NEW' ./src
```

## Language Support

| Language | Extension | Notes |
|----------|-----------|-------|
| JavaScript | .js, .jsx | |
| TypeScript | .ts, .tsx | แนะนำ |
| Python | .py | |
| Rust | .rs | |
| Go | .go | |
| YAML | .yml, .yaml | v0.20+ |
| PHP | .php | v0.20+ |
| Java | .java | |
| C# | .cs | |

## Common Workflows

### 1. Find and Replace Refactor

```bash
# ค้นหาทั้งหมดก่อน
ast-grep -p '$A && $A()' -l ts ./src

# rewrite
ast-grep -p '$A && $A()' -l ts -r '$A?.()' --interactive ./src
```

### 2. Lint with Rules

```bash
# สร้าง rule file: sg.config.yml
# รัน lint
ast-grep run
```

### 3. Batch Rewrite

```bash
# rewrite หลาย patterns
for pattern in "pattern1" "pattern2" "pattern3"; do
  ast-grep -p "$pattern" -l ts -r "replacement" ./src
done
```

## Next Steps

- ดู [key-concept.md](key-concept.md) สำหรับแนวคิดหลัก
- ดู [all-features.md](all-features.md) สำหรับ features ทั้งหมด
- ดู [configuration.md](configuration.md) สำหรับการตั้งค่า