# Troubleshooting

## การแก้ปัญหาที่พบบ่อยใน Software Design

### SOLID Principles Issues

### Problem: God Class

**Symptoms**:
- Class with too many responsibilities
- Large file (> 500 lines)
- Many methods (> 20)

**Causes**:
1. Violation of SRP
2. Adding features without refactoring
3. Poor separation of concerns

**Solutions**:

```csharp
// ❌ Bad: God class
class UserService {
    void Save(User user) { /* ... */ }
    void SendEmail(User user) { /* ... */ }
    void Validate(User user) { /* ... */ }
    void Log(User user) { /* ... */ }
    void Cache(User user) { /* ... */ }
    // ... many more methods
}

// ✅ Good: Separate responsibilities
class UserRepository {
    void Save(User user) { /* ... */ }
}

class EmailService {
    void SendEmail(User user) { /* ... */ }
}

class UserValidator {
    void Validate(User user) { /* ... */ }
}

class UserService {
    private UserRepository _repository;
    private EmailService _email;
    private UserValidator _validator;
    
    void RegisterUser(User user) {
        _validator.Validate(user);
        _repository.Save(user);
        _email.SendEmail(user);
    }
}
```

### Problem: Tight Coupling

**Symptoms**:
- Hard to test
- Changes cascade through system
- Cannot swap implementations

**Causes**:
1. Direct instantiation
2. Concrete dependencies
3. Violation of DIP

**Solutions**:

```csharp
// ❌ Bad: Tight coupling
class OrderService {
    private SqlOrderRepository _repository = new SqlOrderRepository();
    private SmtpEmailService _email = new SmtpEmailService();
}

// ✅ Good: Loose coupling with DI
class OrderService {
    private IOrderRepository _repository;
    private IEmailService _email;
    
    public OrderService(IOrderRepository repository, IEmailService email) {
        _repository = repository;
        _email = email;
    }
}
```

### Architecture Issues

### Problem: Layer Violation

**Symptoms**:
- Domain layer depends on infrastructure
- Presentation layer directly accesses database
- Circular dependencies

**Causes**:
1. Poor architecture enforcement
2. Shortcuts for convenience
3. Lack of architectural testing

**Solutions**:

```csharp
// ❌ Bad: Layer violation
class UserService {
    private SqlConnection _connection = new SqlConnection();
    
    public User GetUser(Guid id) {
        // Direct database access in domain layer
        _connection.Open();
        // ... SQL queries
    }
}

// ✅ Good: Proper layering
// Domain Layer
interface IUserRepository {
    User GetById(Guid id);
}

// Infrastructure Layer
class SqlUserRepository : IUserRepository {
    public User GetById(Guid id) {
        // Database access here
    }
}

// Application Layer
class UserService {
    private IUserRepository _repository;
    
    public User GetUser(Guid id) => _repository.GetById(id);
}
```

### Problem: Anemic Domain Model

**Symptoms**:
- Entities with no behavior
- All logic in services
- Data transfer objects only

**Causes**:
1. Treating entities as data containers
2. Moving logic to services
3. Lack of domain modeling

**Solutions**:

```csharp
// ❌ Bad: Anemic domain model
class User {
    public Guid Id { get; set; }
    public string Email { get; set; }
    public string Name { get; set; }
}

class UserService {
    public void UpdateUserName(User user, string name) {
        user.Name = name;
    }
}

// ✅ Good: Rich domain model
class User {
    public Guid Id { get; private set; }
    public string Email { get; private set; }
    public string Name { get; private set; }
    
    public void UpdateName(string name) {
        if (string.IsNullOrWhiteSpace(name))
            throw new ArgumentException("Name is required");
        
        Name = name;
    }
}
```

### Design Pattern Issues

### Problem: Overuse of Patterns

**Symptoms**:
- Unnecessary complexity
- Hard to understand
- Pattern for pattern's sake

**Causes**:
1. Applying patterns without need
2. Trying to use all patterns
3. Not understanding pattern purpose

**Solutions**:

```csharp
// ❌ Bad: Unnecessary pattern
class User {
    private static User _instance;
    public static User Instance { /* singleton */ }
}
// Singleton doesn't make sense for user entities

// ✅ Good: Appropriate pattern
class Logger {
    private static Logger _instance;
    public static Logger Instance { /* singleton */ }
}
// Singleton makes sense for logger
```

### Problem: Wrong Pattern Choice

**Symptoms**:
- Pattern doesn't fit problem
- Forced implementation
- Awkward code

