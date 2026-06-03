# Integration

## IDE Integration

### Visual Studio
- Full debugging support
- IntelliSense for C#
- Refactoring tools
- NuGet package manager

### VS Code
- C# extension (Microsoft)
- OmniSharp for language server
- Debugging support
- Task running

### JetBrains Rider
- Advanced refactoring
- Unit testing integration
- Database tools

## Build Tools

### MSBuild
```xml
<!-- Custom targets -->
<Target Name="PreBuild" BeforeTargets="Build">
    <Message Text="Building $(ProjectName)" Importance="high" />
</Target>

<Target Name="PostBuild" AfterTargets="Build">
    <Copy SourceFiles="$(OutputPath)*.dll" DestinationFolder="$(ProjectDir)bin\" />
</Target>
```

### CLI Integration
```bash
# Build with specific configuration
dotnet build -c Release

# Publish for specific runtime
dotnet publish -c Release -r linux-x64 --self-contained
```

## Container Integration

### Docker
```dockerfile
# Multi-stage build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["MyApp.csproj", "./"]
RUN dotnet restore
COPY . .
RUN dotnet build -c Release -o /app/build

FROM build AS publish
RUN dotnet publish -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MyApp.dll"]
```

### Kubernetes
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: myapp
        image: myapp:1.0
        ports:
        - containerPort: 8080
```

## Database Integration

### Entity Framework Core
```csharp
// Package: Microsoft.EntityFrameworkCore
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(connectionString));

// Or SQLite
options.UseSqlite(connectionString);

// Or PostgreSQL
options.UseNpgsql(connectionString);
```

### Dapper
```csharp
// Package: Dapper
using var connection = new SqlConnection(connectionString);
var users = connection.Query<User>("SELECT * FROM Users WHERE Active = 1");
```

## Testing Integration

### xUnit
```csharp
public class CalculatorTests
{
    [Fact]
    public void Add_TwoNumbers_ReturnsSum()
    {
        var calculator = new Calculator();
        var result = calculator.Add(2, 3);
        Assert.Equal(5, result);
    }

    [Theory]
    [InlineData(1, 2, 3)]
    [InlineData(0, 0, 0)]
    [InlineData(-1, 1, 0)]
    public void Add_VariousInputs_ReturnsExpected(int a, int b, int expected)
    {
        var calculator = new Calculator();
        Assert.Equal(expected, calculator.Add(a, b));
    }
}
```

### FluentAssertions
```csharp
// Package: FluentAssertions
result.Should().NotBeNull();
result.Name.Should().Be("Test");
collection.Should().HaveCount(3);
action.Should().Throw<Exception>();
```

## Logging Integration

### Serilog
```csharp
// Package: Serilog.Extensions.Hosting
// Package: Serilog.Sinks.Console
// Package: Serilog.Sinks.File

Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Debug()
    .WriteTo.Console()
    .WriteTo.File("logs/app-.txt", rollingInterval: RollingInterval.Day)
    .CreateLogger();

builder.Host.UseSerilog();
```

### Microsoft.Extensions.Logging
```csharp
// Built-in logging
ILogger<MyService> logger;

public void DoWork()
{
    logger.LogInformation("Working on {Task}", taskName);
    logger.LogWarning("Low memory");
    logger.LogError(ex, "Failed to process");
}
```

## API Client Integration

### HttpClientFactory
```csharp
builder.Services.AddHttpClient<IUserApi, UserApi>(client =>
{
    client.BaseAddress = new Uri("https://api.example.com/");
    client.Timeout = TimeSpan.FromSeconds(30);
});

// Named clients
builder.Services.AddHttpClient("GitHub", client =>
{
    client.BaseAddress = new Uri("https://api.github.com/");
    client.DefaultRequestHeaders.Add("Accept", "application/vnd.github.v3+json");
});
```

## Configuration Integration

### Environment Variables
```csharp
builder.Configuration.AddEnvironmentVariables(prefix: "MYAPP_");

// Access
var setting = Configuration["MYAPP_SETTING"];
```

### User Secrets
```csharp
// Development
dotnet user-secrets init
dotnet user-secrets set "ConnectionStrings:Default" "..."

// In code
var connection = Configuration.GetConnectionString("Default");
```

### Azure Key Vault
```csharp
builder.Configuration.AddAzureKeyVault(
    new Uri("https://myvault.vault.azure.net/"),
    new DefaultAzureCredential());
```

## CI/CD Integration

### GitHub Actions
```yaml
- name: Setup .NET
  uses: actions/setup-dotnet@v4
  with:
    dotnet-version: '8.0.x'

- name: Build
  run: dotnet build

- name: Test
  run: dotnet test --collect:"XPlat Code Coverage"
```