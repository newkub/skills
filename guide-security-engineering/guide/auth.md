# Auth

## Authentication และ Authorization

### Authentication Methods

### Password-Based Authentication

**Flow**:
1. User submits username and password
2. Server retrieves stored password hash
3. Server hashes submitted password
4. Server compares hashes
5. Access granted if match

**Example (Go)**:

```go
package main

import (
    "golang.org/x/crypto/bcrypt"
)

func authenticate(username, password string) bool {
    // Retrieve user from database
    user := getUser(username)
    
    // Compare password hash
    err := bcrypt.CompareHashAndPassword([]byte(user.PasswordHash), []byte(password))
    return err == nil
}
```

### Multi-Factor Authentication (MFA)

**Methods**:
- SMS OTP
- TOTP (Time-based One-Time Password)
- Hardware token
- Biometric

**Example (Go with TOTP)**:

```go
package main

import (
    "github.com/pquerna/otp/totp"
)

func verifyTOTP(secret, code string) bool {
    totp := totp.New(secret, totp.ValidateOpts{
        Digits: 6,
    })
    
    return totp.Verify(code)
}
```

### OAuth 2.0

**Flow**:
1. Client redirects to authorization server
2. User authorizes
3. Authorization server returns authorization code
4. Client exchanges code for access token
5. Client uses access token to access resources

**Example (Go)**:

```go
package main

import (
    "golang.org/x/oauth2"
)

var config = &oauth2.Config{
    ClientID:     "your-client-id",
    ClientSecret: "your-client-secret",
    RedirectURL:  "https://example.com/callback",
    Scopes:       []string{"read", "write"},
    Endpoint: oauth2.Endpoint{
        AuthURL:  "https://auth.example.com/auth",
        TokenURL: "https://auth.example.com/token",
    },
}

func exchangeToken(code string) (*oauth2.Token, error) {
    return config.Exchange(context.Background(), code)
}
```

### JWT (JSON Web Tokens)

**Structure**:
```
Header.Payload.Signature
```

**Example (Go)**:

```go
package main

import (
    "time"
    "github.com/golang-jwt/jwt/v5"
)

var jwtSecret = []byte("your-secret-key")

func generateToken(userID string) (string, error) {
    token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
        "sub": userID,
        "exp": time.Now().Add(time.Hour * 24).Unix(),
        "iat": time.Now().Unix(),
    })
    
    return token.SignedString(jwtSecret)
}

func validateToken(tokenString string) (jwt.MapClaims, error) {
    token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
        if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
            return nil, fmt.Errorf("unexpected signing method")
        }
        return jwtSecret, nil
    })
    
    if err != nil {
        return nil, err
    }
    
    if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
        return claims, nil
    }
    
    return nil, fmt.Errorf("invalid token")
}
```

### Session-Based Authentication

**Flow**:
1. User authenticates
2. Server creates session
3. Server generates session ID
4. Server stores session data
5. Server sends session ID to client (cookie)
6. Client sends session ID with requests
7. Server validates session

**Example (Go)**:

```go
package main

import (
    "github.com/gorilla/sessions"
)

var store = sessions.NewCookieStore([]byte("session-secret"))

func createSession(w http.ResponseWriter, r *http.Request, userID string) error {
    session, err := store.Get(r, "session")
    if err != nil {
        return err
    }
    
    session.Values["userID"] = userID
    session.Options.MaxAge = 3600 // 1 hour
    
    return session.Save(r, w)
}

func validateSession(r *http.Request) (string, error) {
    session, err := store.Get(r, "session")
    if err != nil {
        return "", err
    }
    
    userID, ok := session.Values["userID"].(string)
    if !ok {
        return "", fmt.Errorf("invalid session")
    }
    
    return userID, nil
}
```

### Authorization Models

### RBAC (Role-Based Access Control)

**Concept**: Users assigned to roles, roles have permissions

**Example (Go)**:

```go
type Role string

const (
    RoleAdmin Role = "admin"
    RoleUser  Role = "user"
)

type User struct {
    ID   int
    Name string
    Role Role
}

func canAccess(user User, resource string) bool {
    switch user.Role {
    case RoleAdmin:
        return true
    case RoleUser:
        return resource == fmt.Sprintf("user-%d", user.ID)
    default:
        return false
    }
}
```

### ABAC (Attribute-Based Access Control)

**Concept**: Policies based on user, resource, and environment attributes

**Example (Go)**:

```go
type User struct {
    ID        int
    Role      string
    Department string
}

type Resource struct {
    ID     int
    Type   string
    Owner  string
}

type Environment struct {
    Time    string
    Location string
}

func evaluatePolicy(user User, resource Resource, env Environment) bool {
    // Policy: Admins can access anything during business hours
    if user.Role == "admin" && env.Time >= "09:00" && env.Time <= "17:00" {
        return true
    }
    
    // Policy: Users can access their own resources
    if resource.Owner == fmt.Sprintf("user-%d", user.ID) {
        return true
    }
    
    return false
}
```

### Permission Checks

### Middleware (Go)

```go
func authMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        token := r.Header.Get("Authorization")
        if token == "" {
            http.Error(w, "Unauthorized", http.StatusUnauthorized)
            return
        }
        
        claims, err := validateToken(token)
        if err != nil {
            http.Error(w, "Invalid token", http.StatusUnauthorized)
            return
        }
        
        // Add user to context
        ctx := context.WithValue(r.Context(), "userID", claims["sub"])
        next.ServeHTTP(w, r.WithContext(ctx))
    })
}
```

### Middleware (Node.js)

```javascript
function authMiddleware(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
}
```

### Best Practices

### 1. Use HTTPS for Authentication

```go
// ✅ Good: HTTPS only
if r.URL.Scheme != "https" {
    http.Redirect(w, r, "https://"+r.Host+r.URL.RequestURI(), http.StatusMovedPermanently)
}
```

### 2. Implement Rate Limiting

```go
// ✅ Good: Rate limit authentication
limiter := rate.NewLimiter(5, time.Minute)

if !limiter.Allow() {
    http.Error(w, "Too many attempts", http.StatusTooManyRequests)
    return
}
```

### 3. Use Secure Session Cookies

```go
// ✅ Good: Secure session cookies
store.Options = &sessions.Options{
    HttpOnly: true,
    Secure:   true,
    SameSite: http.SameSiteStrictMode,
}
```

### 4. Rotate Tokens

```go
// ✅ Good: Token rotation
func rotateToken(oldToken string) (string, error) {
    // Validate old token
    claims, err := validateToken(oldToken)
    if err != nil {
        return "", err
    }
    
    // Generate new token
    return generateToken(claims["sub"].(string))
}
```

### 5. Implement Logout

```go
// ✅ Good: Invalidate session
func logout(w http.ResponseWriter, r *http.Request) {
    session, _ := store.Get(r, "session")
    session.Options.MaxAge = -1
    session.Save(r, w)
}
```
