---
title: Write Windsurf Skills
description: มาตรฐานการเขียนและจัดโครงสร้าง Devin Skills
auto_execution_mode: 3
---

## Goal

สร้างหรือแก้ไข Devin Skills ให้เป็นมาตรฐานเดียวกัน เพื่อให้ maintainable และ consistent ทั่วทั้ง workspace

## Scope

ใช้สำหรับสร้างหรือแก้ไข Devin Skills ทุกประเภท

## Execute

### 1. Determine Skill Type

ระบุ skill type จาก prefix ชื่อ folder

- Skill types: `guide-`, `lang-`, `lib-`, `framework-`, `runtime-`, `cloud-`, `create-`, `tool-`, `cli-`, `tui-`, `flow-`, `general-`
- ใช้ skill type เพื่อกำหนด folder และ file ที่ต้องการ

### 2. Research Before Writing

ค้นหาข้อมูลเกี่ยวกับ skill ที่จะเขียน

- ใช้ CRW สำหรับ web research และ documentation
- ค้นหาใน package registries ตามภาษาที่เกี่ยวข้อง
- ใช้ DeepWiki สำหรับ GitHub repositories
- ใช้ Context7 สำหรับ library documentation
- ตรวจสอบ source reputation และ information freshness
- สรุป findings ที่สำคัญก่อนเขียน

### 3. Create Directory Structure

สร้าง folders ตามมาตรฐาน

- `SKILL.md` - REQUIRED (index file)
- `guide/` - OPTIONAL (guides และ best practices)
- `key-concepts/` - OPTIONAL (แนวคิดสำคัญ)
- `principles/` - OPTIONAL (หลักการ)
- `references/` - OPTIONAL (references และ API docs)
- `workflows/` - OPTIONAL (workflows สำหรับ automation)
- `templates/` - OPTIONAL (templates สำหรับเริ่มต้น)
- `scripts/` - OPTIONAL (scripts สำหรับ automation)

### 4. Write SKILL.md Index

เขียน index file ตามมาตรฐาน `/write-windsurf-global-workflows`

### 5. Write Content Files

เขียน content files ตามมาตรฐาน

- ทำตามมาตรฐาน `/write-markdown` สำหรับทุกไฟล์ `.md`
- เนื้อหาครอบคลุมและอ่านง่าย ใช้ format ที่เหมาะสม
- เวลาเขียนเกี่ยวกับการติดตั้ง ให้ใช้ `bun add` หรือ `bun add -D` แทน `npm install` เสมอ
- ใช้ภาษาไทยสำหรับ `key-concepts/`, `principles/`, `workflows/`
- ปรับปรุง spacing, indentation, headings ให้สม่ำเสมอ
- ปรับปรุง headings เป็น Title Case (EN) และรายการเป็น TH
- ตรวจสอบความถูกต้องของข้อมูล

### 6. Validate And Verify

ตรวจสอบความถูกต้อง

- ตรวจสอบ references ถูกต้อง
- ตรวจสอบว่าไม่มี conflicts ระหว่าง skills
- ตรวจสอบโครงสร้างตรงกับมาตรฐาน

## Rules

### Structure And Consistency

- ทุก `SKILL.md` ต้องมี frontmatter: `title`, `description`, `auto_execution_mode: 3`
- ทุก `SKILL.md` ต้องมี sections: `## Goal`, `## Scope`, `## Execute`, `## Rules`, `## Expected Outcome`
- `## โครงสร้าง Directory` ต้องอยู่ก่อน `## หมวดหมู่ไฟล์`
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

### File Organization

- `key-concepts/` - เขียนเป็นภาษาไทย แต่ละ concept อยู่ในไฟล์แยกกัน
- `principles/` - เขียนเป็นภาษาไทย แต่ละ principle อยู่ในไฟล์แยกกัน
- ใช้ตารางสรุปข้อมูลที่เปรียบเทียบได้
- ใช้ `codeblock` สำหรับ code examples, configuration, หรือ commands
- ใช้ `ansi markdown diagrams` สำหรับ flow, architecture, หรือ how-it-works
- ใช้ชื่อสื่อความหมายโดยตรง ไม่ใช้ prefix ชื่อ skill
- ใช้ `kebab-case` เสมอ ชื่อไฟล์ต้องสอดคล้องกับเนื้อหา
- แต่ละไฟล์ต้องไม่เกิน 250 บรรทัด ถ้าเกินให้ refactor แยกไฟล์
- ทำตาม Execute ตามลำดับเสมอ
- ใช้ backticks สำหรับ technical terms, file names, commands, หรือ code references

## Expected Outcome

- Devin Skills ที่มีโครงสร้างสม่ำเสมอตามมาตรฐาน
- Folder structure ที่เป็นระบบและ deterministic
- SKILL.md index ที่ครบถ้วนและอ่านง่าย
- File naming ที่สอดคล้องกันทั่วทั้ง skill
- Content ที่มีคุณภาพและถูกต้องตามมาตรฐาน
- References ที่ถูกต้องและอ้างอิงไปยังไฟล์ที่มีอยู่จริง
- Skills ที่ maintainable และ easy to navigate



