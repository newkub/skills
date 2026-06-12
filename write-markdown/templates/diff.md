# Diff Format

## รูปแบบ Diff มาตรฐาน

### Basic Diff

```markdown
```diff
- Old line
+ New line
```
```

### Diff with Context

```markdown
```diff
  Context line
- Removed line
+ Added line
  Context line
```
```

### Inline Diff

```markdown
- `oldValue`
+ `newValue`
```

### When to Use

- แสดง code changes
- แสดง configuration changes
- แสดง before/after comparisons
- แสดง migration steps

### Best Practices

- ใช้ `-` สำหรับ removed
- ใช้ `+` สำหรับ added
- ให้ context เพียงพอ
- ใช้ inline diff สำหรับ changes เล็กๆ
