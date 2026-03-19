---
description: Style guide สำหรับ documentation ใน Markdown
title: style-guide
tags: [markdown, style-guide, writing, standards]
goals:
  - แสดงตัวอย่าง style guide
  - สอนวิธีกำหนด writing standards
---

## Documentation Style Guide

````markdown
# Style Guide

## Writing Style

### Tone

- Use clear, concise language
- Write in second person ("you")
- Be friendly but professional

### Formatting

- Use sentence case for headings
- Use `code` for file names, commands, and inline code
- Use **bold** for emphasis, not ALL CAPS

### Language

- Use American English
- Write short paragraphs (3-5 sentences)
- Use active voice when possible
````

## Structure Guidelines

````markdown
## Document Structure

### Standard Sections

1. **Title** - Clear and descriptive
2. **Introduction** - What this document covers
3. **Prerequisites** - What readers need to know
4. **Main Content** - Step-by-step instructions
5. **Conclusion** - Summary and next steps

### Code Examples

- Always include language identifier
- Keep examples runnable
- Add comments for clarity

```javascript
// Good example
function greet(name) {
  return `Hello, ${name}!`;
}
```
````

## Writing Rules

````markdown
## Rules

### Do

- Use consistent terminology
- Link to related documents
- Use lists for multiple items
- Include examples for complex concepts

### Don't

- Use jargon without explanation
- Write extremely long sentences
- Use "click here" for links
- Forget to update old documentation

### Examples

✅ **Good:**
> Click the **Submit** button to save your changes.

❌ **Bad:**
> Click here to submit.

✅ **Good:**
> The `config.yaml` file contains settings.

❌ **Bad:**
> The config.yaml file contains settings.
````
