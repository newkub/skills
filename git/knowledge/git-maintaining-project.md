---
name: Git Maintaining a Project
description: ความรู้เกี่ยวกับ Maintaining a Project ใน Git รวมถึง Working in Topic Branches, Applying Patches, Checking Out Remote Branches, Determining What Is Introduced, Integrating Contributed Work และ Tagging Your Releases
---

# Git Maintaining a Project

## Overview

Maintaining a Project ใน Git คือการจัดการและรวม contributions จาก developers ต่างๆ เข้าไปใน project หลัก

## Working in Topic Branches

### แนวคิด

เมื่อต้องการรวม work ใหม่ ควรลองใน topic branch ก่อนเพื่อให้ง่ายต่อการปรับแก้และทดสอบ

### วิธีการทำงาน

```bash
# สร้าง topic branch จาก master
$ git checkout -b sc/ruby_client master

# หรือสร้าง branch และ switch ไปพร้อมกัน
$ git checkout -b ruby_client master
```

### ประโยชน์

- ง่ายต่อการปรับแก้ patches แต่ละอัน
- สามารถทิ้ง work ได้ถ้าไม่ทำงาน
- ใช้ชื่อ branch ที่อธิบายได้ชัดเจน (เช่น `ruby_client`, `sc/ruby_client`)

## Applying Patches from Email

### git apply

ใช้สำหรับ patches ที่สร้างโดย `git diff` หรือ Unix diff command

```bash
# Apply patch
$ git apply /tmp/patch-ruby-client.patch

# Check ว่า patch จะ apply ได้หรือไม่
$ git apply --check 0001-see-if-this-helps-the-gem.patch
```

**ลักษณะเด่น:**
- ไม่สร้าง commit ให้อัตโนมัติ
- ต้อง stage และ commit ด้วยตัวเอง
- ใช้ `git apply --check` เพื่อตรวจสอบก่อน apply

### git am

ใช้สำหรับ patches ที่สร้างโดย `git format-patch`

```bash
# Apply patch
$ git am 0001-limit-log-function.patch
# Applying: Add limit to log function

# Apply patch ด้วย three-way merge
$ git am -3 0001-see-if-this-helps-the-gem.patch

# Apply patches จาก mbox ใน interactive mode
$ git am -3 -i mbox
```

**ลักษณะเด่น:**
- สร้าง commit ให้อัตโนมัติ
- รักษา author information และ commit message
- ใช้ `-3` สำหรับ three-way merge
- ใช้ `-i` สำหรับ interactive mode

### การจัดการ Conflicts

```bash
# ถ้า patch ไม่ apply ได้
$ git am 0001-see-if-this-helps-the-gem.patch
# error: patch failed: ticgit.gemspec:1

# แก้ไข conflicts
$ (fix the file)
$ git add ticgit.gemspec
$ git am --resolved

# หรือ skip patch
$ git am --skip

# หรือ abort
$ git am --abort
```

## Checking Out Remote Branches

### วิธีการทำงาน

```bash
# เพิ่ม remote
$ git remote add jessica https://github.com/jessica/myproject.git

# Fetch remote
$ git fetch jessica

# Checkout remote branch
$ git checkout -b rubyclient jessica/ruby-client

# หรือ pull โดยตรง (one-time)
$ git pull https://github.com/onetimeguy/project
```

### ประโยชน์

- เหมาะสำหรับ contributors ที่มี repository ของตัวเอง
- ได้รับ history ของ commits ด้วย
- ใช้ three-way merge โดย default

## Determining What Is Introduced

### เช็ค commits ที่อยู่ใน branch แต่ไม่อยู่ใน master

```bash
$ git log contrib --not master
```

หรือใช้ syntax:

```bash
$ git log master..contrib
```

### เช็ค changes ที่จะเกิดขึ้นเมื่อ merge

```bash
# Diff ระหว่าง current branch และ common ancestor กับ master
$ git diff master...contrib
```

