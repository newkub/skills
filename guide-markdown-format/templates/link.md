# Link Format

## รูปแบบ Link มาตรฐาน

### Basic Link

```markdown
[Link text](https://example.com)
```

### Link with Title

```markdown
[Link text](https://example.com "Link title")
```

### Reference Link

```markdown
[Link text][reference]

[reference]: https://example.com
```

### Auto Link

```markdown
<https://example.com>
```

### Internal Link

```markdown
[Link to section](#section-id)
[Link to file](./file.md)
```

### Link with Icon

```markdown
[Link text](https://example.com) <ExternalLink />
```

### When to Use

- อ้างอิง external resources
- เชื่อมโยง internal sections
- อ้างอิง documentation
- อ้างอิง examples

### Best Practices

- ใช้ descriptive link text
- หลีกเลี่ยง "click here"
- ใช้ reference links เมื่อใช้ URL เดียวกันหลายครั้ง
- ตรวจสอบว่า links ยังใช้งานได้
