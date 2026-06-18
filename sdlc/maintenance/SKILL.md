---
title: Maintenance
description: ดูแลรักษา project อย่างมีระบบ
auto_execution_mode: 3
---

## Goal

ดูแลรักษา project อย่างมีระบบเพื่อให้ codebase อยู่ในสภาพดีเสมอ

## Scope

ใช้สำหรับดูแลรักษา project ที่อยู่ใน production

## Execute

### 1. Dependency Management

จัดการ dependencies

- Monitor สำหรับ security vulnerabilities
- Update dependencies regularly
- Test updates ก่อน merging
- Use Renovate/Dependabot สำหรับ automation

### 2. Bug Fixes

แก้ bugs

- Triage reported issues
- Reproduce bugs
- Write regression tests
- Fix bugs และ verify

### 3. Refactoring

Refactor code

- Identify code smells
- Refactor สำหรับ maintainability
- Improve performance
- Update documentation

### 4. Feature Development

พัฒนา features

- Gather requirements
- Plan implementation
- Develop features
- Test และ deploy

### 5. Documentation Maintenance

ดูแล documentation

- Keep README อัพเดท
- Update API documentation
- Maintain changelog
- Update examples และ tutorials

## Rules

### 1. Regular Updates

ต้อง update dependencies regularly

- Check สำหรับ security vulnerabilities weekly
- Update dependencies monthly
- Test updates ก่อน merging

### 2. Regression Tests

ต้องเขียน regression tests

- เขียน tests สำหรับ bugs ที่แก้
- เขียน tests สำหรับ features ใหม่
- รัน tests ก่อน merging

### 3. Documentation Updates

ต้องอัพเดท documentation

- อัพเดท README เมื่อมีการเปลี่ยนแปลง
- อัพเดท API documentation เมื่อมีการเปลี่ยนแปลง
- อัพเดท changelog เมื่อมี release

## Expected Outcome

- Dependencies อัพเดทเป็นปัจจุบัน
- Bugs แก้เสร็จ
- Code refactor เสร็จ
- Features พัฒนาเสร็จ
- Documentation อัพเดทเสร็จ
- Codebase อยู่ในสภาพดี
