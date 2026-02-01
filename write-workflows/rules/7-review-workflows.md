# Review Workflows Rules

## Strict Rules
- ทุก workflow ที่ขึ้นต้นด้วย `review-` ต้องมี report
- ใช้ `[create-review-report](create-review-report.md)` สำหรับสร้าง report
- report ต้องระบุ approval decision ชัดเจน
- report ต้องมี executive summary และ category scores
- report ต้องระบุ issues และ recommendations ทั้งหมด
- report ต้องระบุ next steps และ timeline ชัดเจน
- ห้ามบันทึก review workflow โดยไม่มี report

## Report Structure
ทุก review workflow ต้องสร้าง report ที่มี:
- Executive summary (สรุปผลการ review)
- Overall score (คะแนนรวม 1-10)
- Approval decision (approve/reject/conditional)
- Category scores (คะแนนแต่ละ category)
- Issues list (รายการปัญหาทั้ง critical และ non-critical)
- Recommendations (คำแนะนำพร้อม priority และ timeline)
- Next steps (ขั้นตอนถัดไปพร้อม responsible party)
- Reviewer name และ review date

## Review Process
ทำตาม workflow นี้สำหรับทุก review:
1. ทำตาม review workflow ทั้งหมด
2. รวบรวม review results ทั้งหมด
3. ทำตาม `[create-review-report](create-review-report.md)`
4. บันทึก report ใน format ที่กำหนด
5. แจ้งให้ reviewer ทราบ

## Report Quality
- report ต้องชัดเจนและเข้าใจง่าย
- ทุก issue ต้องมี recommendations
- ทุก recommendation ต้องมี priority และ timeline
- report ต้องใช้ format ที่กำหนดเท่านั้น
- report ต้องบันทึกในชื่อไฟล์ที่ถูกต้อง

## Verification
- ตรวจสอบว่า review workflow มี report
- ยืนยันว่า report มีโครงสร้างครบถ้วน
- ตรวจสอบว่าทุก issue มี recommendations
- ยืนยันว่า report ใช้ format ที่กำหนด
- ตรวจสอบว่า report บันทึกในชื่อไฟล์ที่ถูกต้อง
