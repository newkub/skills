# SSO (Single Sign-On)

## What is SSO?

Single Sign-On (SSO) เป็น authentication method ที่ให้ users ล็อกอินครั้งเดียวและเข้าถึง multiple applications โดยไม่ต้องล็อกอินซ้ำ

## SSO Protocols

### SAML (Security Assertion Markup Language)

- XML-based protocol สำหรับ enterprise SSO
- ใช้กับ Okta, Microsoft Entra ID, OneLogin
- เหมาะสำหรับ enterprise environments

### OIDC (OpenID Connect)

- JSON-based protocol บน OAuth 2.0
- ใช้กับ Google, GitHub, Apple, Microsoft
- เหมาะสำหรับ modern applications

## SSO Flow

```
User → Your App → WorkOS → IdP → WorkOS → Your App
```

1. User คลิก "Sign in with SSO"
2. App สร้าง authorization URL ผ่าน WorkOS
3. User ถูก redirect ไปยัง IdP (Okta, Microsoft, etc.)
4. User ล็อกอินที่ IdP
5. IdP redirect กลับมาพร้อม authorization code
6. App แลกเปลี่ยน code กับ WorkOS
7. WorkOS ตรวจสอบกับ IdP และ return user profile
8. App สร้าง session สำหรับ user

## Connection Types

### SAML Connection

- ใช้ SAML metadata จาก IdP
- ต้อง configure SSO URL, ACS URL, certificate
- เหมาะสำหรับ enterprise customers

### OIDC Connection

- ใช้ client ID, client secret, discovery URL
- เหมาะสำหรับ social logins และ modern IdPs

## Just-In-Time (JIT) Provisioning

WorkOS supports JIT provisioning:
- User ถูกสร้างอัตโนมัติเมื่อล็อกอินครั้งแรก
- User attributes ถูก sync จาก IdP
- ลดเวลา manual user setup

## Security Considerations

- ใช้ HTTPS สำหรับทุก requests
- Validate state parameter สำหรับ prevent CSRF
- ตรวจสอบ audience และ issuer ใน tokens
- Implement proper session management
- Use short-lived access tokens

## Related Concepts

- SCIM: สำหรับ automated user provisioning
- Directory Sync: สำหรับ sync users จาก IdP
- Audit Logs: สำหรับ tracking SSO events
