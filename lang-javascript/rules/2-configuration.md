# Configuration

## Description
การตั้งค่า environment และ development tools สำหรับ JavaScript development

## Examples
```json
// package.json scripts
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest",
    "lint": "eslint .",
    "format": "prettier --write ."
  }
}
```

```javascript
// .eslintrc.js
module.exports = {
  env: {
    node: true,
    es2021: true
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 12
  }
};
```

## Anti-patterns
❌ ไม่มี linting configuration - code จะไม่มีมาตรฐาน
❌ ใช้ hardcoded values - ทำให้ยากต่อการ config ใน environment อื่น
❌ ไม่มี environment variables - ทำให้ไม่ปลอดภัยต่อ sensitive data

## Verification
1. ตรวจสอบว่า ESLint ทำงานได้ด้วย `npm run lint`
2. ทดสอบ Prettier ด้วย `npm run format`
3. ยืนยันว่าทุก scripts ใน package.json ทำงานได้
