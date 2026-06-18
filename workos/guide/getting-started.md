# Getting Started

## Installation

ติดตั้ง WorkOS SDK ตามภาษาที่ใช้:

### Node.js

```bash
bun install @workos-inc/node
```

### Python

```bash
pip install workos
```

### Go

```bash
go get github.com/workos/workos-go
```

### Ruby

```bash
gem install workos
```

### PHP

```bash
composer require workos/workos-php
```

## Setup

### 1. Get API Credentials

- ลงทะเบียนที่ [WorkOS Dashboard](https://dashboard.workos.com)
- สร้าง project ใหม่
- รับ API key และ Client ID

### 2. Environment Variables

ตั้งค่า environment variables:

```bash
WORKOS_API_KEY=sk_...
WORKOS_CLIENT_ID=client_...
```

### 3. Initialize Client

#### Node.js

```typescript
import WorkOS from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY);
```

#### Python

```python
from workos import WorkOSClient

workos = WorkOSClient(
    api_key="sk_...",
    client_id="client_..."
)
```

#### Go

```go
import "github.com/workos/workos-go/v4/pkg/workos"

workos := workos.NewClient(
    workos.WithAPIKey("sk_..."),
    workos.WithClientID("client_..."),
)
```

## Quick Start

### SSO Flow

1. Generate authorization URL
2. Redirect user to SSO provider
3. Handle callback with authorization code
4. Exchange code for user profile
5. Create session

ดูรายละเอียดใน `guide/sso-implementation.md`

## Next Steps

- อ่าน `key-concepts/sso.md` สำหรับ SSO concepts
- อ่าน `guide/sso-implementation.md` สำหรับ SSO implementation
- อ่าน `references/configuration.md` สำหรับ configuration options
