---
title: Tool Ast-grep
description: แนวทางการใช้งาน ast-grep สำหรับ code structural search, lint และ rewriting โดยใช้ AST patterns
auto_execution_mode: 3
---

## Goal

ใช้งาน ast-grep สำหรับ code structural search, lint และ rewriting โดยใช้ AST patterns

## Scope

ใช้สำหรับค้นหา code patterns ด้วย AST-based matching, สร้าง custom lint rules, ทำ code transformation และ refactoring อัตโนมัติ, และ scan codebase สำหรับ code smells และ anti-patterns

## Execute

- ติดตั้ง ast-grep ด้วย `bunx`
- ค้นหา patterns ด้วย AST
- แก้ไข code ด้วย pattern rewriting
- อ่าน `guide/installation.md` สำหรับการติดตั้งและ setup
- อ่าน `guide/quick-start.md` สำหรับเริ่มต้นใช้งาน
- อ่าน `guide/key-concept.md` สำหรับแนวคิดหลัก
- อ่าน `guide/how-it-works.md` สำหรับวิธีการทำงาน
- อ่าน `guide/features.md` สำหรับ features ที่มี
- อ่าน `guide/patterns.md` สำหรับ patterns ทั่วไป
- อ่าน `guide/best-practices.md` สำหรับ best practices
- อ่าน `guide/integration.md` สำหรับ tool integration
- อ่าน `guide/architecture.md` สำหรับ system architecture
- อ่าน `guide/structure.md` สำหรับ project structure
- อ่าน `guide/troubleshooting.md` สำหรับปัญหาทั่วไป

## Rules

- ใช้ metavariables `$VAR` สำหรับ match any AST node
- เขียน patterns เหมือนเขียน code ตามปกติ
- ใช้ YAML configuration สำหรับ lint rules
- Test rules ก่อนใช้งานจริง
- ใช้ backticks สำหรับ patterns, commands
- ใช้ code blocks สำหรับ examples
- ใช้ ansi markdown diagrams สำหรับ flow และ architecture

## Expected Outcome

- Code search ที่ accurate ด้วย AST matching
- Custom lint rules ที่ powerful
- Code transformation ที่ automated
- Refactoring ที่ safe
