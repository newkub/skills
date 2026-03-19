---
description: ตัวอย่าง Markdown 200+ แบบ จัดกลุ่มตามมาตรฐาน Workflow Structure
title: Markdown Examples Collection
tags: [markdown, examples, collection, reference, workflows]
goals:
  - รวบรวมตัวอย่าง Markdown ทั้งหมด 200+ แบบ
  - จัดกลุ่มตามโครงสร้างเดียวกับ Workflows (Core, Layout, Documentation, Advanced, Components)
  - ใช้เป็นคู่มืออ้างอิงครบวงจร
---

## Markdown Examples Collection

คอลเลกชันตัวอย่าง Markdown 200+ แบบ จัดกลุ่มตามมาตรฐาน Workflow Structure เพื่อให้ใช้งานและค้นหาได้ง่าย

---

### 📁 โครงสร้าง Directory (Workflow-Style)

```text
examples/
├── 📄 index.md                          # ไฟล์นี้ - เอกสารอ้างอิงรวม
│
├── 📁 01-core/                          # 🔧 Core - พื้นฐานสำคัญ (25 files)
│   ├── frontmatter/                     # YAML Frontmatter ต่างๆ
│   ├── headings/                        # หัวข้อทั้งหมด
│   ├── typography/                      # การจัด typography
│   └── basic-formatting/                # การจัดรูปแบบพื้นฐาน
│
├── 📁 02-layout/                          # 🎨 Layout - โครงสร้างและเลย์เอาต์ (40 files)
│   ├── structure/                         # โครงสร้างเอกสาร
│   ├── navigation/                        # การนำทาง
│   ├── file-tree/                         # แสดงโครงสร้างไฟล์
│   ├── grid-system/                       # ระบบ grid
│   ├── tables/                            # ตารางทั้งหมด
│   ├── lists/                             # รายการทั้งหมด
│   └── columns/                           # การแบ่งคอลัมน์
│
├── 📁 03-documentation/                   # 📚 Documentation - เอกสาร (60 files)
│   ├── project-docs/                      # เอกสารโปรเจกต์
│   ├── api-docs/                          # เอกสาร API
│   ├── guides/                            # คู่มือต่างๆ
│   ├── references/                        # เอกสารอ้างอิง
│   └── metadata/                          # ข้อมูลเมตา
│
├── 📁 04-advanced/                        # 🚀 Advanced - ฟีเจอร์ขั้นสูง (45 files)
│   ├── code-blocks/                       # บล็อกโค้ดขั้นสูง
│   ├── diagrams/                          # แผนภาพ
│   ├── math/                              # สูตรคณิตศาสตร์
│   ├── media/                             # สื่อและการฝัง
│   ├── interactive/                       # แบบโต้ตอบ
│   └── callouts/                          # Callouts และ Alerts
│
├── 📁 05-components/                      # 🎯 Components - คอมโพเนนต์พิเศษ (30 files)
│   ├── badges/                            # แบดจ์และ Shields
│   ├── cards/                             # การ์ด
│   ├── status/                            # สถานะและ Progress
│   ├── steps/                             # ขั้นตอนการทำงาน
│   └── special/                           # คอมโพเนนต์พิเศษอื่นๆ
│
├── 📁 06-utilities/                       # 🛠️ Utilities - เครื่องมือช่วยเหลือ (15 files)
│   ├── helpers/                           # ตัวช่วยต่างๆ
│   ├── emojis/                            # อีโมจิและไอคอน
│   ├── comments/                          # คอมเมนต์
│   └── shortcuts/                         # คีย์ลัด
│
├── 📁 08-advanced-features/               # ⚡ Advanced Features - ฟีเจอร์ขั้นสูง (10 files)
│   ├── alerts-notifications/              # Alerts และ Notifications
│   ├── badges-status/                     # Badges และ Status
│   ├── callouts-asides/                   # Callouts และ Asides
│   ├── citations-references/              # Citations และ References
│   ├── collapsible-sections/              # Collapsible content
│   └── footnotes/                         # Footnotes
│
├── 📁 09-custom-components/              # 🧩 Custom Components - คอมโพเนนต์พิเศษ (9 files)
│   ├── git-conventions/                   # Git conventions
│   ├── feature-management/                # Feature flags และ management
│   ├── status-indicators/                 # Status indicators
│   ├── interactive-elements/              # Interactive elements
│   └── documentation-helpers/             # Documentation helpers
│
└── 📁 10-reporting/                       # 📊 Reporting - รายงานและการวิเคราะห์ (5 files)
    ├── analyze-responses/                   # วิเคราะห์ AI responses
    ├── comparison-tables/                 # ตารางเปรียบเทียบ
    ├── decision-matrices/                 # Decision matrices
    └── response-formats/                  # รูปแบบรายงานผล
```

---

### 📋 หมวดหมู่ไฟล์ตาม Workflow Structure

#### 🔧 01 - Core (25 files)

