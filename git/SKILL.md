---
name: git
description: Git Best Practices - แนวทางการใช้งาน Git ที่ดีและเป็นมาตรฐาน
goal: ใช้ Git ตาม best practices
outcome: การใช้งาน Git มีประสิทธิภาพและเป็นมาตรฐาน
---

# Git Best Practices

## When to Apply

ใช้ Skill นี้เมื่อต้องการแนวทางการใช้งาน Git ที่ดีและเป็นมาตรฐาน เพื่อให้การทำงานร่วมกับทีมมีประสิทธิภาพมากขึ้น

- เมื่อต้องการเขียน commit message ที่สื่อความหมาย
- เมื่อต้องการจัดการ branches อย่างมีประสิทธิภาพ
- เมื่อต้องเลือก workflow ที่เหมาะสมสำหรับทีม
- เมื่อต้องการ maintain project ที่มี contributors หลายคน

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | CRITICAL | [1-git-commit-guidelines.md](./rules/1-git-commit-guidelines.md) | Git Commit Guidelines | กฎเกี่ยวกับการเขียน commit messages ที่ดีและเป็นมาตรฐาน | git- | เมื่อทำการ commit ในทุก project |
| 2 | HIGH | [2-git-branching-best-practices.md](./rules/2-git-branching-best-practices.md) | Git Branching Best Practices | กฎเกี่ยวกับการใช้งาน branches ใน Git อย่างมีประสิทธิภาพ | git- | เมื่อใช้งาน branches ในทุก project |
| 3 | MEDIUM | [3-git-workflow-guidelines.md](./rules/3-git-workflow-guidelines.md) | Git Workflow Guidelines | กฎเกี่ยวกับการเลือกและใช้ workflows ที่เหมาะสมใน Git | git- | เมื่อต้องเลือก workflow สำหรับ project |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| [git-branching-workflows.md](./knowledge/git-branching-workflows.md) | Git Branching Workflows | ความรู้เกี่ยวกับ Branching Workflows ใน Git รวมถึง Long-Running Branches และ Topic Branches | git- |
| [git-distributed-workflows.md](./knowledge/git-distributed-workflows.md) | Git Distributed Workflows | ความรู้เกี่ยวกับ Distributed Workflows ใน Git รวมถึง Centralized, Integration-Manager, และ Dictator and Lieutenants Workflows | git- |
| [git-contributing-workflows.md](./knowledge/git-contributing-workflows.md) | Git Contributing Workflows | ความรู้เกี่ยวกับ Contributing to a Project ใน Git รวมถึง Private Small Team, Private Managed Team, Forked Public Project และ Public Project over Email | git- |
| [git-maintaining-project.md](./knowledge/git-maintaining-project.md) | Git Maintaining a Project | ความรู้เกี่ยวกับ Maintaining a Project ใน Git รวมถึง Working in Topic Branches, Applying Patches, Checking Out Remote Branches, Determining What Is Introduced, Integrating Contributed Work และ Tagging Your Releases | git- |

## Overview

### Rules

แต่ละไฟล์ Rule ประกอบด้วย:
- เหตุผล (Why)
- ตัวอย่างที่ไม่ดี (Anti-patterns)
- ตัวอย่างที่ดี (Best practices)
- กฎที่ต้องปฏิบัติตาม (Rules)
- ผลกระทบถ้าไม่ทำตาม (Impact)
- เอกสารอ้างอิง (References)

### Knowledge

แต่ละไฟล์ Knowledge ประกอบด้วย:
- Overview: ภาพรวมของ topic
- Key Concepts: concepts สำคัญที่ต้องรู้
- Examples: ตัวอย่างการใช้งาน
- Best Practices: best practices ที่ควรทำตาม
- References: ลิงก์ไปยังแหล่งข้อมูลต้นฉบับ

## Quick Reference

### 1. Git Commit Guidelines (`CRITICAL`)

- [1-git-commit-guidelines.md](./rules/1-git-commit-guidelines.md) - กฎเกี่ยวกับการเขียน commit messages ที่ดีและเป็นมาตรฐาน

### 2. Git Branching Best Practices (`HIGH`)

- [2-git-branching-best-practices.md](./rules/2-git-branching-best-practices.md) - กฎเกี่ยวกับการใช้งาน branches ใน Git อย่างมีประสิทธิภาพ

### 3. Git Workflow Guidelines (`MEDIUM`)

- [3-git-workflow-guidelines.md](./rules/3-git-workflow-guidelines.md) - กฎเกี่ยวกับการเลือกและใช้ workflows ที่เหมาะสมใน Git

## How to Use

### Rules

แต่ละไฟล์ Rule อธิบายถึง:
- เหตุผลที่ต้องทำตามกฎ
- ตัวอย่างที่ไม่ดีและดี
- กฎที่ต้องปฏิบัติตาม
- ผลกระทบถ้าไม่ทำตาม
- เอกสารอ้างอิง

### Knowledge

แต่ละไฟล์ Knowledge อธิบายถึง:
- ภาพรวมของ topic
- Concepts สำคัญที่ต้องรู้
- ตัวอย่างการใช้งาน
- Best practices ที่ควรทำตาม
- เอกสารอ้างอิง

## References

- [Git Documentation](https://git-scm.com/docs)
- [Git Book](https://git-scm.com/book/en/v2)
- [Conventional Commits](https://www.conventionalcommits.org/)
