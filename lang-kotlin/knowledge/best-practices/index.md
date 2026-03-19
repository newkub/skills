# Kotlin Best Practices

## Concepts

Best practices สำหรับการพัฒนา Kotlin ที่ทำให้โค้ดมีคุณภาพ อ่านง่าย และบำรุงรักษาง่าย

## Best Practices

1. **Immutability**: ใช้ `val` แทน `var` เสมอที่ทำได้
2. **Null Safety**: หลีกเลี่ยง `!!` operator ใช้ `?` และ `?:` แทน
3. **Extension Functions**: สร้าง utility functions ด้วย extension functions
4. **Data Classes**: ใช้สำหรับ data holders ที่ต้องการ equals/hashCode
5. **Sealed Classes**: ใช้สำหรับ state management และ error handling
6. **Coroutines**: ใช้สำหรับ async operations แทน callbacks
7. **Smart Casts**: ใช้ประโยชน์จาก smart casts หลัง type checking
8. **Collection Functions**: ใช้ map, filter, reduce แทน loops
9. **Named Arguments**: ใช้ named parameters สำหรับ readability
10. **Default Parameters**: ใช้ default values แทน overloading

## Additional Topics

- [Code Style](code-style.md) - มาตรฐานการเขียนโค้ด
- [Performance](performance.md) - การปรับปรุงประสิทธิภาพ
- [Testing](testing.md) - การเขียน tests ที่ดี

## Examples

```kotlin
// Good: Immutability
class UserRepository {
    private val users = mutableMapOf<Int, User>()

    fun addUser(user: User) {
        users[user.id] = user
    }
}

// Good: Null safety
fun getUserName(user: User?): String {
    return user?.name ?: "Unknown"
}

// Good: Extension function
fun String.isValidEmail(): Boolean {
    return this.contains("@") && this.contains(".")
}

// Good: Data class
data class Product(
    val id: String,
    val name: String,
    val price: Double
)

// Good: Sealed class
sealed class NetworkResult {
    data class Success<T>(val data: T) : NetworkResult()
    data class Error(val message: String) : NetworkResult()
    object Loading : NetworkResult()
}

// Good: Coroutines
suspend fun loadUserData(): User {
    return withContext(Dispatchers.IO) {
        // fetch from database
        User("John", 25)
    }
}

// Good: Collection functions
val activeUsers = users
    .filter { it.isActive }
    .map { it.name }
    .sorted()
```

## Verification

1. ตรวจสอบว่ามี concepts อย่างชัดเจน
2. ตรวจสอบว่ามี best practices อย่างน้อย 3 ข้อ
3. ตรวจสอบว่ามี examples อย่างน้อย 1 ตัวอย่าง
