# Installation

## การเตรียม Environment สำหรับ Systems Programming

### เครื่องมือที่จำเป็น

- **Programming Language**: C, C++, Rust, Go
- **Build Tools**: GCC, Clang, Make, CMake
- **Debugging Tools**: GDB, LLDB, Valgrind
- **System Tools**: strace, ltrace, perf

### การติดตั้ง

#### บน Linux

```bash
# ติดตั้ง GCC
sudo apt-get install build-essential

# ติดตั้ง Clang
sudo apt-get install clang

# ติดตั้ง Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# ติดตั้ง GDB
sudo apt-get install gdb

# ติดตั้ง Valgrind
sudo apt-get install valgrind

# ติดตั้ง perf
sudo apt-get install linux-tools-common
```

#### บน macOS

```bash
# ติดตั้ง Xcode Command Line Tools
xcode-select --install

# ติดตั้ง Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# ติดตั้ง LLDB
brew install lldb
```

#### บน Windows

```powershell
# ติดตั้ง Visual Studio Build Tools
winget install Microsoft.VisualStudio.2022.BuildTools

# ติดตั้ง Rust
winget install Rustlang.Rust.MSVC

# ติดตั้ง CMake
winget install Kitware.CMake
```

### การติดตั้ง VS Code Extensions

```bash
# ติดตั้ง extensions ที่จำเป็น
code --install-extension ms-vscode.cpptools
code --install-extension rust-lang.rust-analyzer
```

### การตั้งค่า Project

```bash
# สร้าง project structure
mkdir systems-demo
cd systems-demo
mkdir src tests docs

# เริ่ม Git repository
git init
echo "# Systems Programming Demo" > README.md
git add .
git commit -m "Initial commit"
```

### Dependencies

- **C**: libc, pthread
- **C++**: STL, Boost
- **Rust**: std, libc
- **Go**: syscall, unsafe
