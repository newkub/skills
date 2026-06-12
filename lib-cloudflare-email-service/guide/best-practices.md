# Best Practices

Best practices สำหรับการใช้งาน Cloudflare Email Service

## Email Routing

- ใช้ catch-all addresses สำหรับ development
- ตั้งค่า forwarding rules อย่างชัดเจน
- ใช้ DKIM/SPF/DMARC สำหรับ production

## Email Sending

- ใช้ API keys แทน username/password
- จัดการ rate limits อย่างเหมาะสม
- ตรวจสอบ bounce และ complaint rates

## Security

- เก็บ API keys ใน environment variables
- ใช้ TLS สำหรับ connections ทั้งหมด
- ตรวจสอบ sender reputation อย่างสม่ำเสมอ
