---
description: Variables และ placeholders ใน Markdown
title: variables
tags: [markdown, variables, placeholders, templates, dynamic]
goals:
  - แสดงตัวอย่างการใช้ variables
  - สอนวิธีใช้ placeholders
---

## Template Variables

````markdown
Replace the following placeholders:

- `{{PROJECT_NAME}}` - Your project name
- `{{VERSION}}` - Current version (e.g., 1.0.0)
- `{{AUTHOR}}` - Your name
- `{{YEAR}}` - Current year
````

## Environment Variables

````markdown
Set these environment variables:

```bash
export API_KEY="your-api-key-here"
export DATABASE_URL="postgresql://user:pass@localhost/db"
export PORT=3000
```

**Reference in code:**

```typescript
const apiKey = process.env.API_KEY;
const dbUrl = process.env.DATABASE_URL;
```
````

## Configuration Placeholders

````markdown
```json
{
  "name": "<PROJECT_NAME>",
  "version": "<VERSION>",
  "author": "<AUTHOR_EMAIL>",
  "license": "MIT"
}
```

Replace:

- `<PROJECT_NAME>` with your project name
- `<VERSION>` with semantic version (e.g., 1.0.0)
- `<AUTHOR_EMAIL>` with your email
````

## Command Placeholders

````markdown
```bash
# Replace <USERNAME> with your actual username
git clone https://github.com/<USERNAME>/repo.git

# Replace <PORT> with desired port number
npm run dev -- --port <PORT>

# Replace <FILE> with your file path
node scripts/<FILE>.js
```
````

## Dynamic Values

````markdown
**Current Values:**

| Variable | Value | Description |
|----------|-------|-------------|
| `{{DATE}}` | 2024-01-15 | Current date |
| `{{TIME}}` | 14:30:00 | Current time |
| `{{TIMESTAMP}}` | 1705321800 | Unix timestamp |
| `{{UUID}}` | a1b2c3d4-e5f6-7890-abcd-ef1234567890 | Unique ID |

**Usage:**

```markdown
Generated on {{DATE}} at {{TIME}}
```
````
