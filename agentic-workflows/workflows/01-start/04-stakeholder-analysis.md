---
title: Stakeholder Analysis
description: วิเคราะห์และเข้าใจ stakeholders เพื่อให้ project สำเร็จ
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- Project หรือ initiative ถูกกำหนดแล้ว
- เข้าใจ business context
- มี access สู่ stakeholder information

## 3.1 Precondition

- Project scope ชัดเจน
- Initial stakeholder list มีอยู่
- Business objectives รู้จัก
- Resources สำหรับ analysis

## 3.2 Prepare

- รวบรวม stakeholder information
- เตรียม analysis framework (power/interest grid)
- กำหนด interview questions
- เตรียม documentation templates

## 3.3 Execute

1. Identify stakeholders

   - ใช้ `search_web` หา similar projects
   - ใช้ `mcp6_search_nodes` ดู organizational context
   - ใช้ `ask_user_question` identify key people
   - ใช้ `read_file` อ่าน org charts

2. Analyze stakeholder needs

   - ใช้ `ask_user_question` interview stakeholders
   - ใช้ `create_memory` บันทึก insights
   - วิเคราะห์ power, influence, interest
   - ระบุ potential conflicts

3. Create stakeholder map

   - ใช้ `write_to_file` สร้าง stakeholder matrix
   - ใช้ `edit` อัปเดต analysis
   - กำหนด communication strategies
   - ใช้ `todo_list` track engagement

## 3.4 Validate

- [ ] Key stakeholders identified
- [ ] Needs และ expectations documented
- [ ] Power dynamics understood
- [ ] Communication plan created

## 3.5 Verify

- [ ] ยืนยันว่า analysis ครบถ้วน
- [ ] ตรวจสอบว่า stakeholders consulted
- [ ] ยืนยันว่า plan actionable
- [ ] ตรวจสอบว่า reviewed กับทีม
