# Troubleshooting

## การแก้ปัญหาที่พบบ่อยใน Security

### Authentication Issues

### Problem: Authentication Fails

**Symptoms**:
- Users cannot log in
- Invalid token errors
- Session expiration

**Causes**:
1. Wrong password hash
2. Token expiration
3. Session timeout
4. Clock skew

**Solutions**:

```go
// ✅ Good: Handle authentication errors
func authenticate(username, password string) error {
    user, err := getUser(username)
    if err != nil {
        log.Printf("User not found: %s", username)
        return errors.New("invalid credentials")
    }
    
    err = bcrypt.CompareHashAndPassword([]byte(user.PasswordHash), []byte(password))
    if err != nil {
        log.Printf("Invalid password for user: %s", username)
        return errors.New("invalid credentials")
    }
    
    return nil
}

// ✅ Good: Handle token expiration
func validateToken(tokenString string) (jwt.MapClaims, error) {
    token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
        return jwtSecret, nil
    })
    
    if err != nil {
        if err == jwt.ErrTokenExpired {
            return nil, errors.New("token expired")
        }
        return nil, err
    }
    
    if claims, ok := token.Claims.(jwt.MapClaims); ok {
        return claims, nil
    }
    
    return nil, errors.New("invalid token")
}
```

### Problem: Session Hijacking

**Symptoms**:
- Unauthorized access
- Session theft
- User impersonation

**Causes**:
1. Session ID in URL
2. Unencrypted cookies
3. No session expiration
4. XSS vulnerabilities

**Solutions**:

```go
// ✅ Good: Secure session configuration
store.Options = &sessions.Options{
    HttpOnly: true,
    Secure:   true,
    SameSite: http.SameSiteStrictMode,
    MaxAge:   3600,
}

// ✅ Good: Regenerate session on login
func login(w http.ResponseWriter, r *http.Request) {
    session, _ := store.Get(r, "session")
    session.Options.MaxAge = -1  // Destroy old session
    session.Save(r, w)
    
    // Create new session
    newSession, _ := store.New(r, "session")
    newSession.Values["userID"] = userID
    newSession.Save(r, w)
}
```

### Encryption Issues

### Problem: Decryption Fails

**Symptoms**:
- Cannot decrypt data
- Invalid padding errors
- Key mismatch

**Causes**:
1. Wrong key
2. Corrupted data
3. Wrong algorithm
4. IV mismatch

**Solutions**:

```go
// ✅ Good: Handle decryption errors
func decrypt(key []byte, ciphertext string) (string, error) {
    decoded, err := base64.URLEncoding.DecodeString(ciphertext)
    if err != nil {
        return "", fmt.Errorf("base64 decode failed: %w", err)
    }
    
    if len(decoded) < aes.BlockSize {
        return "", fmt.Errorf("ciphertext too short")
    }
    
    iv := decoded[:aes.BlockSize]
    decoded = decoded[aes.BlockSize:]
    
    block, err := aes.NewCipher(key)
    if err != nil {
        return "", fmt.Errorf("cipher creation failed: %w", err)
    }
    
    stream := cipher.NewCFBDecrypter(block, iv)
    stream.XORKeyStream(decoded, decoded)
    
    return string(decoded), nil
}
```

### Problem: Weak Encryption

**Symptoms**:
- Data easily decrypted
- Known vulnerabilities
- Outdated algorithms

**Causes**:
1. Weak key size
2. Deprecated algorithms
3. Poor implementation

**Solutions**:

```go
// ✅ Good: Use strong encryption
key := []byte("32-byte-long-key-123456789012345")  // 256-bit key
block, err := aes.NewCipher(key)  // AES

// ❌ Bad: Weak encryption
key := []byte("short-key")  // Weak key
// DES (deprecated)
```

### Injection Issues

### Problem: SQL Injection

**Symptoms**:
- Data leakage
- Unauthorized access
- Data corruption

