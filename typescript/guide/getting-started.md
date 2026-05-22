# Getting Started with TypeScript

## การติดตั้ง

ติดตั้ง TypeScript เป็น dev dependency:

```bash
npm install -D typescript
# หรือ
pnpm add -D typescript
```

## การตั้งค่า tsconfig.json

สร้างไฟล์ `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## การใช้งาน

สร้างไฟล์ `.ts`:

```typescript
const name: string = 'John'
const age: number = 30

function greet(name: string): string {
  return `Hello, ${name}!`
}

console.log(greet(name))
```

## การ Compile

```bash
npx tsc
```

หรือใช้ watch mode:

```bash
npx tsc --watch
```
