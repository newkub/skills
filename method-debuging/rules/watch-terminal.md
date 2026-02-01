# Debug Terminal

## Rationale

การ debug ใน terminal เป็นวิธีที่มีประสิทธิภาพในการหาปัญหาของ application โดยใช้ built-in debugger ของ Node.js และ Bun

## Good Practice

ใช้ built-in debugger ของ runtime ที่เหมาะสม

```bash
# Node.js debugging
node --inspect app.js
node --inspect-brk app.js
node inspect app.js

# Bun debugging
bun --inspect app.ts
bun --inspect-brk app.ts
```

## Usage

### Node.js Debugger
- `node --inspect` - Debug ผ่าน Chrome DevTools
- `node --inspect-brk` - Debug โดยหยุดที่บรรทัดแรก
- `node inspect` - Interactive debugger ใน terminal

### Bun Debugger
- `bun --inspect` - Debug ผ่าน Chrome DevTools
- `bun --inspect-brk` - Debug โดยหยุดที่บรรทัดแรก

## References

- [Node.js Debugging Guide](https://nodejs.org/en/docs/guides/debugging-getting-started/)
- [Bun Debugging](https://bun.sh/docs/runtime/debugger)
