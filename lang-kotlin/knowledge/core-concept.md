# Core Concepts

## Concepts

Kotlin เป็นภาษาโปรแกรมที่พัฒนาโดย JetBrains ทำงานบน JVM และมีจุดเด่นด้านความปลอดภัยและความสะดวกในการเขียนโค้ด

- **Type Safety**: ตรวจสอบชนิดข้อมูลใน compile time
- **Null Safety**: ป้องกัน NullPointerException
- **Interoperability**: ทำงานร่วมกับ Java ได้ 100%
- **Concise**: โค้ดสั้นกระชับกว่า Java
- **Coroutines**: รองรับ asynchronous programming

## Best Practices

1. ใช้ `val` แทน `var` เมื่อเป็นไปได้
2. หลีกเลี่ยงการใช้ null safety operators โดยไม่จำเป็น
3. ใช้ extension functions สำหรับฟังก์ชันที่เกี่ยวข้องกับ type
4. ใช้ data classes สำหรับข้อมูลที่ต้องการ equals/hashCode/toString
5. ใช้ sealed classes สำหรับ state management

## Examples

```kotlin
// Type inference
val message = "Hello Kotlin" // String

// Null safety
val name: String? = null
val length = name?.length ?: 0

// Data class
data class Person(val name: String, val age: Int)

// Extension function
fun String.capitalizeWords(): String {
    return this.split(" ").joinToString(" ") { 
        it.capitalize() 
    }
}
```

## Verification

1. ตรวจสอบว่ามี concepts อย่างชัดเจน
2. ตรวจสอบว่ามี best practices อย่างน้อย 3 ข้อ
3. ตรวจสอบว่ามี examples อย่างน้อย 1 ตัวอย่าง
