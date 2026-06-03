# Features

## Language Features

### Modern C# Syntax

| Feature | Description | Example |
|---------|-------------|---------|
| **Pattern Matching** | Match types and conditions | `x is int i` |
| **Records** | Immutable data types | `record Person(string Name, int Age)` |
| **Init-only Properties** | Set once during initialization | `public int X { init; }` |
| **Top-level Statements** | Minimal boilerplate | Direct code without class wrapper |
| **File-scoped Namespaces** | Compact namespace declaration | `namespace App;` |
| **Nullable Reference Types** | Null safety | `string? name` |
| **Target-typed New** | Type inference in new expression | `Dictionary<string, int> dict = new();` |

### Type System

| Feature | Description |
|---------|-------------|
| **Value Types** | int, float, bool, struct |
| **Reference Types** | class, interface, delegate |
| **Records** | Immutable reference types |
| **Nullable Types** | `int?`, `string?` |
| **Generics** | `<T>`, constraints |
| **Tuples** | `(int, string)` value tuples |

### Object-Oriented Features

```csharp
// Classes and Inheritance
public class Animal
{
    public virtual void Speak() => Console.WriteLine("...");
}

public class Dog : Animal
{
    public override void Speak() => Console.WriteLine("Woof!");
}

// Interfaces
public interface IComparable<T>
{
    int CompareTo(T other);
}

// Records (C# 9+)
public record Person(string Name, int Age);

// Structs
public readonly struct Point(double X, double Y);
```

### Functional Programming

| Feature | Description |
|---------|-------------|
| **Lambda Expressions** | Anonymous functions |
| **Expression-bodied Members** | Compact method definitions |
| **Local Functions** | Functions inside functions |
| **Pattern Matching** | Complex pattern matching |
| **Null Conditional** | Safe navigation `?.` |
| **Coalescing** | Default values `??` |

### Async Programming

```csharp
// Async/await pattern
public async Task<string> GetDataAsync()
{
    using var client = new HttpClient();
    var result = await client.GetStringAsync("https://api.example.com");
    return result;
}

// Parallel execution
var tasks = new[] {
    FetchDataAsync(1),
    FetchDataAsync(2),
    FetchDataAsync(3)
};
await Task.WhenAll(tasks);
```

### LINQ (Language Integrated Query)

```csharp
// Query syntax
var adults = from person in people
             where person.Age >= 18
             orderby person.Name
             select person;

// Method syntax
var names = people
    .Where(p => p.Age >= 18)
    .OrderBy(p => p.Name)
    .Select(p => p.Name);

// Complex queries
var result = orders
    .Where(o => o.Status == "Pending")
    .GroupBy(o => o.CustomerId)
    .Select(g => new { CustomerId = g.Key, Total = g.Sum(o => o.Amount) });
```

### Error Handling

| Pattern | Description |
|---------|-------------|
| **try-catch-finally** | Standard exception handling |
| **when clauses** | Filter exceptions by condition |
| **Exception filters** | Catch specific conditions |
| **using statements** | Automatic resource disposal |

```csharp
// Exception handling with filters
try
{
    await ProcessDataAsync();
}
catch (HttpException ex) when (ex.StatusCode == 404)
{
    Console.WriteLine("Resource not found");
}
catch (Exception ex) when (LogException(ex))
{
    // Log and rethrow
    throw;
}
```

### Attributes and Reflection

```csharp
// Custom attribute
[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
public class DocumentationAttribute : Attribute
{
    public string Description { get; set; }
}

// Using attributes
[Documentation(Description = "User service class")]
public class UserService
{
    [Documentation(Description = "Get user by ID")]
    public async Task<User> GetUserAsync(int id) { ... }
}
```

### Dependency Injection

```csharp
// Built-in DI container
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<IUserService, UserService>();
builder.Services.AddScoped<IOrderService, OrderService>();
builder.Services.AddTransient<IEmailService, EmailService>();

var app = builder.Build();
```

### Modern C# Versions

| Version | Year | Key Features |
|---------|------|-------------|
| C# 9 | 2020 | Records, init, pattern matching improvements |
| C# 10 | 2021 | Record structs, global using, file-scoped namespaces |
| C# 11 | 2022 | Static abstract members, raw string literals, pattern matching |
| C# 12 | 2023 | Primary constructors, collection expressions, alias any type |
| C# 13 | 2024 | Params collections, implicit index access, new features |