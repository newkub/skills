# Quick Start

## เริ่มต้น Security Engineering อย่างรวดเร็ว

### Step 1: สร้าง Project Structure

```bash
mkdir security-demo
cd security-demo
mkdir src tests docs keys
```

### Step 2: สร้าง Password Hashing (Go)

**src/password_hash.go**:
```go
package main

import (
    "fmt"
    "golang.org/x/crypto/bcrypt"
)

func hashPassword(password string) (string, error) {
    bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
    return string(bytes), err
}

func checkPassword(password, hash string) bool {
    err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
    return err == nil
}

func main() {
    password := "my-secure-password"
    
    hash, err := hashPassword(password)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    fmt.Printf("Hash: %s\n", hash)
    
    valid := checkPassword(password, hash)
    fmt.Printf("Valid: %v\n", valid)
}
```

### Step 3: สร้าง JWT Authentication (Go)

**src/jwt_auth.go**:
```go
package main

import (
    "fmt"
    "time"
    "github.com/golang-jwt/jwt/v5"
)

var jwtSecret = []byte("your-secret-key")

func generateToken(userID string) (string, error) {
    token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
        "sub": userID,
        "exp": time.Now().Add(time.Hour * 24).Unix(),
    })
    
    return token.SignedString(jwtSecret)
}

func validateToken(tokenString string) (jwt.MapClaims, error) {
    token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
        return jwtSecret, nil
    })
    
    if err != nil {
        return nil, err
    }
    
    if claims, ok := token.Claims.(jwt.MapClaims); ok {
        return claims, nil
    }
    
    return nil, fmt.Errorf("invalid token")
}

func main() {
    token, err := generateToken("user123")
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    fmt.Printf("Token: %s\n", token)
    
    claims, err := validateToken(token)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    fmt.Printf("User ID: %v\n", claims["sub"])
}
```

### Step 4: สร้าง Encryption (Go)

**src/encryption.go**:
```go
package main

import (
    "crypto/aes"
    "crypto/cipher"
    "crypto/rand"
    "encoding/base64"
    "fmt"
    "io"
)

func encrypt(key []byte, plaintext string) (string, error) {
    block, err := aes.NewCipher(key)
    if err != nil {
        return "", err
    }
    
    ciphertext := make([]byte, aes.BlockSize+len(plaintext))
    iv := ciphertext[:aes.BlockSize]
    
    if _, err := io.ReadFull(rand.Reader, iv); err != nil {
        return "", err
    }
    
    stream := cipher.NewCFBEncrypter(block, iv)
    stream.XORKeyStream(ciphertext[aes.BlockSize:], []byte(plaintext))
    
    return base64.URLEncoding.EncodeToString(ciphertext), nil
}

func decrypt(key []byte, ciphertext string) (string, error) {
    block, err := aes.NewCipher(key)
    if err != nil {
        return "", err
    }
    
    decoded, err := base64.URLEncoding.DecodeString(ciphertext)
    if err != nil {
        return "", err
    }
    
    if len(decoded) < aes.BlockSize {
        return "", fmt.Errorf("ciphertext too short")
    }
    
    iv := decoded[:aes.BlockSize]
    decoded = decoded[aes.BlockSize:]
    
    stream := cipher.NewCFBDecrypter(block, iv)
    stream.XORKeyStream(decoded, decoded)
    
    return string(decoded), nil
}

func main() {
    key := []byte("32-byte-long-key-123456789012345")
    plaintext := "secret message"
    
    encrypted, err := encrypt(key, plaintext)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    fmt.Printf("Encrypted: %s\n", encrypted)
    
    decrypted, err := decrypt(key, encrypted)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    fmt.Printf("Decrypted: %s\n", decrypted)
}
```

### Step 5: สร้าง Hashing (Go)

**src/hashing.go**:
```go
package main

import (
    "crypto/sha256"
    "encoding/hex"
    "fmt"
)

func hash(data string) string {
    hash := sha256.Sum256([]byte(data))
    return hex.EncodeToString(hash[:])
}

func main() {
    data := "important data"
    hashValue := hash(data)
    
    fmt.Printf("Data: %s\n", data)
    fmt.Printf("Hash: %s\n", hashValue)
}
```

### Step 6: สร้าง Tests

**tests/password_test.go**:
```go
package main

import "testing"

func TestHashPassword(t *testing.T) {
    password := "test-password"
    
    hash, err := hashPassword(password)
    if err != nil {
        t.Fatalf("Error: %v", err)
    }
    
    if !checkPassword(password, hash) {
        t.Error("Password check failed")
    }
    
    if checkPassword("wrong-password", hash) {
        t.Error("Wrong password accepted")
    }
}
```

### Step 7: Build และ Run

```bash
# Run password hashing
go run src/password_hash.go

# Run JWT auth
go run src/jwt_auth.go

# Run encryption
go run src/encryption.go

# Run hashing
go run src/hashing.go

# Run tests
go test ./tests/
```

### Step 8: Generate SSL Certificate

```bash
# Generate private key
openssl genrsa -out keys/private.key 2048

# Generate CSR
openssl req -new -key keys/private.key -out keys/request.csr

# Generate self-signed certificate
openssl x509 -req -days 365 -in keys/request.csr -signkey keys/private.key -out keys/certificate.crt
```

### Step 9: Test with curl

```bash
# Test with JWT
curl -H "Authorization: Bearer <token>" http://localhost:8080/api/users

# Test with HTTPS
curl -k https://localhost:8443/api/users
```

### Next Steps

1. อ่าน `key-concept.md` สำหรับ concepts เพิ่มเติม
2. ดู `how-it-works.md` สำหรับ security mechanisms
3. ศึกษา `auth.md` สำหรับ authentication และ authorization
4. ดู `cryptography.md` สำหรับ cryptography basics
5. ดู `owasp.md` สำหรับ OWASP top 10
