---
name: Git Workflow Guidelines
description: กฎเกี่ยวกับการเลือกและใช้ workflows ที่เหมาะสมใน Git
priority: MEDIUM
condition: เมื่อต้องเลือก workflow สำหรับ project
---

# Git Workflow Guidelines

## เหตุผล

การเลือก workflow ที่เหมาะสมทำให้ทีมสามารถทำงานร่วมกันได้อย่างมีประสิทธิภาพและลดปัญหาที่อาจเกิดขึ้น

## ตัวอย่างที่ไม่ดี

```bash
# ไม่ดี: ใช้ workflow ที่ไม่เหมาะกับ team size
# ทีมขนาดใหญ่ใช้ Centralized Workflow
# ทีมขนาดเล็กใช้ Dictator and Lieutenants Workflow

# ไม่ดี: ไม่มี workflow ที่ชัดเจน
# ทุกคน push โดยตรงโดยไม่มี process

# ไม่ดี: ใช้ workflow ที่ซับซ้อนเกินไป
# ทีมขนาดเล็กใช้ Dictator and Lieutenants Workflow
```

## ตัวอย่างที่ดี

```bash
# ดี: เลือก workflow ตาม team size และ project type
# ทีมขนาดเล็ก: Centralized Workflow
# ทีมขนาดกลาง: Integration-Manager Workflow
# ทีมขนาดใหญ่: Dictator and Lieutenants Workflow

# ดี: มี workflow ที่ชัดเจนและทุกคนเข้าใจ
# ทุกคนทำตาม workflow ที่กำหนด

# ดี: ใช้ workflow ที่เหมาะกับ project
# Open source project: Forked Public Project
# Private project: Private Small Team
```

## กฎที่ต้องปฏิบัติตาม

### 1. เลือก Workflow ตาม Team Size

**กฎ:** เลือก workflow ที่เหมาะกับขนาดของทีม

**เหตุผล:** ทำให้ workflow ไม่ซับซ้อนเกินไปและเหมาะกับการทำงาน

**Guidelines:**
- **1-2 คน**: Centralized Workflow
- **3-10 คน**: Integration-Manager Workflow
- **10+ คน**: Dictator and Lieutenants Workflow

**ตัวอย่าง:**
- ✅ ทีมขนาดเล็กใช้ Centralized Workflow
- ✅ ทีมขนาดกลางใช้ Integration-Manager Workflow
- ✅ ทีมขนาดใหญ่ใช้ Dictator and Lieutenants Workflow
- ❌ ทีมขนาดเล็กใช้ Dictator and Lieutenants Workflow

### 2. เลือก Workflow ตาม Project Type

**กฎ:** เลือก workflow ที่เหมาะกับประเภทของ project

**เหตุผล:** ทำให้ workflow เหมาะกับความต้องการของ project

**Guidelines:**
- **Private project**: Private Small Team หรือ Private Managed Team
- **Open source project**: Forked Public Project
- **Project ที่ใช้ email**: Public Project over Email

**ตัวอย่าง:**
- ✅ Open source project ใช้ Forked Public Project
- ✅ Private project ใช้ Private Small Team
- ❌ Open source project ใช้ Private Small Team

### 3. ใช้ Centralized Workflow สำหรับทีมขนาดเล็ก

**กฎ:** ใช้ Centralized Workflow สำหรับทีมขนาดเล็กที่ทุกคนมี push access

**เหตุผล:** ง่ายต่อการเริ่มต้นและคุ้นเคย

**ตัวอย่าง:**
```bash
# ทุกคน clone จาก central repository
$ git clone https://github.com/team/project.git

# ทำงานและ commit ใน local
$ git commit -m "Add feature"

# Push กลับไป central repository
$ git push origin main
```

### 4. ใช้ Integration-Manager Workflow สำหรับทีมขนาดกลาง

**กฎ:** ใช้ Integration-Manager Workflow สำหรับทีมที่มี contributors หลายคน

**เหตุผล:** ช่วยในการ review และ control คุณภาพ code

