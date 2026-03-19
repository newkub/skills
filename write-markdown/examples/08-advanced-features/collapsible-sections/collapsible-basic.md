---
description: Collapsible content และ expandable sections ใน Markdown
title: collapsible
tags: [markdown, collapsible, details, summary, expandable]
goals:
  - แสดงตัวอย่างการสร้าง collapsible content
  - สอนวิธีใช้ details/summary
---

## Basic Collapsible

````markdown
<details>
<summary>Click to expand</summary>

This content is hidden by default but can be expanded.

</details>
````

## Collapsible with Default Open

````markdown
<details open>
<summary>Installation Guide</summary>

1. Run `npm install`
2. Run `npm run dev`
3. Open <http://localhost:3000>

</details>
````

## Collapsible Code Block

````markdown
<details>
<summary>View Full Code</summary>

```typescript
function example() {
  console.log("This is hidden by default");
  return true;
}
```

</details>
````

## Nested Collapsible

````markdown
<details>
<summary>Level 1 - Parent</summary>

Parent content here.

<details>
<summary>Level 2 - Child</summary>

Child content inside parent.

</details>

</details>
````

## FAQ Style Collapsible

````markdown
<details>
<summary>❓ How do I reset my password?</summary>

Go to Settings > Security > Change Password

</details>

<details>
<summary>❓ Where can I find my API key?</summary>

Navigate to Dashboard > API > Keys

</details>
````
