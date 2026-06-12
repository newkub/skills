# Key Concepts

## Email Sending

Cloudflare Email Service ส่งอีเมลผ่าน SMTP relay หรือ REST API โดยใช้ custom domain ของคุณ

## Email Routing

รับอีเมลผ่าน Email Routing และ forward ไปยัง Workers หรือ external addresses

## Workers Binding

ใช้ Email binding ใน Workers เพื่อรับและส่งอีเมลโดยตรง

## REST API

ส่งอีเมลผ่าน REST API สำหรับการ integration กับ applications อื่นๆ

## Deliverability

SPF, DKIM, และ DMARC records สำหรับปรับปรุง deliverability

## Rate Limits

มี rate limits สำหรับการส่งอีเมล เพื่อป้องกัน spam
