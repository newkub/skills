---
description: Diff และ code comparison ใน Markdown
title: diff
tags: [markdown, diff, comparison]
goals:
  - แสดงตัวอย่างการแสดง diff
  - สอนวิธี code comparison
---

## Unified Diff

````diff
--- a/file.ts
+++ b/file.ts
@@ -1,5 +1,5 @@
 function greet() {
-  console.log("Hello");
+  console.log("Hello World");
   return true;
 }
````

## Inline Diff

````markdown
Old: `console.log("Hello")`
New: `console.log("Hello World")` ✨

~-removed text-~ ++added text++
````

## Code Diff Table

````markdown
| Before | After |
|--------|-------|
| `var x = 1` | `const x = 1` |
| `function() {}` | `() => {}` |
````
