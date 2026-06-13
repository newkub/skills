# Installation

## Description

ติดตั้ง PostgreSQL บนระบบต่างๆ

## Steps

### Windows

```powershell
# Using chocolatey
choco install postgresql

# Using installer
# Download from https://www.postgresql.org/download/windows/
```

### macOS

```bash
# Using Homebrew
brew install postgresql@16
brew services start postgresql@16
```

### Linux

#### Ubuntu/Debian
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```

#### Fedora
```bash
sudo dnf install postgresql-server postgresql-contrib
sudo postgresql-setup --initdb
sudo systemctl start postgresql
```

## Verify Installation

```bash
psql --version
```

## Best Practices

1. **Use Package Manager**: ใช้ package manager สำหรับ installation
2. **Version Pin**: Pin version สำหรับ consistency
3. **Start Service**: Start PostgreSQL service หลัง installation
4. **Secure Installation**: Secure installation ด้วย strong password
