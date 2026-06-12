# Code Block Format

## รูปแบบ Code Block มาตรฐาน

### Basic Code Block

```markdown
```typescript
const x = 1;
```
```

### Code Block with Filename

```markdown
```typescript filename="example.ts"
const x = 1;
```
```

### Code Block with Line Numbers

```markdown
```typescript {1-3}
const x = 1;
const y = 2;
const z = 3;
```
```

### When to Use

- แสดง examples
- แสดง configuration
- แสดง API usage
- แสดง implementation

### Best Practices

- ใช้ syntax highlighting ที่ถูกต้อง
- ใช้ filename เมื่อจำเป็น
- ใช้ line numbers เมื่ออ้างอิงถึง line ที่เฉพาะเจาะจง
- ให้ code สั้นและอ่านง่าย
