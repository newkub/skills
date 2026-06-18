## Pipes Concepts

Pipes สำหรับ third-party account connections

## Key Concepts

- **Provider**: Third-party service (Slack, Google, Microsoft)
- **Connection**: Link ระหว่าง user และ provider
- **OAuth Flow**: Authorization process สำหรับ third-party access
- **Token**: Access token สำหรับ API calls
- **Scope**: Permissions ที่ request จาก provider
- **Sync**: Process ดึง data จาก provider

## OAuth Flow

1. User กด connect
2. Redirect ไป provider authorization page
3. User approve access
4. Provider redirect กลับพร้อม authorization code
5. Exchange code สำหรับ access token
6. Store token สำหรับ future use

## Supported Providers

- Slack
- Google Workspace
- Microsoft 365
- Salesforce
- และอื่นๆ

## Benefits

- Pre-built integrations
- Token management included
- Automatic token refresh
- Data sync capabilities
