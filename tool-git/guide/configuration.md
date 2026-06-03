# Configuration

## การตั้งค่า Git

### ระดับของ Configuration

| Level | Command | File |
|-------|---------|------|
| **System** | `git config --system` | `/etc/gitconfig` |
| **Global** | `git config --global` | `~/.gitconfig` |
| **Local** | `git config --local` | `.git/config` |

### การตั้งค่าพื้นฐาน

```bash
# ตั้งชื่อผู้ใช้
git config --global user.name "Your Name"

# ตั้ง email
git config --global user.email "your.email@example.com"

# ตั้ง default editor
git config --global core.editor "code --wait"
```

### Editor Configuration

| Editor | Command |
|--------|---------|
| VS Code | `git config --global core.editor "code --wait"` |
| Vim | `git config --global core.editor "vim"` |
| Nano | `git config --global core.editor "nano"` |

### Line Ending Configuration

```bash
# Windows
git config --global core.autocrlf true

# Linux/macOS
git config --global core.autocrlf input
```

### Alias Configuration

```bash
# สร้าง alias สำหรับ commands ที่ใช้บ่อย
git config --global alias.st "status"
git config --global alias.co "checkout"
git config --global alias.br "branch"
git config --global alias.cm "commit"
git config --global alias.unstage "reset HEAD --"
git config --global alias.last "log -1 HEAD"
git config --global alias.lg "log --oneline --graph --decorate"
```

### ใช้งาน Alias

```bash
# แทน git status
git st

# แทน git log --oneline --graph --decorate
git lg

# แทน git checkout
git co
```

### Credential Storage

```bash
# เก็บ credentials ชั่วคราว (15 นาที)
git config --global credential.helper cache

# เก็บ credentials ถาวร
git config --global credential.helper store
```

### Default Branch

```bash
# ตั้งชื่อ default branch
git config --global init.defaultBranch main
```

### Push Configuration

```bash
# push เฉพาะ current branch
git config --global push.default current

# push เฉพาะ matching branches
git config --global push.default matching
```

### Color Configuration

```bash
# เปิดใช้งาน colors
git config --global color.ui auto

# ปิด colors (บางครั้งต้องการ)
git config --global color.ui never
```

### ดู Configuration ทั้งหมด

```bash
# ดู configuration ปัจจุบัน
git config --list

# ดู configuration เฉพาะ
git config user.name
git config core.editor
```

### แก้ไข Configuration โดยตรง

```bash
# เปิดไฟล์ config ใน editor
git config --global --edit
```

| Configuration | Description |
|--------------|-------------|
| `user.name` | ชื่อผู้ใช้สำหรับ commits |
| `user.email` | Email สำหรับ commits |
| `core.editor` | Editor ที่ใช้เริ่มต้น |
| `alias.<name>` | Custom aliases |
| `push.default` | Default push behavior |