พื้นฐานสำคัญที่ทุกเอกสาร Markdown ต้องมี

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [01-core/frontmatter/basic.md](./01-core/frontmatter/basic.md) | Frontmatter พื้นฐาน | ทุกไฟล์ | ⭐ |
| [01-core/frontmatter/advanced.md](./01-core/frontmatter/advanced.md) | Frontmatter ขั้นสูง | เอกสารซับซ้อน | ⭐⭐ |
| [01-core/frontmatter/workflows.md](./01-core/frontmatter/workflows.md) | Frontmatter สำหรับ workflows | สร้าง workflow | ⭐⭐ |
| [01-core/frontmatter/skills.md](./01-core/frontmatter/skills.md) | Frontmatter สำหรับ skills | สร้าง skill | ⭐⭐ |
| [01-core/headings/h1-h6.md](./01-core/headings/h1-h6.md) | หัวข้อ H1-H6 | โครงสร้างเอกสาร | ⭐ |
| [01-core/headings/alt-heading.md](./01-core/headings/alt-heading.md) | หัวข้อแบบทางเลือก | เอกสาร technical | ⭐ |
| [01-core/headings/heading-ids.md](./01-core/headings/heading-ids.md) | หัวข้อพร้อม ID | การนำทาง | ⭐⭐ |
| [01-core/typography/paragraphs.md](./01-core/typography/paragraphs.md) | ย่อหน้า | เนื้อหาทั่วไป | ⭐ |
| [01-core/typography/line-breaks.md](./01-core/typography/line-breaks.md) | ตัดบรรทัด | จัดรูปแบบ | ⭐ |
| [01-core/typography/horizontal-rules.md](./01-core/typography/horizontal-rules.md) | เส้นคั่น | แบ่งส่วน | ⭐ |
| [01-core/basic-formatting/bold-italic.md](./01-core/basic-formatting/bold-italic.md) | ตัวหนา-ตัวเอียง | เน้นข้อความ | ⭐ |
| [01-core/basic-formatting/strikethrough.md](./01-core/basic-formatting/strikethrough.md) | ขีดฆ่า | ข้อความที่ยกเลิก | ⭐ |
| [01-core/basic-formatting/sub-superscript.md](./01-core/basic-formatting/sub-superscript.md) | ตัวห้อย-ตัวยก | สูตรเคมี | ⭐⭐ |
| [01-core/links/internal.md](./01-core/links/internal.md) | ลิงก์ภายใน | การนำทาง | ⭐ |
| [01-core/links/external.md](./01-core/links/external.md) | ลิงก์ภายนอก | อ้างอิง | ⭐ |
| [01-core/links/anchors.md](./01-core/links/anchors.md) | ลิงก์จุดยึด | สารบัญ | ⭐⭐ |
| [01-core/links/reference-style.md](./01-core/links/reference-style.md) | ลิงก์แบบอ้างอิง | เอกสารยาว | ⭐⭐ |
| [01-core/lists/ordered.md](./01-core/lists/ordered.md) | รายการลำดับเลข | ขั้นตอน | ⭐ |
| [01-core/lists/unordered.md](./01-core/lists/unordered.md) | รายการสัญลักษณ์ | รายการทั่วไป | ⭐ |
| [01-core/lists/nested.md](./01-core/lists/nested.md) | รายการซ้อน | โครงสร้างซับซ้อน | ⭐⭐ |
| [01-core/lists/task.md](./01-core/lists/task.md) | รายการงาน (checkbox) | TODO list | ⭐ |
| [01-core/lists/description.md](./01-core/lists/description.md) | รายการอธิบาย | อธิบายคำศัพท์ | ⭐⭐ |
| [01-core/blockquotes/basic.md](./01-core/blockquotes/basic.md) | บล็อกโควตพื้นฐาน | อ้างอิงคำพูด | ⭐ |
| [01-core/blockquotes/nested.md](./01-core/blockquotes/nested.md) | บล็อกโควตซ้อน | การสนทนา | ⭐⭐ |
| [01-core/blockquotes/citations.md](./01-core/blockquotes/citations.md) | บล็อกโควตพร้อมอ้างอิง | งานวิจัย | ⭐⭐ |

---

#### 🎨 02 - Layout (40 files)

โครงสร้างและเลย์เอาต์สำหรับการจัดเอกสาร

##### 2.1 Structure (10 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [02-layout/structure/page-breaks.md](./02-layout/structure/page-breaks.md) | การแบ่งหน้า | PDF export | ⭐⭐ |
| [02-layout/structure/sections.md](./02-layout/structure/sections.md) | การแบ่งส่วน | เอกสารใหญ่ | ⭐ |
| [02-layout/structure/dividers.md](./02-layout/structure/dividers.md) | ตัวแบ่งส่วน | แยกเนื้อหา | ⭐ |
| [02-layout/structure/containers.md](./02-layout/structure/containers.md) | คอนเทนเนอร์ | กลุ่มเนื้อหา | ⭐⭐⭐ |
| [02-layout/structure/metadata-boxes.md](./02-layout/structure/metadata-boxes.md) | กล่องข้อมูลเมตา | ข้อมูลเพิ่มเติม | ⭐⭐ |
| [02-layout/structure/info-boxes.md](./02-layout/structure/info-boxes.md) | กล่องข้อมูล | เน้นข้อมูล | ⭐⭐ |
| [02-layout/structure/warning-boxes.md](./02-layout/structure/warning-boxes.md) | กล่องเตือน | คำเตือน | ⭐⭐ |
| [02-layout/structure/tip-boxes.md](./02-layout/structure/tip-boxes.md) | กล่องเคล็ดลับ | แนะนำ | ⭐⭐ |
| [02-layout/structure/spoilers.md](./02-layout/structure/spoilers.md) | การซ่อนข้อมูล | เนื้อหาลับ | ⭐⭐ |
| [02-layout/structure/footnotes.md](./02-layout/structure/footnotes.md) | เชิงอรรถ | อ้างอิง | ⭐⭐ |

##### 2.2 Navigation (8 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [02-layout/navigation/toc-basic.md](./02-layout/navigation/toc-basic.md) | สารบัญพื้นฐาน | เอกสารทั่วไป | ⭐ |
| [02-layout/navigation/toc-advanced.md](./02-layout/navigation/toc-advanced.md) | สารบัญขั้นสูง | เอกสารซับซ้อน | ⭐⭐ |
| [02-layout/navigation/breadcrumbs.md](./02-layout/navigation/breadcrumbs.md) | เส้นทางการนำทาง | เอกสารเว็บ | ⭐⭐ |
| [02-layout/navigation/pagination.md](./02-layout/navigation/pagination.md) | การแบ่งหน้า | เอกสารยาว | ⭐⭐ |
| [02-layout/navigation/tabs.md](./02-layout/navigation/tabs.md) | แท็บ | เนื้อหาทางเลือก | ⭐⭐⭐ |
| [02-layout/navigation/anchors-links.md](./02-layout/navigation/anchors-links.md) | จุดยึดและลิงก์ | สารบัญข้ามบท | ⭐⭐ |
| [02-layout/navigation/sidebar.md](./02-layout/navigation/sidebar.md) | เมนูด้านข้าง | เอกสารเว็บ | ⭐⭐⭐ |
| [02-layout/navigation/navbar.md](./02-layout/navigation/navbar.md) | แถบนำทาง | เว็บไซต์ | ⭐⭐⭐ |

##### 2.3 File Tree (5 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [02-layout/file-tree/basic.md](./02-layout/file-tree/basic.md) | โครงสร้างไฟล์พื้นฐาน | โปรเจกต์เล็ก | ⭐ |
| [02-layout/file-tree/detailed.md](./02-layout/file-tree/detailed.md) | โครงสร้างไฟล์ละเอียด | โปรเจกต์ใหญ่ | ⭐⭐ |
| [02-layout/file-tree/with-comments.md](./02-layout/file-tree/with-comments.md) | พร้อมคอมเมนต์ | อธิบายโครงสร้าง | ⭐⭐ |
| [02-layout/file-tree/workflows-style.md](./02-layout/file-tree/workflows-style.md) | สไตล์ workflows | แสดง phases | ⭐⭐ |
| [02-layout/file-tree/mermaid-style.md](./02-layout/file-tree/mermaid-style.md) | สไตล์ Mermaid | แผนภาพโครงสร้าง | ⭐⭐⭐ |

