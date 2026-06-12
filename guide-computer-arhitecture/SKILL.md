---
name: computer-arhitecture
description: Computer Architecture - คู่มือและแนวคิดเกี่ยวกับ Computer Architecture ครอบคลุม topics ตั้งแต่พื้นฐานจนถึง concepts ขั้นสูงเกี่ยวกับการออกแบบและทำงานของระบบคอมพิวเตอร์
---

# Computer Architecture

คู่มือและแนวคิดเกี่ยวกับ Computer Architecture ครอบคลุม topics ตั้งแต่พื้นฐานจนถึง concepts ขั้นสูงเกี่ยวกับการออกแบบและทำงานของระบบคอมพิวเตอร์

## When to use

ใช้เมื่อต้องการ:
- เข้าใจการทำงานของ CPU และ computer systems
- Optimize performance ของ code ผ่านความเข้าใจ architecture
- เรียนรู้ embedded systems และ low-level programming
- เข้าใจ compiler optimizations และ code generation
- เตรียมสอบ computer architecture หรือ system design
- ออกแบบ hardware หรือ systems

## Skills Related

- `guide-software-architecture` - สำหรับการออกแบบระบบในระดับสูง
- `guide-programming` - สำหรับการเขียนโปรแกรมที่ดี
- `guide-computer-computation` - สำหรับทฤษฎี computation

## หมวดหมู่ไฟล์

### knowledge/guide/

| No | File | Description | Level |
|----|------|-------------|-------|
| 1 | [key-concept.md](knowledge/guide/key-concept.md) | แนวคิดหลัก CPU, Memory, ISA, Pipelining, Parallelism | Basic |
| 2 | [how-it-works.md](knowledge/guide/how-it-works.md) | ภาพรวมการทำงานของ Computer Architecture | Basic |
| 3 | [features.md](knowledge/guide/features.md) | คุณสมบัติและความสามารถของ Computer Architecture | Basic |
| 4 | [configuration.md](knowledge/guide/configuration.md) | การตั้งค่าและการปรับแต่งสำหรับการศึกษา | Basic |
| 5 | [quick-start.md](knowledge/guide/quick-start.md) | เริ่มต้นเรียนรู้อย่างรวดเร็ว | Basic |
| 6 | [best-practices.md](knowledge/guide/best-practices.md) | แนวทางและ best practices สำหรับการศึกษา | Intermediate |
| 7 | [integration.md](knowledge/guide/integration.md) | การผนวกเข้ากับการพัฒนาซอฟต์แวร์ | Intermediate |

### references/

| No | File | Description | Language |
|----|------|-------------|----------|
| 8 | [website.md](references/website.md) | แหล่งข้อมูลและเอกสารอ้างอิง | English |

## หัวข้อหลัก

- **CPU Design**: การออกแบบ processor, ALU, registers
- **Memory Hierarchy**: Cache, RAM, Storage
- **Instruction Set Architecture**: RISC vs CISC
- **Pipelining**: Instruction pipeline, hazards
- **Parallelism**: Superscalar, multi-core, SIMD
- **Performance Optimization**: CPI, throughput, latency