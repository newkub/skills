# OWASP

## OWASP Top 10 Vulnerabilities

### 1. Broken Access Control

### Description

Users can act outside of their intended permissions

### Example

```go
// ❌ Vulnerable: No authorization check
func getUser(w http.ResponseWriter, r *http.Request) {
    userID := r.URL.Query().Get("id")
    user := getUserByID(userID)
    json.NewEncoder(w).Encode(user)
}

// ✅ Secure: Check authorization
func getUser(w http.ResponseWriter, r *http.Request) {
    userID := r.URL.Query().Get("id")
    
    // Check if user can access this resource
    if !canAccess(r.Context(), userID) {
        http.Error(w, "Forbidden", http.StatusForbidden)
        return
    }
    
    user := getUserByID(userID)
    json.NewEncoder(w).Encode(user)
}
```

### Prevention

- Implement proper authorization checks
- Use deny-by-default approach
- Validate permissions on server-side
- Implement principle of least privilege

### 2. Cryptographic Failures

### Description

Poor use of cryptography or lack of encryption

### Example

```go
// ❌ Vulnerable: Plain text passwords
func saveUser(user User) error {
    query := "INSERT INTO users (password) VALUES (?)"
    _, err := db.Exec(query, user.Password)
    return err
}

// ✅ Secure: Hash passwords
func saveUser(user User) error {
    hash, err := bcrypt.GenerateFromPassword([]byte(user.Password), 14)
    if err != nil {
        return err
    }
    
    query := "INSERT INTO users (password_hash) VALUES (?)"
    _, err := db.Exec(query, hash)
    return err
}
```

### Prevention

- Hash passwords with bcrypt/scrypt/Argon2
- Use strong encryption (AES-256)
- Use HTTPS everywhere
- Validate SSL certificates
- Never store secrets in code

### 3. Injection

### Description

Untrusted data sent to interpreter as command or query

### SQL Injection Example

```go
// ❌ Vulnerable: SQL injection
func getUser(username string) (User, error) {
    query := fmt.Sprintf("SELECT * FROM users WHERE username = '%s'", username)
    // Attacker can inject: ' OR '1'='1
}

// ✅ Secure: Parameterized query
func getUser(username string) (User, error) {
    query := "SELECT * FROM users WHERE username = ?"
    row := db.QueryRow(query, username)
    // Safe from injection
}
```

### XSS Example

```javascript
// ❌ Vulnerable: XSS
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Results for: ${query}`);
    // Attacker can inject: <script>alert('XSS')</script>
});

// ✅ Secure: HTML encoding
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Results for: ${escapeHtml(query)}`);
});
```

### Prevention

- Use parameterized queries
- Validate and sanitize input
- Use ORM/Query builders
- Encode output (HTML, URL, JS)
- Use Content Security Policy

### 4. Insecure Design

### Description

Flaws in security architecture

### Example

```go
// ❌ Vulnerable: No security requirements
// No threat modeling
// Insecure by design

// ✅ Secure: Security-first design
// Threat modeling
// Security requirements
```

### Prevention

- Perform threat modeling
- Define security requirements
- Implement security by design
- Use secure frameworks
- Regular security reviews

### 5. Security Misconfiguration

### Description

Incorrect security settings

### Example

```go
// ❌ Vulnerable: Default credentials
if username == "admin" && password == "admin123" {
    // Attacker can access with default credentials
}

// ✅ Secure: Force password change
if user.isDefaultPassword {
    forcePasswordChange(user)
}

// ❌ Vulnerable: Verbose error messages
http.Error(w, fmt.Sprintf("Database error: %v", err), http.StatusInternalServerError)

// ✅ Secure: Generic error message
http.Error(w, "An error occurred", http.StatusInternalServerError)
```

### Prevention

- Remove default credentials
- Disable unnecessary features
- Use generic error messages
- Implement proper logging
- Regular security audits

### 6. Vulnerable Components

### Description

Using outdated or vulnerable libraries

### Example

```bash
# ❌ Vulnerable: Outdated dependencies
npm install express@3.0.0  # Has known vulnerabilities

# ✅ Secure: Update dependencies
npm audit fix
npm update
```

### Prevention

- Keep dependencies updated
- Use dependency scanning tools
- Monitor security advisories
- Remove unused dependencies
- Use software composition analysis (SCA)

### 7. Authentication Failures

### Description

Weak authentication mechanisms

### Example

```go
// ❌ Vulnerable: No rate limiting
func login(username, password string) {
    // Attacker can brute force passwords
}

// ✅ Secure: Rate limiting
func login(username, password string) {
    if !limiter.Allow() {
        return error("Too many attempts")
    }
    // ...
}

// ❌ Vulnerable: Weak password policy
if len(password) < 6 {
    return error("Password too short")
}

// ✅ Secure: Strong password policy
if !isStrongPassword(password) {
    return error("Password must be strong")
}
```

### Prevention

- Implement rate limiting
- Use strong password policies
- Implement MFA
- Secure session management
- Implement account lockout

### 8. Software/Data Integrity Failures

### Description

Code or data tampering

### Example

```bash
# ❌ Vulnerable: No code signing
# Unsigned code can be tampered

# ✅ Secure: Code signing
gpg --sign --detach-sign app.exe
```

### Prevention

- Sign code and updates
- Use secure CI/CD pipelines
- Verify signatures
- Use subresource integrity (SRI)
- Implement checksums

### 9. Logging Failures

### Description

Insufficient logging and monitoring

### Example

```go
// ❌ Vulnerable: No security logging
func login(username, password string) {
    // No logging of authentication attempts
}

// ✅ Secure: Security logging
func login(username, password string) {
    log.Printf("Authentication attempt: user=%s, ip=%s, success=%v", 
        username, clientIP, success)
}
```

### Prevention

- Log security events
- Implement intrusion detection
- Monitor for anomalies
- Protect log files
- Regular log reviews

### 10. Server-Side Request Forgery (SSRF)

### Description

Server making unauthorized requests

### Example

```go
// ❌ Vulnerable: SSRF
func fetchURL(url string) (string, error) {
    resp, err := http.Get(url)
    // Attacker can request internal resources
}

// ✅ Secure: URL validation
func fetchURL(url string) (string, error) {
    if !isAllowedURL(url) {
        return "", error("URL not allowed")
    }
    resp, err := http.Get(url)
}
```

### Prevention

- Validate and sanitize URLs
- Use allow-lists
- Implement network segmentation
- Disable unnecessary URL schemes
- Use proxy for external requests