##### 2.4 Grid System (5 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [02-layout/grid-system/2-columns.md](./02-layout/grid-system/2-columns.md) | 2 คอลัมน์ | เปรียบเทียบ | ⭐⭐ |
| [02-layout/grid-system/3-columns.md](./02-layout/grid-system/3-columns.md) | 3 คอลัมน์ | แสดงฟีเจอร์ | ⭐⭐ |
| [02-layout/grid-system/4-columns.md](./02-layout/grid-system/4-columns.md) | 4 คอลัมน์ | แกลเลอรี่ | ⭐⭐ |
| [02-layout/grid-system/responsive.md](./02-layout/grid-system/responsive.md) | Responsive grid | หลายอุปกรณ์ | ⭐⭐⭐ |
| [02-layout/grid-system/complex.md](./02-layout/grid-system/complex.md) | Grid ซับซ้อน | Layout ขั้นสูง | ⭐⭐⭐ |

##### 2.5 Tables (7 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [02-layout/tables/basic.md](./02-layout/tables/basic.md) | ตารางพื้นฐาน | ข้อมูลทั่วไป | ⭐ |
| [02-layout/tables/aligned.md](./02-layout/tables/aligned.md) | จัดแนวข้อความ | ตัวเลข, ข้อความ | ⭐ |
| [02-layout/tables/multi-line.md](./02-layout/tables/multi-line.md) | หลายบรรทัด | คำอธิบายยาว | ⭐⭐ |
| [02-layout/tables/comparison.md](./02-layout/tables/comparison.md) | ตารางเปรียบเทียบ | เปรียบเทียบสินค้า | ⭐⭐ |
| [02-layout/tables/feature-matrix.md](./02-layout/tables/feature-matrix.md) | Feature matrix | เปรียบเทียบฟีเจอร์ | ⭐⭐ |
| [02-layout/tables/responsive.md](./02-layout/tables/responsive.md) | ตาราง responsive | มือถือ | ⭐⭐⭐ |
| [02-layout/tables/complex.md](./02-layout/tables/complex.md) | ตารางซับซ้อน | ข้อมูลหลายมิติ | ⭐⭐⭐ |

##### 2.6 Lists (5 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [02-layout/lists/steps-numbered.md](./02-layout/lists/steps-numbered.md) | ขั้นตอนตัวเลข | วิธีทำ | ⭐ |
| [02-layout/lists/steps-visual.md](./02-layout/lists/steps-visual.md) | ขั้นตอนแบบ visual | เอกสารสวยงาม | ⭐⭐ |
| [02-layout/lists/multi-level.md](./02-layout/lists/multi-level.md) | หลายระดับ | โครงสร้างซ้อน | ⭐⭐ |
| [02-layout/lists/mixed.md](./02-layout/lists/mixed.md) | ผสมหลายแบบ | เอกสารยาว | ⭐⭐ |
| [02-layout/lists/flowchart.md](./02-layout/lists/flowchart.md) | ลำดับเหมือน flowchart | กระบวนการ | ⭐⭐ |

---

#### 📚 03 - Documentation (60 files)

เอกสารสำหรับโปรเจกต์และการอ้างอิง

##### 3.1 Project Docs (15 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [03-documentation/project-docs/readme-standard.md](./03-documentation/project-docs/readme-standard.md) | README มาตรฐาน | ทุกโปรเจกต์ | ⭐ |
| [03-documentation/project-docs/readme-advanced.md](./03-documentation/project-docs/readme-advanced.md) | README ขั้นสูง | โปรเจกต์ใหญ่ | ⭐⭐ |
| [03-documentation/project-docs/introduction.md](./03-documentation/project-docs/introduction.md) | บทนำ | เริ่มต้น | ⭐ |
| [03-documentation/project-docs/getting-started.md](./03-documentation/project-docs/getting-started.md) | เริ่มต้นใช้งาน | ผู้ใช้ใหม่ | ⭐ |
| [03-documentation/project-docs/quick-start.md](./03-documentation/project-docs/quick-start.md) | เริ่มต้นอย่างรวดเร็ว | ใช้งานเร็ว | ⭐ |
| [03-documentation/project-docs/installation.md](./03-documentation/project-docs/installation.md) | การติดตั้ง | ติดตั้งระบบ | ⭐ |
| [03-documentation/project-docs/configuration.md](./03-documentation/project-docs/configuration.md) | การตั้งค่า | ปรับแต่ง | ⭐⭐ |
| [03-documentation/project-docs/changelog.md](./03-documentation/project-docs/changelog.md) | บันทึกการเปลี่ยนแปลง | อัปเดตเวอร์ชัน | ⭐ |
| [03-documentation/project-docs/roadmap.md](./03-documentation/project-docs/roadmap.md) | แผนงาน | วางแผน | ⭐⭐ |
| [03-documentation/project-docs/contributing.md](./03-documentation/project-docs/contributing.md) | การมีส่วนร่วม | Open source | ⭐ |
| [03-documentation/project-docs/code-of-conduct.md](./03-documentation/project-docs/code-of-conduct.md) | จรรยาบรรณ | ชุมชน | ⭐ |
| [03-documentation/project-docs/license.md](./03-documentation/project-docs/license.md) | ใบอนุญาต | กฎหมาย | ⭐ |
| [03-documentation/project-docs/security.md](./03-documentation/project-docs/security.md) | ความปลอดภัย | รายงานช่องโหว่ | ⭐ |
| [03-documentation/project-docs/authors.md](./03-documentation/project-docs/authors.md) | ผู้เขียน | เครดิต | ⭐ |
| [03-documentation/project-docs/acknowledgments.md](./03-documentation/project-docs/acknowledgments.md) | กล่าวขอบคุณ | ผู้สนับสนุน | ⭐ |

##### 3.2 API Docs (10 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [03-documentation/api-docs/endpoints.md](./03-documentation/api-docs/endpoints.md) | Endpoints | REST API | ⭐⭐ |
| [03-documentation/api-docs/parameters.md](./03-documentation/api-docs/parameters.md) | Parameters | API reference | ⭐⭐ |
| [03-documentation/api-docs/requests.md](./03-documentation/api-docs/requests.md) | Requests | ตัวอย่างคำขอ | ⭐⭐ |
| [03-documentation/api-docs/responses.md](./03-documentation/api-docs/responses.md) | Responses | ตัวอย่างตอบกลับ | ⭐⭐ |
| [03-documentation/api-docs/errors.md](./03-documentation/api-docs/errors.md) | Error handling | จัดการข้อผิดพลาด | ⭐⭐ |
| [03-documentation/api-docs/authentication.md](./03-documentation/api-docs/authentication.md) | Authentication | ยืนยันตัวตน | ⭐⭐ |
| [03-documentation/api-docs/rate-limiting.md](./03-documentation/api-docs/rate-limiting.md) | Rate limiting | จำกัดการใช้งาน | ⭐⭐ |
| [03-documentation/api-docs/versioning.md](./03-documentation/api-docs/versioning.md) | Versioning | API versions | ⭐⭐ |
| [03-documentation/api-docs/examples.md](./03-documentation/api-docs/examples.md) | ตัวอย่าง | ใช้งานจริง | ⭐⭐ |
| [03-documentation/api-docs/webhooks.md](./03-documentation/api-docs/webhooks.md) | Webhooks | การแจ้งเตือน | ⭐⭐⭐ |

