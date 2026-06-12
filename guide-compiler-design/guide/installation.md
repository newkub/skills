# Installation

## การเตรียม Environment สำหรับ Compiler Development

### เครื่องมือที่จำเป็น

- **Compiler Tools**: GCC, Clang, หรือ MSVC
- **Build System**: CMake, Make, หรือ Ninja
- **Language**: C, C++, Rust, หรือภาษาที่เลือก
- **Debugger**: GDB, LLDB, หรือ Visual Studio Debugger
- **Testing Framework**: Google Test, Catch2, หรือ custom

### การติดตั้ง

#### บน Linux

```bash
# Ubuntu/Debian
sudo apt-get install build-essential cmake gdb

# Fedora
sudo dnf install gcc-c++ cmake gdb

# Arch Linux
sudo pacman -S base-devel cmake gdb
```

#### บน macOS

```bash
# ติดตั้ง Xcode Command Line Tools
xcode-select --install

# ติดตั้ง CMake ผ่าน Homebrew
brew install cmake
```

#### บน Windows

```powershell
# ติดตั้ง Visual Studio Build Tools
# ดาวน์โหลดจาก: https://visualstudio.microsoft.com/downloads/

# ติดตั้ง CMake
winget install Kitware.CMake

# ติดตั้ง LLVM/Clang
winget install LLVM.LLVM
```

### การตั้งค่า Project

```bash
# สร้าง project structure
mkdir my-compiler
cd my-compiler
mkdir src include tests build

# เริ่ม CMake project
cd build
cmake ..
```

### Dependencies

- **Parser Generator**: ANTLR, Bison, หรือ Flex
- **IR Library**: LLVM IR, หรือ custom IR
- **Testing**: Google Test, Catch2
- **Benchmarking**: Google Benchmark
