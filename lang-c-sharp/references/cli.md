# CLI Reference

## dotnet Commands

### Project Management

| Command | Description |
|---------|-------------|
| `dotnet new <template>` | Create new project |
| `dotnet new console` | Create console app |
| `dotnet new webapi` | Create Web API |
| `dotnet new webapp` | Create Razor web app |
| `dotnet new classlib` | Create class library |
| `dotnet new xunit` | Create xUnit test |
| `dotnet new mstest` | Create MSTest project |
| `dotnet new sln` | Create solution |
| `dotnet new worker` | Create worker service |

### Build and Run

| Command | Description |
|---------|-------------|
| `dotnet build` | Build project |
| `dotnet build -c Release` | Build Release config |
| `dotnet build -f net8.0` | Build for specific framework |
| `dotnet run` | Run project |
| `dotnet run --no-build` | Run without rebuilding |
| `dotnet run -- --args` | Pass arguments to app |
| `dotnet watch run` | Run with hot reload |
| `dotnet clean` | Clean build artifacts |

### Testing

| Command | Description |
|---------|-------------|
| `dotnet test` | Run all tests |
| `dotnet test --filter "Name~Test"` | Filter tests |
| `dotnet test --collect:"XPlat Code Coverage"` | Generate coverage |
| `dotnet watch test` | Run tests with watch |
| `dotnet test --logger "trx"` | Output test results |

### Packages

| Command | Description |
|---------|-------------|
| `dotnet add package <name>` | Add NuGet package |
| `dotnet add package <name> --version <ver>` | Add specific version |
| `dotnet remove package <name>` | Remove package |
| `dotnet list package` | List packages |
| `dotnet list package --outdated` | Show outdated packages |
| `dotnet restore` | Restore packages |

### Publishing

| Command | Description |
|---------|-------------|
| `dotnet publish` | Publish project |
| `dotnet publish -c Release` | Publish Release |
| `dotnet publish -o <path>` | Output to path |
| `dotnet publish -r win-x64` | Publish for Windows x64 |
| `dotnet publish --self-contained true` | Self-contained publish |
| `dotnet publish --manifest` | Publish with manifest |

### Solution

| Command | Description |
|---------|-------------|
| `dotnet sln add <project>` | Add project to solution |
| `dotnet sln remove <project>` | Remove from solution |
| `dotnet sln list` | List projects in solution |
| `dotnet sln <solution> add <project>` | Add to specific solution |

### Tool Management

| Command | Description |
|---------|-------------|
| `dotnet tool install <tool>` | Install global tool |
| `dotnet tool uninstall <tool>` | Uninstall global tool |
| `dotnet tool update <tool>` | Update global tool |
| `dotnet tool list` | List global tools |

## dotnet Options

| Option | Description |
|--------|-------------|
| `--help` or `-h` | Show help |
| `--version` | Show version |
| `--list-sdks` | List installed SDKs |
| `--list-runtimes` | List installed runtimes |
| `--info` | Show environment info |

## Project Templates

| Template | Command |
|----------|---------|
| Console App | `dotnet new console` |
| ASP.NET Core Web API | `dotnet new webapi` |
| Minimal API | `dotnet new webapi --use-minimal-apis` |
| Blazor Server | `dotnet new blazorserver` |
| Blazor WebAssembly | `dotnet new blazorwasm` |
| Razor Pages | `dotnet new webapp --framework net8.0` |
| Class Library | `dotnet new classlib` |
| xUnit Test | `dotnet new xunit` |
| MSTest | `dotnet new mstest` |
| Worker Service | `dotnet new worker` |
| WPF | `dotnet new wpf` |
| WinForms | `dotnet new winforms` |

## Common Workflows

### Create and Run Console App
```bash
dotnet new console -n MyApp
cd MyApp
dotnet run
```

### Create Web API with Tests
```bash
dotnet new webapi -n MyApi
dotnet new xunit -n MyApi.Tests
dotnet sln add MyApi/MyApi.csproj
dotnet sln add MyApi.Tests/MyApi.Tests.csproj
dotnet add MyApi.Tests/MyApi.Tests.csproj reference MyApi/MyApi.csproj
dotnet test
```

### Add Package and Use
```bash
dotnet add package Newtonsoft.Json
# Use in code:
# using Newtonsoft.Json;
```

### Build Self-Contained
```bash
dotnet publish -c Release -r linux-x64 --self-contained true -p:PublishSingleFile=true
```