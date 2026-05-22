# Kotlin Usage Patterns

## Description

การใช้งาน Kotlin features อย่างถูกต้องและมีประสิทธิภาพ

## Examples

```kotlin
// Null safety
val name: String? = null
val length = name?.length ?: 0

// Extension functions
fun String.isEmail(): Boolean {
    return this.contains("@")
}

// Data classes
data class User(val id: Int, val name: String)
```

## Anti-patterns

- ใช้ `!!` operator โดยไม่จำเป็น
- สร้าง mutable variables โดยไม่จำเป็น
- ไม่ใช้ standard library functions

## Verification

1. ตรวจสอบว่ามี usage examples ที่ชัดเจน
2. ตรวจสอบว่ามี anti-patterns ที่เป็นประโยชน์
3. ตรวจสอบว่าโค้ดทำงานได้จริง
