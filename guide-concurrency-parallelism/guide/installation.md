# Installation

## การเตรียม Environment สำหรับ Concurrency Programming

### เครื่องมือที่จำเป็น

- **Programming Language**: Go, Rust, Python, หรือภาษาที่รองรับ concurrency
- **IDE**: VS Code, IntelliJ IDEA, หรือ IDE ที่ชอบ
- **Profiling Tools**: pprof, perf, หรือ profiler ที่เหมาะสม
- **Testing Framework**: Go test, pytest, หรือ framework ที่เหมาะสม
- **Documentation**: Markdown, Sphinx, หรือ Docusaurus

### การติดตั้ง

#### บน Linux

```bash
# ติดตั้ง Go
wget https://go.dev/dl/go1.21.0.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.21.0.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin

# ติดตั้ง Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env

# ติดตั้ง Python
sudo apt-get install python3 python3-pip
pip3 install asyncio pytest
```

#### บน macOS

```bash
# ติดตั้ง Go ผ่าน Homebrew
brew install go

# ติดตั้ง Rust ผ่าน Homebrew
brew install rust

# ติดตั้ง Python ผ่าน Homebrew
brew install python3
pip3 install asyncio pytest
```

#### บน Windows

```powershell
# ติดตั้ง Go
winget install GoLang.Go

# ติดตั้ง Rust
winget install Rustlang.Rust.MSVC

# ติดตั้ง Python
winget install Python.Python.3.11
pip install asyncio pytest
```

### การตั้งค่า VS Code Extensions

```bash
# ติดตั้ง extensions ที่จำเป็น
code --install-extension golang.go
code --install-extension rust-lang.rust-analyzer
code --install-extension ms-python.python
code --install-extension PKief.material-icon-theme
```

### การตั้งค่า Project

```bash
# สร้าง project structure
mkdir concurrency-demo
cd concurrency-demo
mkdir src tests docs

# เริ่ม Git repository
git init
echo "# Concurrency Demo" > README.md
git add .
git commit -m "Initial commit"
```

### Dependencies

- **Go**: goroutines, channels, sync package
- **Rust**: async/await, tokio, crossbeam
- **Python**: asyncio, threading, multiprocessing
