# When to Use Nitro

## Use Cases

### ✅ เหมาะสำหรับ

#### 1. API Development

- RESTful APIs
- GraphQL servers
- Microservices
- Webhook handlers

#### 2. Full-stack Applications

- SSR applications
- Universal rendering
- Multi-page applications
- Static site generation

#### 3. Serverless Deployments

- Cloudflare Workers
- Vercel Functions
- Netlify Functions
- AWS Lambda

#### 4. Meta-framework Development

- Building custom frameworks
- Framework extensions
- Tooling development

#### 5. High-performance Applications

- Low-latency APIs
- Real-time applications
- High-traffic services

### ❅ ไม่เหมาะสำหรับ

#### 1. Simple Static Sites

- ถ้าต้องการแค่ static HTML/CSS/JS
- ไม่จำเป็นต้องใช้ server capabilities
- ใช้ static site generators ง่ายกว่า

#### 2. Desktop Applications

- ถ้าต้องการ desktop-specific features
- ใช้ Electron หรือ Tauri จะเหมาะกว่า

#### 3. Mobile Applications

- ถ้าต้องการ mobile-specific features
- ใช้ React Native หรือ Native development

#### 4. Complex Desktop Software

- ถ้าต้องการ complex UI สำหรับ desktop
- ต้องการ file system access แบบ full

## Comparison with Alternatives

### Nitro vs Express.js

- **Nitro**: Runtime-agnostic, build-time compilation, deployment flexibility
- **Express**: Node.js only, runtime routing, traditional deployment

### Nitro vs Next.js API Routes

- **Nitro**: Standalone, multi-runtime, framework-agnostic
- **Next.js**: Integrated with React, Node.js only, framework-specific

### Nitro vs H3

- **Nitro**: Full framework, storage, caching, database
- **H3**: Minimal HTTP library, core functionality only

## Decision Factors

### Choose Nitro when

- ต้องการ deploy ไปยังหลาย platforms
- ต้องการ performance สูง
- ต้องการ built-in storage และ caching
- ต้องการ runtime flexibility
- กำลังสร้าง meta-framework

### Consider alternatives when

- ต้องการ simple setup สำหรับ Node.js เท่านั้น
- ไม่ต้องการ advanced features
- ทำงานกับ existing framework-specific solution
- ต้องการ minimal dependencies
