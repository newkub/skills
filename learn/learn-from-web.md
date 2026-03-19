# Learn from Web

## Purpose

แนวทางการเรียนรู้จากเว็บไซต์และแหล่งข้อมูลออนไลน์โดยใช้ MCP tools และ web search อย่างเป็นระบบ

## Part 1: Research Strategy

### 1.1 ลำดับความสำคัญของแหล่งข้อมูล

เรียนรู้ตามลำดับนี้เพื่อให้ได้ข้อมูลที่ครบถ้วนและถูกต้องที่สุด:

1. **DeepWiki (MCP)** - AI-powered documentation จาก GitHub repositories
2. **Context7 (MCP)** - Up-to-date documentation และ code examples จาก libraries
3. **Web Search** - ค้นหาข้อมูลเพิ่มเติมจากเว็บไซต์ทั่วไป
4. **Official Documentation** - เอกสารหลักจากเว็บไซต์ทางการ

### 1.2 ขั้นตอนการเลือกแหล่งข้อมูล

**ขั้นตอนที่ 1: ตรวจสอบ DeepWiki**

- ใช้ `@mcp : deepwiki` ค้นหา documentation ของ repository
- ถ้าพบ repo ที่เกี่ยวข้อง → เรียนรู้จาก DeepWiki ก่อน
- DeepWiki ให้ข้อมูลที่ครอบคลุมทั้ง README, Wiki, และ code structure

**ขั้นตอนที่ 2: ตรวจสอบ Context7**

- ใช้ `@mcp : context7` ค้นหา up-to-date documentation
- Context7 เหมาะสำหรับ libraries และ frameworks ที่มี version ชัดเจน
- ให้ code examples และ best practices ที่ทันสมัย

**ขั้นตอนที่ 3: Web Search (Fallback)**

- ใช้ `search_web` ถ้าไม่มีข้อมูลจาก DeepWiki หรือ Context7
- ค้นหาจากเว็บไซต์หลักของเทคโนโลยีนั้นๆ
- เปรียบเทียบข้อมูลจากหลายแหล่งเพื่อยืนยันความถูกต้อง

**ขั้นตอนที่ 4: Official Documentation**

- เข้าถึงเว็บไซต์หลักของเทคโนโลยีหรือเครื่องมือ
- อ่าน documentation ทางการอย่างละเอียด
- ศึกษา examples และ API reference

ตรวจสอบ DeepWiki → Context7 → Web Search → Official Docs

## Part 2: Planning & Requirements

### 2.1 Define Learning Objectives

#### Specify Learning Goals

- ระบุหัวข้อที่ต้องการเรียนรู้จากเว็บไซต์หลัก
- กำหนดเป้าหมายการเรียนรู้ที่ชัดเจน
- ระบุเว็บไซต์หรือแหล่งข้อมูลที่จะใช้
- กำหนด acceptance criteria สำหรับการเรียนรู้

#### Create Learning Plan

- กำหนดลำดับการอ่านเอกสาร
- ระบุส่วนที่สำคัญที่ต้องเน้น
- วางแผนเวลาสำหรับการเรียนรู้
- สร้าง checklist สำหรับติดตามความคืบหน้า

ระบุเป้าหมาย => วางแผนการเรียน => ดำเนินการเรียนรู้

## Part 3: DeepWiki Research

### 3.1 Query DeepWiki (MCP)

ใช้ DeepWiki MCP เมื่อต้องการเรียนรู้เกี่ยวกับ GitHub repositories:

- **read_wiki_structure** - ดูรายการ documentation topics
- **read_wiki_contents** - อ่านเนื้อหาของ repository ทั้งหมด
- **ask_question** - ถามคำถามเฉพาะเกี่ยวกับ repository

#### Best Practices for DeepWiki

- เริ่มด้วย `read_wiki_structure` เพื่อดูว่ามี topics อะไรบ้าง
- ใช้ `ask_question` เมื่อต้องการคำตอบเฉพาะเจาะจง
- ผสมผสานกับ `read_wiki_contents` เพื่อความเข้าใจที่ลึกซึ้ง

## Part 4: Context7 Research

### 4.1 Query Context7 (MCP)

ใช้ Context7 MCP เมื่อต้องการเรียนรู้เกี่ยวกับ libraries/frameworks:

- **resolve-library-id** - หา library ID ที่ถูกต้อง
- **query-docs** - ถามคำถามเกี่ยวกับ library นั้นๆ

#### Best Practices for Context7

- ใช้ `resolve-library-id` ก่อนเสมอเพื่อหา library ที่ถูกต้อง
- ระบุ version ถ้าต้องการข้อมูลเฉพาะ version
- Query ให้เฉพาะเจาะจง เช่น "How to set up authentication with JWT in Express.js"

## Part 5: Web Search Research

### 5.1 Execute Web Search

ใช้ `search_web` เมื่อต้องการค้นหาข้อมูลจากอินเทอร์เน็ต:

- กำหนด query ที่ชัดเจนและเฉพาะเจาะจง
- ใช้ domain filter ถ้าต้องการค้นหาจากแหล่งเฉพาะ
- ตรวจสอบผลลัพธ์จากหลายแหล่ง

### 5.2 Navigate Official Websites

- เข้าถึงเว็บไซต์หลักของเทคโนโลยีหรือเครื่องมือ
- ค้นหาหน้า documentation หรือ getting started
- ระบุโครงสร้างของเว็บไซต์
- สำรวจ sections ที่สำคัญ

