# TypeScript Migration

## ภาพรวม

วิธีการ migrate จาก JavaScript เป็น TypeScript

## 1. Install TypeScript

```bash
bun add -D typescript @types/react @types/react-dom
```

## 2. Create tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## 3. Rename Files

```bash
# Rename .js to .tsx
mv App.js App.tsx
mv index.js index.tsx
```

## 4. Add Types

```typescript
// ❌ JavaScript
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

// ✅ TypeScript
interface ButtonProps {
  label: string;
  onClick: () => void;
}

function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
```

## สรุป

TypeScript migration:
1. Install TypeScript และ type definitions
2. Create tsconfig.json
3. Rename files จาก .js เป็น .tsx
4. Add types ทีละไฟล์
5. Fix type errors
