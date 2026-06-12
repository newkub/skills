# Collapsible Format

## รูปแบบ Collapsible มาตรฐาน

### Basic Collapsible (ถ้ารองรับ)

```markdown
<details>
<summary>Click to expand</summary>

Content here

</details>
```

### Collapsible with Open State

```markdown
<details open>
<summary>Click to expand</summary>

Content here

</details>
```

### Nested Collapsible

```markdown
<details>
<summary>Outer</summary>

<details>
<summary>Inner</summary>

Content

</details>

</details>
```

### When to Use

- ซ่อน content ที่ยาว
- ซ่อน advanced options
- ซ่อน optional information
- ซ่อน implementation details
- ซ่อน troubleshooting steps

### Best Practices

- ใช้ descriptive summary
- เปิด default เฉพาะ content สำคัญ
- หลีกเลี่ยง nested ลึกเกิน 2 ระดับ
- ให้ content สั้นและอ่านง่าย
