---
description: Code blocks และโครงสร้างใน Markdown
title: code-blocks
tags: [markdown, code, structures]
goals:
  - แสดงตัวอย่างการแสดงโค้ดและโครงสร้างต่างๆ
  - สอนวิธีใช้ code blocks, tables, diagrams
---

## Code Block

````typescript
export default defineEventHandler(async () => {
    const allUsers = await db.select().from(users).orderBy(desc(users.createdAt));
    return allUsers;
});
````

## Table

````markdown
| Component | Status      |
|-----------|-------------|
| Button    | `Completed` |
| Input     | `In Progress` |
````

## File Structure

````text
.windsurf/
├── workflows/
│   ├── deploy.md
│   └── test.md
└── rules.md
````

## Diagram

````text
[Start] --> [Is it?]
  |
  +-- Yes --> [OK] --> [End]
  |
  +-- No ---> [KO] --> [End]
````
