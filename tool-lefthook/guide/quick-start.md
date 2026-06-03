# Quick Start

## เริ่มต้นใช้งาน Lefthook อย่างรวดเร็ว

### 1. สร้าง Configuration File

สร้างไฟล์ `lefthook.yml` ใน root ของ project:

```yaml
# lefthook.yml
pre-commit:
  commands:
    lint:
      run: npm run lint
    test:
      run: npm run test

commit-msg:
  commands:
    commitlint:
      run: npx commitlint --edit {1}
```

### 2. Initialize Lefthook

```bash
# สำหรับ npm projects
npx lefthook install

# สำหรับ project อื่นๆ
lefthook install
```

### 3. ทดสอบ Hooks

```bash
# รัน pre-commit hook แบบ manual
npx lefthook run pre-commit

# รัน commit-msg hook
npx lefthook run commit-msg

# รัน hook เฉพาะ
npx lefthook run pre-push
```

### 4. ตัวอย่าง Configuration พื้นฐาน

```yaml
# lefthook.yml
pre-commit:
  parallel: true
  commands:
    eslint:
      glob: "*.{js,ts}"
      run: npx eslint {staged_files}
    prettier:
      glob: "*.{js,ts,json}"
      run: npx prettier --check {staged_files}
    tsc:
      run: npx tsc --noEmit

pre-push:
  commands:
    typecheck:
      run: npm run typecheck
    test:
      run: npm run test
```

### 5. Skip Hooks (ถ้าจำเป็น)

```bash
# Skip ทุก hooks
LEFTHOOK=0 git commit -m "message"

# หรือ environment variable อื่นๆ
SKIP=pre-commit,pre-push git commit -m "message"
```

## ขั้นตอนถัดไป

| Topic | Description |
|-------|-------------|
| [Configuration](configuration.md) | การตั้งค่า Lefthook เพิ่มเติม |
| [Key Concept](key-concept.md) | เข้าใจแนวคิดหลักของ Lefthook |
| [Best Practices](best-practices.md) | แนวทางปฏิบัติที่ดี |