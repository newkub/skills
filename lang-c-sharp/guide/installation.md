# Installation

## .NET SDK Installation

### Windows

#### Option 1: Download Installer
1. ไปที่ https://dotnet.microsoft.com/download
2. เลือก .NET SDK version (LTS recommended)
3. ดาวน์โหลดและรัน installer
4. Restart terminal

#### Option 2: Winget (Recommended)
```powershell
# Install latest LTS
winget install Microsoft.DotNet.SDK.8

# Install specific version
winget install Microsoft.DotNet.SDK.7.0.404
```

#### Option 3: Chocolatey
```powershell
choco install dotnet-sdk
```

### macOS

#### Option 1: Homebrew (Recommended)
```bash
# Install latest LTS
brew install --cask dotnet-sdk

# Install specific version
brew install --cask dotnet-sdk@7.0
```

#### Option 2: Download Installer
1. ไปที่ https://dotnet.microsoft.com/download
2. ดาวน์โหลด .pkg installer
3. รัน installer

### Linux

#### Ubuntu/Debian
```bash
# Add Microsoft package repository
wget https://packages.microsoft.com/config/ubuntu/22.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb

# Install SDK
sudo apt-get update
sudo apt-get install -y dotnet-sdk-8
```

#### Fedora
```bash
sudo dnf install dotnet-sdk-8.0
```

#### Arch Linux
```bash
sudo pacman -S dotnet-sdk
```

## Verify Installation

```bash
# Check .NET version
dotnet --version

# List installed SDKs
dotnet --list-sdks

# List installed runtimes
dotnet --list-runtimes
```

## IDE Setup

### Visual Studio (Windows)
- Download: https://visualstudio.microsoft.com/
- Include .NET desktop development workload

### Visual Studio Code
- Install C# extension (Microsoft)
- Install .NET CLI extension

### JetBrains Rider
- Download: https://www.jetbrains.com/rider/
- Full .NET support out of the box

## Create First Project

```bash
# Create new console project
dotnet new console -n MyApp

# Navigate to project
cd MyApp

# Run the project
dotnet run

# Add packages
dotnet add package Newtonsoft.Json
```

## Update .NET SDK

```bash
# Check for updates
dotnet --check-for-updates

# Update via package manager
# Windows
winget upgrade Microsoft.DotNet.SDK

# macOS
brew upgrade dotnet-sdk

# Linux
sudo apt-get update && sudo apt-get upgrade dotnet-sdk
```

## Docker Installation

```dockerfile
# Use official .NET image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY . .
RUN dotnet restore
RUN dotnet publish -c Release -o /publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /publish
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "MyApp.dll"]
```