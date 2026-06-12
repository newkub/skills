# API Security

## ภาพรวม

วิธีการ secure API calls ใน React applications

## 1. HTTPS

ใช้ HTTPS สำหรับทุก API calls

```javascript
// ✅ HTTPS
fetch('https://api.example.com/data');

// ❌ HTTP (insecure)
fetch('http://api.example.com/data');
```

## 2. CORS Configuration

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

## 3. Rate Limiting

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

## สรุป

API security:
1. ใช้ HTTPS สำหรับทุก API calls
2. Configure CORS อย่างเหมาะสม
3. Implement rate limiting
