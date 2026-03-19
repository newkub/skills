# Windsurf Examples

> ตัวอย่างการใช้งาน Windsurf และ Cascade ในสถานการณ์ต่างๆ

---

## 🚀 เริ่ม Project ใหม่

### 1. สร้าง Nuxt Project

```text
User: @framework-nuxt สร้าง Nuxt 3 project ใหม่ชื่อ my-app พร้อม TypeScript

Cascade:
1. รัน bun create nuxt my-app
2. ตั้งค่า tsconfig.json
3. สร้างโครงสร้างพื้นฐาน
4. รัน dev server เพื่อตรวจสอบ
```

### 2. ตั้งค่า Database ด้วย Drizzle

```text
User: @lib-drizzle @runtime-bun ตั้งค่า Drizzle ORM สำหรับ PostgreSQL

Cascade:
1. ติดตั้ง dependencies: drizzle-orm, postgres
2. สร้าง schema.ts
3. ตั้งค่า drizzle.config.ts
4. สร้าง migration
5. สร้าง database client
```

---

## 🔍 ค้นหาและวิเคราะห์ Code

### 3. หาไฟล์ที่มีฟังก์ชันเฉพาะ

```text
User: หาไฟล์ที่มี function ชื่อ validateUser

Cascade:
1. grep_search: "function validateUser|const validateUser"
2. view_code_item: เปิดดู function ที่เจอ
3. รายงานผล: พบใน @/utils/auth.ts:15-30
```

### 4. วิเคราะห์โครงสร้าง Project

```text
User: /analyze-project

Cascade:
1. list_dir: ดู root structure
2. อ่าน package.json เพื่อดู dependencies
3. วิเคราะห์ framework และ architecture
4. สร้างรายงานสรุป
```

---

## 📝 แก้ไข Code

### 5. Refactor ไฟล์ใหญ่

```text
User: แยกไฟล์ @/components/UserDashboard.vue ออกเป็นหลายไฟล์

Cascade:
1. read_file: อ่านไฟล์เต็ม
2. วิเคราะห์ส่วนประกอบ
3. สร้างไฟล์ย่อย:
   - UserProfile.vue
   - UserSettings.vue
   - UserStats.vue
4. แก้ไข UserDashboard.vue ให้ใช้ components ใหม่
```

### 6. แก้ไขหลายจุดพร้อมกัน

```text
User: เปลี่ยนชื่อ variable จาก user เป็น currentUser ทุกที่ในโปรเจกต์

Cascade:
1. grep_search: หาทุก occurrence ของ "user"
2. multi_edit: แก้ไขหลายไฟล์พร้อมกัน
3. ตรวจสอบว่าไม่มี side effects
```

---

## 🧪 Testing & Debugging

### 7. รัน Tests

```text
User: /run-test

Cascade:
1. ตรวจสอบว่ามี test files ไหม
2. รัน bun test
3. ดูผลลัพธ์
4. ถ้ามี fail แก้ไขให้
```

### 8. Debug Browser

```text
User: ช่วยดูว่าทำไม button ไม่ทำงานใน http://localhost:3000/login

Cascade:
1. mcp5_browser_navigate: "http://localhost:3000/login"
2. mcp5_browser_snapshot: ดู page structure
3. mcp5_browser_click: ลอง click button
4. mcp5_browser_evaluate: ดู console errors
5. วิเคราะห์และแก้ไข
```

---

## 🔄 จัดการ Workflow

### 9. สร้าง Feature Branch

```text
User: /git-create-feature-branch สร้าง branch สำหรับ feature user-auth

Cascade:
1. check_git: ดูสถานะปัจจุบัน
2. สร้าง branch: feature/user-auth
3. checkout ไป branch ใหม่
4. รายงานผล
```

### 10. Commit และ Push

```text
User: /commit-and-push

Cascade:
1. git status: ดู changes
2. git add: stage files
3. git commit: ใช้ conventional commit format
4. git push: push ไป remote
```

---

## 🧠 ใช้ Memory

### 11. สร้าง Project Memory

