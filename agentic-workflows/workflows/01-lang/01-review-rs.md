---
title: Review Rust
auto_execution_mode: 3
description: ตรวจสอบและปรับปรุงคุณภาพ Rust code ตาม best practices และ coding standards
---

## 1. Precondition

- มี Rust project หรือไฟล์ .rs ที่ต้องการตรวจสอบ
- มี Rust toolchain ติดตั้ง (rustc, cargo)
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory

## 2. Prepare

- ระบุไฟล์ Rust ที่ต้องการตรวจสอบ
- อ่านเนื้อหาปัจจุบันของแต่ละไฟล์
- ตรวจสอบว่า Cargo.toml มีอยู่และถูกต้อง
- เตรียม tools สำหรับ linting และ formatting

## 3. Execute

1. รัน formatter เพื่อตรวจสอบรูปแบบโค้ด

   ```bash
   cargo fmt --check
   ```

2. รัน linter เพื่อหาปัญหาทั่วไป

   ```bash
   cargo clippy --all-targets --all-features
   ```

3. ตรวจสอบว่าโค้ดสามารถ compile ได้

   ```bash
   cargo check
   ```

4. รัน tests เพื่อตรวจสอบความถูกต้อง

   ```bash
   cargo test
   ```

5. ตรวจสอบ documentation
   - ยืนยันว่า public functions มี doc comments
   - ตรวจสอบว่า examples ใน doc comments สามารถรันได้

   ```bash
   cargo doc --no-deps
   ```

6. แก้ไขปัญหาที่พบ
   - แก้ไข formatting ด้วย `cargo fmt`
   - แก้ไข warnings จาก clippy
   - เพิ่ม doc comments ที่ขาดหาย

## 4. Validate

- [ ] รัน `cargo fmt --check` ผ่านไม่มีข้อผิดพลาด
- [ ] รัน `cargo clippy` ผ่านไม่มี warnings
- [ ] รัน `cargo check` ผ่านไม่มี compilation errors
- [ ] รัน `cargo test` ผ่านทุก test case
- [ ] สร้าง documentation ได้สำเร็จด้วย `cargo doc`
- [ ] ทุก public function มี doc comments
- [ ] ใช้ idiomatic Rust patterns ตาม clippy suggestions

## 5. Verify

- [ ] ยืนยันว่าโปรเจกต์ Rust ทำงานได้ปกติ
