# Features

## Features ทั้งหมดของ Git

### Core Features

| Feature | Command | Description |
|---------|---------|-------------|
| **Initialize** | `git init` | สร้าง Git repository ใหม่ |
| **Clone** | `git clone <url>` | Clone repository จาก remote |
| **Add** | `git add <file>` | เพิ่มไฟล์ไป staging area |
| **Commit** | `git commit -m <msg>` | สร้าง commit พร้อม message |
| **Status** | `git status` | ดูสถานะของ working directory |
| **Diff** | `git diff` | ดูความแตกต่างของไฟล์ |

### Branching Features

| Feature | Command | Description |
|---------|---------|-------------|
| **List branches** | `git branch` | แสดง branches ทั้งหมด |
| **Create branch** | `git branch <name>` | สร้าง branch ใหม่ |
| **Switch branch** | `git checkout <branch>` | สลับไป branch อื่น |
| **Create & switch** | `git checkout -b <name>` | สร้างและสลับไป branch ใหม่ |
| **Delete branch** | `git branch -d <name>` | ลบ branch |
| **Merge** | `git merge <branch>` | รวม branch เข้ามา |

### Remote Features

| Feature | Command | Description |
|---------|---------|-------------|
| **Add remote** | `git remote add <name> <url>` | เพิ่ม remote |
| **Push** | `git push <remote> <branch>` | ส่ง commits ไป remote |
| **Pull** | `git pull <remote> <branch>` | ดึง changes จาก remote |
| **Fetch** | `git fetch <remote>` | ดึง metadata จาก remote |
| **Clone** | `git clone <url>` | Clone repository |

### History & Review

| Feature | Command | Description |
|---------|---------|-------------|
| **Log** | `git log` | แสดงประวัติ commits |
| **Show** | `git show <commit>` | แสดงรายละเอียด commit |
| **Blame** | `git blame <file>` | ดูว่าใครแก้ไขบรรทัดไหน |
| **Reflog** | `git reflog` | แสดง reference logs |
| **Bisect** | `git bisect` | หา commit ที่มีปัญหา |

### Advanced Features

| Feature | Command | Description |
|---------|---------|-------------|
| **Stash** | `git stash` | เก็บ changes ชั่วคราว |
| **Rebase** | `git rebase` | จัดเรียง commits ใหม่ |
| **Cherry-pick** | `git cherry-pick` | นำ commit มาใช้ |
| **Reset** | `git reset` | ย้อนกลับ commits |
| **Revert** | `git revert` | สร้าง commit ย้อนกลับ |
| **Tag** | `git tag` | สร้าง tag สำหรับ release |

### Collaboration Features

| Feature | Command | Description |
|---------|---------|-------------|
| **Pull request** | `git push` + UI | ขอ merge code |
| **Merge** | `git merge` | รวม branches |
| **Conflict resolution** | Manual + `git add` | แก้ไข conflicts |
| **Review** | `git log -p` | ดูการเปลี่ยนแปลง |
| **Blame** | `git blame` | ติดตามผู้แก้ไข |

## ดูเพิ่มเติม

| Topic | File |
|-------|------|
| CLI reference | [references/cli.md](../references/cli.md) |
| Configuration | [references/configuration.md](../references/configuration.md) |
| Best practices | [best-practices.md](best-practices.md) |