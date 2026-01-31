---
name: Git Contributing Workflows
description: ความรู้เกี่ยวกับ Contributing to a Project ใน Git รวมถึง Private Small Team, Private Managed Team, Forked Public Project และ Public Project over Email
---

# Git Contributing Workflows

## Overview

Contributing to a Project ใน Git มีหลายแนวทางขึ้นอยู่กับประเภทของ project และทีมที่ทำงานด้วย

## Private Small Team

### แนวคิด

Private Small Team เป็น workflow ที่ง่ายที่สุดสำหรับทีมขนาดเล็กที่มี 1-2 คนและทุกคนมี push access

### วิธีการทำงาน

1. ทุกคน clone จาก shared repository
2. ทำงานและ commit ใน local
3. Push changes กลับไป shared repository
4. ถ้ามี conflicts ต้อง fetch และ merge ก่อน

### ขั้นตอนการทำงาน

```bash
# คนแรก (John)
$ git clone john@githost:simplegit.git
$ cd simplegit/
$ vim lib/simplegit.rb
$ git commit -am 'Remove invalid default value'
$ git push origin master

# คนที่สอง (Jessica)
$ git clone jessica@githost:simplegit.git
$ cd simplegit/
$ vim TODO
$ git commit -am 'Add reset task'
$ git push origin master

# John พยายาม push แต่ถูก reject
$ git push origin master
# ! [rejected] master -> master (non-fast forward)
# error: failed to push some refs to 'john@githost:simplegit.git'

# John ต้อง fetch และ merge ก่อน
$ git fetch origin
$ git merge origin/master
# (resolve conflicts ถ้ามี)
$ git push origin master
```

### ข้อดี

- ง่ายต่อการเริ่มต้น
- คล้ายกับ centralized VCSs
- ได้รับประโยชน์จาก Git features (offline commits, branching, merging)

### ข้อเสีย

- ต้อง merge ก่อน push ถ้ามีคนอื่น push ก่อน
- ไม่เหมาะกับทีมขนาดใหญ่

## Private Managed Team

### แนวคิด

Private Managed Team เป็น workflow ที่มี maintainer หรือ lead developer ที่รับผิดชอบการ review และ merge changes

### วิธีการทำงาน

1. Contributors สร้าง branches สำหรับ features
2. Contributors ส่ง pull requests หรือ patches
3. Maintainer review changes
4. Maintainer merge changes เข้า main branch

### ข้อดี

- มีการ review ก่อน merge
- ควบคุมคุณภาพ code ได้ดี
- เหมาะกับทีมที่มี maintainer หลัก

### ข้อเสีย

- ต้องมี maintainer ที่รับผิดชอบ
- อาจช้ากว่าการ push โดยตรง

## Forked Public Project

### แนวคิด

Forked Public Project เป็น workflow ที่ใช้ใน open source projects บน GitHub, GitLab หรือ platforms อื่นๆ

### วิธีการทำงาน

1. Fork repository หลัก
2. Clone forked repository มาที่ local
3. สร้าง branch สำหรับ feature
4. ทำงานและ commit บน branch
5. Push ไปที่ forked repository
6. ส่ง pull request ไปที่ repository หลัก
7. Maintainer review และ merge pull request

### ขั้นตอน

```bash
# Fork repository บน GitHub/GitLab

# Clone forked repository
$ git clone https://github.com/yourusername/project.git
$ cd project/

# สร้าง branch สำหรับ feature
$ git checkout -b feature-name

# ทำงานและ commit
$ git add .
$ git commit -m 'Add feature'

# Push ไปที่ forked repository
$ git push origin feature-name

# ส่ง pull request ผ่าน web interface
```

### ข้อดี

- ใช้ได้กับ open source projects
- ง่ายต่อการส่ง contributions
- Maintainer สามารถ review ได้
- ใช้ features ของ GitHub/GitLab (code review, CI/CD)

### ข้อเสีย

- ต้องมี account บน platform
- ต้องเรียนรู้ workflow ของ platform

## Public Project over Email

### แนวคิด

Public Project over Email เป็น workflow ที่ใช้ email สำหรับส่ง patches โดยเฉพาะสำหรับ projects ที่ไม่มี public repository หรือใช้ email เป็นหลัก

### วิธีการทำงาน

1. Contributor สร้าง patches โดยใช้ `git format-patch`
2. Contributor ส่ง patches ผ่าน email
3. Maintainer รับ patches และ apply โดยใช้ `git am`
4. Maintainer review และ merge changes

### ขั้นตอน

```bash
# Contributor สร้าง patches
$ git format-patch -o /tmp/ origin/master

# ส่ง patches ผ่าน email
$ git send-email --to maintainer@example.com /tmp/*.patch

# Maintainer รับ patches และ apply
$ git am /tmp/0001-feature.patch
```

### ข้อดี

- ใช้ได้กับทุก project
- ไม่ต้องมี public repository
- เหมาะกับ projects ที่ใช้ email เป็นหลัก

### ข้อเสีย

- ต้องใช้ email
- ไม่มี code review tools
- ซับซ้อนกว่าการใช้ GitHub/GitLab

## Choosing the Right Workflow

### Private Small Team

- **เหมาะกับ**: ทีมขนาดเล็ก, ทุกคนมี push access
- **ไม่เหมาะกับ**: ทีมขนาดใหญ่

### Private Managed Team

- **เหมาะกับ**: ทีมที่มี maintainer หลัก, ต้องการ code review
- **ไม่เหมาะกับ**: ทีมที่ทุกคนมี push access และเชื่อถือกัน

### Forked Public Project

- **เหมาะกับ**: Open source projects, GitHub/GitLab
- **ไม่เหมาะกับ**: Private projects ที่ไม่ต้องการ public repository

### Public Project over Email

- **เหมาะกับ**: Projects ที่ไม่มี public repository, ใช้ email เป็นหลัก
- **ไม่เหมาะกับ**: Projects ที่มี public repository หรือใช้ GitHub/GitLab

## Best Practices

### ทุก Workflow

- ใช้ commit messages ที่ชัดเจนและเป็นมาตรฐาน
- ทำงานบน branches ที่แยกจากกัน
- Review changes ก่อน merge
- ทดสอบ changes ก่อน merge

### Forked Public Project

- ใช้ descriptive branch names
- ส่ง pull requests ที่มี description ชัดเจน
- ตอบการ review และแก้ไขตาม feedback
- ลบ branches หลังจาก merge

### Public Project over Email

- ใช้ `git format-patch` แทน `git diff`
- ส่ง patches ที่มี commit messages ที่ดี
- ใช้ `git am -3` สำหรับ three-way merge

## References

- [Distributed Git - Contributing to a Project](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project)
- [Git Book](https://git-scm.com/book/en/v2)
