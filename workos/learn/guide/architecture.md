# Architecture

สถาปัตยกรรมระบบ WorkOS

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Your Application                      │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   Frontend   │  │   Backend    │  │   Database   │     │
│  │  (React/Vue) │  │   (Node.js)  │  │  (PostgreSQL) │     │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘     │
│         │                 │                 │             │
│         └─────────────────┴─────────────────┘             │
│                           │                                 │
└───────────────────────────┼─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                         WorkOS Platform                       │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │     SSO      │  │ Directory    │  │  Audit Logs  │     │
│  │  (SAML/OIDC) │  │    Sync      │  │              │     │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘     │
│         │                 │                 │             │
│  ┌──────┴───────┐  ┌──────┴───────┐  ┌──────┴───────┐     │
│  │  Identity    │  │  SCIM/HRIS   │  │   Webhooks   │     │
│  │  Providers  │  │  Providers   │  │              │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
```

## Component Layers

### 1. Authentication Layer

- **SSO**: SAML 2.0 และ OIDC protocols
- **Identity Providers**: Okta, Azure AD, Google Workspace
- **OAuth 2.0**: Authorization flow
- **JWT**: Token validation

### 2. User Management Layer

- **Directory Sync**: SCIM 2.0 protocol
- **User Provisioning**: Automated user lifecycle
- **Group Management**: Role-based access
- **Profile Sync**: User attributes

### 3. Audit Layer

- **Event Tracking**: User actions logging
- **Log Streaming**: Real-time SIEM integration
- **Compliance**: SOC 2, HIPAA, GDPR
- **Retention**: Configurable log retention

### 4. Integration Layer

- **Webhooks**: Event notifications
- **API**: RESTful API
- **SDKs**: Multi-language support
- **Admin Portal**: Self-serve configuration

## Data Flow

### SSO Flow

```
User → Your App → WorkOS → IdP → WorkOS → Your App
```

1. User คลิก "Sign in with SSO"
2. Your app redirect ไปยัง WorkOS
3. WorkOS redirect ไปยัง IdP
4. User authenticates กับ IdP
5. IdP redirect กลับไป WorkOS
6. WorkOS redirect กลับไป Your app พร้อม authorization code
7. Your app exchange code สำหรับ access token

### Directory Sync Flow

```
HRIS → WorkOS → Webhook → Your App → Database
```

1. HRIS system มีการเปลี่ยนแปลง user
2. WorkOS รับ event จาก HRIS
3. WorkOS ส่ง webhook ไป Your app
4. Your app อัปเดต database ตาม event
