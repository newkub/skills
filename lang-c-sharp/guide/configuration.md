# Configuration

## .csproj Configuration

### Basic Project File

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net8.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
    <RootNamespace>MyApp</RootNamespace>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Newtonsoft.Json" Version="13.0.3" />
  </ItemGroup>
</Project>
```

### Common Property Options

| Property | Description | Values |
|----------|-------------|--------|
| `<OutputType>` | Type of output | `Exe`, `Library`, `WinExe` |
| `<TargetFramework>` | Target framework | `net8.0`, `net7.0`, `net6.0` |
| `<Nullable>` | Nullable reference types | `enable`, `disable` |
| `<ImplicitUsings>` | Auto-generate using statements | `enable`, `disable` |
| `<LangVersion>` | C# language version | `latest`, `10`, `9`, `default` |
| `<TreatWarningsAsErrors>` | Treat warnings as errors | `true`, `false` |
| `<GenerateDocumentationFile>` | Generate XML docs | `true`, `false` |

### Multi-targeting

```xml
<PropertyGroup>
  <TargetFrameworks>net8.0;net7.0;net6.0</TargetFrameworks>
</PropertyGroup>
```

## appsettings.json

### Basic Configuration

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=mydb;User=sa;Password=secret"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning"
    }
  },
  "AllowedHosts": "*"
}
```

### Environment-specific Settings

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "${DATABASE_URL}"
  },
  "Features": {
    "EnableNewFeature": "${ENABLE_FEATURE:false}",
    "MaxRetries": 3
  }
}
```

## launchSettings.json

```json
{
  "profiles": {
    "MyApp": {
      "commandName": "Project",
      "dotnetRunMessages": true,
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development",
        "DOTNET_ENVIRONMENT": "Development"
      }
    },
    "Docker": {
      "commandName": "Docker",
      "publishAllPorts": true
    }
  }
}
```

## Global Using Statements

```csharp
// global using examples (C# 10+)
global using System;
global using System.Collections.Generic;
global using System.Linq;
global using System.Threading.Tasks;
global using System.IO;

// Custom global usings
global using Serilog;
```

## Environment Variables

```bash
# Set environment variable
export DOTNET_ENVIRONMENT=Production
export ASPNETCORE_ENVIRONMENT=Production

# In code
var env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

# Using IConfiguration
var setting = Configuration["Features:MaxRetries"];
```

## Build Configuration

### Debug vs Release

```xml
<PropertyGroup Condition="'$(Configuration)' == 'Debug'">
  <DebugType>full</DebugType>
  <Optimize>false</Optimize>
  <DefineConstants>DEBUG;TRACE</DefineConstants>
</PropertyGroup>

<PropertyGroup Condition="'$(Configuration)' == 'Release'">
  <DebugType>pdbonly</DebugType>
  <Optimize>true</Optimize>
  <DefineConstants>RELEASE;TRACE</DefineConstants>
</PropertyGroup>
```

## NuGet Configuration

### nuget.config

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <packageSources>
    <clear />
    <add key="nuget.org" value="https://api.nuget.org/v3/index.json" protocolVersion="3" />
  </packageSources>
</configuration>
```

## Performance Options

```xml
<PropertyGroup>
  <!-- Tiered compilation -->
  <TieredCompilation>true</TieredCompilation>
  
  <!-- Ready to run -->
  <PublishReadyToRun>true</PublishReadyToRun>
  
  <!-- Trimming (for size) -->
  <PublishTrimmed>true</PublishTrimmed>
</PropertyGroup>
```