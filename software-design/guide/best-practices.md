# Best Practices

## Best Practices สำหรับ Software Design

### SOLID Principles

### 1. Apply SRP Consistently

แต่ละ class ควรมีหน้าที่เดียว:

```csharp
// ✅ Good: Single responsibility
class UserRepository {
    void Save(User user) { /* save to database */ }
}

class EmailService {
    void SendEmail(User user) { /* send email */ }
}

class UserService {
    private UserRepository _repository;
    private EmailService _emailService;
    
    void RegisterUser(User user) {
        _repository.Save(user);
        _emailService.SendEmail(user);
    }
}

// ❌ Bad: Multiple responsibilities
class UserService {
    void Save(User user) { /* save to database */ }
    void SendEmail(User user) { /* send email */ }
    void RegisterUser(User user) { /* ... */ }
}
```

### 2. Design for Extension

เปิดสำหรับ extension ปิดสำหรับ modification:

```csharp
// ✅ Good: Open for extension
interface IPaymentProcessor {
    void Process(Payment payment);
}

class CreditCardProcessor : IPaymentProcessor {
    public void Process(Payment payment) { /* ... */ }
}

class PayPalProcessor : IPaymentProcessor {
    public void Process(Payment payment) { /* ... */ }
}

// ❌ Bad: Need to modify for new payment methods
class PaymentProcessor {
    void Process(Payment payment) {
        if (payment.Type == "CreditCard") { /* ... */ }
        else if (payment.Type == "PayPal") { /* ... */ }
        // Need to add more if statements
    }
}
```

### 3. Respect LSP

Subclass ต้องสามารถแทนที่ parent class ได้:

```csharp
// ✅ Good: Proper inheritance
class Bird { }
class FlyingBird : Bird {
    virtual void Fly() { /* ... */ }
}
class Eagle : FlyingBird {
    override void Fly() { /* ... */ }
}

// ❌ Bad: Violates LSP
class Bird {
    virtual void Fly() { /* ... */ }
}
class Penguin : Bird {
    override void Fly() { 
        throw new NotImplementedException(); // Penguins can't fly
    }
}
```

### 4. Use Focused Interfaces

Interfaces ควรเล็กและเฉพาะเจาะจง:

```csharp
// ✅ Good: Segregated interfaces
interface IReadable {
    string Read();
}

interface IWritable {
    void Write(string content);
}

class File : IReadable, IWritable {
    public string Read() { /* ... */ }
    public void Write(string content) { /* ... */ }
}

// ❌ Bad: Fat interface
interface IFile {
    string Read();
    void Write(string content);
    void Delete();
    void Copy();
    void Move();
    // ... many more methods
}
```

### 5. Depend on Abstractions

Depend on interfaces ไม่ใช่ concrete classes:

```csharp
// ✅ Good: Dependency injection
class OrderService {
    private readonly IOrderRepository _repository;
    private readonly INotificationService _notification;
    
    public OrderService(IOrderRepository repository, INotificationService notification) {
        _repository = repository;
        _notification = notification;
    }
}

// ❌ Bad: Depends on concrete classes
class OrderService {
    private readonly OrderRepository _repository;
    private readonly EmailNotificationService _notification;
    
    public OrderService() {
        _repository = new OrderRepository();
        _notification = new EmailNotificationService();
    }
}
```

### Design Patterns

### 6. Use Patterns Appropriately

ใช้ patterns เมื่อจำเป็น ไม่ใช่ทุกอย่าง:

```csharp
// ✅ Good: Use pattern when appropriate
interface ILogger {
    void Log(string message);
}

class Logger : ILogger {
    public void Log(string message) => Console.WriteLine(message);
}

// Singleton pattern makes sense for logger
class LoggerSingleton {
    private static LoggerSingleton _instance;
    private static readonly object _lock = new object();
    
    public static LoggerSingleton Instance {
        get {
            if (_instance == null) {
                lock (_lock) {
                    if (_instance == null) {
                        _instance = new LoggerSingleton();
                    }
                }
            }
            return _instance;
        }
    }
}

// ❌ Bad: Overuse patterns
class User {
    // Singleton doesn't make sense for user entities
    private static User _instance;
    public static User Instance { /* ... */ }
}
```

### 7. Prefer Composition Over Inheritance

ใช้ composition มากกว่า inheritance:

```csharp
// ✅ Good: Composition
class Flight {
    private IBookingSystem _booking;
    private IPaymentSystem _payment;
    
    public Flight(IBookingSystem booking, IPaymentSystem payment) {
        _booking = booking;
        _payment = payment;
    }
}

// ❌ Bad: Deep inheritance
class Flight extends BookableFlight extends PayableFlight extends BaseFlight
```

### Architecture

### 8. Define Clear Boundaries

กำหนด boundaries ที่ชัดเจนระหว่าง components:

```yaml
# ✅ Good: Clear boundaries
bounded_contexts:
  - name: user
    entities: [User, Profile]
    services: [UserService]
  - name: order
    entities: [Order, OrderItem]
    services: [OrderService]
```

### 9. Use Dependency Injection

Inject dependencies แทนที่จะ create ใน class:

```csharp
// ✅ Good: DI
public class Startup {
    public void ConfigureServices(IServiceCollection services) {
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<UserService>();
    }
}

// ❌ Bad: Manual instantiation
public class UserService {
    private readonly UserRepository _repository = new UserRepository();
}
```

### Code Quality

