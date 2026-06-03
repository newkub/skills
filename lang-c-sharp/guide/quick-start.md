# Quick Start

## Create New Project

```bash
# Create console application
dotnet new console -n MyApp

# Create web application
dotnet new webapi -n MyApi

# Create class library
dotnet new classlib -n MyLib

# Create test project
dotnet new xunit -n MyApp.Tests

# Create blazor app
dotnet new blazorwasm -n MyBlazorApp

# Create minimal API
dotnet new webapi -n MyApi --use-minimal-apis
```

## Basic Console Application

```csharp
// Program.cs
Console.WriteLine("Hello, World!");

// With input
Console.Write("Enter your name: ");
var name = Console.ReadLine();
Console.WriteLine($"Hello, {name}!");
```

## Project Structure

```
MyApp/
├── MyApp.csproj
├── Program.cs
├── appsettings.json
└── obj/
    ├── MyApp.csproj.nuget.g.props
    └── project.assets.json
```

## Run Application

```bash
# Run with hot reload
dotnet watch run

# Run specific configuration
dotnet run --configuration Release

# Run with arguments
dotnet run -- --arg1 value1 --arg2 value2
```

## Add Dependencies

```bash
# Add NuGet package
dotnet add package Newtonsoft.Json

# Add specific version
dotnet add package Newtonsoft.Json --version 13.0.3

# Add multiple packages
dotnet add package Serilog.Extensions.Hosting
dotnet add package Serilog.Sinks.Console
```

## Build and Publish

```bash
# Build
dotnet build

# Build for specific framework
dotnet build -f net8.0

# Publish
dotnet publish -c Release -o ./publish

# Self-contained publish
dotnet publish -c Release -r win-x64 --self-contained true
```

## Testing

```bash
# Run tests
dotnet test

# Run with coverage
dotnet test --collect:"XPlat Code Coverage"

# Run specific test
dotnet test --filter "FullyQualifiedName~MyTestClass"

# Watch mode
dotnet watch test
```

## Common Commands

| Command | Description |
|---------|-------------|
| `dotnet new` | Create new project |
| `dotnet build` | Build project |
| `dotnet run` | Run project |
| `dotnet test` | Run tests |
| `dotnet publish` | Publish project |
| `dotnet restore` | Restore packages |
| `dotnet add package` | Add NuGet package |
| `dotnet remove package` | Remove NuGet package |
| `dotnet list package` | List packages |
| `dotnet clean` | Clean build artifacts |

## Minimal API Example

```csharp
// Program.cs
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapGet("/users/{id}", (int id) => $"User {id}");

app.MapPost("/users", async (User user, AppDbContext db) =>
{
    db.Users.Add(user);
    await db.SaveChangesAsync();
    return Results.Created($"/users/{user.Id}", user);
});

app.Run();

record User(int Id, string Name, string Email);
```

## Working with Data

```csharp
// Entity Framework Core
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDbContext>();
var app = builder.Build();

app.MapGet("/products", async (AppDbContext db) =>
    await db.Products.ToListAsync());

app.MapGet("/products/{id}", async (int id, AppDbContext db) =>
    await db.Products.FindAsync(id) is Product p ? Results.Ok(p) : Results.NotFound());

app.Run();

public class AppDbContext : DbContext
{
    public DbSet<Product> Products => Set<Product>();
    protected override void OnConfiguring(DbContextOptionsBuilder o)
        => o.UseInMemoryDatabase("db");
}

public class Product(int Id, string Name, decimal Price);
```