---
name: setup-project
description: "ตั้งค่าพื้นฐาน project อย่างครบถ้วน"
triggers: ['user', 'model']
allowed-tools: ['read', 'edit', 'grep', 'glob', 'exec']
---
## Goal

ตั้งค่าพื้นฐาน project อย่างครบถ้วนเพื่อเริ่ม development ได้ทันที


## Scope

ใช้สำหรับตั้งค่า project ใหม่หรือ restructure project ที่มีอยู่


## Execute

### 1. Initialize Project

เริ่มต้น project

- สร้าง repository (GitHub/GitLab/Bitbucket)
- Initialize git ด้วย `.gitignore` ที่เหมาะสม
- Setup branch strategy (main/develop/feature)
- Configure git hooks (Lefthook/Husky)

### 2. Configuration Setup

ตั้งค่า configuration files

- สร้าง `package.json` ด้วย scripts มาตรฐาน
- Setup TypeScript config (`tsconfig.json`)
- Setup build tool (Vite/tsdown/Rollup)
- Setup linter/formatter (Biome/ESLint/Prettier)
- Setup test framework (Vitest/Jest)
- Setup CSS framework (Tailwind/UnoCSS)
- Setup environment variables (`.env.example`)

### 3. Directory Structure

สร้าง directory structure

- สร้าง Clean Architecture structure (`src/`)
- สร้าง module directories (`src/modules/`)
- สร้าง adapter directories (`src/adapters/`)
- สร้าง shared kernel (`src/shared/`)
- สร้าง test directories (`tests/`)
- สร้าง docs directory (`docs/`)

### 4. Dependencies Installation

ติดตั้ง dependencies

- ติดตั้ง runtime dependencies
- ติดตั้ง dev dependencies
- Setup package manager (Bun/bun/bun)
- Configure workspace (monorepo ถ้าจำเป็น)

### 5. Development Tools Setup

ตั้งค่า development tools

- Setup IDE settings (VS Code/WebStorm)
- Setup pre-commit hooks
- Setup commit linting (commitlint)
- Setup changelog generator (changesets/changelogen)
- Setup release automation (Auto/release-it)


## Rules

### 1. Use Existing Workflows

ใช้ workflows ที่มีอยู่แล้ว

- ทำตาม `/follow-package-manifest` สำหรับ package.json
- ทำตาม `/follow-tsconfig-json` สำหรับ TypeScript
- ทำตาม `/follow-biome` หรือ `/follow-eslint` สำหรับ linting
- ทำตาม `/follow-vitest` สำหรับ testing
- ทำตาม `/follow-lefthook` สำหรับ git hooks

### 2. Consistent Structure

โครงสร้างต้องสม่ำเสมอ

- ใช้ Clean Architecture สำหรับทุก projects
- ใช้ naming conventions สม่ำเสมอ
- ใช้ folder structure สม่ำเสมอ

### 3. Validate Setup

ต้อง validate ก่อนเริ่ม development

- รัน `bun install` สำเร็จ
- รัน linting สำเร็จ
- รัน type checking สำเร็จ
- รัน tests สำเร็จ


## Expected Outcome

- Repository สร้างเสร็จ
- Git configuration ตั้งค่าเสร็จ
- Configuration files ตั้งค่าเสร็จ
- Directory structure สร้างเสร็จ
- Dependencies ติดตั้งเสร็จ
- Development tools ตั้งค่าเสร็จ
- Project พร้อมเริ่ม development
