# Features

## Features ทั้งหมดของ Lefthook

### Core Features

| Feature | Description |
|---------|-------------|
| **Fast Execution** | เขียนด้วย Go ให้ความเร็วสูง |
| **Parallel Execution** | รัน commands หลายตัวพร้อมกัน |
| **Multi-language** | รองรับ Node.js, Ruby, Python, Go |
| **Single Binary** | ไม่ต้องติดตั้ง runtime |

### Configuration Features

| Feature | Description |
|---------|-------------|
| **YAML Config** | ใช้ YAML สำหรับ configuration |
| **Remote Configs** | extends จาก remote files |
| **Glob Patterns** | กรองไฟล์ด้วย glob |
| **Variables** | ใช้ตัวแปรใน config |
| **Environment Variables** | ส่ง env ไปยัง commands |

### Hook Management

| Feature | Description |
|---------|-------------|
| **Auto Install** | สร้าง hooks อัตโนมัติ |
| **Multi Hooks** | รองรับทุก Git hooks |
| **Skip Options** | ข้าม hooks ได้หลายวิธี |
| **Dry Run** | ทดสอบโดยไม่ execute |

### Execution Options

| Feature | Description |
|---------|-------------|
| **Parallel** | รัน parallel mode |
| **Sequential** | รันทีละตัว |
| **Fail-Fast** | หยุดเมื่อล้มเหลว |
| **Interactive** | รองรับ stdin |

### Command Options

```yaml
commands:
  lint:
    run: npm run lint          # command to run
    glob: "*.{js,ts}"          # file filter
    exclude: "*.test.js"       # exclude files
    env:                       # environment
      NODE_ENV: test
    cwd: ./frontend            # working directory
    priority: 1                # execution order
    tags: [frontend, ci]       # tags for filtering
```

### Pipeline Types

| Type | Description |
|------|-------------|
| `commands` | Regular command execution |
| `scripts` | Run script files (.rb, .py, .js) |
| `pipe` | Pipe output between commands |

### Advanced Features

| Feature | Description |
|---------|-------------|
| **Staged Files** | Access to staged files list |
| **Root Directory** | Configurable root |
| **Verbose Mode** | Detailed output |
| **JSON Output** | Machine-readable output |
| **Version Check** | Enforce tool versions |