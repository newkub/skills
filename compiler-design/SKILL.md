---
title: Guide Compiler Design
description: คู่มือการออกแบบและสร้าง compiler ตั้งแต่ lexical analysis, parsing, AST, code generation ไปจนถึง optimization
auto_execution_mode: 3
---

## Goal

ให้ผู้ใช้เข้าใจและสามารถออกแบบและสร้าง compiler ได้อย่างมีประสิทธิภาพ

## Scope

ใช้สำหรับเข้าใจวิธีการทำงานของ compiler, ออกแบบหรือสร้าง compiler ของตัวเอง, ปรับปรุง performance ของ compiler, เข้าใจ intermediate representations และ optimization techniques, และ implement language features ใหม่

## Execute

- อ่าน guide/ เพื่อเข้าใจ concepts และ best practices
- ศึกษา references/ สำหรับ documentation และ resources
- ปฏิบัติตาม workflows/ สำหรับการทำงานเฉพาะทาง
- ใช้ภาษาไทยในการอธิบาย
- ให้ code examples ที่ชัดเจนและใช้งานได้จริง
- อ้างอิง sources ที่เชื่อถือได้
- อัปเดต content ให้ทันสมัยตาม version ล่าสุด

## Rules

- ใช้ภาษาไทยในการอธิบาย
- ให้ code examples ที่ชัดเจนและใช้งานได้จริง
- อ้างอิง sources ที่เชื่อถือได้
- อัปเดต content ให้ทันสมัยตาม version ล่าสุด

## Expected Outcome

- เข้าใจ compiler architecture และ phases
- สามารถ implement lexical analysis และ parsing ได้
- สามารถ generate code และ optimize ได้
- สามารถสร้าง compiler ของตัวเองได้
