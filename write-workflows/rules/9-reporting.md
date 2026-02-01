# Reporting Rules

## Strict Rules
- ทุก workflow ต้องมี report ที่สร้างจาก [workflow-report-system](workflow-report-system.md)
- report ต้องแสดงคะแนนและสถานะชัดเจน
- ใช้ report เพื่อติดตามความก้าวหน้าและปรับปรุง
- ห้ามบันทึก workflow ที่มี score < 90%
- ทุก critical issue ต้องแก้ไขก่อนบันทึก
- ทุก workflow ต้องผ่าน quality gate ก่อนบันทึก

## Report System
ใช้ [workflow-report-system](workflow-report-system.md) เพื่อ:
- สร้าง report อัตโนมัติหลังจากทำตาม workflow
- ติดตามคะแนนและแนวโน้มการปรับปรุง
- ระบุปัญหาและคำแนะนำ
- ส่งออก report ในรูปแบบต่างๆ (Markdown, JSON, CSV)

## Report Metrics
- Overall Score: คะแนนรวม (ต้อง >= 90%)
- Part Scores: คะแนนแต่ละ Part (ต้อง >= 85%)
- Issues: ปัญหา Critical และ Warnings (Critical ต้อง = 0)
- Security Score: คะแนนความปลอดภัย (ต้อง >= 90%)
- Performance Score: คะแนนประสิทธิภาพ (ต้อง >= 85%)

## Report Generation Process
1. ทำตาม workflow ให้เสร็จสมบูรณ์
2. รัน [workflow-report-system](workflow-report-system.md)
3. ตรวจสอบว่า score ตรง threshold ที่กำหนด
4. แก้ไข critical issues ถ้ามี
5. บันทึก report ใน format ที่กำหนด
6. อัปเดต workflow ถ้าจำเป็น

## Verification
- ตรวจสอบว่าทุก workflow มี report
- ยืนยันว่า scores ตรง threshold ที่กำหนด
- ตรวจสอบว่า critical issues = 0
- ยืนยันว่า report สร้างจาก workflow-report-system
- ตรวจสอบว่า report บันทึกใน format ที่ถูกต้อง
