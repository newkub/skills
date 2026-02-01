# Code Style Guidelines

## Concepts
การเขียนโค้ด Kotlin ที่สวยงามและสอดคล้องกับมาตรฐานของทีม

## Best Practices
1. **Naming Conventions**: ใช้ camelCase สำหรับ variables/functions, PascalCase สำหรับ classes
2. **File Organization**: ไฟล์เดียวต่อ public class หรือ multiple classes ที่เกี่ยวข้อง
3. **Line Length**: จำกัดความยาวบรรทัดไม่เกิน 120 ตัวอักษร
4. **Indentation**: ใช้ 4 spaces ไม่ใช้ tabs
5. **Imports**: Group imports ตามประเภท และ remove unused imports

## Examples
```kotlin
// Good naming
class UserRepository {
    private val users = mutableMapOf<Int, User>()
    
    fun findUserById(id: Int): User? {
        return users[id]
    }
}

// Good file organization
// File: UserRepository.kt
class UserRepository { /* ... */ }
data class User(val id: Int, val name: String) { /* ... */ }

// Good imports
import kotlinx.coroutines.*
import java.util.*
```

## Verification
1. ตรวจสอบว่ามี concepts อย่างชัดเจน
2. ตรวจสอบว่ามี best practices อย่างน้อย 3 ข้อ
3. ตรวจสอบว่ามี examples อย่างน้อย 1 ตัวอย่าง
