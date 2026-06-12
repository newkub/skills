# Terminal Format

## รูปแบบ Terminal Output มาตรฐาน

### Basic Terminal

```markdown
```bash
$ command
output
```
```

### Terminal with Prompt

```markdown
```bash
$ npm install
added 1 package in 0.5s
```
```

### Terminal with Error

```markdown
```bash
$ command
Error: Something went wrong
```
```

### PowerShell Terminal

```markdown
```powershell
PS> command
output
```
```

### Multi-line Command

```markdown
```bash
$ command \
  --option1 \
  --option2
```
```

### When to Use

- แสดง command examples
- แสดง installation steps
- แสดง error messages
- แสดง build output
- แสดง test results

### Best Practices

- ใช้ shell ที่ถูกต้อง (bash, powershell, cmd)
- ใช้ `$` หรือ `>` สำหรับ prompt
- แสดง actual output
- ใช้ realistic examples
- แสดง error messages อย่างชัดเจน
