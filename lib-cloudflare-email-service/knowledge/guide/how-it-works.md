# How It Works

## Email Sending Flow

1. Application ส่ง request ไปยัง Email API
2. Cloudflare validate sender domain
3. Email ถูก queue และส่งผ่าน SMTP relay
4. Recipient ได้รับอีเมล

## Email Routing Flow

1. Email ถูกส่งมาที่ custom domain
2. Cloudflare DNS MX records route ไปยัง Cloudflare
3. Email Routing rules ตรวจสอบ recipient
4. Email ถูก forward ไปยัง Worker หรือ external address

## Workers Binding

- Email binding ให้ Workers รับอีเมลโดยตรง
- Worker สามารถ process และ reply อีเมล
- รองรับ MIME parsing และ attachments
