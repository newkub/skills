---
description: Template สำหรับ FAQ
title: '{{FAQ_TITLE}}'
tags: [faq, '{{CATEGORY}}', questions]
goals:
  - '{{GOAL_1}}'
  - '{{GOAL_2}}'
---

## {{FAQ_TITLE}}

> ❓ **Frequently Asked Questions**

**{{ORG_NAME}}** / **faq** / `{{FILENAME}}`

## โครงสร้าง FAQ

| Section | รายละเอียด |
|---------|-----------|
| Categories | หมวดหมู่คำถาม |
| Q&A | คำถามและคำตอบ |
| Support | ช่องทางช่วยเหลือ |

## Rules

### FAQ Structure

- เรียงตามความนิยม (มากไปน้อย)
- หรือเรียงตามหมวดหมู่
- แต่ละ Q&A ความยาว 1-3 ย่อหน้า

### Question Format

- ใช้คำถามที่ user จริงๆ ถาม
- ชัดเจน เข้าใจง่าย
- ไม่ใช้คำศัพท์เทคนิคเกินไป

### Answer Format

- ตรงประเด็น
- มีตัวอย่างถ้าจำเป็น
- มี link ไปยัง docs เพิ่มเติม

### Categories

| Category | Topics |
|----------|--------|
| Getting Started | Installation, Setup |
| Usage | How to use features |
| Troubleshooting | Common problems |
| Billing | Pricing, Payment |
| Account | Login, Settings |

## Template

### Table of Contents

```markdown
## Table of Contents

- [{{CATEGORY_1}}](#{{CATEGORY_1_SLUG}})
- [{{CATEGORY_2}}](#{{CATEGORY_2_SLUG}})
- [{{CATEGORY_3}}](#{{CATEGORY_3_SLUG}})
```

### Category Section

```markdown
## {{CATEGORY_NAME}}

### {{QUESTION_1}}

{{ANSWER_1}}

[Learn more →]({{DOC_LINK_1}})

### {{QUESTION_2}}

{{ANSWER_2}}

{{CODE_EXAMPLE}}
```

### Still Need Help?

```markdown
## Still Need Help?

หากไม่พบคำตอบที่ต้องการ:

- 📧 Email: {{SUPPORT_EMAIL}}
- 💬 Chat: {{SUPPORT_CHAT}}
- 📖 Docs: [{{DOCS_NAME}}]({{DOCS_URL}})
```

## Example

### Example: Product FAQ

```markdown
# Product FAQ

> ❓ **Frequently Asked Questions**

**acme-corp** / **faq** / `product-faq.md`

## Table of Contents

- [Getting Started](#getting-started)
- [Pricing](#pricing)
- [Features](#features)
- [Troubleshooting](#troubleshooting)

## Getting Started

### How do I create an account?

Click the "Sign Up" button in the top right corner and fill in your email and password. You'll receive a confirmation email to activate your account.

[Learn more →](./docs/getting-started.md)

### What browsers are supported?

We support the latest versions of Chrome, Firefox, Safari, and Edge. Internet Explorer is not supported.

## Pricing

### Is there a free trial?

Yes! We offer a 14-day free trial with full access to all features. No credit card required.

### How do I upgrade my plan?

Go to Settings > Billing and click "Upgrade Plan". Choose the plan that fits your needs and enter your payment information.

### Can I get a refund?

We offer refunds within 30 days of purchase if you're not satisfied. Contact <support@example.com>.

## Features

### How do I export my data?

```bash
# Using CLI
acme export --format csv --output backup.csv
```
```


```text

```text

Or use the web interface: Settings > Data > Export

### Can I use the API?

Yes! All paid plans include API access. Get your API key from Settings > API.

```javascript
const client = new AcmeClient({ apiKey: 'your-key' });
```

## Troubleshooting

### Why can't I login?

Common causes:

1. Wrong email/password - Try resetting your password
2. Account not activated - Check your email for activation link
3. Account suspended - Contact support

> 💡 **Tip:** Use the "Forgot Password" link if you can't remember your password.

### The app is slow. What should I do?

Try these steps:

1. Clear browser cache
2. Disable browser extensions
3. Check your internet connection
4. Try incognito mode

## Still Need Help?

หากไม่พบคำตอบที่ต้องการ:

- 📧 Email: <support@acme-corp.com>
- 💬 Chat: Click the chat icon in bottom right
- 📖 Docs: [Documentation](https://docs.acme-corp.com)

```text
