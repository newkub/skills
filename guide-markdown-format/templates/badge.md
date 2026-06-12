# Badge Format

## รูปแบบ Badge มาตรฐาน

### Basic Badge (ถ้ารองรับ)

```markdown
<Badge type="tip" text="Tip" />
<Badge type="warning" text="Warning" />
<Badge type="danger" text="Danger" />
<Badge type="info" text="Info" />
```

### Badge with Color

```markdown
<Badge type="tip" text="Tip" color="blue" />
```

### Custom Badge

```markdown
<Badge text="Custom" />
```

### Badge in Heading

```markdown
## Section <Badge type="warning" text="Beta" />
```

### When to Use

- แสดง status
- แสดง version
- แสดง warnings
- แสดง tips
- แสดง tags

### Best Practices

- ใช้ badge type ที่เหมาะสม
- ให้ badge text สั้น
- หลีกเลี่ยง badges มากเกิน 3 ต่อ heading
- ใช้ badges เมื่อจำเป็นเท่านั้น
