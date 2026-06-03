# Configuration Reference

## .csproj Properties

### Common Properties

| Property | Values | Default | Description |
|----------|--------|---------|-------------|
| `<OutputType>` | `Exe`, `Library`, `WinExe` | `Exe` | Application type |
| `<TargetFramework>` | `net8.0`, `net7.0`, etc. | - | Target .NET version |
| `<TargetFrameworks>` | Multiple frameworks | - | Multi-target |
| `<Nullable>` | `enable`, `disable` | `disable` | Nullable reference types |
| `<ImplicitUsings>` | `enable`, `disable` | `disable` | Auto global usings |
| `<LangVersion>` | `latest`, `default`, `9`, `10`, etc. | `default` | C# version |
| `<RootNamespace>` | namespace string | Project name | Default namespace |
| `<TreatWarningsAsErrors>` | `true`, `false` | `false` | Warnings as errors |
| `<GenerateDocumentationFile>` | `true`, `false` | `false` | Generate XML docs |

### Build Properties

| Property | Values | Description |
|----------|--------|-------------|
| `<DebugType>` | `full`, `pdbonly`, `portable`, `embedded` | PDB format |
| `<Optimize>` | `true`, `false` | Enable optimizations |
| `<DefineConstants>` | `DEBUG;TRACE` | Preprocessor symbols |
| `<WarningLevel>` | `0-4` | Compiler warning level |
| `<NoWarn>` | `CS0168`, etc. | Suppress warnings |

### Output Properties

| Property | Description |
|----------|-------------|
| `<AssemblyName>` | Output assembly name |
| `<Version>` | Assembly version |
| `<FileVersion>` | File version |
| `<Product>` | Product name |
| `<Company>` | Company name |
| `<Copyright>` | Copyright notice |

### Publish Properties

| Property | Values | Description |
|----------|--------|-------------|
| `<PublishSingleFile>` | `true`, `false` | Single executable |
| `<SelfContained>` | `true`, `false` | Include runtime |
| `<PublishReadyToRun>` | `true`, `false` | Ready to run |
| `<PublishTrimmed>` | `true`, `false` | Trim unused code |
| `<RuntimeIdentifier>` | `win-x64`, `linux-x64` | Target runtime |

## appsettings.json

### Basic Structure

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "..."
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
```

### Environment Variables

| Variable | Description |
|----------|-------------|
| `ASPNETCORE_ENVIRONMENT` | Environment (Development, Staging, Production) |
| `DOTNET_ENVIRONMENT` | .NET environment |
| `ASPNETCORE_URLS` | URLs to listen |
| `DOTNET_RUNNING_IN_CONTAINER` | Container detection |
| `DOTNET_SYSTEM_GLOBALIZATION_INVARIANT` | Invariant mode |

### Configuration Providers

| Provider | Description |
|----------|-------------|
| JSON files | `appsettings.json`, `appsettings.{env}.json` |
| Environment variables | `*`, `:`, `__` separators |
| Command line arguments | `--key value` |
| User secrets | Development only |
| Azure Key Vault | Production |
| AWS Secrets Manager | Production |

## launchSettings.json

| Property | Description |
|----------|-------------|
| `commandName` | `Project`, `Executable`, `IIS`, `Docker` |
| `dotnetRunMessages` | Show dotnet messages |
| `launchBrowser` | Auto-launch browser |
| `launchUrl` | Initial URL |
| `environmentVariables` | Environment variables |
| `applicationUrl` | Application URLs |

## global.json

```json
{
  "sdk": {
    "version": "8.0.100",
    "rollForward": "latestMajor",
    "allowPrerelease": false
  }
}
```

## NuGet Configuration

### nuget.config

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <packageSources>
    <clear />
    <add key="nuget.org" value="https://api.nuget.org/v3/index.json" />
  </packageSources>
  <packageSourceCredentials>
    <add key="my-feed" userName="..." password="..." />
  </packageSourceCredentials>
</configuration>
```

## Build Events

| Event | When |
|-------|------|
| `BeforeBuild` | Before build |
| `AfterBuild` | After build |
| `BeforeRebuild` | Before rebuild |
| `AfterRebuild` | After rebuild |
| `BeforeClean` | Before clean |
| `AfterClean` | After clean |

## MSBuild Properties

| Property | Example |
|----------|---------|
| `$(Configuration)` | Debug, Release |
| `$(Platform)` | AnyCPU, x64 |
| `$(TargetFramework)` | net8.0 |
| `$(OutputPath)` | bin/Debug/ |
| `$(ProjectDir)` | Project root |
| `$(SolutionDir)` | Solution root |