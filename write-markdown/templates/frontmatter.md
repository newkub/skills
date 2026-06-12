# Frontmatter Format

## รูปแบบ Frontmatter มาตรฐาน

### YAML Frontmatter

```markdown
---
title: Page Title
description: Page description
date: 2024-01-01
tags:
  - tag1
  - tag2
---
```

### TOML Frontmatter

```markdown
+++
title = "Page Title"
description = "Page Description"
date = 2024-01-01
tags = ["tag1", "tag2"]
+++
```

### JSON Frontmatter

```markdown
;;;
{
  "title": "Page Title",
  "description": "Page Description",
  "date": "2024-01-01",
  "tags": ["tag1", "tag2"]
}
;;;
```

### Common Fields

```markdown
---
title: Required
description: Optional
date: Optional
tags: Optional
author: Optional
draft: Optional
published: Optional
---
```

### When to Use

- กำหนด metadata
- กำหนด configuration
- กำหนด layout
- กำหนด SEO

### Best Practices

- ใช้ YAML เป็น default
- ให้ required fields เสมอ
- ใช้ consistent field names
- ให้ values ถูกต้องตาม type
