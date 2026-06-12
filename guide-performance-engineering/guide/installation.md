# Installation

## การเตรียม Environment สำหรับ Performance Engineering

### เครื่องมือที่จำเป็น

- **Programming Language**: Go, Rust, Python, Node.js
- **Profiling Tools**: pprof, perf, flamegraph
- **Benchmarking Tools**: Go benchmark, pytest-benchmark, benchmark.js
- **Monitoring Tools**: Prometheus, Grafana
- **Load Testing**: k6, JMeter, wrk

### การติดตั้ง

#### บน Linux

```bash
# ติดตั้ง perf
sudo apt-get install linux-tools-common

# ติดตั้ง flamegraph
git clone https://github.com/brendangregg/FlameGraph
cd FlameGraph
sudo cp flamegraph.pl /usr/local/bin/

# ติดตั้ง k6
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update
sudo apt-get install k6
```

#### บน macOS

```bash
# ติดตั้ง flamegraph ผ่าน Homebrew
brew install flamegraph

# ติดตั้ง k6 ผ่าน Homebrew
brew install k6
```

#### บน Windows

```powershell
# ติดตั้ง k6
winget install k6

# ติดตั้ง flamegraph
# Download from GitHub
```

### การติดตั้ง VS Code Extensions

```bash
# ติดตั้ง extensions ที่จำเป็น
code --install-extension ms-azuretools.vscode-docker
code --install-extension PKief.material-icon-theme
```

### การตั้งค่า Project

```bash
# สร้าง project structure
mkdir perf-demo
cd perf-demo
mkdir src tests benchmarks docs

# เริ่ม Git repository
git init
echo "# Performance Demo" > README.md
git add .
git commit -m "Initial commit"
```

### Dependencies

- **Go**: testing, pprof, runtime/pprof
- **Rust**: criterion, flamegraph
- **Python**: pytest-benchmark, memory_profiler
- **Node.js**: benchmark.js, clinic
