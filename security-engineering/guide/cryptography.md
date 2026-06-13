# Cryptography

## Cryptography Basics

### Symmetric Encryption

### AES (Advanced Encryption Standard)

**Key Sizes**: 128, 192, 256 bits

**Example (Go)**:

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

### Asymmetric Encryption

### RSA (Rivest-Shamir-Adleman)

**Key Sizes**: 2048, 3072, 4096 bits

**Example (Go)**:

```go
package main

import (
    "crypto/rand"
    "crypto/rsa"
    "encoding/base64"
    "fmt"
)

func generateKeyPair() (*rsa.PrivateKey, *rsa.PublicKey, error) {
    privateKey, err := rsa.GenerateKey(rand.Reader, 2048)
    if err != nil {
        return nil, nil, err
    }
    
    return privateKey, &privateKey.PublicKey, nil
}

func encrypt(publicKey *rsa.PublicKey, plaintext string) (string, error) {
    ciphertext, err := rsa.EncryptPKCS1v15(rand.Reader, publicKey, []byte(plaintext))
    if err != nil {
        return "", err
    }
    
    return base64.URLEncoding.EncodeToString(ciphertext), nil
}

func decrypt(privateKey *rsa.PrivateKey, ciphertext string) (string, error) {
    decoded, err := base64.URLEncoding.DecodeString(ciphertext)
    if err != nil {
        return "", err
    }
    
    plaintext, err := rsa.DecryptPKCS1v15(rand.Reader, privateKey, decoded)
    if err != nil {
        return "", err
    }
    
    return string(plaintext), nil
}

func main() {
    privateKey, publicKey, err := generateKeyPair()
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    plaintext := "secret message"
    
    encrypted, err := encrypt(publicKey, plaintext)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    fmt.Printf("Encrypted: %s\n", encrypted)
    
    decrypted, err := decrypt(privateKey, encrypted)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    fmt.Printf("Decrypted: %s\n", decrypted)
}
```

### Hashing

### SHA-256

**Example (Go)**:

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

### Password Hashing

### Bcrypt

**Example (Go)**:

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

### PBKDF2

**Example (Go)**:

```go
package main

import (
    "crypto/rand"
    "crypto/sha256"
    "encoding/base64"
    "fmt"
    "golang.org/x/crypto/pbkdf2"
)

func deriveKey(password, salt string) (string, error) {
    saltBytes := []byte(salt)
    passwordBytes := []byte(password)
    
    key := pbkdf2.Key(passwordBytes, saltBytes, 100000, 32, sha256.New)
    
    return base64.URLEncoding.EncodeToString(key), nil
}

func main() {
    password := "my-password"
    salt := "random-salt"
    
    key, err := deriveKey(password, salt)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    fmt.Printf("Derived Key: %s\n", key)
}
```

### Digital Signatures

### RSA Signatures

**Example (Go)**:

```go
package main

import (
    "crypto"
    "crypto/rand"
    "crypto/rsa"
    "crypto/sha256"
    "encoding/base64"
    "fmt"
)

func sign(privateKey *rsa.PrivateKey, message string) (string, error) {
    hashed := sha256.Sum256([]byte(message))
    
    signature, err := rsa.SignPKCS1v15(rand.Reader, privateKey, crypto.SHA256, hashed[:])
    if err != nil {
        return "", err
    }
    
    return base64.URLEncoding.EncodeToString(signature), nil
}

func verify(publicKey *rsa.PublicKey, message, signature string) (bool, error) {
    hashed := sha256.Sum256([]byte(message))
    
    decoded, err := base64.URLEncoding.DecodeString(signature)
    if err != nil {
        return false, err
    }
    
    err = rsa.VerifyPKCS1v15(publicKey, crypto.SHA256, hashed[:], decoded)
    return err == nil, nil
}

func main() {
    privateKey, publicKey, err := rsa.GenerateKey(rand.Reader, 2048)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    message := "important message"
    
    signature, err := sign(privateKey, message)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    fmt.Printf("Signature: %s\n", signature)
    
    valid, err := verify(publicKey, message, signature)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    fmt.Printf("Valid: %v\n", valid)
}
```

### Key Management

### Key Generation

```bash
# Generate RSA key pair
openssl genrsa -out private.key 2048
openssl rsa -in private.key -pubout -out public.key

# Generate AES key
openssl rand -base64 32
```

### Key Storage

**Best Practices**:
- Use key management services (AWS KMS, HashiCorp Vault)
- Never store keys in code
- Use environment variables
- Encrypt keys at rest
- Rotate keys regularly

### Best Practices

### 1. Use Strong Key Sizes

```go
// ✅ Good: 2048+ bit RSA
privateKey, err := rsa.GenerateKey(rand.Reader, 2048)

// ❌ Bad: 512 bit RSA (insecure)
privateKey, err := rsa.GenerateKey(rand.Reader, 512)
```

### 2. Use Secure Random Numbers

```go
// ✅ Good: Crypto random
rand.Read(buffer)

// ❌ Bad: Pseudo random
math/rand.Read(buffer)
```

### 3. Use Established Algorithms

```go
// ✅ Good: AES, RSA, SHA-256
// Well-vetted algorithms

// ❌ Bad: Custom algorithms
// Insecure implementations
```

### 4. Never Roll Your Own Crypto

```go
// ❌ Bad: Custom encryption
// Likely insecure

// ✅ Good: Use established libraries
// crypto/aes, crypto/rsa
```
