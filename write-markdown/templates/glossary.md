---
description: Template สำหรับ Glossary
title: '{{GLOSSARY_TITLE}}'
tags: [glossary, '{{CATEGORY}}', definitions]
goals:
  - '{{GOAL_1}}'
  - '{{GOAL_2}}'
---

## {{GLOSSARY_TITLE}}

> 📖 **Definitions & Terminology**

**{{ORG_NAME}}** / **glossary** / `{{FILENAME}}`

## โครงสร้าง Glossary

| รูปแบบ | รายละเอียด |
|--------|-----------|
| Alphabetical | เรียงตามตัวอักษร A-Z |
| By Category | แบ่งตามหมวดหมู่ |
| Table Format | Term + Definition |

## Rules

### Glossary Structure

- เรียงตามตัวอักษร (A-Z)
- หรือเรียงตามหมวดหมู่
- แต่ละ entry มี: Term, Definition, (Optional) Example/Context

### Entry Format

| Element | Description |
|---------|-------------|
| **Term** | คำศัพท์ (bold) |
| **Abbreviation** | ถ้ามี (optional) |
| **Definition** | อธิบายความหมาย |
| **Example** | ตัวอย่างการใช้ (optional) |
| **Related** | คำศัพท์ที่เกี่ยวข้อง (optional) |

### Categories

| Category | Description |
|----------|-------------|
| Technical | Technical terms |
| Business | Business/domain terms |
| Acronyms | Abbreviations & expansions |
| Internal | Company-specific terms |

## Template

### Table of Contents

```markdown
## Table of Contents

- [A](#a) | [B](#b) | [C](#c) | ...

---
```

### Letter Section

```markdown
## {{LETTER}}

### {{TERM_1}}

**{{ABBREV_1}}** | {{CATEGORY_1}}

{{DEFINITION_1}}

*Example:* {{EXAMPLE_1}}

*See also:* [{{RELATED_TERM_1}}](#{{RELATED_TERM_1_SLUG}})

### {{TERM_2}}

**{{ABBREV_2}}** | {{CATEGORY_2}}

{{DEFINITION_2}}

*Example:* {{EXAMPLE_2}}
```

### Category Section

```markdown
## {{CATEGORY_NAME}}

| Term | Definition |
|------|------------|
| **{{TERM_A}}** | {{DEF_A}} |
| **{{TERM_B}}** | {{DEF_B}} |
| **{{TERM_C}}** | {{DEF_C}} |
```

## Example

### Example: Technical Glossary

```markdown
# Technical Glossary

> 📖 **Definitions & Terminology**

**acme-corp** / **glossary** / `technical-glossary.md`

## Table of Contents

- [A](#a) | [B](#b) | [C](#c) | [D](#d) | [E](#e) | [F](#f) | [G](#g) | [H](#h) | [I](#i) | [J](#j) | [K](#k) | [L](#l) | [M](#m) | [N](#n) | [O](#o) | [P](#p) | [Q](#q) | [R](#r) | [S](#s) | [T](#t) | [U](#u) | [V](#v) | [W](#w) | [X](#x) | [Y](#y) | [Z](#z)

---

## A

### API

**Application Programming Interface** | Technical

A set of protocols and tools that allows different software applications to communicate with each other.

*Example:* REST API, GraphQL API

*See also:* [REST](#r), [GraphQL](#g)

### Authentication

| Technical

The process of verifying the identity of a user or system.

*Example:* OAuth 2.0, JWT tokens, username/password

---

## B

### Backend

| Technical

The server-side part of an application that handles data storage, business logic, and API endpoints.

*Example:* Node.js server, database layer

*See also:* [Frontend](#f)

### Bug

| Technical

An error, flaw, or fault in a computer program or system that causes it to produce incorrect or unexpected results.

---

## C

### CI/CD

**Continuous Integration / Continuous Deployment** | Technical

A method to frequently deliver apps to customers by introducing automation into the stages of app development.

*Example:* GitHub Actions, GitLab CI, Jenkins

*See also:* [DevOps](#d)

### CDN

**Content Delivery Network** | Technical

A geographically distributed network of proxy servers and their data centers that helps deliver content faster.

*Example:* Cloudflare, AWS CloudFront

---

## D

### DevOps

| Technical

A set of practices that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle.

*Example:* Infrastructure as Code, automated deployments

*See also:* [CI/CD](#c)

---

## F

### Frontend

| Technical

The client-side part of an application that users interact with directly.

*Example:* React, Vue.js, HTML/CSS

*See also:* [Backend](#b)

---

## R

### REST

**Representational State Transfer** | Technical

An architectural style for designing networked applications using HTTP methods.

*Example:* GET /users, POST /orders

*See also:* [API](#a)
```
