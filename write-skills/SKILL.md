---
title: Write Windsurf Skills
description: มาตรฐานการเขียนและจัดโครงสร้าง Devin Skills
auto_execution_mode: 3
related_workflows:
  - /deep-research
  - /write-windsurf-global-workflows
---

## Goal

สร้างหรือแก้ไข Devin Skills ให้เป็นมาตรฐานเดียวกัน เพื่อให้ maintainable และ consistent ทั่วทั้ง workspace

## Scope

ใช้สำหรับสร้างหรือแก้ไข Devin Skills ทุกประเภท

## Execute

### 1. Create Directory Structure

สร้าง folders ตามมาตรฐาน

```
skill-name/
├── SKILL.md                   (required)
├── guide/                     (optional)
│   ├── overview.md            (optional)
│   ├── installation.md        (optional)
│   ├── quick-start.md         (optional)
│   ├── features.md            (optional)
│   ├── architecture.md        (optional)
│   ├── file-structure.md      (optional)
│   ├── how-it-works.md        (optional)
│   ├── configuration.md       (optional)
│   ├── best-practices.md      (optional)
│   ├── usecases.md            (optional)
│   ├── comparison.md          (optional)
│   ├── integration.md         (optional)
│   ├── performance.md         (optional)
│   ├── security.md            (optional)
│   ├── testing.md             (optional)
│   ├── troubleshooting.md     (optional)
│   ├── limitations.md         (optional)
│   ├── glossary.md            (optional)
│   └── ...                    (optional)
├── key-concepts/              (optional)
│   └── ...                    (optional)
├── principles/                (optional)
│   └── ...                    (optional)
├── references/                (optional)
│   ├── api.md                 (optional)
│   ├── cli.md                 (optional)
│   ├── tui.md                 (optional)
│   ├── configuration.md       (optional)
│   ├── website.md             (optional)
│   ├── sitemap.md             (optional)
│   └── ...                    (optional)
├── workflows/                 (optional)
│   └── ...                    (optional)
├── templates/                 (optional)
│   └── ...                    (optional)
└── scripts/                   (optional)
    └── ...                    (optional)
```

### 2. Write SKILL.md Index

เขียน index file ตามมาตรฐาน `/write-windsurf-global-workflows`

### 3. Research Before Writing

ค้นหาข้อมูลเกี่ยวกับ skill ที่จะเขียน

- ทำตาม workflow `/deep-research` สำหรับค้นหาข้อมูลจาก multiple sources
- ค้นหาใน package registries ตามภาษาที่เกี่ยวข้อง
- ใช้ DeepWiki สำหรับ GitHub repositories
- ใช้ Context7 สำหรับ library documentation
- ตรวจสอบ source reputation และ information freshness
- สรุป findings ที่สำคัญก่อนเขียน

### 4. Write Content Files

เขียน content files ตามมาตรฐาน

- ทำตามมาตรฐาน `/write-windsurf-global-workflows` สำหรับทุกไฟล์
- เนื้อหาครอบคลุมและอ่านง่าย ใช้ format ที่เหมาะสม
- เวลาเขียนเกี่ยวกับการติดตั้ง ให้ใช้ `bun add` หรือ `bun add -D` แทน `npm install` เสมอ
- ทุกไฟล์ `.md` เขียนเป็นภาษาไทย ยกเว้น headings และศัพท์เทคนิค
- ปรับปรุง spacing, indentation, headings ให้สม่ำเสมอ
- ปรับปรุง headings เป็น Title Case (EN) และรายการเป็น TH
- ตรวจสอบความถูกต้องของข้อมูล

### 5. Validate And Verify

ตรวจสอบความถูกต้อง

- ตรวจสอบ references ถูกต้อง
- ตรวจสอบว่าไม่มี conflicts ระหว่าง skills
- ตรวจสอบโครงสร้างตรงกับมาตรฐาน

## Rules

### Structure And Consistency

- ทุก `SKILL.md` ต้องมี frontmatter: `title`, `description`, `auto_execution_mode: 3`
- ทุก `SKILL.md` ต้องมี sections: `## Goal`, `## Scope`, `## Execute`, `## Rules`, `## Expected Outcome`
- Goal สอดคล้องกับ skill name, Execute สอดคล้องกับ Goal และ Rules
- Expected Outcome สอดคล้องกับ Goal
- ใช้คำศัพท์สม่ำเสมอ

### Content And Style

- หัวข้อภาษาอังกฤษ Title Case, รายการภาษาไทย
- ใช้ bullet points (-) ชิดซ้ายใน Rules
- ไฟล์ไม่เกิน 250 บรรทัด
- ใช้ backticks สำหรับ `tools`, `commands`, `file paths`, `/workflow-name`
- เขียนเป็นหลักการ how-to
- ใน Rules สามารถใช้ table, code block ได้
- terminal commands, architecture ใส่ใน code block
- examples ต้องสั้นกระชับ
- ทุกไฟล์ `.md` เขียนเป็นภาษาไทย ยกเว้น headings และศัพท์เทคนิค

### File Organization

- ใช้ตารางสรุปข้อมูลที่เปรียบเทียบได้
- ใช้ `codeblock` สำหรับ code examples, configuration, หรือ commands
- ใช้ `ansi markdown diagrams` สำหรับ flow, architecture, หรือ how-it-works
- ใช้ชื่อสื่อความหมายโดยตรง ไม่ใช้ prefix ชื่อ skill
- ใช้ `kebab-case` เสมอ ชื่อไฟล์ต้องสอดคล้องกับเนื้อหา
- แต่ละไฟล์ต้องไม่เกิน 250 บรรทัด ถ้าเกินให้ refactor แยกไฟล์
- ถ้าไฟล์ยาวเกิน ให้แยกเป็น folder และไฟล์ย่อย (เช่น `best-practices/` พร้อม `index.md`)
- ทำตาม Execute ตามลำดับเสมอ
- ใช้ backticks สำหรับ technical terms, file names, commands, หรือ code references

### Scripts

- สร้าง scripts ใน `scripts/temp/` ที่ root workspace เท่านั้น
- ใช้ Bun native APIs, pwsh, หรือ ast-grep ตามความเหมาะสม
- ทำตามมาตรฐาน `/use-scripts`
- ลบ scripts หลังใช้งาน

## Expected Outcome

- Devin Skills ที่มีโครงสร้างสม่ำเสมอตามมาตรฐาน
- Folder structure ที่เป็นระบบและ deterministic
- SKILL.md index ที่ครบถ้วนและอ่านง่าย
- File naming ที่สอดคล้องกันทั่วทั้ง skill
- Content ที่มีคุณภาพและถูกต้องตามมาตรฐาน
- References ที่ถูกต้องและอ้างอิงไปยังไฟล์ที่มีอยู่จริง
- Skills ที่ maintainable และ easy to navigate



