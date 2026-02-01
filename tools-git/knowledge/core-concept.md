# Git Core Concepts

## Repository
- **Working Directory**: ไฟล์ที่คุณเห็นและแก้ไข
- **Staging Area**: พื้นที่เตรียมไฟล์สำหรับ commit
- **Repository**: ฐานข้อมูลที่เก็บ commits ทั้งหมด

## Git States
- **Untracked**: ไฟล์ใหม่ที่ Git ยังไม่รู้จัก
- **Modified**: ไฟล์ที่ถูกแก้ไขแต่ยังไม่ add
- **Staged**: ไฟล์ที่ add แล้วพร้อม commit
- **Committed**: ไฟล์ที่บันทึกลง repository

## Git Workflow
1. แก้ไขไฟล์ใน Working Directory
2. Add ไฟล์ไปยัง Staging Area
3. Commit ไปยัง Local Repository
4. Push ไปยัง Remote Repository

## Branches
- **Main Branch**: branch หลักสำหรับ production
- **Feature Branch**: branch สำหรับพัฒนาฟีเจอร์ใหม่
- **HEAD**: pointer ชี้ไปยัง commit ปัจจุบัน
