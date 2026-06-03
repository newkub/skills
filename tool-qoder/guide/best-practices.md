# Best Practices

แนวทางปฏิบัติที่ดีเมื่อใช้ Qoder

## Code Quality

### ✅ ควรทำ

| Practice | Example |
|----------|---------|
| **Review ก่อน accept** | อ่าน suggestion ก่อนกด Tab |
| **Understand context** | ใช้ Chat เพื่อเข้าใจว่าทำอะไร |
| **Test suggestions** | รัน tests หลัง apply code ใหม่ |
| **Keep context clean** | ลบ conversation ที่ไม่จำเป็น |

### ❌ ไม่ควรทำ

| Practice | Why |
|----------|-----|
| **Accept blindly** | Suggestions อาจไม่ตรง context |
| **Ignore errors** | Check output เสมอ |
| **Skip tests** | Run tests หลังทำ changes |
| **Over-rely** | Qoder ช่วยได้ แต่ต้อง review |

## Prompt Engineering

### ✅ ควรทำ

| Practice | Example |
|----------|---------|
| **Be specific** | "Add error handling to fetchUser function" |
| **Provide context** | "In the auth module, not globally" |
| **State constraints** | "Use TypeScript, no external deps" |
| **Ask for explanation** | "Explain why this approach is better" |

### ❌ ไม่ควรทำ

| Practice | Why |
|----------|-----|
| **Too vague** | "Fix this" ไม่ชัดเจน |
| **Missing scope** | "Change it" ไม่รู้ว่าอะไร |
| **Assume perfect** | ตรวจสอบ output เสมอ |

## Context Management

### Project Rules

สร้าง `.qoder/rules/` เพื่อกำหนด conventions:

```
.qoder/
└── rules/
    ├── naming.md
    ├── architecture.md
    └── testing.md
```

### Benefits

- Suggestions สอดคล้องกับ project style
- ลดการแก้ไขหลัง apply
- Team consistency

## Agent Delegation

### ✅ ควรทำ

| Practice | Description |
|----------|-------------|
| **Break down tasks** | แบ่งเป็น smaller subtasks |
| **Set clear goals** | บอก expected outcome |
| **Monitor progress** | ดู artifact review เป็นระยะ |
| **Provide feedback** | Correct agent when wrong |

### Quest Workspace Tips

1. **Start small** - ฝึกกับ task เล็กๆ ก่อน
2. **Iterate** - Refine คำขอถ้าไม่ตรง
3. **Review everything** - ตรวจสอบ code ทุกครั้ง

## Security

### ✅ ควรทำ

| Practice | Description |
|----------|-------------|
| **Use Vaults** | เก็บ secrets ใน Vaults |
| **Rotate keys** | เปลี่ยน API keys เป็นระยะ |
| **Limit access** | ใช้ least privilege |

### ❌ ไม่ควรทำ

| Practice | Why |
|----------|-----|
| **Commit secrets** | ใช้ Vaults แทน |
| **Share credentials** | ใช้ Teams access แทน |
| **Ignore warnings** | Security alerts สำคัญ |

## Team Collaboration

### Sharing Context

```markdown
# In project README

## Qoder Setup

Run these commands after clone:
```bash
qoder setup
qoder sync --team
```
```

### Code Review

1. ใช้ Qoder ช่วย review code
2. Apply suggestions ที่เหมาะสม
3. Discuss กับ team ถ้าไม่แน่ใจ

## Performance

### Optimize Context

| Practice | Impact |
|-----------|--------|
| **Exclude deps** | Faster indexing |
| **Use .qoderignore** | Reduce noise |
| **Update rules** | Better suggestions |

### .qoderignore Example

```
node_modules/
dist/
*.min.js
.env
```

## Continuous Learning

### Track Patterns

1. Note what works
2. Refine project rules
3. Share with team

### Feedback Loop

```
Use Qoder
   │
   ├── Works well? → Continue
   │
   └── Not good? → Refine prompt / rules
                      │
                      └── Still bad? → Report bug
```

## Summary Checklist

- [ ] Review suggestions before accepting
- [ ] Use project rules for consistency
- [ ] Be specific in prompts
- [ ] Monitor agent tasks
- [ ] Store secrets in Vaults
- [ ] Run tests after changes
- [ ] Update .qoderignore
- [ ] Share best practices with team