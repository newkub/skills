# Project Configuration

## Description
กำหนดค่าโปรเจกต์ Kotlin ให้ทำงานได้อย่างถูกต้อง

## Examples
```kotlin
// build.gradle.kts
plugins {
    kotlin("jvm") version "1.9.10"
}

repositories {
    mavenCentral()
}

dependencies {
    implementation(kotlin("stdlib"))
}
```

## Anti-patterns
- ไม่กำหนด Kotlin version ใน build file
- ใช้ dependencies ที่ไม่เข้ากัน
- ไม่ตั้งค่า JVM target ที่เหมาะสม

## Verification
1. ตรวจสอบว่ามี configuration examples
2. ตรวจสอบว่ามี anti-patterns ที่ชัดเจน
3. ตรวจสอบว่าสามารถ build โปรเจกต์ได้
