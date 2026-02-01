# Setup

## Description
ติดตั้งและตั้งค่า environment สำหรับการพัฒนา Tauri applications

## Requirements
- Rust 1.70+ หรือใหม่กว่า
- Node.js 18+ หรือใหม่กว่า
- System dependencies สำหรับแต่ละ platform

## Installation Steps

### 1. Install Rust
ติดตั้ง Rust ด้วย rustup:
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### 2. Install Node.js
ติดตั้ง Node.js จาก https://nodejs.org/

### 3. Install System Dependencies

**Windows:**
```powershell
winget install Microsoft.VisualStudio.2022.BuildTools
```

**macOS:**
```bash
xcode-select --install
```

**Linux (Debian/Ubuntu):**
```bash
sudo apt update
sudo apt install libwebkit2gtk-4.1-dev \
  build-essential \
  curl \
  wget \
  file \
  libxdo-dev \
  libssl-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev
```

### 4. Create New Project
สร้าง project ใหม่ด้วย CLI:
```bash
npm create tauri-app@latest
```

เลือก template ที่ต้องการ:
- React
- Vue
- Svelte
- Solid
- Vanilla

## Examples

### Example 1: Create React + Tauri Project
```bash
npm create tauri-app@latest my-app --template react
cd my-app
npm install
npm run tauri dev
```

### Example 2: Create Vue + Tauri Project
```bash
npm create tauri-app@latest my-app --template vue
cd my-app
npm install
npm run tauri dev
```

## Anti-Patterns

❌ **ใช้ Rust version เก่าเกินไป**
- อาจเกิด compatibility issues กับ Tauri

❌ **ไม่ติดตั้ง system dependencies**
- Build จะ fail บนบาง platforms

❌ **ใช้ Node.js version เก่า**
- อาจเกิด issues กับ dependencies

## Verification

1. ตรวจสอบ Rust version
   ```bash
   rustc --version
   ```
   ต้องเป็น 1.70+ ขึ้นไป

2. ตรวจสอบ Node.js version
   ```bash
   node --version
   ```
   ต้องเป็น 18+ ขึ้นไป

3. ทดสอบสร้าง project ใหม่
   ```bash
   npm create tauri-app@latest test-app
   cd test-app
   npm run tauri dev
   ```
   Application ต้องเปิดขึ้นมาได้