### 10. Write Self-Documenting Code

ชื่อ variables, methods, classes ควรบอกความหมาย:

```csharp
// ✅ Good: Self-documenting
var userAge = CalculateAge(user.BirthDate);
var isEligibleForDiscount = userAge >= 65;

// ❌ Bad: Unclear naming
var x = Calculate(user.b);
var y = x >= 65;
```

### 11. Keep Methods Small

Methods ควรทำหน้าที่เดียวและสั้น:

```csharp
// ✅ Good: Small, focused method
public void ProcessOrder(Order order) {
    ValidateOrder(order);
    CalculateTotal(order);
    SaveOrder(order);
    SendConfirmation(order);
}

// ❌ Bad: Large method doing everything
public void ProcessOrder(Order order) {
    // 100 lines of code
}
```

### 12. DRY (Don't Repeat Yourself)

Avoid code duplication:

```csharp
// ✅ Good: Reusable method
private void ValidateEmail(string email) {
    if (string.IsNullOrWhiteSpace(email))
        throw new ArgumentException("Email is required");
    
    if (!IsValidEmailFormat(email))
        throw new ArgumentException("Invalid email format");
}

// Use in multiple places
ValidateEmail(user.Email);
ValidateEmail(customer.Email);

// ❌ Bad: Duplicated validation
if (string.IsNullOrWhiteSpace(user.Email))
    throw new ArgumentException("Email is required");

if (string.IsNullOrWhiteSpace(customer.Email))
    throw new ArgumentException("Email is required");
```

### Testing

### 13. Write Testable Code

Design code ให้ง่ายต่อการ test:

```csharp
// ✅ Good: Testable with DI
public class UserService {
    private readonly IUserRepository _repository;
    
    public UserService(IUserRepository repository) {
        _repository = repository;
    }
}

// Test with mock
var mockRepo = new Mock<IUserRepository>();
var service = new UserService(mockRepo.Object);

// ❌ Bad: Hard to test
public class UserService {
    private readonly UserRepository _repository = new UserRepository();
}
```

### 14. Test Behavior, Not Implementation

Test สิ่งที่ code ทำ ไม่ใช่วิธีที่ทำ:

```csharp
// ✅ Good: Test behavior
[Fact]
public void CreateUser_ShouldReturnUserWithEmail()
{
    var service = new UserService(mockRepo.Object);
    var user = service.CreateUser("test@example.com", "Test");
    Assert.Equal("test@example.com", user.Email);
}

// ❌ Bad: Test implementation
[Fact]
public void CreateUser_ShouldCallRepositoryAdd()
{
    var service = new UserService(mockRepo.Object);
    service.CreateUser("test@example.com", "Test");
    mockRepo.Verify(r => r.Add(It.IsAny<User>()), Times.Once);
}
```

### Documentation

### 15. Document Public APIs

Document interfaces และ public methods:

```csharp
/// <summary>
/// Service for managing user operations
/// </summary>
public interface IUserService {
    /// <summary>
    /// Creates a new user
    /// </summary>
    /// <param name="email">User's email address</param>
    /// <param name="name">User's display name</param>
    /// <returns>The created user</returns>
    /// <exception cref="ArgumentException">Thrown when email is invalid</exception>
    Task<User> CreateUserAsync(string email, string name);
}
```

### 16. Keep Documentation Updated

Update documentation เมื่อ code เปลี่ยน:

```csharp
// Update docs when API changes
// @deprecated Use CreateUserAsync instead
[Obsolete("Use CreateUserAsync instead")]
public User CreateUser(string email, string name) { }
```

### Performance

### 17. Consider Performance Early

Consider performance implications ใน design phase:

```csharp
// ✅ Good: Consider performance
// Use async for I/O operations
public async Task<User> GetUserAsync(Guid id) {
    return await _repository.GetByIdAsync(id);
}

// ❌ Bad: Blocking I/O
public User GetUser(Guid id) {
    return _repository.GetById(id).Result;
}
```

### 18. Profile Before Optimizing

Measure ก่อน optimize:

```csharp
// ✅ Good: Profile first
var stopwatch = Stopwatch.StartNew();
var result = expensiveOperation();
stopwatch.Stop();
Console.WriteLine($"Time: {stopwatch.ElapsedMilliseconds}ms");

// Only optimize if necessary
if (stopwatch.ElapsedMilliseconds > 100) {
    // Apply optimization
}
```

### Security

### 19. Validate All Inputs

Validate inputs ทุกที่:

```csharp
// ✅ Good: Input validation
public void CreateUser(string email, string password) {
    if (string.IsNullOrWhiteSpace(email))
        throw new ArgumentException("Email is required");
    
    if (!IsValidEmail(email))
        throw new ArgumentException("Invalid email format");
    
    if (password.Length < 8)
        throw new ArgumentException("Password must be at least 8 characters");
}

// ❌ Bad: No validation
public void CreateUser(string email, string password) {
    // No validation
}
```

### 20. Use Secure Defaults

Use secure defaults โดย default:

```csharp
// ✅ Good: Secure defaults
public class Configuration {
    public bool EnableHttps { get; set; } = true;
    public bool RequireAuthentication { get; set; } = true;
    public int SessionTimeoutMinutes { get; set; } = 30;
}

// ❌ Bad: Insecure defaults
public class Configuration {
    public bool EnableHttps { get; set; } = false;
    public bool RequireAuthentication { get; set; } = false;
}
```
