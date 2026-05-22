# Getting Started with Supabase

## การสร้าง Project

1. ไปที่ [supabase.com](https://supabase.com)
2. สร้าง organization และ project ใหม่
3. รอให้ project พร้อมใช้งาน (ประมาณ 1-2 นาที)

## การติดตั้ง Client

```bash
npm install @supabase/supabase-js
```

## การตั้งค่า Client

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

## การใช้งาน Database

```typescript
const { data, error } = await supabase
  .from('users')
  .select('*')
```

## การใช้งาน Auth

```typescript
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password',
})
```
