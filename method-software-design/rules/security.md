# Security

## Rationale

Security ช่วยป้องกัน data breaches, unauthorized access, และ protect user data

## Bad Practice

```typescript
// ❌ No input validation
app.post('/users', async (req, res) => {
  const user = await db.insertUser(req.body); // ❌ No validation
  res.json(user);
});

// ❌ Plain text passwords
async function createUser(email: string, password: string): Promise<User> {
  return db.insertUser({
    email,
    password // ❌ Plain text
  });
}

// ❌ SQL injection
app.get('/users/:id', async (req, res) => {
  const query = `SELECT * FROM users WHERE id = ${req.params.id}`; // ❌ SQL injection
  const user = await db.query(query);
  res.json(user);
});

// ❌ Exposing sensitive data
app.get('/users/:id', async (req, res) => {
  const user = await db.findUser(req.params.id);
  res.json(user); // ❌ Exposes password, tokens
});
```

## Good Practice

```typescript
// ✅ Input validation
app.post('/users', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  const user = await db.insertUser({ email, password: await hashPassword(password) });
  res.json(user);
});

// ✅ Hash passwords
async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

// ✅ Parameterized queries
app.get('/users/:id', async (req, res) => {
  const user = await db.findUser(req.params.id); // ✅ Parameterized
  res.json(user);
});

// ✅ Don't expose sensitive data
app.get('/users/:id', async (req, res) => {
  const user = await db.findUser(req.params.id);
  const { password, ...safeUser } = user; // ✅ Remove password
  res.json(safeUser);
});
```

## Security Best Practices

### 1. Authentication
- **Hash passwords**: bcrypt, Argon2
- **JWT tokens**: Secure authentication
- **Multi-factor**: 2FA, SMS, email

### 2. Authorization
- **Role-based access control**: Admin, user, guest
- **Resource ownership**: Users can only access their data
- **Least privilege**: Minimal permissions

### 3. Input Validation
- **Validate all inputs**: Never trust user input
- **Sanitize data**: Remove malicious content
- **Type checking**: Ensure correct data types

### 4. SQL Injection Prevention
- **Parameterized queries**: Never concatenate strings
- **ORMs**: Use query builders
- **Whitelisting**: Only allow expected values

### 5. XSS Prevention
- **Escape output**: Never render raw user input
- **CSP headers**: Content Security Policy
- **Sanitize HTML**: Use libraries like DOMPurify

### 6. CSRF Prevention
- **CSRF tokens**: Validate on state-changing requests
- **SameSite cookies**: Prevent cross-site requests
- **Verify origin**: Check referer/origin headers

## Threat Modeling

### 1. Identify Threats
- **Injection attacks**: SQL, XSS, command injection
- **Authentication bypass**: Session hijacking
- **Data breaches**: Unauthorized access

### 2. Implement Defenses
- **Defense in depth**: Multiple layers of security
- **Principle of least privilege**: Minimal permissions
- **Secure by default**: Secure defaults

### 3. Monitor & Respond
- **Logging**: Track security events
- **Monitoring**: Detect suspicious activity
- **Incident response**: Plan for breaches

## References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Web Application Security](https://www.oreilly.com/library/view/web-application-security/9781449366807/)
