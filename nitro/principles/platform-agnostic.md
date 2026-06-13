# Platform-Agnostic Design

## Principle

Nitro ออกแบบมาเพื่อ platform-agnostic:
- **Write Once** - เขียน code ครั้ง deploy ได้หลาย platforms
- **Abstraction** - abstract platform differences
- **Presets** - presets สำหรับ platform-specific optimizations

## Application

- **Use Standard APIs** - ใช้ standard APIs ที่ Nitro ให้มา
- **Avoid Platform-Specific Code** - หลีกเลี่ยง code ที่ specific กับ platform
- **Test on Multiple Platforms** - test บนหลาย platforms
