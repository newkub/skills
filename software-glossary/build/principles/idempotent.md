# Idempotent Builds

## คำอธิบาย
หลักการที่ build process ให้ผลลัพธ์เหมือนเดิมเสมอเมื่อรันซ้ำด้วย input เดิม

## ลักษณะเฉพาะ
- **Deterministic Output**: input เดิม → output เดิมเสมอ
- **Pure Functions**: build functions ไม่มี side effects
- **Cache Friendly**: สามารถ cache results ได้
- **Reproducible**: สามารถ reproduce builds ได้

## การปฏิบัติ
- **Fixed Dependencies**: ใช้ exact versions ของ dependencies
- **Isolated Environment**: build ใน environment ที่ isolated
- **Deterministic Ordering**: ลำดับการทำงานคงที่
- **No Timestamps**: ไม่ใส่ timestamps ใน output

## ตัวอย่างที่ควรหลีกเรียง
```javascript
// Bad - Non-idempotent
function build() {
  const timestamp = Date.now();
  return {
    version: timestamp,
    files: processFiles()
  };
}

// Good - Idempotent
function build(config) {
  return {
    version: config.hash,
    files: processFiles(config)
  };
}
```

## ข้อดี
- Reliable builds
- Better caching
- Easier debugging
- CI/CD friendly

## ข้อเสีย
- Configuration complexity
- Build time overhead
- Environment requirements
- Dependency management

## เหมาะกับ
- CI/CD pipelines
- Team development
- Production builds
- Automated testing

---

**หมวดหมู่**: Build Principles