```text
User: จดจำว่าโปรเจกต์นี้ใช้ Nuxt + Drizzle + PostgreSQL

Cascade:
1. create_memory:
   - title: "Project Stack - MyApp"
   - content: รายละเอียด technology stack
   - tags: [nuxt, drizzle, postgres, myapp]
```

### 12. ค้นหา Memory เก่า

```text
User: เราใช้ database อะไรในโปรเจกต์นี้?

Cascade:
1. trajectory_search: ค้นหาใน conversation
2. mcp6_search_nodes: ค้นหาใน knowledge graph
3. ตอบจากข้อมูลที่มี
```

---

## 🌐 ใช้ MCP Servers

### 13. หา Documentation

```text
User: ใช้ Context7 หาวิธี setup Tailwind CSS กับ Nuxt

Cascade:
1. mcp2_resolve-library-id: "nuxt"
2. mcp2_query-docs: "Tailwind CSS integration"
3. สรุปผลให้ user
```

### 14. ศึกษา GitHub Repo

```text
User: อยากเข้าใจว่า Next.js middleware ทำงานยังไง

Cascade:
1. mcp3_ask_question:
   - repo: "vercel/next.js"
   - question: "How does middleware work?"
2. อธิบายผลลัพธ์
```

---

## 🛠️ Development Tasks

### 15. สร้าง API Endpoint

```text
User: @lib-elysia สร้าง API สำหรับ /api/users มี GET, POST, DELETE

Cascade:
1. สร้าง server/index.ts
2. สร้าง routes สำหรับ users
3. เพิ่ม validation ด้วย Elysia
4. สร้าง types
5. ทดสอบ endpoint
```

### 16. ตั้งค่า CI/CD

```text
User: /setup-ci สร้าง GitHub Actions สำหรับ test และ deploy

Cascade:
1. สร้าง .github/workflows/ci.yml
2. ตั้งค่า test job
3. ตั้งค่า build job
4. ตั้งค่า deploy job (ถ้าต้องการ)
```

---

## 📦 จัดการ Dependencies

### 17. อัพเดท Dependencies

```text
User: /update-dependencies อัพเดททุก package เป็น latest

Cascade:
1. ตรวจสอบ current versions
2. ใช้ bun update หรือ taze
3. ตรวจสอบ breaking changes
4. รัน tests เพื่อยืนยัน
5. commit การเปลี่ยนแปลง
```

### 18. ลบ Unused Dependencies

```text
User: /follow-knip หาและลบ dependencies ที่ไม่ใช้

Cascade:
1. รัน knip
2. ดูรายการ unused
3. ลบที่ไม่จำเป็น
4. รัน tests ยืนยัน
```

---

## 🔒 Security & Quality

### 19. ตรวจสอบ Security

```text
User: /review-security ตรวจสอบ vulnerabilities ในโปรเจกต์

Cascade:
1. รัน bun audit
2. ตรวจสอบ dependencies ที่มีปัญหา
3. แนะนำการแก้ไข
4. อัพเดทถ้าจำเป็น
```

### 20. Code Review

```text
User: /review-code ตรวจสอบคุณภาพโค้ดที่เพิ่มมา

Cascade:
1. git diff: ดู changes
2. วิเคราะห์แต่ละไฟล์
3. ตรวจสอบ:
   - Code style
   - Potential bugs
   - Performance issues
   - Security concerns
4. สร้างรายงาน
```

---

## 🎯 Tips จากตัวอย่าง

### ทำงานเร็วขึ้น

- ใช้ `/command` แทนการอธิบายยาว
- ใช้ `@skill-name` โหลด context
- ใช้ `multi_edit` แทน `edit` หลายครั้ง

### ความแม่นยำ

- ระบุ paths แบบ absolute
- ใช้ `// turbo` เฉพาะที่ safe
- ตรวจสอบผลลัพธ์ทุกครั้ง

### การจัดการ Project

- สร้าง memory สำหรับ decisions สำคัญ
- ใช้ workflow สำหรับงานที่ทำซ้ำ
- Commit บ่อยๆ ด้วย `/commit`

---

## 📖 Related

- [Best Practices](./best-practices.md)
- [Troubleshooting](./troubleshooting.md)
- [Workflows](./workflows.md)