##### 3.3 Guides (15 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [03-documentation/guides/tutorial.md](./03-documentation/guides/tutorial.md) | บทเรียน | สอนใช้งาน | ⭐ |
| [03-documentation/guides/how-to.md](./03-documentation/guides/how-to.md) | How-to guides | ทำอย่างไร | ⭐ |
| [03-documentation/guides/best-practices.md](./03-documentation/guides/best-practices.md) | แนวปฏิบัติที่ดี | คำแนะนำ | ⭐⭐ |
| [03-documentation/guides/style-guide.md](./03-documentation/guides/style-guide.md) | คู่มือสไตล์ | รูปแบบการเขียน | ⭐⭐ |
| [03-documentation/guides/troubleshooting.md](./03-documentation/guides/troubleshooting.md) | การแก้ไขปัญหา | Debug | ⭐⭐ |
| [03-documentation/guides/faq.md](./03-documentation/guides/faq.md) | คำถามที่พบบ่อย | FAQ | ⭐ |
| [03-documentation/guides/migration.md](./03-documentation/guides/migration.md) | การย้ายระบบ | อัปเกรด | ⭐⭐ |
| [03-documentation/guides/debugging.md](./03-documentation/guides/debugging.md) | การดีบัก | แก้บั๊ก | ⭐⭐ |
| [03-documentation/guides/testing.md](./03-documentation/guides/testing.md) | การทดสอบ | Test | ⭐⭐ |
| [03-documentation/guides/deployment.md](./03-documentation/guides/deployment.md) | การ deploy | Production | ⭐⭐ |
| [03-documentation/guides/performance.md](./03-documentation/guides/performance.md) | ประสิทธิภาพ | ปรับแต่ง | ⭐⭐⭐ |
| [03-documentation/guides/scaling.md](./03-documentation/guides/scaling.md) | การ scale | ขยายระบบ | ⭐⭐⭐ |
| [03-documentation/guides/monitoring.md](./03-documentation/guides/monitoring.md) | การ monitor | ติดตาม | ⭐⭐ |
| [03-documentation/guides/maintenance.md](./03-documentation/guides/maintenance.md) | การดูแลรักษา | ซ่อมบำรุง | ⭐⭐ |
| [03-documentation/guides/decisions.md](./03-documentation/guides/decisions.md) | การตัดสินใจ | ADR | ⭐⭐ |

##### 3.4 References (12 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [03-documentation/references/glossary.md](./03-documentation/references/glossary.md) | อภิธานศัพท์ | คำศัพท์ | ⭐ |
| [03-documentation/references/cheatsheet.md](./03-documentation/references/cheatsheet.md) | Cheatsheet | อ้างอิงด่วน | ⭐ |
| [03-documentation/references/external-links.md](./03-documentation/references/external-links.md) | ลิงก์ภายนอก | แหล่งข้อมูล | ⭐ |
| [03-documentation/references/resources.md](./03-documentation/references/resources.md) | แหล่งข้อมูล | เรียนรู้เพิ่ม | ⭐ |
| [03-documentation/references/bibliography.md](./03-documentation/references/bibliography.md) | บรรณานุกรม | งานวิจัย | ⭐⭐ |
| [03-documentation/references/citations.md](./03-documentation/references/citations.md) | การอ้างอิง | อ้างอิงงาน | ⭐⭐ |
| [03-documentation/references/standards.md](./03-documentation/references/standards.md) | มาตรฐาน | กฎเกณฑ์ | ⭐⭐ |
| [03-documentation/references/dependencies.md](./03-documentation/references/dependencies.md) | Dependencies | การพึ่งพา | ⭐ |
| [03-documentation/references/compatibility.md](./03-documentation/references/compatibility.md) | ความเข้ากันได้ | รองรับ | ⭐⭐ |
| [03-documentation/references/browser-support.md](./03-documentation/references/browser-support.md) | รองรับ browser | เว็บ | ⭐⭐ |
| [03-documentation/references/system-requirements.md](./03-documentation/references/system-requirements.md) | ความต้องการระบบ | Hardware | ⭐ |
| [03-documentation/references/keyboard-shortcuts.md](./03-documentation/references/keyboard-shortcuts.md) | คีย์ลัด | ความเร็ว | ⭐ |

##### 3.5 Metadata (8 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [03-documentation/metadata/progress.md](./03-documentation/metadata/progress.md) | ความคืบหน้า | ติดตาม | ⭐⭐ |
| [03-documentation/metadata/status.md](./03-documentation/metadata/status.md) | สถานะ | อัปเดต | ⭐ |
| [03-documentation/metadata/version.md](./03-documentation/metadata/version.md) | เวอร์ชัน | จัดการเวอร์ชัน | ⭐ |
| [03-documentation/metadata/timeline.md](./03-documentation/metadata/timeline.md) | ไทม์ไลน์ | แผนการ | ⭐⭐ |
| [03-documentation/metadata/milestones.md](./03-documentation/metadata/milestones.md) | Milestones | เป้าหมาย | ⭐⭐ |
| [03-documentation/metadata/sponsors.md](./03-documentation/metadata/sponsors.md) | ผู้สนับสนุน | สนับสนุน | ⭐ |
| [03-documentation/metadata/feature-flags.md](./03-documentation/metadata/feature-flags.md) | Feature flags | เปิด/ปิดฟีเจอร์ | ⭐⭐ |
| [03-documentation/metadata/deprecated.md](./03-documentation/metadata/deprecated.md) | Deprecated | เลิกใช้ | ⭐ |

---

#### 🚀 04 - Advanced (45 files)

ฟีเจอร์ขั้นสูงสำหรับเอกสาร complex

