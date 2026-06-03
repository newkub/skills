# Skills Workspace

## Overview

Windsurf Skills workspace เก็บ skill definitions สำหรับ Cascade AI assistant แต่ละ skill คือ collection ของ knowledge และ workflows สำหรับ specific domain

## โครงสร้าง Directory

```
skills/
├── SKILL.md
├── AGENTS.md
├── guide-*/          # Guides และ best practices
├── lib-*/            # Libraries
├── framework-*/      # Frameworks
├── lang-*/           # Programming languages
├── runtime-*/        # Runtime environments
├── cli-*/            # CLI tools
├── tui-*/            # TUI applications
├── flow-*/           # Development flows
└── general-*/        # General purpose
```

## หมวดหมู่ Skills

### guide-

Guides และ best practices สำหรับ development

### lib-

Libraries และ packages ต่างๆ

### framework-

Frameworks สำหรับ web, desktop, mobile

### lang-

Programming languages

### runtime-

Runtime environments (Bun, Node.js)

### cli-

CLI tools

### tui-

TUI applications

### flow-

Development flows (testing, debugging, refactoring)

### general-

General purpose skills

## Skill Structure

แต่ละ skill มีโครงสร้างตาม /follow-write-skills:

```
skill-name/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   ├── best-practices.md
│   ├── integration.md
│   └── architecture.md
├── key-concepts/
├── principles/
├── references/
│   ├── website.md
│   ├── cli.md
│   └── configuration.md
└── workflows/
```

## Recent Updates

- **runtime-bun**: อัปเดตโครงสร้างตาม /follow-write-skills, เพิ่มไฟล์ how-it-works, configuration, integration, architecture, website
- **runtime-node**: อัปเดตโครงสร้างตาม /follow-write-skills, เพิ่มไฟล์ how-it-works, configuration, integration, architecture, website