### 5.3 Read Systematically

- อ่านหน้า introduction และ overview ก่อน
- อ่าน getting started guide ทีละส่วน
- ศึกษา examples และ use cases
- อ่าน advanced topics หลังจากเข้าใจพื้นฐาน

เข้าถึงเว็บไซต์ => อ่านเอกสาร => ทำความเข้าใจ

## Part 6: Knowledge Extraction

### 6.1 Extract Key Information

#### Identify Core Concepts

- จดบันทึกหลักการที่สำคัญ
- ระบุ features และ capabilities หลัก
- บันทึก best practices และ recommendations
- สรุป architecture หรือ design patterns

#### Document Learning

- เขียนสรุปจากแต่ละหน้าที่อ่าน
- สร้าง mind map หรือ diagram ถ้าจำเป็น
- บันทึก code examples ที่สำคัญ
- จัดหมวดหมู่ข้อมูลตามหัวข้อ

อ่านเนื้อหา => สกัดข้อมูล => จัดระเบียบความรู้

## Part 7: Validation & Testing

### 7.1 Validate Understanding

#### Test Knowledge

- ทดลองใช้งานตามที่เรียนรู้
- สร้างโปรเจกต์ตัวอย่างเล็กๆ
- ทดสอบ concepts ที่เรียนมา
- ตรวจสอบว่าเข้าใจถูกต้อง

#### Cross-Reference

- เปรียบเทียบข้อมูลจากหลายแหล่ง
- ตรวจสอบความสอดคล้องของข้อมูล
- หาข้อมูลเพิ่มเติมสำหรับจุดที่ไม่ชัดเจน
- ยืนยันความถูกต้องของ best practices

ทดสอบความเข้าใจ => เปรียบเทียบข้อมูล => ยืนยันความถูกต้อง

## Part 8: Documentation & Sharing

### 8.1 Create Knowledge Base

#### Summarize Learning

- เขียนสรุปการเรียนรู้ในรูปแบบ markdown
- สร้าง quick reference guide
- บันทึก code snippets ที่สำคัญ
- จัดทำคำถามที่พบบ่อย (FAQ)

#### Share Knowledge

- สร้าง skill files สำหรับ Windsurf
- เขียน blog posts หรือ tutorials
- แชร์ best practices กับทีม
- สร้าง examples สำหรับคนอื่น

สรุปความรู้ => สร้างเอกสาร => แชร์กับผู้อื่น

## Best Practices

### Research Best Practices

1. **Start with MCP tools** - DeepWiki และ Context7 ให้ข้อมูลที่เป็นปัจจุบันและเจาะจง
2. **Use multiple sources** - อย่าพึ่งพาแหล่งเดียว ให้ตรวจสอบจากหลายแหล่ง
3. **Verify information** - ตรวจสอบความถูกต้องของข้อมูลจาก official sources
4. **Document everything** - บันทึกขั้นตอนและผลลัพธ์ทั้งหมด

### Learning Best Practices

1. **Set clear goals** - กำหนดว่าต้องการเรียนรู้อะไรและทำไม
2. **Take notes systematically** - จดบันทึกขณะเรียนรู้อย่างเป็นระเบียบ
3. **Practice immediately** - ทดสอบสิ่งที่เรียนมาทันที
4. **Teach others** - การสอนคนอื่นช่วยให้เข้าใจลึกขึ้น

## Tools & Resources

### MCP Tools

- **DeepWiki** - `@mcp2_*` functions สำหรับ GitHub repository documentation
- **Context7** - `@mcp1_*` functions สำหรับ library documentation
- **Web Search** - `search_web` สำหรับค้นหาข้อมูลทั่วไป

### External Resources

- **Official Documentation** - เว็บไซต์หลักของเทคโนโลยี
- **Community Forums** - Stack Overflow, Reddit, Discord
- **Video Tutorials** - YouTube, conference talks
- **Blog Posts** - Medium, dev.to, company blogs

## Common Pitfalls

### Research Pitfalls

1. **Information overload** - ข้อมูลมากเกินไป ไม่รู้จะเริ่มจากไหน
2. **Outdated information** - ใช้ข้อมูลเก่าที่ไม่เกี่ยวข้อง
3. **Confirmation bias** - หาข้อมูลที่สนับสนุนความเชื่อเดิมเท่านั้น
4. **Lack of context** - ไม่เข้าใจ background ของเทคโนโลยี

### Learning Pitfalls

1. **Passive learning** - อ่านแต่ไม่ลองปฏิบัติ
2. **Surface understanding** - เข้าใจแค่ผิวเผิน
3. **No documentation** - ไม่บันทึกสิ่งที่เรียนรู้
4. **Isolation** - เรียนคนเดียวไม่ได้แชร์ความรู้

## Success Metrics

### Learning Success Indicators

- **Practical application** - สามารถนำไปใช้จริงได้
- **Teaching ability** - สามารถอธิบายให้คนอื่นเข้าใจ
- **Problem solving** - แก้ปัญหาที่เกี่ยวข้องได้
- **Knowledge retention** - จำได้ในระยะยาว

### Documentation Quality

- **Clarity** - เขียนชัดเจน เข้าใจง่าย
- **Completeness** - ครบถ้วนทุกส่วนที่จำเป็น
- **Accuracy** - ถูกต้องตามที่เรียนรู้
- **Reusability** - คนอื่นนำไปใช้ต่อได้