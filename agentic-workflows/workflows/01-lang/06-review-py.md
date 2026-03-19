---
title: Review Python Code
description: ตรวจสอบ Python code ตาม best practices, PEP 8 และ Python standards
auto_execution_mode: 3
file-patterns:
  - "**/workflows/review-lang-py.md"
---

## Prerequisites

- เข้าใจ Python best practices และ PEP 8 style guide
- รู้จัก Python type hints และ static type checking (mypy)
- เข้าใจ Python testing frameworks (pytest, unittest)
- รู้จัก Python virtual environments และ dependency management

## 3.1 Precondition

- มี Python project หรือไฟล์ .py ที่ต้องการตรวจสอบ
- มี Python 3.10+ ติดตั้งในระบบ
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- มี virtual environment ที่ถูกต้อง (ถ้ามี dependencies)

## 3.2 Prepare

- ระบุไฟล์ Python ที่ต้องการตรวจสอบ
- อ่านเนื้อหาปัจจุบันของแต่ละไฟล์
- ตรวจสอบว่า requirements.txt หรือ pyproject.toml มีอยู่และถูกต้อง
- เตรียม tools สำหรับ linting, formatting และ type checking

## 3.3 Execute

1. รัน formatter เพื่อตรวจสอบรูปแบบโค้ด

   ```bash
   # ใช้ black สำหรับ formatting
   black --check .

   # หรือ ruff
   ruff format --check .
   ```

2. รัน linter เพื่อหาปัญหาทั่วไป

   ```bash
   # ใช้ ruff (fast and comprehensive)
   ruff check .

   # หรือ pylint
   pylint **/*.py

   # หรือ flake8
   flake8 .
   ```

3. รัน type checker

   ```bash
   mypy .
   ```

4. ตรวจสอบว่าโค้ดสามารถรันได้

   ```bash
   python -m compileall .
   ```

5. รัน tests เพื่อตรวจสอบความถูกต้อง

   ```bash
   pytest -v
   ```

6. ตรวจสอบ test coverage

   ```bash
   pytest --cov=. --cov-report=term-missing
   ```

7. ตรวจสอบ Python best practices
   - ใช้ type hints อย่างเหมาะสม
   - ใช้ docstrings (Google style หรือ NumPy style)
   - Error handling ด้วย try/except ที่เฉพาะเจาะจง
   - ใช้ list/dict comprehensions อย่างเหมาะสม
   - ใช้ context managers (with statements) สำหรับ resources
   - ตรวจสอบ Pythonic patterns (EAFP vs LBYL)

8. ตรวจสอบ security issues

   ```bash
   # ใช้ bandit สำหรับ security linting
   bandit -r .
   ```

9. ตรวจสอบ dependencies
   - ดูว่ามี outdated packages หรือไม่
   - ตรวจสอบว่าไม่มี known vulnerabilities

10. แก้ไขปัญหาที่พบ
    - แก้ไข formatting ด้วย `black .` หรือ `ruff format .`
    - แก้ไข linting errors ที่ auto-fix ได้
    - เพิ่ม type hints ที่ขาดหาย

## 3.4 Validate

- [ ] รัน `black --check .` หรือ `ruff format --check .` ผ่านไม่มี formatting issues
- [ ] รัน `ruff check .` หรือ `pylint` ผ่านไม่มี linting errors
- [ ] รัน `mypy .` ผ่านไม่มี type errors
- [ ] รัน `python -m compileall .` ผ่านไม่มี syntax errors
- [ ] รัน `pytest` ผ่านทุก test case
- [ ] Test coverage อยู่ในระดับที่ยอมรับได้ (>70%)
- [ ] รัน `bandit -r .` ผ่านไม่มี security issues
- [ ] ใช้ type hints ใน public functions
- [ ] Functions/classes มี docstrings
- [ ] ใช้ Pythonic patterns อย่างเหมาะสม

## 3.5 Verify

- [ ] ยืนยันว่าโปรเจกต์ Python ทำงานได้ปกติ
- [ ] ตรวจสอบว่าไม่มี breaking changes จากการแก้ไข
