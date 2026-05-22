# Supabase

Supabase เป็น open source Firebase alternative ที่ใช้ PostgreSQL เป็น backend ให้บริการ authentication, database, storage, และ real-time subscriptions

## สรุปเนื้อหา

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|---------|------|----------|
| **Guide** | guide/getting-started.md | เริ่มต้นใช้งาน Supabase |
| **Guide** | guide/authentication.md | การใช้ authentication |
| **Guide** | guide/database.md | การใช้ database |
| **Guide** | guide/storage.md | การใช้ storage |
| **Guide** | guide/realtime.md | การใช้ realtime subscriptions |
| **Reference** | reference/client-api.md | Client API reference |
| **Reference** | reference/auth-api.md | Auth API reference |
| **Reference** | reference/rls.md | Row Level Security |

## คุณสมบัติหลัก

- **PostgreSQL**: Managed database พร้อม full SQL power
- **Authentication**: Email, OAuth, magic link และ auth providers อื่นๆ
- **Realtime**: Live subscriptions สู่ database changes
- **Storage**: File storage พร้อม access control
- **Edge Functions**: Deno-based serverless functions
- **Auto-generated APIs**: REST และ GraphQL APIs auto-generated

## การใช้งาน

ใช้ Supabase เมื่อ:
- ต้องการ managed PostgreSQL database
- ต้องการ built-in authentication
- ต้องการ real-time applications
- ต้องการ file storage
- ต้องการ open source Firebase alternative
- ต้องการ full-stack backend services

## ตัวอย่างเริ่มต้น

```bash
# Install
npm install @supabase/supabase-js
```

```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(url, anonKey)

// Query data
const { data } = await supabase
  .from('users')
  .select('*')
  .eq('id', 1)

// Auth
const { data } = await supabase.auth.signInWithPassword({
  email, password
})
```
