# Performance Optimization

## Concepts

เทคนิคการปรับปรุงประสิทธิภาพโค้ด Kotlin ให้ทำงานได้เร็วขึ้น

## Best Practices

1. **Inline Functions**: ใช้ `inline` สำหรับ functions ที่รับ lambda parameters
2. **Sequence API**: ใช้ sequences แทน collections สำหรับ large datasets
3. **Lazy Initialization**: ใช้ `lazy` สำหรับ properties ที่ไม่จำเป็นต้อง init ทันที
4. **Object Pooling**: ใช้ object pools สำหรับ objects ที่สร้างบ่อย
5. **Memory Management**: หลีกเลี่ยง memory leaks ด้วย proper lifecycle management

## Examples

```kotlin
// Good: Inline function
inline fun measureTime(operation: () -> Unit): Long {
    val start = System.nanoTime()
    operation()
    return System.nanoTime() - start
}

// Good: Sequence for large data
val result = (1..1_000_000)
    .asSequence()
    .filter { it % 2 == 0 }
    .map { it * it }
    .take(10)
    .toList()

// Good: Lazy initialization
val expensiveValue: String by lazy {
    println("Computing expensive value...")
    "Result"
}

// Good: Memory management
class ResourceManager : AutoCloseable {
    private val resources = mutableListOf<Resource>()

    fun addResource(resource: Resource) {
        resources.add(resource)
    }

    override fun close() {
        resources.forEach { it.close() }
        resources.clear()
    }
}
```

## Verification

1. ตรวจสอบว่ามี concepts อย่างชัดเจน
2. ตรวจสอบว่ามี best practices อย่างน้อย 3 ข้อ
3. ตรวจสอบว่ามี examples อย่างน้อย 1 ตัวอย่าง
