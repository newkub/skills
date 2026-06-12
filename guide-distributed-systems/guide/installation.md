# Installation

## การเตรียม Environment สำหรับ Distributed Systems

### เครื่องมือที่จำเป็น

- **Programming Language**: Go, Rust, Python, Node.js
- **Distributed Tools**: Docker, Kubernetes, Consul, etcd
- **Message Queues**: Kafka, RabbitMQ, NATS
- **Service Mesh**: Istio, Linkerd

### การติดตั้ง

#### บน Linux

```bash
# ติดตั้ง Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# ติดตั้ง Kubernetes
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

# ติดตั้ง Consul
wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install consul
```

#### บน macOS

```bash
# ติดตั้ง Docker ผ่าน Homebrew
brew install --cask docker

# ติดตั้ง kubectl ผ่าน Homebrew
brew install kubectl

# ติดตั้ง Consul ผ่าน Homebrew
brew install consul
```

#### บน Windows

```powershell
# ติดตั้ง Docker Desktop
winget install Docker.DockerDesktop

# ติดตั้ง kubectl
winget install Kubernetes.kubectl

# ติดตั้ง Consul
winget install HashiCorp.Consul
```

### การติดตั้ง VS Code Extensions

```bash
# ติดตั้ง extensions ที่จำเป็น
code --install-extension ms-azuretools.vscode-docker
code --install-extension ms-kubernetes-tools.vscode-kubernetes-tools
```

### การตั้งค่า Project

```bash
# สร้าง project structure
mkdir distributed-demo
cd distributed-demo
mkdir services gateway database scripts

# เริ่ม Git repository
git init
echo "# Distributed Systems Demo" > README.md
git add .
git commit -m "Initial commit"
```

### Dependencies

- **Go**: consul/api, etcd/clientv3, grpc
- **Rust**: tokio, async-std
- **Python**: consul, etcd3, kafka-python
- **Node.js**: consul, etcd3, kafkajs
