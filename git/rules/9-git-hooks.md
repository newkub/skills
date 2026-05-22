# Git Hooks

## Description

ใช้ Git hooks สำหรับ automation และ quality control

## Examples

```bash
# .git/hooks/pre-commit
#!/bin/bash
npm run lint
npm run test

# .git/hooks/pre-push
#!/bin/bash
npm run build
npm run e2e

# .git/hooks/commit-msg
#!/bin/bash
commit_regex='^(feat|fix|docs|style|refactor|test|chore)(\(.+\))?: .{1,50}'
if ! grep -qE "$commit_regex" "$1"; then
    echo "Invalid commit message format"
    exit 1
fi
```

## Anti-patterns

❌ ไม่ใช้ hooks สำหรับ quality control
❌ ทำให้ hooks ทำงานช้าเกินไป
❌ ไม่ commit hooks ไปยัง repository
❌ ใช้ hooks สำหรับงานที่ไม่จำเป็น
