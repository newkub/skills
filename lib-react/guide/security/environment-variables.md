# Environment Variables

## ภาพรวม

วิธีการ manage environment variables ใน React applications

## 1. Sensitive Data

ไม่เก็บ sensitive data ใน client-side code

```javascript
// ❌ Hardcoded secrets
const API_KEY = 'sk-1234567890';

// ✅ Environment variables
const API_KEY = import.meta.env.VITE_API_KEY;
```

## 2. .env Files

ใช้ .env files สำหรับ environment-specific config

```bash
# .env
VITE_API_URL=https://api.example.com
VITE_API_KEY=your_api_key
```

## 3. Validation

Validate environment variables

```javascript
const requiredEnvVars = ['VITE_API_URL', 'VITE_API_KEY'];

requiredEnvVars.forEach(varName => {
  if (!import.meta.env[varName]) {
    throw new Error(`Missing required environment variable: ${varName}`);
  }
});
```

## สรุป

Environment variables:
1. ไม่เก็บ sensitive data ใน client-side code
2. ใช้ .env files สำหรับ environment-specific config
3. Validate environment variables
