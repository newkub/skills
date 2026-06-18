# SCIM (System for Cross-Domain Identity Management)

## What is SCIM?

SCIM เป็น standard protocol สำหรับ automated user provisioning และ deprovisioning ระหว่าง identity provider (IdP) และ service provider (SP)

## SCIM vs SSO

- **SSO**: Authentication - ให้ users เข้าถึง applications
- **SCIM**: User Management - sync user data ระหว่าง systems

SCIM ทำงานร่วมกับ SSO:
- SSO handles authentication
- SCIM handles user lifecycle (create, update, delete)

## SCIM 2.0 Features

### Core Resources

- **Users**: User profiles, attributes, groups
- **Groups**: Group memberships, roles
- **Service Provider Config**: SCIM endpoint configuration

### Operations

- **GET**: List และ retrieve resources
- **POST**: Create new resources
- **PUT/PATCH**: Update resources
- **DELETE**: Remove resources

## SCIM Flow

```
IdP (Okta) → SCIM Request → WorkOS → Your App → User Created/Updated/Deleted
```

1. Admin เพิ่ม user ใน IdP (Okta)
2. IdP ส่ง SCIM request ไปยัง WorkOS
3. WorkOS processes request และ triggers webhook
4. Your app รับ webhook และ sync user data
5. User ถูก created/updated/deleted ใน your app

## SCIM Attributes

### Core User Attributes

- `userName`: Unique identifier (email)
- `name`: First name, last name
- `emails`: Email addresses
- `active`: User status (active/inactive)
- `groups`: Group memberships

### Custom Attributes

- สามารถ extend ด้วย custom schemas
- ใช้สำหรับ organization-specific data

## SCIM vs JIT Provisioning

| Feature | SCIM | JIT |
|---------|------|-----|
| User Creation | Automated | On first login |
| User Updates | Real-time sync | On login only |
| User Deletion | Automated | Manual |
| Group Sync | Yes | No |
| Complexity | Higher | Lower |

## Security Considerations

- ใช้ bearer token authentication
- Validate SCIM requests
- Implement rate limiting
- Log all SCIM operations
- Use HTTPS for all endpoints

## Related Concepts

- SSO: Authentication companion
- Directory Sync: Alternative to SCIM
- Audit Logs: Track SCIM operations
