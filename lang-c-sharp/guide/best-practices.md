# Best Practices

## Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Class | PascalCase | `UserService`, `ProductController` |
| Method | PascalCase | `GetUserById()`, `CalculateTotal()` |
| Property | PascalCase | `FirstName`, `OrderTotal` |
| Field | _camelCase | `_connection`, `_cache` |
| Constant | PascalCase | `MaxRetries`, `DefaultTimeout` |
| Interface | I prefix | `IUserRepository`, `IEmailService` |
| Enum | PascalCase | `OrderStatus`, `LogLevel` |
| Enum value | PascalCase | `OrderStatus.Pending` |

## Code Organization

### File Structure
```
src/
├── Services/
│   ├── UserService.cs
│   └── OrderService.cs
├── Models/
│   ├── User.cs
│   └── Order.cs
├── Controllers/
│   └── UserController.cs
├── Program.cs
└── appsettings.json
```

### Namespace Guidelines
```csharp
namespace MyCompany.MyApp.Services;
namespace MyCompany.MyApp.Models;

// Use file-scoped namespaces (C# 10+)
namespace MyCompany.MyApp.Repositories;
```

## Error Handling

### Do's
```csharp
// Use specific exception types
throw new ArgumentNullException(nameof(user));

// Use try-catch appropriately
try
{
    var result = await _repository.GetByIdAsync(id);
    if (result is null)
        throw new KeyNotFoundException($"Item {id} not found");
    return result;
}
catch (KeyNotFoundException ex)
{
    _logger.LogWarning(ex, "Item not found: {Id}", id);
    throw;
}
```

### Don'ts
```csharp
// Don't catch all exceptions silently
try { /* ... */ } catch { }

// Don't throw Exception
throw new Exception("Error"); // Use specific types

// Don't swallow exceptions
try { /* ... */ } catch (Exception ex) { /* ignore */ }
```

## Async/Await Best Practices

```csharp
// DO: Use async all the way
public async Task<User> GetUserAsync(int id)
{
    return await _repository.FindAsync(id);
}

// DON'T: Blocking on async code
var user = GetUserAsync(id).Result; // Deadlock risk

// DO: Use Task.WhenAll for parallel operations
var userTask = GetUserAsync(1);
var orderTask = GetOrderAsync(1);
await Task.WhenAll(userTask, orderTask);

// DO: Handle cancellation
public async Task<User> GetUserAsync(int id, CancellationToken ct)
{
    ct.ThrowIfCancellationRequested();
    return await _repository.FindAsync(id, ct);
}
```

## Dependency Injection

```csharp
// DO: Register services appropriately
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddSingleton<ISettings, AppSettings>();

// DON'T: New up dependencies manually
public class BadService
{
    private readonly UserService _service = new(); // Avoid
}

// DO: Constructor injection
public class GoodService
{
    private readonly IUserService _service;
    public GoodService(IUserService service) => _service = service;
}
```

## LINQ Best Practices

```csharp
// DO: Use method syntax for complex operations
var result = items
    .Where(x => x.IsActive)
    .OrderBy(x => x.Name)
    .Select(x => new { x.Id, x.Name });

// DON'T: Multiple enumerations without ToList
var query = items.Where(x => x.IsActive); // Unevaluated
// ... use query multiple times
var list = query.ToList(); // Evaluate once

// DO: Use AsNoTracking for read-only queries
var users = await _context.Users
    .AsNoTracking()
    .Where(u => u.IsActive)
    .ToListAsync();
```

## Memory Management

```csharp
// DO: Use using statements
using var reader = new StreamReader("file.txt");
// reader disposed at end of scope

// DO: Dispose async resources properly
await using var response = await httpClient.GetAsync(url);

// DON'T: Create unnecessary allocations
var sb = new StringBuilder();
for (int i = 0; i < 100; i++)
    sb.Append(i); // Consider StringBuilder capacity

// DO: Use spans for performance
Span<int> numbers = stackalloc int[100];
```

## Logging

```csharp
// Use structured logging
_logger.LogInformation(
    "User {UserId} created order {OrderId} for {Amount:C}",
    userId, orderId, amount);

// Log at appropriate levels
_logger.LogTrace("Detailed trace info");
_logger.LogDebug("Debug info");
_logger.LogInformation("Info message");
_logger.LogWarning("Warning message");
_logger.LogError(ex, "Error occurred");
_logger.LogCritical(ex, "Critical failure");
```

## Security

```csharp
// DO: Validate input
public void ProcessOrder(OrderRequest request)
{
    ArgumentNullException.ThrowIfNull(request);
    if (request.Amount < 0)
        throw new ArgumentException("Invalid amount");
}

// DO: Use parameterized queries
var user = await _context.Users
    .FromSqlRaw("SELECT * FROM Users WHERE Id = {0}", id)
    .FirstOrDefaultAsync();

// DON'T: Concatenate user input into queries
var sql = "SELECT * FROM Users WHERE Name = '" + name + "'"; // SQL injection risk
```

## Performance

| Practice | Description |
|----------|-------------|
| Use `List<T>` for frequently modified collections | Better performance than arrays |
| Use `IReadOnlyList<T>` for read-only collections | Clearer intent |
| Avoid boxing/unboxing | Use structs carefully |
| Use `HashSet<T>` for unique collections | O(1) lookup |
| Use `Dictionary<TKey, TValue>` for key-value pairs | Efficient lookup |
| Consider `Span<T>` for high-performance scenarios | Avoid allocations |