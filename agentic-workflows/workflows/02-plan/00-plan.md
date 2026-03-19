---
title: Plan
description: วางแผนการดำเนินการอย่างละเอียดและกำหนดลำดับขั้นตอนการทำงานที่ชัดเจน
auto_execution_mode: 3
file-patterns:
  - "workflows/**/*.md"
  - "**/workflows/*.md"
---

## Prerequisites

- เข้าใจผลจากการวิเคราะห์ (analysis findings) อย่างลึกซึ้ง
- มีข้อมูลเพียงพอสำหรับการวางแผนรอบด้าน
- ระบุ constraints, dependencies, และ limitations ได้ชัดเจน
- เข้าใจ available resources และ capacity สำหรับการทำงาน

## 3.1 Precondition

- การวิเคราะห์ (analyze phase) เสร็จสมบูรณ์และมี findings ที่ชัดเจน
- มีความเข้าใจใน scope, objectives, และ deliverables ของงาน
- ระบุ resources ที่มีอยู่ทั้ง human, technical, และ time resources
- เข้าใจ priorities และ deadlines ที่ต้องยึดถือ
- รู้จัก stakeholders และ their expectations

## 3.2 Prepare

- รวบรวม options และ approaches ที่เป็นไปได้ทั้งหมด
- ประเมิน risks, benefits, และ trade-offs ของแต่ละ option
- จัดลำดับความสำคัญ (prioritize) ตาม business value และ urgency
- เตรียม planning frameworks และ tools ที่เหมาะสม
- ระบุ dependencies ภายในและภายนอกที่ต้องพิจารณา

## 3.3 Execute

1. กำหนด objectives และ milestones อย่างชัดเจน

   - ระบุ SMART objectives (Specific, Measurable, Achievable, Relevant, Time-bound)
   - แบ่งงานเป็น milestones ย่อยที่ measurable และ achievable
   - กำหนด success criteria สำหรับแต่ละ milestone
   - ระบุ deliverables ที่ต้องสร้างในแต่ละ phase
   - สร้าง definition of done สำหรับแต่ละ task

2. สร้าง execution roadmap ที่ละเอียด

   - ใช้ `todo_list` เพื่อสร้างแผนงานที่เป็นระบบและติดตาม progress
   - จัดลำดับขั้นตอนการทำงาน (sequence of tasks) ตาม logical flow
   - ระบุ dependencies ระหว่าง tasks โดยใช้ `code_search` หา relationships ใน code
   - ใช้ `list_dir` และ `find_by_name` เพื่อเข้าใจโครงสร้างที่ต้องแก้ไข
   - กำหนด checkpoints และ review points ที่เหมาะสม
   - ประมาณเวลาและ effort ที่ต้องใช้สำหรับแต่ละ task

3. เลือก approach, tools, และ strategies ที่เหมาะสม

   - ประเมิน different approaches ด้วย objective criteria โดยใช้ `search_web` หา comparisons
   - ใช้ `skill` เพื่อดู best practices และ patterns ที่แนะนำสำหรับงานนี้
   - ใช้ `mcp2_query-docs` หรือ `mcp2_resolve-library-id` สำหรับข้อมูล library/framework
   - เลือก tools และ technologies ที่เหมาะสมกับงาน
   - วางแผน resource allocation อย่างมีประสิทธิภาพ
   - ใช้ `ask_user_question` เมื่อต้องการตัดสินใจระหว่างหลายทางเลือก

## 3.4 Validate

- [ ] แผนครอบคลุมทุก requirements และ objectives
- [ ] ลำดับขั้นตอนมีเหตุผลและสามารถ execute ได้จริง
- [ ] ระบุ dependencies ถูกต้องและครบถ้วน
- [ ] Timeline และ resource allocation มีความเป็นไปได้
- [ ] Risk mitigation strategies ครอบคลุมและ actionable

## 3.5 Verify

- [ ] ยืนยันว่าแผนสามารถ execute ได้ตาม timeline ที่กำหนด
- [ ] ตรวจสอบความสมดุลของ workload และ resource utilization
- [ ] ยืนยันว่ามี checkpoints ที่เหมาะสมสำหรับ monitoring
- [ ] ตรวจสอบว่า plan ยืดหยุ่นพอสำหรับ unexpected changes
- [ ] ยืนยันว่าพร้อมเริ่ม execute phase ทันที