##### 4.1 Code Blocks (10 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [04-advanced/code-blocks/basic.md](./04-advanced/code-blocks/basic.md) | บล็อกโค้ดพื้นฐาน | ทุกภาษา | ⭐ |
| [04-advanced/code-blocks/syntax-highlighting.md](./04-advanced/code-blocks/syntax-highlighting.md) | เน้น syntax | อ่านง่าย | ⭐ |
| [04-advanced/code-blocks/line-numbers.md](./04-advanced/code-blocks/line-numbers.md) | แสดงบรรทัด | อ้างอิงบรรทัด | ⭐⭐ |
| [04-advanced/code-blocks/line-highlighting.md](./04-advanced/code-blocks/line-highlighting.md) | เน้นบรรทัด | ชี้จุดสำคัญ | ⭐⭐ |
| [04-advanced/code-blocks/filename.md](./04-advanced/code-blocks/filename.md) | แสดงชื่อไฟล์ | อ้างอิงไฟล์ | ⭐⭐ |
| [04-advanced/code-blocks/diff.md](./04-advanced/code-blocks/diff.md) | แสดง diff | เปลี่ยนแปลง | ⭐⭐ |
| [04-advanced/code-blocks/multi-language.md](./04-advanced/code-blocks/multi-language.md) | หลายภาษา | เปรียบเทียบ | ⭐⭐ |
| [04-advanced/code-blocks/tabs.md](./04-advanced/code-blocks/tabs.md) | แท็บโค้ด | ทางเลือก | ⭐⭐⭐ |
| [04-advanced/code-blocks/annotations.md](./04-advanced/code-blocks/annotations.md) | คำอธิบายประกอบ | อธิบายโค้ด | ⭐⭐⭐ |
| [04-advanced/code-blocks/interactive.md](./04-advanced/code-blocks/interactive.md) | โต้ตอบได้ | ลองใช้ | ⭐⭐⭐ |

##### 4.2 Diagrams (10 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [04-advanced/diagrams/mermaid-flowchart.md](./04-advanced/diagrams/mermaid-flowchart.md) | Flowchart | กระบวนการ | ⭐⭐ |
| [04-advanced/diagrams/mermaid-sequence.md](./04-advanced/diagrams/mermaid-sequence.md) | Sequence diagram | ลำดับเหตุการณ์ | ⭐⭐ |
| [04-advanced/diagrams/mermaid-class.md](./04-advanced/diagrams/mermaid-class.md) | Class diagram | OOP | ⭐⭐ |
| [04-advanced/diagrams/mermaid-er.md](./04-advanced/diagrams/mermaid-er.md) | ER diagram | ฐานข้อมูล | ⭐⭐ |
| [04-advanced/diagrams/mermaid-gantt.md](./04-advanced/diagrams/mermaid-gantt.md) | Gantt chart | ตารางเวลา | ⭐⭐ |
| [04-advanced/diagrams/mermaid-pie.md](./04-advanced/diagrams/mermaid-pie.md) | Pie chart | สัดส่วน | ⭐⭐ |
| [04-advanced/diagrams/mermaid-state.md](./04-advanced/diagrams/mermaid-state.md) | State diagram | State machine | ⭐⭐⭐ |
| [04-advanced/diagrams/mermaid-gitgraph.md](./04-advanced/diagrams/mermaid-gitgraph.md) | Git graph | Git history | ⭐⭐ |
| [04-advanced/diagrams/mermaid-journey.md](./04-advanced/diagrams/mermaid-journey.md) | User journey | ประสบการณ์ผู้ใช้ | ⭐⭐ |
| [04-advanced/diagrams/mermaid-mindmap.md](./04-advanced/diagrams/mermaid-mindmap.md) | Mindmap | สมองกลาง | ⭐⭐ |

##### 4.3 Math (5 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [04-advanced/math/inline.md](./04-advanced/math/inline.md) | สูตร inline | ข้อความ | ⭐⭐ |
| [04-advanced/math/blocks.md](./04-advanced/math/blocks.md) | สูตรบล็อก | แสดงสูตร | ⭐⭐ |
| [04-advanced/math/fractions.md](./04-advanced/math/fractions.md) | เศษส่วน | คณิตศาสตร์ | ⭐⭐ |
| [04-advanced/math/matrices.md](./04-advanced/math/matrices.md) | เมทริกซ์ | ลิเนียร์ | ⭐⭐⭐ |
| [04-advanced/math/equations.md](./04-advanced/math/equations.md) | สมการ | ฟิสิกส์ | ⭐⭐⭐ |

##### 4.4 Media (8 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [04-advanced/media/images.md](./04-advanced/media/images.md) | รูปภาพ | ประกอบเนื้อหา | ⭐ |
| [04-advanced/media/image-galleries.md](./04-advanced/media/image-galleries.md) | แกลเลอรี่รูปภาพ | หลายรูป | ⭐⭐ |
| [04-advanced/media/videos.md](./04-advanced/media/videos.md) | วิดีโอ | สื่อ | ⭐⭐ |
| [04-advanced/media/audio.md](./04-advanced/media/audio.md) | เสียง | podcast | ⭐⭐ |
| [04-advanced/media/embeds.md](./04-advanced/media/embeds.md) | การฝัง | เนื้อหาภายนอก | ⭐⭐ |
| [04-advanced/media/asciinema.md](./04-advanced/media/asciinema.md) | Asciinema | บันทึก terminal | ⭐⭐ |
| [04-advanced/media/charts.md](./04-advanced/media/charts.md) | กราฟ | แสดงข้อมูล | ⭐⭐⭐ |
| [04-advanced/media/maps.md](./04-advanced/media/maps.md) | แผนที่ | Location | ⭐⭐⭐ |

##### 4.5 Interactive (7 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [04-advanced/interactive/details-summary.md](./04-advanced/interactive/details-summary.md) | รายละเอียดแบบพับ | ซ่อน/แสดง | ⭐⭐ |
| [04-advanced/interactive/collapsible.md](./04-advanced/interactive/collapsible.md) | เนื้อหาพับได้ | FAQ | ⭐⭐ |
| [04-advanced/interactive/accordion.md](./04-advanced/interactive/accordion.md) | Accordion | หลายส่วน | ⭐⭐⭐ |
| [04-advanced/interactive/tabs-content.md](./04-advanced/interactive/tabs-content.md) | แท็บเนื้อหา | ทางเลือก | ⭐⭐⭐ |
| [04-advanced/interactive/tooltips.md](./04-advanced/interactive/tooltips.md) | คำอธิบายเครื่องมือ | ช่วยเหลือ | ⭐⭐⭐ |
| [04-advanced/interactive/modals.md](./04-advanced/interactive/modals.md) | Modal dialogs | แจ้งเตือน | ⭐⭐⭐ |
| [04-advanced/interactive/annotations.md](./04-advanced/interactive/annotations.md) | คำอธิบายประกอบ | เน้นจุด | ⭐⭐⭐ |

