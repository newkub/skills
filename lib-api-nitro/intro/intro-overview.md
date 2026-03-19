# Nitro Overview

Nitro เป็น Next Generation Server Toolkit ที่ออกแบบมาเพื่อสร้าง web servers ที่ทันสมัย มีความสามารถในการทำงานได้บนหลาย runtime และสามารถ deploy ได้ทุกที่

## สิ่งที่ Nitro ทำได้

### การสร้าง Server Routes

สร้าง server และ API routes ภายใน `routes/` directory โดยแต่ละไฟล์จะ map ตรงไปยัง URL path โดยตรง และ Nitro จะจัดการ routing, code-splitting และ optimized builds ให้โดยอัตโนมัติ

### การควบคุม Server Entry

สามารถสร้าง `server.ts` file เพื่อควบคุม server entry ได้อย่างเต็มที่ สามารถใช้ HTTP libraries ต่างๆ เช่น Elysia, h3, หรือ Hono ได้

## ประโยชน์หลัก

- **Runtime Agnostic**: ทำงานได้บน Node.js, Bun, Deno และอื่นๆ
- **Deployment Flexibility**: Deploy ได้บน Cloudflare Workers, Netlify, Vercel และอื่นๆ
- **Performance Optimization**: Compile-time routing และ code splitting
- **Built-in Features**: Storage, caching, database และอื่นๆ มาในตัว

## ใครควรใช้ Nitro

- Developers ที่ต้องการสร้าง API servers และ web applications
- Teams ที่ต้องการ deployment ไปยังหลาย platforms
- ผู้ที่สร้าง meta-frameworks
- ผู้ที่ต้องการ performance สูงและ serverless optimization
