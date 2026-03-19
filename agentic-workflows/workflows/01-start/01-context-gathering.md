---
title: Context Gathering
description: รวบรวม context และข้อมูลที่จำเป็นจากหลายแหล่ง
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- ได้รับคำขอหรืองานที่ต้องทำ
- เข้าใจเบื้องต้นว่าต้องการ context ประเภทใด
- มี access สู่ sources ที่จำเป็น

## 3.1 Precondition

- มี task หรือ project ที่ชัดเจน
- เข้าใจ scope ของ context ที่ต้องการ
- มี tools และ access พร้อมใช้งาน
- เวลาเพียงพอสำหรับการรวบรวม

## 3.2 Prepare

- ระบุ sources ที่ต้องการ (codebase, docs, web, memory)
- เตรียม checklist สำหรับ context ที่จำเป็น
- กำหนด criteria สำหรับ prioritize sources
- เตรียมที่เก็บข้อมูลที่รวบรวม

## 3.3 Execute

1. รวบรวมจาก codebase

   - ใช้ `list_dir` สำรวจโครงสร้างโปรเจกต์
   - ใช้ `read_file` อ่าน README, package.json, config files
   - ใช้ `find_by_name` หาไฟล์สำคัญ
   - ใช้ `code_search` หา components, modules หลัก
   - ใช้ `grep_search` หา patterns ที่เกี่ยวข้อง

2. รวบรวมจาก documentation

   - ใช้ `read_file` อ่าน existing docs
   - ใช้ `skill` โหลด best practices สำหรับ tech stack
   - ใช้ `mcp2_query-docs` หา library documentation
   - ใช้ `mcp1_search_cloudflare_documentation` สำหรับ Cloudflare
   - ใช้ `mcp8_get-documentation-page` สำหรับ Nuxt

3. รวบรวมจาก memories และ history

   - ใช้ `mcp6_read_graph` หรือ `mcp6_search_nodes` ดู memories
   - ใช้ `trajectory_search` ค้นหาประวัติการทำงาน
   - ใช้ `create_memory` บันทึก context สำคัญ
   - รวบรวม lessons learned จากงานที่คล้ายกัน

4. รวบรวมจาก web (ถ้าจำเป็น)

   - ใช้ `search_web` หา information ทั่วไป
   - ใช้ `mcp3_read_wiki_contents` สำหรับ GitHub repos
   - ใช้ `read_url_content` อ่านบทความสำคัญ
   - ใช้ `mcp3_ask_question` ถามเกี่ยวกับ repos

## 3.4 Validate

- [ ] Context ครอบคลุมทุกด้านที่จำเป็น
- [ ] ข้อมูล up-to-date และ accurate
- [ ] Sources น่าเชื่อถือ
- [ ] ไม่มีข้อมูลสำคัญตกหล่น
- [ ] ข้อมูล organized และ accessible

## 3.5 Verify

- [ ] ยืนยันว่า context พร้อมสำหรับ next phase
- [ ] ตรวจสอบว่า stakeholders ยอมรับ context
- [ ] ยืนยันว่าไม่มี ambiguities ที่สำคัญ
- [ ] ตรวจสอบว่า documentation สมบูรณ์
- [ ] ยืนยันว่าพร้อม proceed ไปยัง analyze
