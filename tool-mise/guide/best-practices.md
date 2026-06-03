# Best Practices

แนวทางปฏิบัติที่ดีในการใช้ mise

## Project Configuration

- **ใช้ `.mise.toml`** - สร้างใน root ของ project เพื่อกำหนด tool versions
- **Commit config** - commit `.mise.toml` เพื่อให้ทีมใช้ version เดียวกัน
- **อย่าใช้ legacy files** - ถ้าไม่จำเป็นต้อง support asdf

## Tool Management

| Practice | Description |
|----------|-------------|
| **กำหนด patch versions** | ใช้ `node = "20"` แทน `node = "20.0.0"` |
| **ใช้ .mise.toml** | สำหรับ project-level มากกว่า global |
| **ติดตั้ง plugins** | ติดตั้งเฉพาะ plugins ที่ใช้ |

## CI/CD Integration

```bash
# Install mise in CI
curl https://mise.run | sh

# Install tools
mise install

# Tools will be auto-activated from .mise.toml
```

## Shell Integration

```bash
# Add to shell config (.bashrc, .zshrc)
eval "$(mise activate bash)"
```

## Common Pitfalls

- **อย่า hardcode versions** - ใช้ `.mise.toml` แทน
- **อย่าใช้ PATH ตรงๆ** - ให้ mise จัดการผ่าน shims
- **Beware of symlinks** - บน Windows อาจมีปัญหาเรื่อง symlinks
