# RMUX

Terminal multiplexer สำหรับ automation ที่เขียนด้วย Rust เข้ากันได้กับ tmux และมี Rust SDK สำหรับ programmatic control

## File Structure

| Folder | Description |
|--------|-------------|
| guide/ | Guides และ tutorials สำหรับการใช้งาน |
| reference/ | ลิงก์และ references จาก official sources |
| references/cli.md | CLI commands และ usage |
| references/configuration.md | Configuration options |
| references/api.md | Rust SDK API |
| references/web.md | Web resources |
| examples/ | ตัวอย่างการใช้งาน |
| rules/ | Rules และ conventions |
| patterns/ | Design patterns |
| usecase/ | Use cases |
| workflows/ | Workflows |
| integration/ | Integration กับ tools อื่นๆ |
| changelog/ | Changelog และ version history |


## When to use



## Skills Related



## References


## Usage Order

1. **Start**: `guide/key-concept.md` → `guide/quick-start.md`
2. **Setup**: `guide/installation.md` → `guide/configuration.md`
3. **Learn**: `guide/all-features.md` → `guide/best-practices.md`
4. **Reference**: `references/cli.mdindex.md` → `references/api.mdindex.md`
5. **Examples**: `examples/automation.md` → `examples/session-management.md`
6. **Advanced**: `patterns/` → `usecase/` → `workflows/`
7. **Troubleshoot**: `guide/troubleshooting.md`

## Reference Files

| Folder | File | Description |
|--------|------|-------------|
| reference/ | official.md | Official links |
| references/cli.md | index.md | CLI commands |
| references/configuration.md | index.md | Configuration options |
| references/api.md | index.md | Rust SDK API |
| references/web.md | index.md | Web resources |

## Guide Files

| File | Description |
|------|-------------|
| key-concept.md | แนวคิดหลักของ RMUX |
| quick-start.md | เริ่มต้นใช้งานอย่างรวดเร็ว |
| all-features.md | Features ทั้งหมด |
| installation.md | การติดตั้ง |
| configuration.md | การตั้งค่า |
| troubleshooting.md | การแก้ปัญหา |
| best-practices.md | Best practices |

## Quick Commands

```bash
# Create session
rmux new-session -s mysession

# Attach to session
rmux attach -t mysession

# List sessions
rmux ls
```