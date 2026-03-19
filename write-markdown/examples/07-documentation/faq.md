---
description: FAQ (Frequently Asked Questions) ใน Markdown
title: faq
tags: [markdown, faq, questions, help]
goals:
  - แสดงตัวอย่างการเขียน FAQ
  - สอนวิธีจัดโครงสร้างคำถามที่พบบ่อย
---

## FAQ Format

````markdown
# Frequently Asked Questions (FAQ)

## General Questions

### What is [Project Name]?

[Project Name] is a tool that helps you...

### Is it free?

Yes, [Project Name] is open source and free to use.

### How do I get started?

Check out our [Getting Started Guide](getting-started.md).
````

## Q&A Format

````markdown
## Q: How do I install?

**A:** You can install using npm:

```bash
npm install package-name
```

Or with yarn:

```bash
yarn add package-name
```

## Q: What are the system requirements?

**A:**

- Node.js 18+
- 2GB RAM minimum
- 1GB disk space

## Q: Can I use it with [technology]?

**A:** Yes, it works with:

- React
- Vue
- Angular
- Svelte
- And more...
````

## Collapsible FAQ

````markdown
## Common Issues

<details>
<summary>Why am I getting "Permission Denied" error?</summary>

This usually means:

1. Check file permissions
2. Run with appropriate privileges
3. Check directory ownership

</details>

<details>
<summary>How do I reset my password?</summary>

1. Go to Settings → Security
2. Click "Reset Password"
3. Check your email for the reset link

</details>
````

## Troubleshooting FAQ

````markdown
## Troubleshooting

| Problem | Solution |
|---------|----------|
| App won't start | Check port availability |
| Database connection fails | Verify credentials |
| Slow performance | Increase cache size |
| 404 errors | Check API endpoint |
````