##### 4.6 Callouts (5 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [04-advanced/callouts/note.md](./04-advanced/callouts/note.md) | หมายเหตุ | ข้อมูลเพิ่ม | ⭐⭐ |
| [04-advanced/callouts/tip.md](./04-advanced/callouts/tip.md) | เคล็ดลับ | แนะนำ | ⭐⭐ |
| [04-advanced/callouts/warning.md](./04-advanced/callouts/warning.md) | คำเตือน | ระวัง | ⭐⭐ |
| [04-advanced/callouts/important.md](./04-advanced/callouts/important.md) | สำคัญ | เน้น | ⭐⭐ |
| [04-advanced/callouts/caution.md](./04-advanced/callouts/caution.md) | ข้อควรระวัง | อันตราย | ⭐⭐ |

---

#### 🎯 05 - Components (30 files)

คอมโพเนนต์พิเศษสำหรับการแสดงผลเฉพาะทาง

##### 5.1 Badges (8 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [05-components/badges/shields-io.md](./05-components/badges/shields-io.md) | Shields.io | สถานะโปรเจกต์ | ⭐ |
| [05-components/badges/version.md](./05-components/badges/version.md) | Badges เวอร์ชัน | แสดงเวอร์ชัน | ⭐ |
| [05-components/badges/build-status.md](./05-components/badges/build-status.md) | Build status | CI/CD | ⭐ |
| [05-components/badges/coverage.md](./05-components/badges/coverage.md) | Test coverage | คุณภาพโค้ด | ⭐ |
| [05-components/badges/license.md](./05-components/badges/license.md) | License badge | ใบอนุญาต | ⭐ |
| [05-components/badges/downloads.md](./05-components/badges/downloads.md) | Downloads | ความนิยม | ⭐ |
| [05-components/badges/social.md](./05-components/badges/social.md) | Social badges | ชุมชน | ⭐ |
| [05-components/badges/custom.md](./05-components/badges/custom.md) | Custom badges | สร้างเอง | ⭐⭐ |

##### 5.2 Cards (6 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [05-components/cards/info.md](./05-components/cards/info.md) | Info cards | ข้อมูล | ⭐⭐ |
| [05-components/cards/profile.md](./05-components/cards/profile.md) | Profile cards | แนะนำตัว | ⭐⭐ |
| [05-components/cards/feature.md](./05-components/cards/feature.md) | Feature cards | แสดงฟีเจอร์ | ⭐⭐ |
| [05-components/cards/pricing.md](./05-components/cards/pricing.md) | Pricing cards | ราคา | ⭐⭐⭐ |
| [05-components/cards/stat.md](./05-components/cards/stat.md) | Stat cards | สถิติ | ⭐⭐ |
| [05-components/cards/image.md](./05-components/cards/image.md) | Image cards | รูปภาพ | ⭐⭐ |

##### 5.3 Status (6 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [05-components/status/progress-bar.md](./05-components/status/progress-bar.md) | Progress bar | ความคืบหน้า | ⭐⭐ |
| [05-components/status/progress-steps.md](./05-components/status/progress-steps.md) | Progress steps | ขั้นตอน | ⭐⭐ |
| [05-components/status/labels.md](./05-components/status/labels.md) | Labels | แท็ก | ⭐ |
| [05-components/status/pills.md](./05-components/status/pills.md) | Pills | สถานะ | ⭐ |
| [05-components/status/timeline.md](./05-components/status/timeline.md) | Timeline | ลำดับเวลา | ⭐⭐ |
| [05-components/status/milestone.md](./05-components/status/milestone.md) | Milestone | เป้าหมาย | ⭐⭐ |

##### 5.4 Steps (5 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [05-components/steps/numbered.md](./05-components/steps/numbered.md) | ขั้นตอนตัวเลข | วิธีทำ | ⭐ |
| [05-components/steps/visual.md](./05-components/steps/visual.md) | ขั้นตอน visual | เอกสารสวย | ⭐⭐ |
| [05-components/steps/timeline.md](./05-components/steps/timeline.md) | Timeline steps | ลำดับเวลา | ⭐⭐ |
| [05-components/steps/decision-tree.md](./05-components/steps/decision-tree.md) | Decision tree | ตัดสินใจ | ⭐⭐⭐ |
| [05-components/steps/workflow-diagram.md](./05-components/steps/workflow-diagram.md) | Workflow diagram | กระบวนการ | ⭐⭐⭐ |

##### 5.5 Special (5 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [05-components/special/commit-messages.md](./05-components/special/commit-messages.md) | Commit messages | กฎ commit | ⭐ |
| [05-components/special/quotes.md](./05-components/special/quotes.md) | คำคม | แรงบันดาลใจ | ⭐ |
| [05-components/special/conclusion.md](./05-components/special/conclusion.md) | บทสรุป | สรุป | ⭐ |
| [05-components/special/summary.md](./05-components/special/summary.md) | สรุปย่อ | TL;DR | ⭐ |
| [05-components/special/abstract.md](./05-components/special/abstract.md) | บทคัดย่อ | งานวิจัย | ⭐⭐ |

---

#### 🛠️ 06 - Utilities (15 files)

เครื่องมือช่วยเหลือสำหรับการทำงาน

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [06-utilities/helpers/abbreviations.md](./06-utilities/helpers/abbreviations.md) | ตัวย่อ | คำศัพท์ย่อ | ⭐ |
| [06-utilities/helpers/definitions.md](./06-utilities/helpers/definitions.md) | นิยาม | อธิบายคำ | ⭐ |
| [06-utilities/helpers/keyboard.md](./06-utilities/helpers/keyboard.md) | แสดงคีย์ | คีย์ลัด | ⭐ |
| [06-utilities/helpers/variables.md](./06-utilities/helpers/variables.md) | ตัวแปร | แทนค่า | ⭐⭐ |
| [06-utilities/helpers/env-vars.md](./06-utilities/helpers/env-vars.md) | ตัวแปรสภาพแวดล้อม | Config | ⭐⭐ |
| [06-utilities/emojis/cheat-sheet.md](./06-utilities/emojis/cheat-sheet.md) | อีโมจิทั้งหมด | อ้างอิง | ⭐ |
| [06-utilities/emojis/common.md](./06-utilities/emojis/common.md) | อีโมจิทั่วไป | ใช้บ่อย | ⭐ |
| [06-utilities/emojis/categories.md](./06-utilities/emojis/categories.md) | ตามหมวดหมู่ | ค้นหา | ⭐ |
| [06-utilities/emojis/github.md](./06-utilities/emojis/github.md) | GitHub emojis | บน GitHub | ⭐ |
| [06-utilities/comments/html.md](./06-utilities/comments/html.md) | คอมเมนต์ HTML | ซ่อนข้อความ | ⭐ |
| [06-utilities/comments/markdown.md](./06-utilities/comments/markdown.md) | คอมเมนต์ Markdown | ไม่แสดง | ⭐ |
| [06-utilities/shortcuts/vscode.md](./06-utilities/shortcuts/vscode.md) | VS Code shortcuts | Editor | ⭐ |
| [06-utilities/shortcuts/vim.md](./06-utilities/shortcuts/vim.md) | Vim shortcuts | Editor | ⭐ |
| [06-utilities/shortcuts/markdown.md](./06-utilities/shortcuts/markdown.md) | Markdown shortcuts | เขียน | ⭐ |
| [06-utilities/shortcuts/tools.md](./06-utilities/shortcuts/tools.md) | เครื่องมือช่วย | ทำงานเร็ว | ⭐ |

