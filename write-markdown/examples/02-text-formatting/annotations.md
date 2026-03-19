---
description: Annotations และ comments ใน Markdown
title: annotations
tags: [markdown, annotations, comments]
goals:
  - แสดงตัวอย่างการใช้ annotations
  - สอนวิธีเขียน comments
---

## HTML Comments

````markdown
<!-- This is a comment that won't be rendered -->

<!--
Multi-line comment
Can span multiple lines
-->
````

## Code Annotations

````markdown
```typescript
// Single line comment
const x = 1; // Inline comment

/*
 * Multi-line comment
 * Explaining complex logic
 */
function complex() {
  return true;
}
```
````

## Footnote Annotations

````markdown
Some text with a note[^1].

[^1]: This is the annotation or footnote.
````
