---
name: Git Branching Best Practices
description: กฎเกี่ยวกับการใช้งาน branches ใน Git อย่างมีประสิทธิภาพ
priority: HIGH
condition: เมื่อใช้งาน branches ในทุก project
---

# Git Branching Best Practices

## เหตุผล

การใช้ branches อย่างถูกต้องทำให้การพัฒนาซอฟต์แวร์มีประสิทธิภาพและลดความเสี่ยงในการทำลาย code ที่ทำงานอยู่

## ตัวอย่างที่ไม่ดี

```bash
# ไม่ดี: ทำงานโดยตรงบน main branch
$ git checkout main
$ vim feature.py
$ git commit -m "Add feature"

# ไม่ดี: ใช้ชื่อ branch ที่ไม่ชัดเจน
$ git checkout -b temp
$ git checkout -b test
$ git checkout -b fix

# ไม่ดี: รวมหลาย features ใน branch เดียว
$ git checkout -b features
# (ทำงานหลาย features ใน branch เดียว)

# ไม่ดี: ไม่ลบ branches หลังจาก merge
$ git merge feature
# (ลืมลบ branch)
```

## ตัวอย่างที่ดี

```bash
# ดี: สร้าง branch สำหรับแต่ละ feature
$ git checkout -b feature/user-authentication
$ git checkout -b fix/login-bug
$ git checkout -b refactor/database-connection

# ดี: ใช้ชื่อ branch ที่อธิบายได้ชัดเจน
$ git checkout -b feature/user-authentication
$ git checkout -b fix/login-timeout-error
$ git checkout -b docs/update-readme

# ดี: ทำงานบน branch แยกแล้ว merge
$ git checkout -b feature/user-authentication
# (ทำงาน)
$ git checkout main
$ git merge feature/user-authentication
$ git branch -d feature/user-authentication
```

## กฎที่ต้องปฏิบัติตาม

### 1. สร้าง Branch สำหรับแต่ละ Feature/Issue

**กฎ:** ใช้ topic branches สำหรับทุก feature, bug fix, หรือ task

**เหตุผล:** ทำให้ง่ายต่อการ review, test, และ revert ถ้าจำเป็น

**ตัวอย่าง:**
- ✅ `feature/user-authentication`
- ✅ `fix/login-timeout-error`
- ✅ `docs/update-readme`
- ❌ ทำงานโดยตรงบน `main` branch

### 2. ใช้ชื่อ Branch ที่อธิบายได้ชัดเจน

**กฎ:** ใช้ชื่อ branch ที่อธิบายว่า branch นี้ทำอะไร

**เหตุผล:** ทำให้เข้าใจว่า branch นี้ทำอะไรโดยไม่ต้องดู code

**Naming Conventions:**
- `feature/<feature-name>`: สำหรับ features ใหม่
- `fix/<issue-description>`: สำหรับ bug fixes
- `docs/<documentation-update>`: สำหรับ documentation updates
- `refactor/<component-name>`: สำหรับ refactoring
- `test/<test-description>`: สำหรับ tests

**ตัวอย่าง:**
- ✅ `feature/user-authentication`
- ✅ `fix/login-timeout-error`
- ✅ `docs/update-readme`
- ❌ `temp`, `test`, `fix`, `new-feature`

### 3. ลบ Branches หลังจาก Merge

**กฎ:** ลบ topic branches หลังจาก merge เสร็จ

**เหตุผล:** ทำให้ repository สะอาดและลดความสับสน

**ตัวอย่าง:**
```bash
# Merge branch
$ git checkout main
$ git merge feature/user-authentication

# ลบ branch
$ git branch -d feature/user-authentication

# ถ้า merge ไม่ได้ ใช้ -D
$ git branch -D feature/user-authentication
```

### 4. ใช้ Long-Running Branches สำหรับ Projects ขนาดใหญ่

**กฎ:** ใช้ long-running branches (master, develop, etc.) สำหรับ projects ขนาดใหญ่

**เหตุผล:** ทำให้จัดการความเสถียรของ code ได้ดี

