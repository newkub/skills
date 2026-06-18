## Widgets Implementation

Widgets สำหรับ common enterprise app workflows เช่น user invitation, SSO setup

## Available Widgets

- User invitation widget
- SSO configuration widget
- Directory sync widget
- Audit log viewer

## Setup

Embed widget ใน application:

```typescript
import { Widget } from '@workos-inc/node';

const widget = new Widget({
  apiKey: process.env.WORKOS_API_KEY,
});

const widgetUrl = widget.getUrl({
  type: 'user_invitation',
  organizationId: 'org_id',
  redirectUri: 'https://your-app.com/users',
});
```

## User Invitation Widget

สร้าง user invitation flow:

```typescript
const inviteWidget = widget.getUrl({
  type: 'user_invitation',
  organizationId: 'org_id',
  options: {
    role: 'member',
    sendEmail: true,
  },
});
```

## SSO Configuration Widget

สร้าง SSO setup flow:

```typescript
const ssoWidget = widget.getUrl({
  type: 'sso_configuration',
  organizationId: 'org_id',
  options: {
    provider: 'okta',
  },
});
```

## Customization

Customize widget appearance:

```typescript
const widgetUrl = widget.getUrl({
  type: 'user_invitation',
  organizationId: 'org_id',
  theme: {
    primaryColor: '#0066FF',
    logo: 'https://your-app.com/logo.png',
  },
});
```

## Best Practices

- ใช้ widgets สำหรับ common workflows
- Customize theme ให้ match brand
- Handle widget callbacks
- Monitor widget usage
