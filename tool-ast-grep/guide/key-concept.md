# Key Concept

## What is ast-grep?

ast-grep เป็น CLI tool ที่ใช้ Abstract Syntax Tree (AST) สำหรับ:
- **Code Search**: ค้นหา code ตาม structure ไม่ใช่ text
- **Code Lint**: เขียน lint rules ในรูปแบบ YAML
- **Code Rewrite**: แก้ไข code อัตโนมัติตาม patterns

## Core Concepts

### 1. Pattern

Pattern คือ code ที่เราเขียนเพื่อ match AST nodes:

```javascript
// pattern นี้ match code ที่มี structure:
// การ access property ตามด้วยการเรียก method เดียวกัน
$PROP && $PROP()
```

### 2. Metavariable

| Metavariable | Match |
|--------------|-------|
| `$NAME` | ตัวแปร single node |
| `$...NAME` | spread nodes (หลาย nodes) |
| `$NAME?` | optional node |
| `$NAME:N` | typed metavariable |

### 3. AST Node Types

| Category | Examples |
|----------|-----------|
| Expressions | `identifier`, `call_expression`, `await_expression` |
| Statements | `function_declaration`, `if_statement`, `return_statement` |
| Types | `primitive_type`, `union_type`, `array_type` |
| Patterns | `string`, `number`, `boolean`, `null` |

## How It Works

```
Code Text → Parser → AST → Pattern Matcher → Results
```

1. **Parse**: ast-grep ใช้ tree-sitter เพื่อ parse code เป็น AST
2. **Match**: Pattern จะถูกแปลงเป็น tree-sitter query
3. **Results**: แสดงผล matched nodes พร้อม context

## Use Cases

| Use Case | Example |
|----------|---------|
| Find patterns | ค้นหา async functions ที่ไม่มี error handling |
| Refactor | เปลี่ยน `var` → `let/const` |
| Lint | ตรวจสอบ code style |
| Security | หา potential security issues |
| Migration | migrate code จาก library เวอร์ชันเก่า |

## Advantages over Text Search

| Text Search | ast-grep |
|-------------|----------|
| Grep หา string | Match AST structure |
| ต้องระบุ indent | ไม่สน indent |
| ระบุ whitespace | ไม่สน whitespace |
| หาแยกชิ้นส่วน | match semantic structure |

## Pattern Examples

### Simple Match

```bash
# หา console.log ทั้งหมด
ast-grep -p 'console.log($ARG)' -l js ./src
```

### Conditional Match

```bash
# หา if ที่มี condition ยาว
ast-grep -p 'if ($COND && $COND2)' -l ts ./src
```

### Nested Match

```bash
# หา await inside loop
ast-grep -p 'await $EXPR' -l ts -s 'inside: { kind: for_statement }' ./src
```

## Next Steps

- ดู [all-features.md](all-features.md) สำหรับรายละเอียดทุก feature
- ดู [best-practices.md](best-practices.md) สำหรับแนวทางปฏิบัติ