**ตัวอย่าง:**
- `master`: เสถียรที่สุด, ใช้สำหรับ releases
- `develop`: work ใหม่, ใช้สำหรับ testing
- `proposed/pu`: work ที่ยังไม่พร้อม

### 5. ใช้ Topic Branches สำหรับทุกงาน

**กฎ:** สร้าง topic branches สำหรับทุกงาน ไม่ว่าจะเล็กหรือใหญ่

**เหตุผล:** ทำให้ง่ายต่อการ context switch และ code review

**ตัวอย่าง:**
```bash
# สร้าง branch สำหรับงานเล็กๆ
$ git checkout -b fix/typo-in-readme
$ git checkout -b style/format-code
$ git checkout -b docs/update-installation-guide
```

### 6. ใช้ Branches หลายครั้งต่อวันตามความจำเป็น

**กฎ:** ไม่ต้องกลัวที่จะสร้างและลบ branches หลายครั้งต่อวัน

**เหตุผล:** Git ทำให้การสร้างและลบ branches ง่ายและรวดเร็ว

**ตัวอย่าง:**
```bash
# สร้าง branch สำหรับ task
$ git checkout -b feature/add-login
# (ทำงาน)
$ git checkout main
$ git merge feature/add-login
$ git branch -d feature/add-login

# สร้าง branch ใหม่สำหรับ task ถัดไป
$ git checkout -b fix/logout-bug
# (ทำงาน)
$ git checkout main
$ git merge fix/logout-bug
$ git branch -d fix/logout-bug
```

### 7. ใช้ Branches สำหรับ Isolation

**กฎ:** ใช้ branches เพื่อแยกงานที่ไม่เกี่ยวข้องกัน

**เหตุผล:** ทำให้ง่ายต่อการ review และลดความสับสน

**ตัวอย่าง:**
```bash
# แยก features ต่างกัน
$ git checkout -b feature/user-authentication
$ git checkout -b feature/user-profile
$ git checkout -b feature/user-notifications
```

### 8. ใช้ Branches สำหรับ Experimentation

**กฎ:** ใช้ branches สำหรับลองทำสิ่งใหม่ๆ และทิ้งได้ถ้าไม่ได้ผล

**เหตุผล:** ทำให้ปลอดภัยในการลองทำสิ่งใหม่ๆ

**ตัวอย่าง:**
```bash
# ลองทำสิ่งใหม่
$ git checkout -b experiment/new-approach
# (ทำงาน)
# ถ้าไม่ได้ผล
$ git checkout main
$ git branch -D experiment/new-approach
```

### 9. ใช้ Branches สำหรับ Code Review

**กฎ:** ใช้ branches สำหรับ code review โดยส่ง pull requests หรือ merge requests

**เหตุผล:** ทำให้ง่ายต่อการ review และ discusion

**ตัวอย่าง:**
```bash
# สร้าง branch สำหรับ feature
$ git checkout -b feature/user-authentication
# (ทำงาน)
$ git push origin feature/user-authentication
# ส่ง pull request ผ่าน GitHub/GitLab
```

### 10. ใช้ Branches สำหรับ Parallel Development

**กฎ:** ใช้ branches สำหรับพัฒนา features หลายอย่างพร้อมกัน

**เหตุผล:** ทำให้ทีมสามารถทำงานได้หลายอย่างพร้อมกัน

**ตัวอย่าง:**
```bash
# Developer 1
$ git checkout -b feature/user-authentication

# Developer 2
$ git checkout -b feature/user-profile

# Developer 3
$ git checkout -b feature/user-notifications
```

## ผลกระทบถ้าไม่ทำตาม

- ยากต่อการ track changes
- เสี่ยงที่จะทำลาย code ที่ทำงานอยู่
- ยากต่อการ code review
- ยากต่อการ revert changes
- ทำให้ repository รกและสับสน

## References

- [Git Branching - Branching Workflows](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows)
- [Git Book](https://git-scm.com/book/en/v2)
