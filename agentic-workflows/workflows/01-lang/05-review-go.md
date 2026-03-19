---
title: Review Go Code
description: ตรวจสอบ Go code ตาม best practices, idiomatic patterns และ Go standards
auto_execution_mode: 3
file-patterns:
  - "**/workflows/review-lang-go.md"
---

## Prerequisites

- เข้าใจ Go idioms และ conventions (Effective Go)
- รู้จัก Go modules และ dependency management
- เข้าใจ Go routines, channels และ concurrency patterns
- รู้จัก testing framework ของ Go (testing package, testify)

## 3.1 Precondition

- มี Go project หรือไฟล์ .go ที่ต้องการตรวจสอบ
- มี Go toolchain ติดตั้ง (go 1.21+)
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory

## 3.2 Prepare

- ระบุไฟล์ Go ที่ต้องการตรวจสอบ
- อ่านเนื้อหาปัจจุบันของแต่ละไฟล์
- ตรวจสอบว่า go.mod และ go.sum มีอยู่และถูกต้อง
- เตรียม tools สำหรับ linting และ formatting (gofmt, golint, staticcheck)

## 3.3 Execute

1. รัน formatter เพื่อตรวจสอบรูปแบบโค้ด

   ```bash
   gofmt -l .
   ```

2. รัน linter เพื่อหาปัญหาทั่วไป

   ```bash
   # ใช้ staticcheck สำหรับ comprehensive linting
   staticcheck ./...

   # หรือ golint
   golint ./...
   ```

3. ตรวจสอบว่าโค้ดสามารถ compile ได้

   ```bash
   go build ./...
   ```

4. รัน tests เพื่อตรวจสอบความถูกต้อง

   ```bash
   go test -v ./...
   ```

5. รัน race detector (สำหรับ concurrent code)

   ```bash
   go test -race ./...
   ```

6. ตรวจสอบ code coverage

   ```bash
   go test -cover ./...
   ```

7. ตรวจสอบ idiomatic Go patterns
   - Error handling แบบ Go (if err != nil)
   - ใช้ interfaces อย่างเหมาะสม
   - Naming conventions (Exported vs unexported)
   - ใช้ defer สำหรับ resource cleanup
   - Context ใช้งานถูกต้อง

8. ตรวจสอบ Go modules
   - go.mod มี module path ที่ถูกต้อง
   - dependencies เป็น versions ที่ up-to-date
   - ไม่มี replace directives ที่ไม่จำเป็นใน production

9. แก้ไขปัญหาที่พบ
   - แก้ไข formatting ด้วย `gofmt -w .`
   - แก้ไข linting warnings
   - เพิ่ม documentation สำหรับ exported functions

## 3.4 Validate

- [ ] รัน `gofmt -l .` ผ่านไม่มีไฟล์ที่ต้องแก้ไข
- [ ] รัน `staticcheck ./...` ผ่านไม่มี warnings
- [ ] รัน `go build ./...` ผ่านไม่มี compilation errors
- [ ] รัน `go test ./...` ผ่านทุก test case
- [ ] รัน `go test -race ./...` ผ่านไม่มี race conditions
- [ ] Code coverage อยู่ในระดับที่ยอมรับได้ (>70%)
- [ ] ใช้ idiomatic Go patterns (Effective Go)
- [ ] Error handling ครอบคลุมทุก error cases
- [ ] Exported functions มี documentation comments

## 3.5 Verify

- [ ] ยืนยันว่าโปรเจกต์ Go ทำงานได้ปกติ
- [ ] ตรวจสอบว่าไม่มี breaking changes จากการแก้ไข