---

#### ⚡ 08 - Advanced Features (10 files)

ฟีเจอร์ขั้นสูงสำหรับ Markdown

##### 8.1 Alerts & Notifications (2 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [08-advanced-features/alerts-notifications/basic-alerts.md](./08-advanced-features/alerts-notifications/basic-alerts.md) | Alerts พื้นฐาน | แจ้งเตือน | ⭐⭐ |
| [08-advanced-features/alerts-notifications/advanced-notifications.md](./08-advanced-features/alerts-notifications/advanced-notifications.md) | Notifications ขั้นสูง | แจ้งเตือนซับซ้อน | ⭐⭐⭐ |

##### 8.2 Badges & Status (2 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [08-advanced-features/badges-status/basic-badges.md](./08-advanced-features/badges-status/basic-badges.md) | Badges พื้นฐาน | แสดงสถานะ | ⭐ |
| [08-advanced-features/badges-status/shields-advanced.md](./08-advanced-features/badges-status/shields-advanced.md) | Shields.io ขั้นสูง | Badges ซับซ้อน | ⭐⭐ |

##### 8.3 Callouts & Asides (2 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [08-advanced-features/callouts-asides/callouts-basic.md](./08-advanced-features/callouts-asides/callouts-basic.md) | Callouts พื้นฐาน | เน้นข้อมูล | ⭐⭐ |
| [08-advanced-features/callouts-asides/asides-advanced.md](./08-advanced-features/callouts-asides/asides-advanced.md) | Asides ขั้นสูง | ข้อมูลเสริม | ⭐⭐⭐ |

##### 8.4 Collapsible Sections (2 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [08-advanced-features/collapsible-sections/collapsible-basic.md](./08-advanced-features/collapsible-sections/collapsible-basic.md) | Collapsible พื้นฐาน | ซ่อนเนื้อหา | ⭐⭐ |
| [08-advanced-features/collapsible-sections/details-summary-advanced.md](./08-advanced-features/collapsible-sections/details-summary-advanced.md) | Details/Summary ขั้นสูง | เนื้อหาพับได้ | ⭐⭐⭐ |

##### 8.5 Citations & References (1 file)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [08-advanced-features/citations-references/citations-basic.md](./08-advanced-features/citations-references/citations-basic.md) | Citations พื้นฐาน | อ้างอิงงาน | ⭐⭐ |

##### 8.6 Footnotes (1 file)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [08-advanced-features/footnotes/footnotes-basic.md](./08-advanced-features/footnotes/footnotes-basic.md) | Footnotes พื้นฐาน | เชิงอรรถ | ⭐⭐ |

---

#### 🧩 09 - Special Components (9 files)

คอมโพเนนต์พิเศษสำหรับ use case เฉพาะทาง

##### 9.1 Git Conventions (1 file)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [09-custom-components/git-conventions/commit-messages.md](./09-custom-components/git-conventions/commit-messages.md) | Commit message format | กฎการ commit | ⭐⭐ |

##### 9.2 Feature Management (1 file)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [09-custom-components/feature-management/feature-flags.md](./09-custom-components/feature-management/feature-flags.md) | Feature flags | จัดการฟีเจอร์ | ⭐⭐⭐ |

##### 9.3 Status Indicators (1 file)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [09-custom-components/status-indicators/status-badges.md](./09-custom-components/status-indicators/status-badges.md) | Status badges | แสดงสถานะ | ⭐ |

##### 9.4 Interactive Elements (1 file)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [09-custom-components/interactive-elements/interactive-basic.md](./09-custom-components/interactive-elements/interactive-basic.md) | Interactive elements | โต้ตอบได้ | ⭐⭐⭐ |

##### 9.5 Documentation Helpers (5 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [09-custom-components/documentation-helpers/keyboard-shortcuts.md](./09-custom-components/documentation-helpers/keyboard-shortcuts.md) | Keyboard shortcuts | คีย์ลัด | ⭐ |
| [09-custom-components/documentation-helpers/responsive-tables.md](./09-custom-components/documentation-helpers/responsive-tables.md) | Responsive tables | ตารางบนมือถือ | ⭐⭐⭐ |
| [09-custom-components/documentation-helpers/conclusion-sections.md](./09-custom-components/documentation-helpers/conclusion-sections.md) | Conclusion sections | บทสรุป | ⭐ |
| [09-custom-components/documentation-helpers/quote-blocks.md](./09-custom-components/documentation-helpers/quote-blocks.md) | Quote blocks | คำคม | ⭐ |

---

#### 📊 10 - Reporting (5 files)

รูปแบบสำหรับรายงานและการวิเคราะห์

##### 10.1 Analyze Responses (2 files)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [10-reporting/analyze-responses/basic-analysis.md](./10-reporting/analyze-responses/basic-analysis.md) | วิเคราะห์พื้นฐาน | สรุปผล AI | ⭐⭐ |
| [10-reporting/analyze-responses/advanced-analysis.md](./10-reporting/analyze-responses/advanced-analysis.md) | วิเคราะห์ขั้นสูง | รายงานละเอียด | ⭐⭐⭐ |

##### 10.2 Comparison Tables (1 file)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [10-reporting/comparison-tables/comparison-reports.md](./10-reporting/comparison-tables/comparison-reports.md) | ตารางเปรียบเทียบ | Before/After | ⭐⭐ |

##### 10.3 Decision Matrices (1 file)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [10-reporting/decision-matrices/decision-matrices.md](./10-reporting/decision-matrices/decision-matrices.md) | Decision matrices | ตัดสินใจ | ⭐⭐⭐ |

##### 10.4 Response Formats (1 file)

| ไฟล์ | คำอธิบาย | ใช้เมื่อ | ความซับซ้อน |
|------|----------|----------|-------------|
| [10-reporting/response-formats/summary-reports.md](./10-reporting/response-formats/summary-reports.md) | รูปแบบรายงาน | สรุปผล | ⭐⭐ |

---

### 📊 สรุปตามหมวดหมู่

