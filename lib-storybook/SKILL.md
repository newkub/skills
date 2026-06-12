---
title: Storybook
description: แนวทางการพัฒนา Storybook ตาม best practices สำหรับ component explorer ที่ช่วยให้สามารถ develop, test และ document UI components ได้อย่างมีประสิทธิภาพ
auto_execution_mode: 3
---

## Goal

ใช้ Storybook สำหรับ develop, test, และ document UI components ใน isolated environment

## Scope

ใช้สำหรับ component development, testing, และ documentation ด้วย Storybook

## Execute

- ติดตั้ง Storybook ด้วย `bunx storybook@latest init`
- อ่าน `guide/installation.md` สำหรับการติดตั้งและ setup
- อ่าน `guide/quick-start.md` สำหรับเริ่มต้นใช้งาน
- อ่าน `guide/key-concept.md` สำหรับแนวคิดหลัก
- อ่าน `guide/how-it-works.md` สำหรับวิธีการทำงาน
- อ่าน `key-concepts/` สำหรับแนวคิดเฉพาะทาง
- อ่าน `guide/features.md` สำหรับ features ที่มี
- อ่าน `guide/patterns.md` สำหรับ patterns ทั่วไป
- เขียน stories สำหรับ components
- อ่าน `guide/configuration.md` สำหรับการตั้งค่า
- อ่าน `references/configuration.md` สำหรับ configuration reference
- ตั้งค่า Storybook configuration
- อ่าน `guide/integration.md` สำหรับ addon integration
- ใช้ addons สำหรับ extend functionality
- ตั้งค่า addons ตามความต้องการ
- อ่าน `guide/testing.md` สำหรับ testing strategies
- ใช้ Storybook สำหรับ component testing
- อ่าน `guide/best-practices.md` สำหรับ best practices
- อ่าน `guide/architecture.md` สำหรับ system architecture
- อ่าน `guide/structure.md` สำหรับ project structure
- อ่าน `guide/troubleshooting.md` สำหรับปัญหาทั่วไป

## Rules

- ใช้ `bunx storybook@latest init` สำหรับ installation
- ใช้ backticks สำหรับ stories, commands, addons
- ใช้ code blocks สำหรับ story examples
- ใช้ ansi markdown diagrams สำหรับ flow และ architecture
- เขียน stories สำหรับทุก components
- ใช้ addons สำหรับ extend functionality
- ใช้ isolated environment สำหรับ development
- ใช้ proper story organization
- ใช้ component testing อย่างเหมาะสม

## Expected Outcome

- Components ที่ well-documented
- Development ใน isolated environment
- Testing ที่ comprehensive
- Documentation ที่ interactive
