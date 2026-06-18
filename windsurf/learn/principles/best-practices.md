# Best Practices

## Purpose

Best practices สำหรับการใช้งาน Windsurf อย่างมีประสิทธิภาพ

## General Principles

### 1. Start Simple

เริ่มจาก tasks ที่ง่ายก่อน:
- Learn basic features first
- Gradually increase complexity
- Build confidence with small wins

### 2. Use Context Wisely

ใช้ context อย่างมีประสิทธิภาพ:
- @-mention only relevant files
- Use Fast Context for large codebases
- Avoid overloading with unnecessary context

### 3. Review Before Accepting

ตรวจสอบก่อน accept:
- Review code changes
- Check for edge cases
- Verify tests pass

### 4. Iterate and Refine

ปรับปรุงอย่างต่อเนื่อง:
- Refine prompts based on results
- Learn from mistakes
- Build on successful patterns

## Cascade Best Practices

### Plan Complex Tasks

ใช้ Plan mode สำหรับ tasks ที่ซับซ้อน:
- Break down into steps
- Review plan before execution
- Adjust based on feedback

### Use Checkpoints

บันทึก checkpoints สำหรับ tasks ที่ยาว:
- Save progress at key points
- Revert if needed
- Compare different approaches

### Leverage Tools

ใช้ tools อย่างเต็มที่:
- Let Cascade use appropriate tools
- Don't manually do what tools can do
- Trust the tool selection

### Provide Clear Instructions

เขียน instructions ที่ชัดเจน:
- Be specific about requirements
- Include constraints
- Define success criteria

## Chat Best Practices

### Use @-Mentions

เพิ่ม context ด้วย @-mentions:
- `@file` for specific files
- `@folder` for directories
- `@terminal` for command output
- `@web` for web search

### Ask Follow-up Questions

ถามคำถามต่อเพื่อความชัดเจน:
- Clarify ambiguous requests
- Explore alternatives
- Deepen understanding

### Use Persistent Context

รักษา context ระหว่าง messages:
- Build on previous responses
- Reference earlier parts of conversation
- Maintain thread of discussion

## Autocomplete Best Practices

### Learn Keyboard Shortcuts

ใช้ shortcuts เพื่อความรวดเร็ว:
- `Tab` to accept
- `Esc` to dismiss
- `Ctrl/Cmd + Arrow` to navigate suggestions

### Provide Type Hints

ช่วย Windsurf เข้าใจ types:
- Use TypeScript
- Add JSDoc comments
- Define interfaces clearly

### Write Idiomatic Code

เขียน code ตาม patterns ที่ถูกต้อง:
- Follow language conventions
- Use standard libraries
- Maintain consistent style

## Context Awareness Best Practices

### Configure .codeiumignore

จัดการ files ที่ไม่ต้องการ index:
```
node_modules/
dist/
*.min.js
**/*.test.js
```

### Use Knowledge Base

เพิ่ม external documentation:
- Add API docs
- Include framework guides
- Reference internal standards

### Monitor Context Usage

ตรวจสอบ context ที่ใช้:
- Check which files are included
- Remove unnecessary context
- Optimize for relevance

## Security Best Practices

### Review Generated Code

ตรวจสอบ code ที่สร้าง:
- Check for security vulnerabilities
- Validate input handling
- Review authentication/authorization

### Use Auto-Execution Wisely

ตั้งค่า auto-execution อย่างระมัดระวัง:
- Level 0 for sensitive operations
- Level 1-2 for development
- Level 3 only in trusted environments

### Protect Secrets

ไม่ expose secrets:
- Use environment variables
- Don't hardcode credentials
- Review generated code for secrets

## Team Collaboration

### Share Skills and Workflows

แชร์ knowledge ในทีม:
- Create shared skills
- Define standard workflows
- Document best practices

### Use AGENTS.md

กำหนด behavior สำหรับ AI agents:
- Define project-specific rules
- Set coding standards
- Configure automation preferences

### Consistent Prompts

ใช้ prompt patterns ที่สม่ำเสมอ:
- Create prompt templates
- Share effective prompts
- Document prompt strategies

## Performance Optimization

### Optimize Context

ลด context ที่ไม่จำเป็น:
- Use @-mentions selectively
- Configure .codeiumignore
- Monitor token usage

### Choose Right Model

เลือก model ตาม task:
- Base model for simple tasks
- Premier for complex work
- Custom models for specific needs

### Use Caching

ใช้ features ที่มี caching:
- Fast Context caches results
- Knowledge Base pre-indexes
- Remote indexing for large repos

## Summary

| Area | Best Practice |
|------|---------------|
| **General** | Start simple, iterate |
| **Cascade** | Plan complex tasks, use checkpoints |
| **Chat** | Use @-mentions, ask follow-ups |
| **Autocomplete** | Learn shortcuts, provide types |
| **Context** | Configure .codeiumignore, use KB |
| **Security** | Review code, wise auto-execution |
| **Team** | Share skills, use AGENTS.md |
| **Performance** | Optimize context, choose right model |
