# Tabs Format

## รูปแบบ Tabs มาตรฐาน

### Basic Tabs (ถ้ารองรับ)

```markdown
:::tabs

# Tab 1

Content for tab 1

# Tab 2

Content for tab 2

:::
```

### Tabs with Labels

```markdown
:::tabs

# TypeScript

```typescript
const x = 1;
```

# JavaScript

```javascript
const x = 1;
```

:::
```

### When to Use

- แสดง code ในหลายภาษา
- แสดง alternatives
- แสดง platform-specific content
- แสดง version differences
- แสดง configuration options

### Best Practices

- ใช้ descriptive tab labels
- ให้ content ในแต่ละ tab สั้น
- หลีกเลี่ยง tabs มากเกิน 5
- ใช้ tabs เมื่อ content มีความสัมพันธ์กัน
