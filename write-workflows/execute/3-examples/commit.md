---
title: Commit
description: Commit โค้ดด้วย conventional commits format พร้อม validation
auto_execution_mode: 3
file-patterns:
  - ".windsurf/workflows/*.md"
  - "global_workflows/*.md"
follow:
  skills:
    - "@write-skills"
    - "@write-markdown"
  workflows:
    - "/validate"
    - "/connect-workflows"
    - "/improve-content-quality"
    - "/review-workflows"
    - "/optimize-workflows"
  files:
    - "guidelines/workflow-structure.md"
---

## Commit

## Purpose

Commit โค้ดด้วย conventional commits format พร้อม validation เพื่อให้แน่ใจว่า commit messages มีความสอดคล้องและตรงตามมาตรฐาน

## Scope

- การ commit โค้ดในทุกโปรเจกต์
- การตรวจสอบ commit message format
- การ validate ก่อน commit
- การจัดการ commit history

## Rules

### 1. Conventional Commits Format

ใช้รูปแบบ: `<type>[optional scope]: <description>`

**Types ที่อนุญาต:**

- `feat`: เพิ่ม feature ใหม่
- `fix`: แก้ไข bug
- `docs`: แก้ไขเอกสาร
- `style`: แก้ไข code style
- `refactor`: การ refactoring
- `test`: ทดสอบ
- `chore`: อื่นๆ

### 2. Message Requirements

- **Description**: ใช้ภาษาอังกฤษเท่านั้น ขึ้นต้นด้วย lowercase
- **Length**: ไม่เกิน 50 characters สำหรับ header
- **Body**: ใช้ blank line คั่นระหว่าง header และ body
- **Footer**: ใช้สำหรับ breaking changes หรือ references

### 3. Validation Rules

- ต้องผ่าน linting ก่อน commit
- ต้องผ่าน type checking ก่อน commit
- ต้องผ่าน tests ก่อน commit
- ไม่มี files ที่ยังไม่ได้ add ใน staging

## Steps

### Phase 1: Preparation

1. ตรวจสอบสถานะ files ด้วย `git status`
2. Add files ที่ต้องการ commit ด้วย `git add`
3. รัน linting และแก้ไข errors
4. รัน type checking และแก้ไข errors
5. รัน tests และตรวจสอบว่าผ่านทั้งหมด

### Phase 2: Commit Message Creation

1. เลือก type ที่เหมาะสมกับการเปลี่ยนแปลง
2. เขียน description ที่กระชับและชัดเจน
3. เพิ่ม scope ถ้าจำเป็น (optional)
4. เพิ่ม body สำหรับการเปลี่ยนแปลงที่ซับซ้อน
5. เพิ่ม footer สำหรับ breaking changes หรือ issue references

### Phase 3: Validation & Commit

1. ตรวจสอบ commit message ด้วย conventional commits validator
2. ตรวจสอบว่าไม่มี sensitive data ใน commit
3. ตรวจสอบ git diff อีกครั้ง
4. Execute commit ด้วย `git commit`
5. ตรวจสอบว่า commit สำเร็จด้วย `git log --oneline -1`

## Expected Outcome

| ผลลัพธ์ | คำอธิบาย | วิธีวัดผล |
|--------|----------|------------|
| **Code Committed** | โค้ดถูก commit | Git log check |
| **Message Validated** | Message ผ่าน validation | Commitlint check |
| **Tests Passed** | ทุก tests ผ่าน | Test runner report |
| **History Clean** | Commit history สะอาด | Git history view |

## Reference

- [Conventional Commits Specification](https://www.conventionalcommits.org/)
- [Commitlint Configuration](https://commitlint.js.org/)
- [Git Best Practices](https://github.com/git/git/blob/master/Documentation/SubmittingPatches)
- [Semantic Versioning](https://semver.org/)
- Project-specific commit templates
- Related workflows: `/create-git-tag`, `/git-commit-merge`