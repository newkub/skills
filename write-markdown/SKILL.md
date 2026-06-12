---
title: Write Markdown
description: Markdown templates and formatting guide with 30 templates for writing quality documentation using basic syntax, extended syntax, GitHub Flavored Markdown, and CommonMark.
auto_execution_mode: 3
---

## Goal

เขียนเอกสารด้วย Markdown ที่มีคุณภาพและเป็นมาตรฐาน โดยใช้ templates และ best practices ที่กำหนดไว้

## Scope

ใช้สำหรับเขียนเอกสารด้วย Markdown ทุกประเภท รวมถึง:
- เอกสารโปรเจกต์และ documentation
- README และ guides
- Blog posts และ articles
- Technical documentation

## Execute

### 1. Choose Template

เลือก template ที่เหมาะสมจาก `templates/`

- ดูรายการ templates ทั้งหมดใน `templates/`
- เลือก template ตามประเภทเนื้อหาที่ต้องการ
- คัดลอก template มาใช้เป็นพื้นฐาน

### 2. Apply Formatting Rules

ทำตาม formatting rules จาก `key-concepts/` และ `principles/`

- อ่าน `key-concepts/syntax.md` สำหรับ basic syntax
- อ่าน `key-concepts/formatting.md` สำหรับ formatting rules
- อ่าน `principles/` สำหรับ best practices
- ใช้ backticks สำหรับ `tools`, `commands`, `file paths`, `/workflow-name`

### 3. Structure Document

จัดโครงสร้างเอกสารตาม `key-concepts/structure.md`

- ใช้ headings ที่เป็น Title Case (EN)
- ใช้ bullet points สำหรับรายการภาษาไทย
- จัดเนื้อหาเป็น sections ที่ชัดเจน
- ใช้ table สำหรับข้อมูลที่เปรียบเทียบได้

### 4. Use Extended Syntax

ใช้ extended syntax จาก templates เมื่อจำเป็น

- ใช้ code blocks สำหรับ code examples
- ใช้ diagrams สำหรับ flow หรือ architecture
- ใช้ admonitions สำหรับ notes และ warnings
- ใช้ tabs สำหรับ content หลายรูปแบบ

### 5. Validate Content

ตรวจสอบคุณภาพเอกสาร

- ตรวจสอบว่าไฟล์ไม่เกิน 250 บรรทัด
- ตรวจสอบว่าใช้คำศัพท์สม่ำเสมอ
- ตรวจสอบว่า headings เป็น Title Case (EN)
- ตรวจสอบว่ารายการเป็นภาษาไทย

## Rules

### Structure And Formatting

- ไฟล์ไม่เกิน 250 บรรทัด
- Headings เป็น Title Case (EN)
- รายการเป็นภาษาไทย
- ใช้ backticks สำหรับ `tools`, `commands`, `file paths`, `/workflow-name`
- ใช้ bullet points (-) ชิดซ้ายใน Rules

### Content Quality

- เขียนเป็นภาษาไทยสำหรับ `key-concepts/`, `principles/`, `workflows/`
- Examples ต้องสั้นกระชับ
- Terminal commands ใส่ใน code block
- Architecture ใส่ใน code block
- ใช้คำศัพท์สม่ำเสมอ

### File Organization

- ใช้ `kebab-case` เสมอ
- ชื่อไฟล์ต้องสอดคล้องกับเนื้อหา
- ใช้ชื่อสื่อความหมายโดยตรง ไม่ใช้ prefix ชื่อ skill
- แต่ละไฟล์ต้องไม่เกิน 200 บรรทัด

## Expected Outcome

- เอกสาร Markdown ที่มีคุณภาพและเป็นมาตรฐาน
- การใช้ templates ที่ถูกต้องและเป็นประโยชน์
- Formatting ที่สม่ำเสมอทั่วทั้ง workspace
- เอกสารที่อ่านง่ายและ maintainable
- การใช้ extended syntax ที่เหมาะสม
