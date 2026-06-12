# Details Format

## รูปแบบ Details มาตรฐาน

### Basic Details

```markdown
<details>
<summary>Click to expand</summary>

Content here

</details>
```

### Details Open by Default

```markdown
<details open>
<summary>Click to expand</summary>

Content here

</details>
```

### Details with Icon

```markdown
<details>
<summary>📖 Click to expand</summary>

Content here

</details>
```

### Nested Details

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

- ซ่อน advanced content
- ซ่อน optional information
- ซ่อน implementation details
- ซ่อน troubleshooting steps

### Best Practices

- ใช้ descriptive summary
- เปิด default เฉพาะ content สำคัญ
- หลีกเลี่ยง nested ลึกเกิน 2 ระดับ
- ให้ content สั้นและอ่านง่าย
