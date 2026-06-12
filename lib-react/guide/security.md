# React Security Best Practices

## ภาพรวม

ความปลอดภัยเป็นสิ่งสำคัญสำหรับ React applications เพื่อป้องกัน vulnerabilities ต่างๆ

## XSS Prevention

### 1. Automatic Escaping

React จะ escape content ใน JSX อัตโนมัติ

```javascript
// ❌ XSS attack blocked
const userInput = '<script>alert("XSS")</script>';
return <div>{userInput}</div>; // Renders as text, not executed
```

### 2. dangerouslySetInnerHTML

ใช้เฉพาะเมื่อจำเป็นและ sanitize input

```javascript
// ❌ ไม่ปลอดภัย
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// ✅ ปลอดภัย - sanitize ก่อน
import DOMPurify from 'dompurify';

const sanitizedHtml = DOMPurify.sanitize(userInput);
<div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
```

### 3. URL Validation

Validate URLs ก่อนใช้

```javascript
function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

// ✅ Validate ก่อนใช้
if (isValidUrl(userInput)) {
  <a href={userInput}>Link</a>;
}
```

## Authentication & Authorization

### 1. JWT Handling

เก็บ tokens อย่างปลอดภัย

```javascript
// ❌ เก็บใน localStorage (vulnerable to XSS)
localStorage.setItem('token', token);

// ✅ เก็บใน httpOnly cookies
// Server-side: Set-Cookie: token=xxx; HttpOnly; Secure; SameSite=Strict
```

### 2. Token Refresh

Implement token refresh logic

```javascript
function useAuth() {
  const [token, setToken] = useState(null);
  
  const refreshToken = async () => {
    try {
      const response = await fetch('/api/refresh', {
        credentials: 'include' // Send httpOnly cookies
      });
      const data = await response.json();
      setToken(data.token);
    } catch (error) {
      // Handle refresh failure
    }
  };
  
  return { token, refreshToken };
}
```

### 3. Route Protection

Protect routes ด้วย authentication

```javascript
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
}

// Usage
<Route path="/dashboard" element={
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
} />
```

## Data Validation

### 1. Input Validation

Validate ข้อมูลทั้ง client-side และ server-side

```javascript
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required()
});

async function handleSubmit(values) {
  try {
    await schema.validate(values);
    // Submit to server
  } catch (error) {
    // Handle validation error
  }
}
```

### 2. Output Encoding

Encode output ก่อนแสดงผล

```javascript
import DOMPurify from 'dompurify';

function UserContent({ content }) {
  const sanitized = DOMPurify.sanitize(content);
  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
}
```

### 3. Type Checking

ใช้ TypeScript สำหรับ type safety

```typescript
interface User {
  id: string;
  name: string;
  email: string;
}

function UserProfile({ user }: { user: User }) {
  return <div>{user.name}</div>;
}
```

## API Security

### 1. HTTPS

ใช้ HTTPS สำหรับทุก API calls

```javascript
// ✅ HTTPS
fetch('https://api.example.com/data');

// ❌ HTTP (insecure)
fetch('http://api.example.com/data');
```

### 2. CORS Configuration

Configure CORS อย่างเหมาะสม

```javascript
// Server-side
app.use(cors({
  origin: 'https://yourdomain.com',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

### 3. Rate Limiting

Implement rate limiting สำหรับ API endpoints

```javascript
// Server-side
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

## Dependency Security

### 1. Audit Dependencies

Audit dependencies สำหรับ vulnerabilities

```bash
bun audit
```

### 2. Update Dependencies

Keep dependencies up to date

```bash
bun update
```

### 3. Lock File

Commit lock file สำหรับ consistency

```bash
git add bun.lockb
```

## Environment Variables

### 1. Sensitive Data

ไม่เก็บ sensitive data ใน client-side code

```javascript
// ❌ Hardcoded secrets
const API_KEY = 'sk-1234567890';

// ✅ Environment variables
const API_KEY = import.meta.env.VITE_API_KEY;
```

### 2. .env Files

ใช้ .env files สำหรับ environment-specific config

```bash
# .env
VITE_API_URL=https://api.example.com
VITE_API_KEY=your_api_key
```

### 3. Validation

Validate environment variables

```javascript
const requiredEnvVars = ['VITE_API_URL', 'VITE_API_KEY'];

requiredEnvVars.forEach(varName => {
  if (!import.meta.env[varName]) {
    throw new Error(`Missing required environment variable: ${varName}`);
  }
});
```

## Content Security Policy

### 1. CSP Headers

Implement CSP headers

```javascript
// Server-side
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
  );
  next();
});
```

### 2. Meta Tag

ใช้ CSP meta tag สำหรับ static sites

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'">
```

## Error Handling

### 1. Error Boundaries

ใช้ Error Boundaries สำหรับ handle errors

```javascript
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

### 2. Safe Error Messages

ไม่แสดง sensitive information ใน error messages

```javascript
// ❌ Exposes sensitive info
catch (error) {
  alert(`Database error: ${error.message}`);
}

// ✅ Generic error message
catch (error) {
  alert('An error occurred. Please try again.');
  logErrorToService(error);
}
```

## สรุป

Security best practices สำหรับ React:
1. Validate และ sanitize ทุก input
2. เก็บ sensitive data อย่างปลอดภัย
3. ใช้ HTTPS และ configure CORS
4. Keep dependencies up to date
5. Implement authentication และ authorization
6. Monitor และ log security events
