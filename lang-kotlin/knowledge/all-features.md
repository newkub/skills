# All Kotlin Features

## Concepts
Kotlin มีฟีเจอร์ครบครันสำหรับการพัฒนาแอปพลิเคชันสมัยใหม่

- **Type System**: Strong typing พร้อม type inference
- **Null Safety**: Built-in null safety ด้วย ? และ ?:
- **Extension Functions**: เพิ่มฟังก์ชันให้กับ existing types
- **Higher-Order Functions**: Functions ที่รับ functions เป็น parameter
- **Lambdas**: Anonymous functions สำหรับ functional programming
- **Coroutines**: Asynchronous programming ที่ง่ายและมีประสิทธิภาพ
- **Data Classes**: Auto-generate equals, hashCode, toString
- **Sealed Classes**: Restricted class hierarchies
- **Object Declarations**: Singleton pattern
- **Companion Objects**: Factory methods และ constants
- **Inline Classes**: Zero-cost abstraction
- **Delegated Properties**: Property delegation pattern
- **Destructuring**: แยก objects ออกเป็น variables
- **Smart Casts**: Automatic casting หลัง type checking
- **Operator Overloading**: Custom operators สำหรับ types

## Best Practices
1. ใช้ coroutines แทน callbacks สำหรับ async operations
2. ใช้ sealed classes สำหรับ representing states
3. ใช้ inline classes สำหรับ performance optimization
4. ใช้ delegated properties สำหรับ lazy initialization
5. ใช้ smart casts แทน manual casting

## Examples
```kotlin
// Coroutines
suspend fun fetchData(): String {
    return withContext(Dispatchers.IO) {
        // network call
        "data"
    }
}

// Sealed class
sealed class Result {
    data class Success(val data: String) : Result()
    data class Error(val exception: Throwable) : Result()
}

// Inline class
@JvmInline
value class UserId(val value: Int)

// Delegated property
val lazyValue: String by lazy {
    println("Computed!")
    "Hello"
}

// Destructuring
data class User(val name: String, val age: Int)
val (name, age) = User("John", 30)
```

## Verification
1. ตรวจสอบว่ามี concepts อย่างชัดเจน
2. ตรวจสอบว่ามี best practices อย่างน้อย 3 ข้อ
3. ตรวจสอบว่ามี examples อย่างน้อย 1 ตัวอย่าง