**Causes**:
1. Not understanding patterns
2. Choosing pattern prematurely
3. Not considering alternatives

**Solutions**:

```csharp
// ❌ Bad: Wrong pattern
// Using Factory for simple object creation
class UserFactory {
    public User CreateUser(string email, string name) {
        return new User(email, name);
    }
}

// ✅ Good: Simple construction
var user = new User(email, name);

// ✅ Good: Factory when needed
interface IUserFactory {
    User CreateUser(UserType type);
}

class UserFactory : IUserFactory {
    public User CreateUser(UserType type) {
        switch (type) {
            case UserType.Admin:
                return new AdminUser();
            case UserType.Customer:
                return new CustomerUser();
            default:
                throw new ArgumentException();
        }
    }
}
```

### Testing Issues

### Problem: Hard to Test

**Symptoms**:
- Cannot mock dependencies
- Tests require database
- Slow tests

**Causes**:
1. Tight coupling
2. Static dependencies
3. No interfaces

**Solutions**:

```csharp
// ❌ Bad: Hard to test
class UserService {
    private static UserRepository _repository = new UserRepository();
    
    public User GetUser(Guid id) => _repository.GetById(id);
}

// ✅ Good: Easy to test
class UserService {
    private IUserRepository _repository;
    
    public UserService(IUserRepository repository) {
        _repository = repository;
    }
    
    public User GetUser(Guid id) => _repository.GetById(id);
}

// Test with mock
var mockRepo = new Mock<IUserRepository>();
var service = new UserService(mockRepo.Object);
```

### Performance Issues

### Problem: N+1 Query Problem

**Symptoms**:
- Many database queries
- Slow performance
- Database overload

**Causes**:
1. Lazy loading without eager loading
2. Not optimizing queries
3. Not using joins

**Solutions**:

```csharp
// ❌ Bad: N+1 queries
var orders = context.Orders.ToList();
foreach (var order in orders) {
    var customer = context.Customers.Find(order.CustomerId); // N queries
}

// ✅ Good: Eager loading
var orders = context.Orders
    .Include(o => o.Customer)
    .ToList();

// ✅ Good: Projection
var orders = context.Orders
    .Select(o => new {
        o.Id,
        o.Total,
        CustomerName = o.Customer.Name
    })
    .ToList();
```

### Debugging Tips

### 1. Use Architecture Tests

```csharp
[Test]
public void Domain_ShouldNotDependOnInfrastructure()
{
    var domainAssembly = Assembly.Load("Domain");
    var infrastructureAssembly = Assembly.Load("Infrastructure");
    
    var domainTypes = domainAssembly.GetTypes();
    var infrastructureTypes = infrastructureAssembly.GetTypes();
    
    foreach (var domainType in domainTypes) {
        var dependencies = domainType.GetConstructors()
            .SelectMany(c => c.GetParameters())
            .Select(p => p.ParameterType);
        
        foreach (var dependency in dependencies) {
            Assert.IsFalse(infrastructureTypes.Contains(dependency),
                $"{domainType.Name} depends on {dependency.Name}");
        }
    }
}
```

### 2. Use Dependency Analysis Tools

```bash
# Visualize dependencies
dotnet tool install -g dotnet-dependency-visualizer
dotnet-dependency-visualizer

# Check for circular dependencies
dotnet tool install -g CyclomaticComplexity
```

### Common Pitfalls

### 1. Premature Optimization

```csharp
// ❌ Bad: Optimize before measuring
public class Cache {
    private Dictionary<string, object> _cache;
    // Complex caching logic
}

// ✅ Good: Measure first, then optimize
public class Cache {
    private Dictionary<string, object> _cache;
    // Simple implementation
}
// Add complexity only if needed
```

### 2. Over-Engineering

```csharp
// ❌ Bad: Over-engineered for simple problem
interface IUserFactory {
    IUser CreateUser();
}

interface IUserValidator {
    bool Validate(IUser user);
}

interface IUserRepository {
    void Save(IUser user);
}

// For simple CRUD, this is overkill

// ✅ Good: Appropriate complexity
class UserRepository {
    void Save(User user) { /* ... */ }
}
```

### 3. Ignoring Business Requirements

```csharp
// ❌ Bad: Focus on technical patterns without business context
class User {
    // Generic user with no business logic
}

// ✅ Good: Reflect business requirements
class User {
    public void ChangeEmail(string newEmail) {
        // Business rule: Email must be unique
        if (!IsEmailUnique(newEmail)) {
            throw new BusinessException("Email already exists");
        }
    }
}
```
