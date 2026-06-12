# Iframe Format

## รูปแบบ Iframe มาตรฐาน

### Basic Iframe

```markdown
<iframe src="https://example.com"></iframe>
```

### Iframe with Dimensions

```markdown
<iframe src="https://example.com" width="100%" height="400"></iframe>
```

### Iframe with Sandbox

```markdown
<iframe src="https://example.com" sandbox></iframe>
```

### Iframe with Loading

```markdown
<iframe src="https://example.com" loading="lazy"></iframe>
```

### When to Use

- embed external content
- แสดง maps
- แสดง charts
- แสดง interactive demos

### Best Practices

- ใช้ sandbox เมื่อเป็นไปได้
- ใช้ lazy loading
- ให้ dimensions เหมาะสม
- พิจารณา security
