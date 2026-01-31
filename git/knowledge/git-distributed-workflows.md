---
name: Git Distributed Workflows
description: ความรู้เกี่ยวกับ Distributed Workflows ใน Git รวมถึง Centralized, Integration-Manager, และ Dictator and Lieutenants Workflows
---

# Git Distributed Workflows

## Overview

Git เป็น distributed version control system ที่ทำให้นักพัฒนาสามารถทำงานร่วมกันได้อย่างยืดหยุ่นมากกว่า centralized systems ทุกคนสามารถเป็นทั้ง node และ hub ได้พร้อมกัน

## Centralized Workflow

### แนวคิด

Centralized Workflow เป็น workflow ที่คล้ายกับ centralized VCSs (เช่น Subversion) โดยมี repository หลักหนึ่งที่ทุกคน sync กับ

### วิธีการทำงาน

1. **Central Hub**: มี repository หลักหนึ่งที่รับ code
2. **Nodes**: ทุกคน sync กับ centralized location
3. **Push Order**: คนที่ push ก่อนจะสำเร็จ คนที่ push หลังต้อง merge ก่อน

### ขั้นตอน

1. ทุกคน clone จาก central repository
2. ทำงานและ commit ใน local
3. Push changes กลับไป central repository
4. ถ้ามีคน push ก่อน ต้อง fetch และ merge ก่อน

### ข้อดี

- เป็น workflow ที่คุ้นเคยและสะดวกสำหรับทีมที่ใช้ centralized VCSs
- ง่ายต่อการเริ่มต้น
- เหมาะกับทีมขนาดเล็ก

### ข้อเสีย

- ต้องรอให้คนอื่น push ก่อนถ้ามี conflicts
- ต้อง merge ก่อน push

## Integration-Manager Workflow

### แนวคิด

Integration-Manager Workflow ใช้ใน projects ที่มี maintainer หลักและ contributors หลายคน โดยแต่ละคนมี repository ของตัวเอง

### วิธีการทำงาน

1. ทุกคนมี repository ของตัวเอง
2. Maintainer มี repository หลัก (canonical repository)
3. Contributors สร้าง public clone และ push ไปที่ repository ของตัวเอง
4. Contributors ส่ง request ให้ maintainer pull changes
5. Maintainer ทดสอบและ merge changes เข้า main repository

### ขั้นตอน

```
1. Maintainer pushes to their public repository
2. Contributor clones that repository and makes changes
3. Contributor pushes to their own public copy
4. Contributor sends maintainer an email asking them to pull changes
5. Maintainer adds contributor's repository as a remote and merges locally
6. Maintainer pushes merged changes to the main repository
```

### ข้อดี

- Contributors สามารถทำงานต่อได้โดยไม่ต้องรอ maintainer
- Maintainer สามารถ pull changes ได้เมื่อพร้อม
- เหมาะกับ hub-based tools เช่น GitHub, GitLab

### ข้อเสีย

- ต้องมี repository หลายแห่ง
- ต้องมีการจัดการ remotes

## Dictator and Lieutenants Workflow

### แนวคิด

Dictator and Lieutenants Workflow เป็น variant ของ multiple-repository workflow ที่ใช้ใน projects ขนาดใหญ่ที่มี collaborators หลายร้อยคน

### วิธีการทำงาน

1. **Benevolent Dictator**: ผู้นำของ project
2. **Lieutenants**: Integration managers ที่รับผิดชอบส่วนต่างๆ ของ repository
3. **Regular Developers**: นักพัฒนาทั่วไป

### ขั้นตอน

```
1. Regular developers ทำงานบน topic branches และ rebase บน master
2. Lieutenants merge developers' topic branches เข้า master branches ของตัวเอง
3. Dictator merge lieutenants' master branches เข้า dictator's master branch
4. Dictator push master branch เข้า reference repository
```

### โครงสร้าง

```
master (reference repository)
    ↑
dictator's master
    ↑
lieutenants' masters
    ↑
developers' topic branches
```

### ข้อดี

- เหมาะกับ projects ขนาดใหญ่มาก
- ช่วยแบ่งเบาภาระของ maintainer
- สามารถรวม code ได้หลายจุดก่อน integration

### ข้อเสีย

- ซับซ้อนและต้องมีการจัดการมาก
- ไม่เหมาะกับ projects ขนาดเล็กหรือกลาง

### ตัวอย่างการใช้งาน

- Linux kernel
- Projects ขนาดใหญ่ที่มี collaborators หลายร้อยคน

## Choosing the Right Workflow

### Centralized Workflow

- **เหมาะกับ**: ทีมขนาดเล็ก, คุ้นเคยกับ centralized VCSs
- **ไม่เหมาะกับ**: ทีมขนาดใหญ่, projects ที่ซับซ้อน

### Integration-Manager Workflow

- **เหมาะกับ**: Open source projects, ทีมที่มี contributors หลายคน, GitHub/GitLab
- **ไม่เหมาะกับ**: ทีมขนาดเล็กที่ทุกคนมี push access

### Dictator and Lieutenants Workflow

- **เหมาะกับ**: Projects ขนาดใหญ่มาก, หลายร้อย collaborators, สภาพแวดล้อม hierarchical
- **ไม่เหมาะกับ**: ทีมขนาดเล็กหรือกลาง

## References

- [Distributed Git - Distributed Workflows](https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows)
- [Patterns for Managing Source Code Branches](https://martinfowler.com/articles/branching-patterns.html)
- [Git Book](https://git-scm.com/book/en/v2)
