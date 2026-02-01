---
name: javascript-security-summary
description: สรุป best practices สำหรับ security ใน JavaScript
goal: ให้นักพัฒนาเขียน JavaScript code ที่ปลอดภัย
outcome: สามารถเขียน JavaScript code ที่ป้องกัน attacks และปกป้องข้อมูลผู้ใช้
---

# Security Best Practices

## Overview
Best practices สำหรับการเขียน JavaScript code ที่ปลอดภัย ป้องกัน common attacks และปกป้องข้อมูลผู้ใช้

## Best Practices Summary

| Practice | Description | Priority | Example |
|----------|-------------|----------|---------|
| Validate user inputs | Prevent XSS attacks | High | `const sanitized = DOMPurify.sanitize(userInput)` |
| Use HTTPS | Encrypt data transmission | High | `fetch('https://api.example.com')` |
| Avoid eval() | Prevent code injection | High | Use JSON.parse() instead |
| Use Content Security Policy | Additional security layer | Medium | `<meta http-equiv="Content-Security-Policy">` |
| Sanitize data before display | Prevent XSS in dynamic content | High | `textContent = userInput` |
| Use secure HTTP headers | Protect against various attacks | High | Helmet.js middleware |
| Implement authentication | Secure user access | High | JWT with proper validation |
| Use parameterized queries | Prevent SQL injection | High | Prepared statements |
| Secure sensitive data | Encrypt sensitive information | High | Use crypto libraries |
| Implement rate limiting | Prevent brute force attacks | Medium | Rate limiting middleware |

## Implementation Guidelines

### High Priority Practices
1. **Validate all user inputs** - Never trust user input
2. **Use HTTPS everywhere** - Encrypt all communications
3. **Avoid dangerous functions** - Never use `eval()`, `setTimeout()` with strings
4. **Sanitize data before display** - Prevent XSS attacks
5. **Use secure headers** - Implement proper security headers

### Medium Priority Practices
1. **Implement CSP** - Additional XSS protection
2. **Use rate limiting** - Prevent abuse
3. **Secure sensitive data** - Proper encryption
4. **Regular security audits** - Stay updated on threats

### Security Checklist

#### Input Validation
- [ ] Validate all user inputs
- [ ] Sanitize data before display
- [ ] Use parameterized queries
- [ ] Implement input length limits

#### Data Protection
- [ ] Use HTTPS everywhere
- [ ] Encrypt sensitive data
- [ ] Secure storage of secrets
- [ ] Implement proper authentication

#### Code Security
- [ ] Avoid eval() and similar functions
- [ ] Use secure headers
- [ ] Implement CSP
- [ ] Regular security updates

## Common Security Vulnerabilities

| Vulnerability | Description | Prevention |
|---------------|-------------|-------------|
| XSS (Cross-Site Scripting) | Inject malicious scripts | Input validation, output sanitization |
| CSRF (Cross-Site Request Forgery) | Force unwanted actions | CSRF tokens, same-site cookies |
| SQL Injection | Inject malicious SQL queries | Parameterized queries |
| Authentication bypass | Weak authentication | Strong passwords, 2FA |
| Data exposure | Sensitive data leakage | Encryption, access controls |

## Security Tools and Libraries

### Input Sanitization
- **DOMPurify** - XSS protection
- **validator.js** - Input validation
- **joi** - Schema validation

### Security Headers
- **Helmet.js** - Security headers middleware
- **cors** - CORS protection

### Authentication
- **bcrypt** - Password hashing
- **jsonwebtoken** - JWT implementation
- **passport.js** - Authentication middleware

## Examples

### Input Validation and Sanitization
```javascript
// Good: Input validation and sanitization
import DOMPurify from 'dompurify';
import validator from 'validator';

function sanitizeUserInput(input) {
  // Validate input type
  if (typeof input !== 'string') {
    throw new Error('Invalid input type');
  }
  
  // Remove potentially dangerous characters
  const sanitized = DOMPurify.sanitize(input);
  
  // Additional validation
  if (!validator.isLength(sanitized, { min: 1, max: 100 })) {
    throw new Error('Input length invalid');
  }
  
  return sanitized;
}

// Usage
const userInput = '<script>alert("xss")</script>Hello';
const cleanInput = sanitizeUserInput(userInput);
element.textContent = cleanInput; // Safe

// Bad: Direct use of user input
element.innerHTML = userInput; // Dangerous
```

### Secure API Requests
```javascript
// Good: Secure API communication
async function secureApiRequest(url, data) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': getCsrfToken(),
        'Authorization': `Bearer ${getAuthToken()}`
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

// Bad: Insecure request
fetch('http://api.example.com/data', {
  method: 'POST',
  body: JSON.stringify(data)
}); // No HTTPS, no headers
```

### Content Security Policy
```javascript
// Good: Implement CSP
const express = require('express');
const helmet = require('helmet');

const app = express();

// Set CSP headers
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "https:"],
    connectSrc: ["'self'", "https://api.example.com"]
  }
}));

// HTML meta tag alternative
const cspMeta = `
  <meta http-equiv="Content-Security-Policy" 
       content="default-src 'self'; script-src 'self' 'unsafe-inline';">
`;
```

### Password Security
```javascript
// Good: Secure password handling
const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
}

async function verifyPassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

// Usage
const password = 'userPassword123';
const hashedPassword = await hashPassword(password);
const isValid = await verifyPassword('userPassword123', hashedPassword);

// Bad: Plain text passwords
const userPassword = 'password123'; // Never store plain text
```

### JWT Security
```javascript
// Good: Secure JWT implementation
const jwt = require('jsonwebtoken');

function generateToken(user) {
  const payload = {
    userId: user.id,
    email: user.email,
    role: user.role
  };
  
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1h',
    issuer: 'your-app',
    audience: 'your-users'
  });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid token');
  }
}

// Bad: Weak JWT
const token = jwt.sign({ userId: 123 }, 'weak-secret'); // Weak secret, no options
```

### Rate Limiting
```javascript
// Good: Rate limiting implementation
const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP',
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/', apiLimiter);

// Custom rate limiting for sensitive operations
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // Only 5 login attempts per 15 minutes
  skipSuccessfulRequests: true
});

app.post('/login', loginLimiter, (req, res) => {
  // Login logic
});
```

### Environment Variables Security
```javascript
// Good: Secure environment handling
require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  database: {
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    // Never log passwords
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '1h'
  }
};

// Validate required environment variables
const requiredEnvVars = ['DB_HOST', 'DB_PASSWORD', 'JWT_SECRET'];
requiredEnvVars.forEach(varName => {
  if (!process.env[varName]) {
    throw new Error(`Missing required environment variable: ${varName}`);
  }
});

// Bad: Hardcoded secrets
const dbPassword = 'password123'; // Never hardcode secrets
const jwtSecret = 'my-secret-key'; // Use environment variables
```

## Security Headers

### Essential Headers
```javascript
// Security headers to implement
const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Content-Security-Policy': "default-src 'self'",
  'Referrer-Policy': 'strict-origin-when-cross-origin'
};
```

## Verification
1. ตรวจสอบว่ามี input validation ทุกจุด
2. ทดสอบว่าใช้ HTTPS ทั่งหมด
3. ยืนยันว่าไม่มี eval() หรือ dangerous functions
4. ตรวจสอบว่ามี CSP headers
5. ทดสอบว่า sensitive data ถูกเข้ารหัส
6. ยืนยันว่ามี proper authentication
7. ตรวจสอบว่ามี rate limiting
8. ทดสอบว่ามี security headers ที่เหมาะสม
