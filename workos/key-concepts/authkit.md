## AuthKit Concepts

AuthKit เป็น pre-built authentication UI components จาก WorkOS

## Key Concepts

- **Hosted UI**: Authentication UI ที่ hosted บน WorkOS servers
- **PKCE**: Proof Key for Code Exchange สำหรับ secure authentication
- **Enterprise Auth**: SSO, passkeys, social sign-in, passwords
- **Roles and Permissions**: RBAC integration ใน AuthKit
- **Radar**: Fraud protection integration
- **Custom Metadata**: Additional user/organization data
- **Connect**: MCP และ OAuth application support

## Authentication Flow

1. User กด sign in
2. AuthKit แสดง authentication options
3. User เลือก method (SSO, password, social)
4. AuthKit จัดการ authentication flow
5. Redirect กลับ application พร้อม session

## Benefits

- ลดเวลา development
- Security best practices built-in
- Customizable UI
- Multi-factor authentication support
- Enterprise-ready
