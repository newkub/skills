# Testing Best Practices

## Concepts
การเขียน tests สำหรับ Kotlin code ที่มีประสิทธิภาพและบำรุงรักษาง่าย

## Best Practices
1. **Test Structure**: ใช้ AAA pattern (Arrange, Act, Assert)
2. **Test Naming**: ตั้งชื่อ tests ให้บอกว่าทดสอบอะไรและคาดหวังผลลัพธ์อะไร
3. **Mock Objects**: ใช้ MockK สำหรับ mocking ใน Kotlin
4. **Test Coverage**: ครอบคลุม edge cases และ error conditions
5. **Integration Tests**: เขียน integration tests สำหรับ critical flows

## Examples
```kotlin
// Good: Test structure
class UserServiceTest {
    @Test
    fun `should create user successfully when valid data provided`() {
        // Arrange
        val repository = mockk<UserRepository>()
        val service = UserService(repository)
        val userData = CreateUserRequest("John", "john@example.com")
        
        // Act
        val result = service.createUser(userData)
        
        // Assert
        assertThat(result.name).isEqualTo("John")
        verify { repository.save(any()) }
    }
    
    @Test
    fun `should throw exception when email already exists`() {
        // Arrange
        val repository = mockk<UserRepository>()
        every { repository.findByEmail("john@example.com") } returns User(1, "John")
        val service = UserService(repository)
        val userData = CreateUserRequest("Jane", "john@example.com")
        
        // Act & Assert
        assertThrows<EmailAlreadyExistsException> {
            service.createUser(userData)
        }
    }
}

// Good: MockK usage
class OrderServiceTest {
    @Test
    fun `should calculate total with discount`() {
        val paymentGateway = mockk<PaymentGateway>()
        every { paymentGateway.calculateDiscount(any()) } returns 10.0
        
        val order = Order(items = listOf(Item(100.0)))
        val total = order.calculateTotal(paymentGateway)
        
        assertThat(total).isEqualTo(90.0)
        verify { paymentGateway.calculateDiscount(order) }
    }
}
```

## Verification
1. ตรวจสอบว่ามี concepts อย่างชัดเจน
2. ตรวจสอบว่ามี best practices อย่างน้อย 3 ข้อ
3. ตรวจสอบว่ามี examples อย่างน้อย 1 ตัวอย่าง
