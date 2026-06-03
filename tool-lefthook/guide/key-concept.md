# Key Concept

## แนวคิดหลักของ Lefthook

### Lefthook คืออะไร?

Lefthook เป็น Git hooks manager ที่รวดเร็วและทรงพลัง ออกแบบมาเพื่อแก้ปัญหาของเครื่องมืออื่นๆ เช่น Husky และ pre-commit

### Core Concepts

| Concept | Description |
|---------|-------------|
| **Hooks** | Scripts ที่ทำงานเมื่อ Git events เกิดขึ้น |
| **lefthook.yml** | Configuration file หลัก |
| **Commands** | Commands ที่จะรันเมื่อ hook ถูก trigger |
| **Pipeline** | ลำดับการทำงานของ commands |
| **Remote Configs** | รองรับ extends จาก external configs |

### Hook Types ที่รองรับ

| Hook | Description | Common Use |
|------|-------------|------------|
| `pre-commit` | รันก่อน commit | Lint, formatting, tests |
| `commit-msg` | รันหลังเขียน message | Validate message format |
| `pre-push` | รันก่อน push | Run full test suite |
| `post-commit` | รันหลัง commit | Notify, cleanup |
| `pre-rebase` | รันก่อน rebase | Check conflicts |
| `post-merge` | รันหลัง merge | Update dependencies |

### lefthook.yml Structure

```yaml
# lefthook.yml
{hook_name}:
  {pipeline_type}:
    {command_name}:
      {option}: {value}
```

### Execution Modes

| Mode | Description |
|------|-------------|
| **Sequential** | รัน commands ทีละตัว |
| **Parallel** | รัน commands พร้อมกัน |
| **Fail-fast** | หยุดเมื่อ command ล้มเหลว |

### เมื่อไหร่ควรใช้ Lefthook?

| สถานการณ์ | เหตุผล |
|-----------|--------|
| หลายภาษาใน project | รองรับ Node.js, Ruby, Go, Python |
| ต้องการความเร็ว | รัน parallel ได้ |
| Team หลายคน | Config แชร์ผ่าน repo ได้ |
| CI/CD pipeline | ทำงานเหมือน local กับ remote |