| หมวดหมู่ | จำนวน | รหัส | ใช้สำหรับ |
|----------|-------|------|----------|
| 🔧 Core | 25 | 01 | พื้นฐานที่ทุกเอกสารต้องมี |
| 🎨 Layout | 40 | 02 | โครงสร้างและการจัดวาง |
| 📚 Documentation | 60 | 03 | เอกสารโปรเจกต์ |
| 🚀 Advanced | 45 | 04 | ฟีเจอร์ขั้นสูง |
| 🎯 Components | 30 | 05 | คอมโพเนนต์พิเศษ |
| 🛠️ Utilities | 15 | 06 | เครื่องมือช่วยเหลือ |
| ⚡ Advanced Features | 10 | 08 | ฟีเจอร์ขั้นสูงเฉพาะทาง |
| 🧩 Special Components | 9 | 09 | คอมโพเนนต์พิเศษ |
| 📊 Reporting | 5 | 10 | รายงานและการวิเคราะห์ |
| **รวมทั้งหมด** | **239** | - | - |

---

### 🎯 การใช้งานตามความซับซ้อน

#### ⭐ Level 1 - พื้นฐาน (50 files)

ไฟล์ที่ใช้งานง่าย เหมาะสำหรับผู้เริ่มต้น

| หมวดหมู่ | ไฟล์ |
|----------|------|
| Core | ทั้งหมด 25 ไฟล์ |
| Layout | basic, navigation-simple |
| Documentation | readme, installation, quick-start |
| Advanced | code-blocks-basic |
| Components | badges-basic |
| Utilities | ทั้งหมด 15 ไฟล์ |

#### ⭐⭐ Level 2 - ปานกลาง (100 files)

ไฟล์ที่ต้องเข้าใจ Markdown ดีขึ้น

| หมวดหมู่ | ไฟล์ |
|----------|------|
| Core | sub-superscript, nested-lists |
| Layout | file-tree, tables-complex |
| Documentation | api-docs, guides |
| Advanced | mermaid-diagrams, media |
| Components | cards, status |

#### ⭐⭐⭐ Level 3 - ขั้นสูง (65 files)

ไฟล์ที่ต้องใช้เครื่องมือหรือ extensions พิเศษ

| หมวดหมู่ | ไฟล์ |
|----------|------|
| Layout | responsive-tables, grid-complex |
| Documentation | performance, scaling |
| Advanced | interactive, annotations |
| Components | pricing-cards, decision-tree |

---

### 🔍 การค้นหา

#### ค้นหาตามหมวดหมู่

```bash
# ดูตัวอย่างในหมวดหมู่ Documentation
cat 03-documentation/**/*.md

# ดูตัวอย่างในหมวดหมู่ Layout
cat 02-layout/**/*.md
```

#### ค้นหาตามความซับซ้อน

```bash
# ค้นหาไฟล์ Level 1 (พื้นฐาน)
grep -l "⭐$" */**/*.md

# ค้นหาไฟล์ Level 3 (ขั้นสูง)
grep -l "⭐⭐⭐" */**/*.md
```

#### ค้นหาตาม use case

```bash
# ค้นหาไฟล์ที่เกี่ยวกับ "table"
grep -l "ตาราง\|table" */**/*.md

# ค้นหาไฟล์ที่เกี่ยวกับ "workflow"
grep -l "workflow\|เวิร์กโฟลว์" */**/*.md
```

---

### 🏷️ Tags ทั้งหมด

| Tag | จำนวนไฟล์ | คำอธิบาย |
|-----|----------|----------|
| `markdown` | 239 | ทุกไฟล์ |
| `core` | 25 | พื้นฐาน |
| `layout` | 40 | โครงสร้าง |
| `documentation` | 60 | เอกสาร |
| `advanced` | 55 | ขั้นสูง |
| `components` | 39 | คอมโพเนนต์ |
| `utilities` | 15 | เครื่องมือ |
| `reporting` | 5 | รายงาน |
| `analysis` | 2 | การวิเคราะห์ |
| `workflows` | 50 | สไตล์ workflows |
| `examples` | 239 | ตัวอย่าง |
| `reference` | 100 | อ้างอิง |

---

### 📖 รูปแบบไฟล์ตัวอย่าง

แต่ละไฟล์มีโครงสร้างมาตรฐาน:

```markdown
---
description: คำอธิบายสั้นๆ ว่าตัวอย่างนี้แสดงอะไร
title: ชื่อตัวอย่าง
tags: [tag1, tag2, tag3]
goals:
  - เป้าหมายที่ 1
  - เป้าหมายที่ 2
complexity: ⭐ / ⭐⭐ / ⭐⭐⭐
use_cases:
  - ใช้เมื่ออะไร 1
  - ใช้เมื่ออะไร 2
---

## หัวข้อหลัก

คำอธิบายละเอียดว่าตัวอย่างนี้ทำอะไร เมื่อไหร่ควรใช้ และข้อควรระวัง

### ตัวอย่างพื้นฐาน

```markdown
ตัวอย่าง Markdown พื้นฐานที่แสดง
```

#### ตัวอย่างขั้นสูง

```markdown
ตัวอย่าง Markdown ที่ซับซ้อนขึ้น
พร้อมคำอธิบายเพิ่มเติม
```

### Use Cases

| สถานการณ์ | วิธีใช้ |
|-----------|---------|
| กรณีที่ 1 | วิธีแก้ |
| กรณีที่ 2 | วิธีแก้ |

### Best Practices

- ✅ ควรทำ
- ❌ ไม่ควรทำ
- 💡 เคล็ดลับ

### References

- [ลิงก์อ้างอิง 1](url)
- [ลิงก์อ้างอิง 2](url)

```text

---

## 🤝 การมีส่วนร่วม

หากต้องการเพิ่มตัวอย่างใหม่:

1. เลือกหมวดหมู่ตาม Workflow Structure
2. สร้างไฟล์ `.md` ใหม่ใน subdirectory ที่เหมาะสม
3. เพิ่ม frontmatter ตามรูปแบบมาตรฐาน
4. เขียนเนื้อหาให้ครบถ้วน (ตัวอย่าง + use cases + best practices)
5. อัปเดต index.md นี้ให้สมบูรณ์
6. ส่ง Pull Request พร้อมคำอธิบาย

---

## 📄 License

ตัวอย่างทั้งหมดเป็น Public Domain สามารถใช้งานได้อย่างอิสระ

---

**สร้างเมื่อ**: 2024-03-16  
**อัปเดตล่าสุด**: 2025-03-16  
**จำนวนตัวอย่าง**: 239 แบบ  
**เวอร์ชัน**: 2.1.0  
**โครงสร้าง**: Workflow-Style
