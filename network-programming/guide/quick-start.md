# Quick Start

## เริ่มต้น Network Programming อย่างรวดเร็ว

### Step 1: สร้าง Project Structure

```bash
mkdir network-demo
cd network-demo
mkdir src tests docs
```

### Step 2: สร้าง HTTP Client (Rust)

**Cargo.toml**:
```toml
[dependencies]
tokio = { version = "1.0", features = ["full"] }
reqwest = { version = "0.11", features = ["json"] }
```

**src/main.rs**:
```rust
use reqwest::Client;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new();
    let resp = client.get("https://api.example.com/users").await?;
    
    println!("Status: {}", resp.status());
    
    let body = resp.text().await?;
    println!("Response: {}", body);
    
    Ok(())
}
```

### Step 3: สร้าง HTTP Server (Rust)

**Cargo.toml**:
```toml
[dependencies]
tokio = { version = "1.0", features = ["full"] }
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"
```

**src/main.rs**:
```rust
use serde::{Deserialize, Serialize};
use tokio::net::TcpListener;
use tokio::io::{AsyncReadExt, AsyncWriteExt};

#[derive(Serialize, Deserialize)]
struct User {
    id: i32,
    name: String,
    email: String,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let listener = TcpListener::bind("127.0.0.1:8080").await?;
    
    println!("Server starting on :8080");
    
    loop {
        let (mut socket, _) = listener.accept().await?;
        
        tokio::spawn(async move {
            let mut buf = [0u8; 1024];
            let n = socket.read(&mut buf).await.unwrap();
            
            let users = vec![
                User { id: 1, name: "John".to_string(), email: "john@example.com".to_string() },
                User { id: 2, name: "Jane".to_string(), email: "jane@example.com".to_string() },
            ];
            
            let response = serde_json::to_string(&users)?;
            socket.write_all(response.as_bytes()).await.unwrap();
        });
    }
}
```

### Step 4: สร้าง WebSocket Server (Go)

**src/websocket_server.go**:
````

### Step 5: สร้าง WebSocket Client (JavaScript)

**src/websocket_client.html**:
```html
<!DOCTYPE html>
<html>
<head>
    <title>WebSocket Client</title>
</head>
<body>
    <input type="text" id="message" placeholder="Enter message">
    <button onclick="sendMessage()">Send</button>
    <div id="output"></div>

    <script>
        const ws = new WebSocket('ws://localhost:8080/ws');
        
        ws.onmessage = (event) => {
            const output = document.getElementById('output');
            output.innerHTML += `<p>Received: ${event.data}</p>`;
        };
        
        function sendMessage() {
            const input = document.getElementById('message');
            ws.send(input.value);
            input.value = '';
        }
    </script>
</body>
</html>
```

### Step 6: สร้าง HTTP Client (Python)

**src/http_client.py**:
```python
import requests

def get_users():
    response = requests.get('https://api.example.com/users')
    response.raise_for_status()
    return response.json()

if __name__ == '__main__':
    users = get_users()
    print(users)
```

### Step 7: สร้าง HTTP Server (Python)

**src/http_server.py**:
```python
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/users', methods=['GET'])
def get_users():
    users = [
        {'id': 1, 'name': 'John', 'email': 'john@example.com'},
        {'id': 2, 'name': 'Jane', 'email': 'jane@example.com'},
    ]
    return jsonify(users)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
```

### Step 8: สร้าง Tests

**tests/http_test.go**:
````

### Step 9: Build และ Run

```bash
# Run Go HTTP server
go run src/http_server.go

# Run Go WebSocket server
go run src/websocket_server.go

# Run Go HTTP client
go run src/http_client.go

# Run Python HTTP server
python src/http_server.py

# Run Python HTTP client
python src/http_client.py

# Run tests
go test ./tests/
```

### Step 10: Test with curl

```bash
# Test HTTP server
curl http://localhost:8080/users

# Test with headers
curl -H "Content-Type: application/json" http://localhost:8080/users

# Test POST
curl -X POST -H "Content-Type: application/json" -d '{"name":"John"}' http://localhost:8080/users
```

### Next Steps

1. อ่าน `key-concept.md` สำหรับ concepts เพิ่มเติม
2. ดู `how-it-works.md` สำหรับ protocol internals
3. ศึกษา `protocols.md` สำหรับ TCP/UDP, HTTP/HTTPS
4. ดู `real-time.md` สำหรับ WebSocket
5. ดู `api-design.md` สำหรับ REST vs GraphQL

