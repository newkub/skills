---
description: Diagrams และ visual flows ใน Markdown
title: diagrams
tags: [markdown, diagrams, flowchart, sequence, visualization]
goals:
  - แสดงตัวอย่างการสร้าง diagrams
  - สอนวิธีใช้ visual flows
---

## ASCII Flowchart

````markdown
```text
┌─────────┐     ┌─────────┐     ┌─────────┐
│  Start  │────▶│ Process │────▶│  End    │
└─────────┘     └─────────┘     └─────────┘
```
````

## Decision Tree

````markdown
```text
Is it raining?
    │
    ├─ Yes ──▶ Take umbrella
    │
    └─ No ───▶ Enjoy sunshine
```
````

## System Architecture

````markdown
```text
┌─────────────┐
│   Client    │
└──────┬──────┘
       │ HTTP
       ▼
┌─────────────┐
│    API      │
└──────┬──────┘
       │
   ┌───┴───┐
   ▼       ▼
┌─────┐ ┌─────┐
│ DB  │ │Cache│
└─────┘ └─────┘
```
````

## Process Flow

````markdown
```text
Step 1          Step 2          Step 3
   │               │               │
   ▼               ▼               ▼
┌──────┐      ┌──────┐      ┌──────┐
│Input │─────▶│Parse │─────▶│Output│
└──────┘      └──────┘      └──────┘
```
````

## Git Branching

````markdown
```text
main
  │
  ├── feature/login
  │     └── commit A
  │     └── commit B
  │
  ├── feature/signup
  │     └── commit C
  │
  └── hotfix/auth
        └── commit D
```
````
