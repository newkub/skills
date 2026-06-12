# Sitemap - Lua

## โครงสร้างเอกสาร Lua

```
lang-lua/
├── SKILL.md
├── guide/
│   ├── installation.md       # วิธีติดตั้ง Lua และ tools
│   ├── key-concept.md        # แนวคิดหลักของ Lua
│   ├── how-it-works.md       # กลไกการทำงานภายใน
│   ├── features.md           # คุณสมบัติของ Lua
│   ├── configuration.md      # การตั้งค่าและ configuration
│   ├── quick-start.md        # เริ่มต้นใช้งานอย่างรวดเร็ว
│   ├── best-practices.md     # best practices สำหรับ Lua
│   ├── integration.md        # การเชื่อมต่อกับภาษาอื่น
│   ├── architecture.md       # สถาปัตยกรรมโปรเจกต์ Lua
│   └── troubleshooting.md    # การแก้ปัญหา
├── references/
│   ├── website.md            # ลิงก์ไปยังเว็บไซต์และเอกสาร
│   ├── sitemap.md            # แผนที่เอกสาร (ไฟล์นี้)
│   ├── api.md                # API reference
│   ├── cli.md                # CLI commands reference
│   └── configuration.md      # Configuration options reference
└── workflows/
    └── (workflow files)      # Workflows สำหรับ Lua development
```

## Guide Section

### installation.md
- การติดตั้ง Lua บนแต่ละ platform
- การติดตั้ง LuaJIT
- การติดตั้ง LuaRocks
- การตั้งค่า IDE (VS Code, Neovim)
- การ embedding Lua ใน C

### key-concept.md
- ภาพรวม Lua
- Variables และ Types
- Control Flow
- Functions
- Tables
- Coroutines

### how-it-works.md
- Lua Virtual Machine
- Garbage Collection
- Table Implementation
- Metatables
- Coroutines mechanism
- Module System
- Error Handling
- Performance Characteristics
- LuaJIT Differences

### features.md
- Data Types
- Operators
- Standard Library
- Object-Oriented Programming
- Metatables

### configuration.md
- Environment Variables
- Lua Runtime Configuration
- LuaJIT Configuration
- IDE Configuration
- LuaRocks Configuration
- Project Configuration
- Performance Configuration
- Security Configuration
- Debugging Configuration
- Cross-Platform Configuration

### quick-start.md
- Basic Syntax
- Variables
- Functions
- Tables
- Conditionals
- Loops
- Example Programs

### best-practices.md
- Naming Conventions
- Table Patterns
- Error Handling
- Performance Tips
- Module Organization
- Style Best Practices

### integration.md
- C Integration
- C++ Integration
- Python Integration
- Java Integration
- C# Integration
- Go Integration
- Rust Integration
- JavaScript/Node.js Integration
- Game Engine Integration
- Web Integration
- Database Integration
- HTTP Integration

### architecture.md
- Project Structure Patterns
- Module Architecture
- Component Architecture
- State Management
- Event System
- Dependency Injection
- Configuration Architecture
- Plugin Architecture
- Data Flow Architecture
- Testing Architecture
- Performance Architecture

### troubleshooting.md
- ข้อผิดพลาดทั่วไป
- Module Loading Issues
- Table Issues
- Function Issues
- String Issues
- Performance Issues
- Memory Issues
- Metatable Issues
- Coroutine Issues
- File I/O Issues
- C Integration Issues
- Debugging Tips
- IDE/Editor Issues

## References Section

### website.md
- Official Websites
- LuaJIT Resources
- Package Managers
- Community Resources
- Learning Resources
- Game Development
- Tools and IDEs
- Libraries and Frameworks
- Testing and Quality
- Integration Libraries
- Documentation Sites
- Blogs and Articles
- GitHub Repositories
- Social Media
- Conference and Events
- Books
- Video Tutorials
- Cheat Sheets
- Standards and Specifications

### sitemap.md
- แผนที่เอกสารทั้งหมด (ไฟล์นี้)

### api.md
- Standard Library API
- String Library
- Table Library
- Math Library
- IO Library
- OS Library
- Debug Library
- Coroutine Library
- Package Library
- UTF-8 Library

### cli.md
- Lua interpreter commands
- LuaJIT commands
- LuaRocks commands
- Common commands reference

### configuration.md
- Environment Variables
- Lua Runtime Options
- LuaJIT Options
- IDE Configuration
- LuaRocks Configuration
- Project Configuration

## Workflows Section

### ตัวอย่าง Workflows (ที่จะสร้าง)
- setup-lua-project.md - ตั้งค่าโปรเจกต์ Lua
- create-lua-module.md - สร้าง module ใหม่
- test-lua-code.md - เขียน tests สำหรับ Lua
- debug-lua-code.md - debug code Lua
- optimize-lua-performance.md - ปรับปรุง performance
- integrate-lua-with-c.md - เชื่อมต่อ Lua กับ C

## ลำดับการอ่านแนะนำ

### สำหรับผู้เริ่มต้น
1. quick-start.md
2. key-concept.md
3. installation.md
4. best-practices.md

### สำหรับการพัฒนาโปรเจกต์
1. architecture.md
2. configuration.md
3. integration.md
4. troubleshooting.md

### สำหรับการเชื่อมต่อกับภาษาอื่น
1. integration.md
2. how-it-works.md
3. references/api.md

### สำหรับการ optimize
1. how-it-works.md (Performance Characteristics)
2. best-practices.md (Performance Tips)
3. configuration.md (Performance Configuration)

## การค้นหาข้อมูล

### ตามหัวข้อ
- การติดตั้ง → installation.md
- แนวคิด → key-concept.md
- การทำงาน → how-it-works.md
- คุณสมบัติ → features.md
- การตั้งค่า → configuration.md
- เริ่มต้น → quick-start.md
- best practices → best-practices.md
- การเชื่อมต่อ → integration.md
- สถาปัตยกรรม → architecture.md
- การแก้ปัญหา → troubleshooting.md

### ตามประเภท
- Guides → guide/
- References → references/
- Workflows → workflows/

### ตามระดับความยาก
- เริ่มต้น → quick-start.md, key-concept.md
- กลาง → features.md, best-practices.md
- ขั้นสูง → how-it-works.md, integration.md, architecture.md
- เฉพาะทาง → troubleshooting.md, configuration.md

## การอัปเดต

เมื่อมีการเพิ่มไฟล์ใหม่:
1. เพิ่มลิงก์ใน SKILL.md
2. อัปเดต sitemap.md
3. ตรวจสอบ cross-references

เมื่อมีการลบไฟล์:
1. ลบลิงก์จาก SKILL.md
2. อัปเดต sitemap.md
3. ตรวจสอบ broken links
