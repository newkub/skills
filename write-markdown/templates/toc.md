# Table of Contents Format

## รูปแบบ Table of Contents มาตรฐาน

### Auto TOC (ถ้ารองรับ)

```markdown
[[toc]]
```

### Manual TOC

```markdown
## Table of Contents

- [Section 1](#section-1)
  - [Subsection 1.1](#subsection-11)
- [Section 2](#section-2)
- [Section 3](#section-3)
```

### TOC with Depth

```markdown
[[toc depth="2"]]
```

### TOC with Exclusions

```markdown
[[toc exclude="Introduction,Conclusion"]]
```

### When to Use

- สร้าง navigation
- ทำให้ content ค้นหาง่าย
- สำหรับ long documents
- สำหรับ documentation

### Best Practices

- ใช้ auto TOC เมื่อรองรับ
- ให้ TOC อยู่ด้านบน
- ใช้ descriptive links
- อัปเดต TOC เมื่อ content เปลี่ยน
