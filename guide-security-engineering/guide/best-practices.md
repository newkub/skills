# Best Practices

## Best Practices สำหรับ Secure Coding

### Password Security

### 1. Use Strong Password Hashing

```go
// ✅ Good: Use bcrypt
hash, err := bcrypt.GenerateFromPassword([]byte(password), 14)

// ❌ Bad: Use MD5 or SHA-1
hash := md5.Sum([]byte(password))
```

### 2. Use Salt

```go
// ✅ Good: bcrypt includes salt automatically
hash, err := bcrypt.GenerateFromPassword([]byte(password), 14)

// ❌ Bad: No salt
hash := sha256.Sum256([]byte(password))
```

### 3. Enforce Password Policy

```javascript
// ✅ Good: Enforce strong passwords
function validatePassword(password) {
    const minLength = 12;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*]/.test(password);
    
    return password.length >= minLength && 
           hasUpperCase && 
           hasLowerCase && 
           hasNumber && 
           hasSpecial;
}
```

### Authentication

### 4. Use Multi-Factor Authentication

```javascript
// ✅ Good: Require MFA
if (!user.mfaEnabled) {
    return error('MFA required');
}

// ❌ Bad: Password only
// No MFA
```

### 5. Implement Rate Limiting

```go
// ✅ Good: Rate limit login attempts
limiter := rate.NewLimiter(5, time.Minute)

if !limiter.Allow() {
    return error('Too many attempts')
}

// ❌ Bad: No rate limiting
// Unlimited attempts
```

### 6. Use Secure Session Management

```go
// ✅ Good: Secure session configuration
store.Options = &sessions.Options{
    HttpOnly: true,
    Secure:   true,
    SameSite: http.SameSiteStrictMode,
    MaxAge:   3600,
}

// ❌ Bad: Insecure session
store.Options = &sessions.Options{
    HttpOnly: false,
    Secure:   false,
}
```

### Authorization

### 7. Use Least Privilege

```go
// ✅ Good: Minimum necessary permissions
if user.role == 'admin' {
    // Admin operations
} else if user.role == 'user' {
    // User operations (limited)
}

// ❌ Bad: All users have admin access
// No role checking
```

### 8. Validate Authorization on Server

```javascript
// ✅ Good: Server-side validation
if (!user.canAccessResource(resourceId)) {
    return res.status(403).json({ error: 'Forbidden' });
}

// ❌ Bad: Client-side only
// Frontend validation only
```

### Cryptography

### 9. Use Strong Encryption

```go
// ✅ Good: Use AES-256
key := []byte("32-byte-long-key-123456789012345")
block, err := aes.NewCipher(key)

// ❌ Bad: Use weak encryption
// DES, 3DES (deprecated)
```

### 10. Never Store Secrets in Code

```go
// ✅ Good: Use environment variables
apiKey := os.Getenv("API_KEY")

// ❌ Bad: Hardcode secrets
apiKey := "my-secret-api-key"
```

### 11. Use Proper Key Management

```bash
# ✅ Good: Use key management service
# AWS KMS, HashiCorp Vault

# ❌ Bad: Store keys in files
# Keys in version control
```

### Input Validation

### 12. Validate All Input

```go
// ✅ Good: Validate input
func validateEmail(email string) bool {
    re := regexp.MustCompile(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`)
    return re.MatchString(email)
}

// ❌ Bad: No validation
// Accept any input
```

### 13. Use Parameterized Queries

```typescript
// ✅ Good: Parameterized query
const user = await prisma.user.findUnique({
  where: { email: userEmail }
});

// ❌ Bad: String concatenation (SQL injection)
const user = await prisma.$queryRawUnsafe(
  `SELECT * FROM users WHERE email = '${userEmail}'`
);
```

### Output Encoding

### 14. Encode Output

```go
// ✅ Good: HTML encode output
import "html/template"

t := template.Must(template.New("test").Parse("{{.}}"))
t.Execute(w, html.EscapeString(userInput))

// ❌ Bad: No encoding
// Direct output
```

### 15. Use Content Security Policy

```http
# ✅ Good: CSP header
Content-Security-Policy: default-src 'self'; script-src 'self' cdn.example.com

# ❌ Bad: No CSP
# No restrictions
```

### Error Handling

### 16. Don't Expose Sensitive Information

```go
// ✅ Good: Generic error message
if err != nil {
    log.Printf("Error: %v", err)
    return "An error occurred"
}

// ❌ Bad: Expose stack trace
if err != nil {
    return err.Error() // May expose sensitive info
}
```

### Logging

### 17. Log Security Events

```go
// ✅ Good: Log security events
log.Printf("Authentication failed for user: %s from IP: %s", username, clientIP)
log.Printf("Authorization denied for user: %s, resource: %s", username, resource)

// ❌ Bad: No security logging
// No audit trail
```

### 18. Protect Logs

```go
// ✅ Good: Redact sensitive data
log.Printf("User login: %s", maskEmail(email))

// ❌ Bad: Log sensitive data
log.Printf("User login: %s, password: %s", email, password)
```

### HTTPS

### 19. Always Use HTTPS

```go
// ✅ Good: Force HTTPS
if r.URL.Scheme != "https" {
    http.Redirect(w, r, "https://"+r.Host+r.URL.RequestURI(), http.StatusMovedPermanently)
}

// ❌ Bad: Allow HTTP
// Unencrypted connection
```

### 20. Use Strong TLS Configuration

```nginx
# ✅ Good: Strong TLS
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers HIGH:!aNULL:!MD5;
ssl_prefer_server_ciphers on;

# ❌ Bad: Weak TLS
ssl_protocols TLSv1 TLSv1.1;
```

### Dependencies

### 21. Keep Dependencies Updated

```bash
# ✅ Good: Regular updates
npm audit fix
go get -u ./...
pip install --upgrade package

# ❌ Bad: Outdated dependencies
# Known vulnerabilities
```

### 22. Scan for Vulnerabilities

```bash
# ✅ Good: Security scanning
npm audit
snyk test
go mod verify

# ❌ Bad: No scanning
# Unknown vulnerabilities
```

### Testing

### 23. Include Security Tests

```go
// ✅ Good: Security tests
func TestSQLInjection(t *testing.T) {
    // Test SQL injection prevention
}

func TestXSS(t *testing.T) {
    // Test XSS prevention
}

// ❌ Bad: No security tests
// Only functional tests
```

### 24. Perform Penetration Testing

```bash
# ✅ Good: Regular pentesting
# OWASP ZAP, Burp Suite

# ❌ Bad: No pentesting
# Unknown vulnerabilities
```
