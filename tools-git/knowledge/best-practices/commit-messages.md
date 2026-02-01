# Commit Messages Best Practices

## Conventional Commits
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Types
- `feat`: ฟีเจอร์ใหม่
- `fix`: แก้ไข bug
- `docs`: แก้ไข documentation
- `style`: แก้ไข formatting ไม่เกี่ยวกับ logic
- `refactor`: ปรับปรุงโค้ด
- `test`: เพิ่ม/แก้ไข tests
- `chore`: งานทั่วไปที่ไม่เปลี่ยน production code

## Examples
```bash
feat(auth): add OAuth2 authentication
fix: resolve login validation error
docs: update API documentation
style: format code with prettier
refactor: extract user service
test: add unit tests for auth module
chore: update dependencies
```

## Guidelines
- ใช้ present tense: "add" ไม่ใช่ "added"
- ใช้ lowercase ยกเว้น proper nouns
- ไม่ต้องมี period ท้ายข้อความ
- อธิบายว่าทำอะไรและทำไม