**หมายเหตุ:** ใช้ triple-dot (`...`) สำหรับ diff ระหว่าง current branch และ common ancestor

### เช็คสิ่งที่จะถูก introduce

```bash
# เช็ค commits ที่จะถูก introduce
$ git log contrib --not master

# เช็ค changes แต่ละ commit
$ git log -p contrib --not master

# เช็ค full diff ที่จะเกิดขึ้น
$ git diff master...contrib
```

## Integrating Contributed Work

### Merging Workflows

#### Simple Merge Workflow

```bash
# Merge topic branch เข้า master โดยตรง
$ git checkout master
$ git merge ruby_client
$ git branch -d ruby_client
```

#### Two-Phase Merge Workflow

```bash
# Merge เข้า develop ก่อน
$ git checkout develop
$ git merge ruby_client

# เมื่อ release แล้ว fast-forward master
$ git checkout master
$ git merge develop
```

#### Large-Merging Workflows

ใช้ branches หลายอันตามระดับความเสถียร:

- `master`: เสถียรที่สุด
- `next`: work ใหม่ที่ปลอดภัย
- `seen` (หรือ `pu`): work ที่ยังต้องการการทดสอบ
- `maint`: maintenance backports

### Rebasing and Cherry-Picking Workflows

#### Rebase Workflow

```bash
# Rebase topic branch บน master
$ git checkout ruby_client
$ git rebase master

# Fast-forward master
$ git checkout master
$ git merge ruby_client
```

#### Cherry-Pick Workflow

```bash
# Cherry-pick commit เดียว
$ git cherry-pick e43a6

# Cherry-pick หลาย commits
$ git cherry-pick e43a6 e43a7 e43a8
```

### Rerere (Reuse Recorded Resolution)

เปิดใช้งาน rerere เพื่อบันทึก resolutions ของ conflicts:

```bash
# เปิดใช้งาน rerere
$ git config --global rerere.enabled true

# Git จะบันทึก resolutions และใช้ใหม่โดยอัตโนมัติ
```

## Tagging Your Releases

### สร้าง Signed Tags

```bash
# สร้าง signed tag
$ git tag -s v1.5 -m 'my signed 1.5 tag'

# สร้าง unsigned tag
$ git tag -a v1.5 -m 'my 1.5 tag'
```

### แจกจ่าย Public PGP Key

```bash
# List keys
$ gpg --list-keys

# Export key และ import เข้า Git
$ gpg -a --export F721C45A | git hash-object -w --stdin
# 659ef797d181633c87ec71ac3f9ba29fe5775b92

# สร้าง tag ที่ชี้ไปที่ key
$ git tag -a maintainer-pgp-pub 659ef797d181633c87ec71ac3f9ba29fe5775b92

# Push tags
$ git push --tags

# ผู้อื่น import key จาก repository
$ git show maintainer-pgp-pub | gpg --import
```

## Best Practices

### Working in Topic Branches

- ใช้ topic branches สำหรับทุก contribution
- ใช้ชื่อ branch ที่อธิบายได้ชัดเจน
- Namespace ด้วยชื่อ contributor (เช่น `sc/ruby_client`)

### Applying Patches

- ใช้ `git format-patch` แทน `git diff` สำหรับ patches
- ใช้ `git am` สำหรับ patches ที่มี commit messages
- ใช้ `git am -3` สำหรับ three-way merge
- ใช้ `git apply --check` ก่อน apply

### Integrating Work

- Review contributions ก่อน merge
- ใช้ topic branches สำหรับ testing
- เลือก workflow ที่เหมาะกับ project
- ใช้ rerere สำหรับ conflicts ที่ซ้ำๆ

### Tagging

- ใช้ signed tags สำหรับ releases
- แจกจ่าย public PGP key ด้วย repository
- ใช้ tags สำหรับ versioning

## References

- [Distributed Git - Maintaining a Project](https://git-scm.com/book/en/v2/Distributed-Git-Maintaining-a-Project)
- [Git Book](https://git-scm.com/book/en/v2)