**ตัวอย่าง:**
```bash
# Contributors สร้าง branches และ push ไปที่ repository ของตัวเอง
$ git checkout -b feature/user-authentication
$ git push origin feature/user-authentication

# ส่ง pull request
# Maintainer review และ merge
```

### 5. ใช้ Dictator and Lieutenants Workflow สำหรับทีมขนาดใหญ่

**กฎ:** ใช้ Dictator and Lieutenants Workflow สำหรับ projects ขนาดใหญ่ที่มี collaborators หลายร้อยคน

**เหตุผล:** ช่วยแบ่งเบาภาระของ maintainer

**ตัวอย่าง:**
```
master (reference repository)
    ↑
dictator's master
    ↑
lieutenants' masters
    ↑
developers' topic branches
```

### 6. ใช้ Forked Public Project สำหรับ Open Source Projects

**กฎ:** ใช้ Forked Public Project สำหรับ open source projects บน GitHub/GitLab

**เหตุผล:** เหมาะกับ open source development และใช้ features ของ platforms

**ตัวอย่าง:**
```bash
# Fork repository บน GitHub/GitLab

# Clone forked repository
$ git clone https://github.com/yourusername/project.git

# สร้าง branch สำหรับ feature
$ git checkout -b feature-name

# Push และส่ง pull request
$ git push origin feature-name
```

### 7. ใช้ Public Project over Email สำหรับ Projects ที่ไม่มี Public Repository

**กฎ:** ใช้ Public Project over Email สำหรับ projects ที่ไม่มี public repository

**เหตุผล:** ใช้ได้กับทุก project แม้ไม่มี public repository

**ตัวอย่าง:**
```bash
# Contributor สร้าง patches
$ git format-patch -o /tmp/ origin/master

# ส่ง patches ผ่าน email
$ git send-email --to maintainer@example.com /tmp/*.patch

# Maintainer รับ patches และ apply
$ git am /tmp/0001-feature.patch
```

### 8. ทำให้ทุกคนในทีมเข้าใจ Workflow

**กฎ:** ทำให้ทุกคนในทีมเข้าใจ workflow ที่ใช้

**เหตุผล:** ทำให้ทุกคนทำงานตาม workflow เดียวกัน

**ตัวอย่าง:**
- ✅ มี documentation สำหรับ workflow
- ✅ อธิบาย workflow ให้ทุกคนเข้าใจ
- ❌ ไม่มี documentation หรือไม่อธิบายให้ทุกคนเข้าใจ

### 9. ทบทวน Workflow อย่างสม่ำเสมอ

**กฎ:** ทบทวน workflow อย่างสม่ำเสมอเพื่อให้เหมาะกับการเติบโตของทีม

**เหตุผล:** ทีมอาจเติบโตและ workflow อาจต้องเปลี่ยน

**ตัวอย่าง:**
- ✅ ทบทวน workflow ทุก 3-6 เดือน
- ✅ เปลี่ยน workflow ถ้าทีมเติบโตขึ้น
- ❌ ไม่เคยทบทวน workflow

### 10. ใช้ Tools ที่เหมาะกับ Workflow

**กฎ:** ใช้ tools ที่เหมาะกับ workflow ที่เลือก

**เหตุผล:** Tools ช่วยให้ workflow ทำงานได้อย่างมีประสิทธิภาพ

**ตัวอย่าง:**
- ✅ Centralized Workflow: Git commands
- ✅ Integration-Manager Workflow: GitHub/GitLab pull requests
- ✅ Forked Public Project: GitHub/GitLab
- ❌ Integration-Manager Workflow: ไม่ใช้ pull requests

## ผลกระทบถ้าไม่ทำตาม

- ทีมไม่สามารถทำงานร่วมกันได้อย่างมีประสิทธิภาพ
- เกิด conflicts และปัญหาอื่นๆ บ่อย
- ยากต่อการ review code
- ยากต่อการ maintain project
- ทีมไม่เติบโตได้อย่างมีประสิทธิภาพ

## References

- [Distributed Git - Distributed Workflows](https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows)
- [Distributed Git - Contributing to a Project](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project)
- [Git Book](https://git-scm.com/book/en/v2)
