# Installation

## การเตรียม Environment สำหรับ Network Programming

### เครื่องมือที่จำเป็น

- **Programming Language**: Go, Rust, Python, Node.js
- **IDE**: VS Code, IntelliJ IDEA
- **Testing Tools**: Postman, curl, Wireshark
- **Documentation**: Markdown, OpenAPI/Swagger

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
pip3 install requests websockets
```

#### บน macOS

```bash
# ติดตั้ง Go ผ่าน Homebrew
brew install go

# ติดตั้ง Rust ผ่าน Homebrew
brew install rust

# ติดตั้ง Python ผ่าน Homebrew
brew install python3
pip3 install requests websockets
```

#### บน Windows

```powershell
# ติดตั้ง Go
winget install GoLang.Go

# ติดตั้ง Rust
winget install Rustlang.Rust.MSVC

# ติดตั้ง Python
winget install Python.Python.3.11
pip install requests websockets
```

### การติดตั้ง VS Code Extensions

```bash
# ติดตั้ง extensions ที่จำเป็น
code --install-extension ms-azuretools.vscode-docker
code --install-extension PKief.material-icon-theme
code --install-extension humao.rest-client
```

### การตั้งค่า Project

```bash
# สร้าง project structure
mkdir network-demo
cd network-demo
mkdir src tests docs

# เริ่ม Git repository
git init
echo "# Network Demo" > README.md
git add .
git commit -m "Initial commit"
```

### Dependencies

- **Rust**: tokio, reqwest, tokio-tungstenite, serde, serde_json
- **Go**: net/http, net, gorilla/websocket
- **Python**: requests, websockets, aiohttp
- **Node.js**: axios, ws, express
