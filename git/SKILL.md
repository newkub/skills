---
title: Tool Git
description: แนวทางการใช้งาน Git สำหรับ version control และ collaborative development
auto_execution_mode: 3
---

## Goal

ใช้งาน Git สำหรับ version control และ collaborative development

## Scope

ใช้สำหรับ track การเปลี่ยนแปลงของ code, ทำงานร่วมกับ team, version control, rollback การเปลี่ยนแปลง, และ code review ผ่าน pull requests

## โครงสร้าง Directory

```
git/
├── SKILL.md
├── learn/
│   ├── guide/              # Guides สำหรับการใช้งาน
│   ├── key-concepts/       # แนวคิดพื้นฐานของ Git
│   └── principles/         # Best practices และ principles
├── references/             # API, CLI, configuration references
└── workflows/              # Workflows สำหรับ tasks ทั่วไป
```

## หมวดหมู่ไฟล์

### Key Concepts (แนวคิดพื้นฐาน)

- `repository.md` - Repository structure และ concepts
- `commit.md` - Commit objects และ history
- `staging-area.md` - Index/staging area
- `head.md` - HEAD reference
- `branch.md` - Branching concepts
- `merge.md` - Merging strategies
- `remote.md` - Remote repositories
- `rebase.md` - Rebase และ history rewriting
- `stash.md` - Stashing changes
- `tag.md` - Tagging releases
- `submodule.md` - Submodules
- `reset.md` - Reset modes
- `checkout.md` - Checkout, switch, restore
- `sparse-checkout.md` - Sparse checkout
- `worktree.md` - Worktrees
- `blame-grep-search.md` - Search tools

### Guides (คู่มือการใช้งาน)

- `installation.md` - การติดตั้งและ setup
- `quick-start.md` - เริ่มต้นใช้งาน
- `key-concept.md` - แนวคิดหลัก
- `how-it-works.md` - วิธีการทำงาน
- `features.md` - Features ที่มี
- `configuration.md` - Configuration
- `best-practices.md` - Best practices
- `rebase.md` - Rebase guide
- `stash.md` - Stash guide
- `tag.md` - Tag guide
- `submodule.md` - Submodule guide
- `reset.md` - Reset guide
- `checkout.md` - Checkout guide

### Principles (หลักการ)

- `atomic-commits.md` - Atomic commits
- `meaningful-messages.md` - Commit messages
- `branch-strategy.md` - Branch strategies
- `collaboration.md` - Collaboration workflows
- `security.md` - Security best practices

### Workflows (เวิร์กโฟลว์)

- `init-repository.md` - สร้าง repository ใหม่
- `clone-repository.md` - Clone repository
- `commit-changes.md` - Commit changes
- `push-changes.md` - Push changes
- `pull-changes.md` - Pull changes
- `manage-branches.md` - จัดการ branches
- `merge-branches.md` - Merge branches
- `resolve-conflicts.md` - แก้ conflicts

### References (เอกสารอ้างอิง)

- `api.md` - API reference
- `cli.md` - CLI commands
- `configuration.md` - Configuration options
- `website.md` - Official documentation

## Execute

### เริ่มต้น

- อ่าน `guide/installation.md` สำหรับการติดตั้งและ setup
- อ่าน `guide/quick-start.md` สำหรับเริ่มต้นใช้งาน
- อ่าน `key-concepts/repository.md` เพื่อเข้าใจ repository structure

### แนวคิดพื้นฐาน

- อ่าน `key-concepts/commit.md` สำหรับเข้าใจ commits
- อ่าน `key-concepts/branch.md` สำหรับ branching
- อ่าน `key-concepts/merge.md` สำหรับ merging
- อ่าน `key-concepts/staging-area.md` สำหรับ staging area
- อ่าน `key-concepts/head.md` สำหรับ HEAD reference
- อ่าน `key-concepts/remote.md` สำหรับ remotes

### Features ขั้นสูง

- อ่าน `key-concepts/rebase.md` และ `guide/rebase.md` สำหรับ rebase
- อ่าน `key-concepts/stash.md` และ `guide/stash.md` สำหรับ stash
- อ่าน `key-concepts/tag.md` และ `guide/tag.md` สำหรับ tags
- อ่าน `key-concepts/submodule.md` และ `guide/submodule.md` สำหรับ submodules
- อ่าน `key-concepts/reset.md` และ `guide/reset.md` สำหรับ reset
- อ่าน `key-concepts/checkout.md` และ `guide/checkout.md` สำหรับ checkout

### Advanced Features

- อ่าน `key-concepts/sparse-checkout.md` สำหรับ sparse checkout
- อ่าน `key-concepts/worktree.md` สำหรับ worktrees
- อ่าน `key-concepts/blame-grep-search.md` สำหรับ search tools

### Best Practices

- อ่าน `principles/atomic-commits.md` สำหรับ atomic commits
- อ่าน `principles/meaningful-messages.md` สำหรับ commit messages
- อ่าน `principles/branch-strategy.md` สำหรับ branch strategies
- อ่าน `principles/collaboration.md` สำหรับ collaboration
- อ่าน `principles/security.md` สำหรับ security
- อ่าน `guide/best-practices.md` สำหรับ best practices โดยรวม

### Workflows

- ใช้ `workflows/init-repository.md` สำหรับสร้าง repository ใหม่
- ใช้ `workflows/clone-repository.md` สำหรับ clone repository
- ใช้ `workflows/commit-changes.md` สำหรับ commit changes
- ใช้ `workflows/push-changes.md` สำหรับ push changes
- ใช้ `workflows/pull-changes.md` สำหรับ pull changes
- ใช้ `workflows/manage-branches.md` สำหรับจัดการ branches
- ใช้ `workflows/merge-branches.md` สำหรับ merge branches
- ใช้ `workflows/resolve-conflicts.md` สำหรับแก้ conflicts

## Rules

- ใช้ `git init` สำหรับ initialize
- ใช้ `git clone` สำหรับ clone
- ใช้ `git add` และ `git commit` สำหรับ commit
- ใช้ `git push` สำหรับ push
- ใช้ backticks สำหรับ commands
- ใช้ code blocks สำหรับ examples
- ใช้ ansi markdown diagrams สำหรับ flow และ architecture

## Expected Outcome

- Version control ที่ reliable
- Collaboration ที่ efficient
- Code history ที่ tracked
- Rollback ที่ safe
