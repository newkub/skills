# Best Practices

## Purpose

แนวทางปฏิบัติที่ดีในการใช้ Trae IDE

## Code Review

### Review AI Output

| Practice | Why |
|----------|-----|
| ตรวจสอบโค้ดก่อน apply | ป้องกัน bugs |
| ทดสอบหลัง generate | ยืนยันว่าทำงานถูก |
| อ่าน explanation | เข้าใจว่าโค้ดทำอะไร |
| ถามคำถามถ้าไม่เข้าใจ | ใช้ Chat ถามได้เลย |

### Use Builder Mode for Complex Tasks

```text
✅ DO:
"Create a user authentication system with JWT"
"Refactor the API layer to use Repository pattern"
"Add error handling to all API endpoints"

❌ DON'T:
"Fix all bugs in the project" (too vague)
"Make it better" (unclear goal)
```

## Context Management

### Provide Clear Context

| Good | Bad |
|------|-----|
| "ในไฟล์ `auth.js` บรรทัด 42" | "fix this" |
| "project ใช้ Express.js" | "build web app" |
| "attach error log" | "it doesn't work" |

### Use Attachments Effectively

```text
Attach:
├── Screenshots (UI issues)
├── Error logs (debugging)
├── Terminal output (command issues)
└── Code snippets (specific problems)
```

## Efficient Workflows

### Recommended Task Flow

```
1. Open/Create Project
   │
2. Understand Requirements
   │   └── Use Chat to clarify doubts
   │
3. Plan with Builder Mode (for complex tasks)
   │   └── Review preview carefully
   │
4. Generate Code
   │   └── Use inline completion for simple tasks
   │
5. Review and Test
   │   └── Run tests, verify functionality
   │
6. Iterate if needed
       └── Use Chat for refinements
```

### When to Use Each Mode

| Task | Mode | Reason |
|------|------|--------|
| Simple completion | Inline | Fast |
| Explain code | Quick Chat | Minimal context |
| Multi-file changes | Builder Mode | Preview & control |
| Debugging | Chat + Attachments | Full context |
| Commands | Terminal Suggestions | Direct execution |

## Project Organization

| Practice | Benefit |
|----------|---------|
| Open folder (not files) | AI เข้าใจ project structure |
| Include config files | Better suggestions |
| Use git | Track AI changes |
| Organize by feature | Easier maintenance |

## Security Practices

| Practice | Why |
|----------|-----|
| ไม่แชร์ API keys | ป้องกัน leaks |
| Review โค้ดก่อน commit | ตรวจสอบ AI output |
| ใช้ .env files | แยก secrets ออก |

## Productivity Tips

| Tip | How |
|-----|-----|
| Learn shortcuts | ทำงานเร็วขึ้น |
| Use Chat for learning | ถาม "อธิบายโค้ดนี้" |
| Attach screenshots | รับความช่วยเหลือที่แม่นยำกว่า |
| Review suggestions | AI ไม่ได้ถูกต้องเสมอ |

## Summary

| Category | Best Practice |
|----------|----------------|
| **Review** | Always review AI output before applying |
| **Context** | Provide clear, specific context |
| **Mode** | Choose right mode for task |
| **Security** | Don't share sensitive data |
| **Workflow** | Plan → Generate → Review → Test |