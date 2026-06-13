# Authentication & Authorization

## ภาพรวม

วิธีการ implement authentication และ authorization ใน React applications

## 1. JWT Handling

เก็บ tokens อย่างปลอดภัย

```javascript
// ❌ เก็บใน localStorage (vulnerable to XSS)
localStorage.setItem('token', token);

// ✅ เก็บใน httpOnly cookies
// Server-side: Set-Cookie: token=xxx; HttpOnly; Secure; SameSite=Strict
```

## 2. Token Refresh

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

## 3. Route Protection

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

## สรุป

Authentication & authorization:
1. เก็บ tokens ใน httpOnly cookies
2. Implement token refresh logic
3. Protect routes ด้วย authentication
