# key-concept

## Global Store

aube ใช้ global content-addressable store เพื่อเก็บ package files ไว้ที่เดียว (`~/.local/share/aube/store/`) แล้ว link จาก project ต่างๆ มาที่ store นี้ ทำให้หลาย project ที่มี dependencies เหมือนกันใช้ files เดียวกัน ไม่ต้อง copy ซ้ำ

## Lockfile Compatibility

aube รองรับ lockfiles หลายรูปแบบ:

| Lockfile | Read | Write |
|----------|------|-------|
| aube-lock.yaml | ✅ | ✅ |
| pnpm-lock.yaml v9 | ✅ | ✅ |
| package-lock.json v2/v3 | ✅ | ✅ |
| npm-shrinkwrap.json | ✅ | ✅ |
| yarn.lock | ✅ | ✅ |
| bun.lock | ✅ | ✅ |

## Auto-Install

`aubr test` และ `aube test` จะตรวจสอบว่า node_modules fresh ก่อนรัน script ถ้า dependencies เก่าหรือหาย จะ install ให้อัตโนมัติก่อน

## Security Defaults

- Exotic transitive deps ถูก block
- Lifecycle scripts รอ approval
- Trust downgrades fail at resolve
- New releases ใช้เวลา 24h cooling window
- `jailBuilds: true` สำหรับ build jail