# jsDelivr

jsDelivr เป็น Open Source CDN (Content Delivery Network) ที่ให้บริการฟรีสำหรับ npm packages และ GitHub repositories รองรับการส่งมอบไฟล์ที่ optimized สำหรับ JS และ ESM พร้อม features ครบครัน

## โครงสร้าง Directory

```text
lib-jsdelivr/
├── intro/
│   ├── intro-overview.md
│   ├── intro-key-concepts.md
│   └── intro-when-to-use.md
├── setup/
│   ├── setup-installation.md
│   └── setup-configuration.md
├── guide/
│   ├── guide-usage.md
│   └── guide-best-practices.md
├── apis/
│   ├── api-reference.md
│   └── api-examples.md
├── workflows/
│   └── use-jsdelivr.md
├── README.md
└── SKILL.md
```

## หมวดหมู่ไฟล์

- **intro/**: บทนำและแนวคิดพื้นฐานของ jsDelivr
- **setup/**: การติดตั้งและการตั้งค่า
- **guide/**: คู่มือการใช้งานและ best practices
- **apis/**: เอกสารอ้างอิง API และตัวอย่าง
- **workflows/**: workflows สำหรับการใช้งาน jsDelivr

## คุณสมบัติหลัก

- **Multi-CDN**: ใช้งานหลาย CDN providers (Cloudflare, Fastly, BunnyCDN) เพื่อความเสถียรสูงสุด
- **Smart Load Balancing**: ระบบ load balancing อัจฉริยะที่เลือกเซิร์ฟเวอร์ที่ดีที่สุดตามตำแหน่งผู้ใช้
- **Failover**: ระบบ failover อัตโนมัติหาก CDN หลักล่ม
- **China Support**: รองรับการเข้าถึงจากประเทศจีนผ่าน CDN ที่ได้รับอนุญาต
- **npm & GitHub**: รองรับการโหลด packages จาก npm และไฟล์จาก GitHub repositories
- **ESM Support**: รองรับ ES Modules (ESM) และมี `esm.run` สำหรับ module imports
- **Version Resolution**: รองรับ semver versioning, tags, และ latest versions
- **Minification**: มีไฟล์ minified พร้อม source maps
- **File Combining**: รวมหลายไฟล์เป็น request เดียว
- **Caching**: ระบบ caching ที่มีประสิทธิภาพสูง
- **Purge Cache**: สามารถ purge cache ได้ผ่าน web interface

## เมื่อใดควรใช้

- ต้องการโหลด npm packages บน web โดยไม่ต้อง install
- ต้องการ serve static files จาก GitHub repositories
- ต้องการ CDN ที่เสถียรและมี failover
- ต้องการเข้าถึงผู้ใช้ในประเทศจีน
- ต้องการใช้ ES Modules บน browser โดยตรง
- ต้องการ combine หลายไฟล์เป็น request เดียวเพื่อลด HTTP requests

## ลิงก์อ้างอิง

- [เว็บไซต์หลัก](https://www.jsdelivr.com)
- [เอกสารรายละเอียด](https://www.jsdelivr.com/documentation)
- [GitHub](https://github.com/jsdelivr/jsdelivr)
- [esm.run](https://www.jsdelivr.com/esm)
- [Purge Cache Tool](https://www.jsdelivr.com/tools/purge)