**Causes**:
1. String concatenation
2. No input validation
3. No parameterized queries

**Solutions**:

```go
// ✅ Good: Parameterized query
func getUser(username string) (User, error) {
    query := "SELECT * FROM users WHERE username = ?"
    row := db.QueryRow(query, username)
    // Safe from injection
}

// ❌ Bad: String concatenation
func getUser(username string) (User, error) {
    query := fmt.Sprintf("SELECT * FROM users WHERE username = '%s'", username)
    // Vulnerable to injection
}
```

### Problem: XSS

**Symptoms**:
- Script execution
- Cookie theft
- Session hijacking

**Causes**:
1. No output encoding
2. Unsafe innerHTML
3. No CSP

**Solutions**:

```go
// ✅ Good: HTML encoding
import "html/template"

t := template.Must(template.New("test").Parse("{{.}}"))
t.Execute(w, html.EscapeString(userInput))

// ❌ Bad: No encoding
fmt.Fprintf(w, userInput)
```

### SSL/TLS Issues

### Problem: Certificate Error

**Symptoms**:
- Certificate validation failed
- Handshake error
- Connection refused

**Causes**:
1. Expired certificate
2. Wrong hostname
3. Self-signed certificate
4. Certificate chain issue

**Solutions**:

```go
// ✅ Good: Handle certificate errors
tlsConfig := &tls.Config{
    InsecureSkipVerify: false,  // Production
    ServerName:            "example.com",
}

// ❌ Bad: Skip verification (testing only)
tlsConfig := &tls.Config{
    InsecureSkipVerify: true,
}
```

### Problem: Protocol Mismatch

**Symptoms**:
- Protocol error
- Version mismatch
- Handshake failure

**Causes**:
1. Client/server version mismatch
2. Unsupported protocol
3. Incompatible features

**Solutions**:

```go
// ✅ Good: Specify TLS version
tlsConfig := &tls.Config{
    MinVersion: tls.VersionTLS12,
    MaxVersion: tls.VersionTLS13,
}
```

### Debugging Tips

### 1. Enable Debug Logging

```go
// Enable security logging
log.SetFlags(log.LstdFlags | log.Lshortfile)
log.SetPrefix("[SECURITY] ")
```

### 2. Use Security Tools

```bash
# OWASP ZAP
zaproxy

# Burp Suite
burpsuite

# Nmap
nmap -sV target.com
```

### 3. Check SSL Configuration

```bash
# Test SSL configuration
openssl s_client -connect example.com:443

# Check certificate
openssl x509 -in certificate.crt -text -noout
```

### 4. Monitor Logs

```bash
# Check authentication logs
tail -f /var/log/auth.log

# Check error logs
tail -f /var/log/error.log
```

### Common Pitfalls

### 1. Hardcoding Secrets

```go
// ❌ Bad: Hardcoded secret
apiKey := "my-secret-api-key"

// ✅ Good: Environment variable
apiKey := os.Getenv("API_KEY")
```

### 2. Not Validating Input

```go
// ❌ Bad: No validation
email := r.FormValue("email")

// ✅ Good: Validate input
email := r.FormValue("email")
if !isValidEmail(email) {
    http.Error(w, "Invalid email", http.StatusBadRequest)
}
```

### 3. Not Using HTTPS

```go
// ❌ Bad: HTTP only
http.ListenAndServe(":80", nil)

// ✅ Good: HTTPS only
server := &http.Server{
    Addr: ":443",
    TLSConfig: tlsConfig,
}
server.ListenAndServeTLS("cert.pem", "key.pem")
```

### 4. Not Implementing Rate Limiting

```go
// ❌ Bad: No rate limiting
// Unlimited attempts

// ✅ Good: Rate limiting
limiter := rate.NewLimiter(5, time.Minute)
if !limiter.Allow() {
    http.Error(w, "Too many requests", http.StatusTooManyRequests)
}
```
