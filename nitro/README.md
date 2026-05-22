# Nitro - Next Generation Server Toolkit

Nitro เป็น Next Generation Server Toolkit สำหรับสร้าง web servers ที่ทันสมัย ใช้ h3 เป็นฐานและมี features ในตัวครบครัน พัฒนาโดยทีม Nuxt

## 🚀 Quick Start

### Installation

```bash
# Create new project
npx nuxi init nitro-app
cd nitro-app

# Or add to existing project
npm install nitropack
```

### First Route

```typescript
// routes/index.ts
export default defineEventHandler(() => {
  return { message: 'Hello Nitro!' }
})
```

### Run Development

```bash
npm run dev
```

## 📚 Documentation

### Introduction

- [Overview](intro-overview.md) - Nitro คืออะไรและทำอะไรได้
- [Key Concepts](intro-key-concepts.md) - แนวคิดหลักและสถาปัตยกรรม
- [When to Use](intro-when-to-use.md) - เมื่อไหร่ควรเลือกใช้ Nitro

### Setup

- [Installation](setup-installation.md) - วิธีติดตั้งและเริ่มต้น
- [Configuration](setup-configuration.md) - การตั้งค่าและปรับแต่ง

### API Reference

- [API Reference](api-reference.md) - API และฟังก์ชันทั้งหมด
- [Type Definitions](api-types.md) - TypeScript types และ interfaces
- [Examples](api-examples.md) - ตัวอย่างการใช้งานจริง

### Guides

- [Usage Guide](guide-usage.md) - คู่มือการใช้งานครบถ้วน
- [Best Practices](guide-best-practices.md) - แนวทางและ best practices
- [Testing](guide-testing.md) - การทดสอบและ quality assurance

## ✨ Features

### 🎯 Core Features

- **File-based Routing** - สร้าง routes จากไฟล์โครงสร้าง
- **Runtime Agnostic** - รองรับหลาย runtime (Node.js, Bun, Deno, Cloudflare Workers)
- **Build-time Compilation** - Compile routes ตอน build time สำหรับ performance สูง
- **Deploy Anywhere** - Deploy ได้บนทุก platform โดยไม่ต้องแก้ไข code

### 🔧 Advanced Features

- **Storage Layer** - Key-value storage ที่รองรับ drivers หลากหลาย
- **Built-in Caching** - Caching system สำหรับ routes และ functions
- **Database Integration** - Built-in SQL database ที่รองรับหลาย database types
- **WebSocket Support** - Real-time communication ด้วย WebSockets
- **Middleware System** - Flexible middleware สำหรับ request/response processing
- **Plugin Architecture** - Extensible plugin system

### 🛠️ Developer Experience

- **TypeScript Support** - Full TypeScript support และ type safety
- **Hot Module Replacement** - Fast development ด้วย HMR
- **Development Tools** - Built-in dev tools และ debugging
- **Error Handling** - Comprehensive error handling และ reporting

## 🏗️ Project Structure

```text
my-nitro-app/
├── routes/                 # Route handlers
│   ├── api/               # API routes
│   ├── pages/             # Page routes
│   └── index.ts           # Home page
├── middleware/            # Global middleware
├── plugins/              # Nitro plugins
├── utils/                # Utility functions
├── nitro.config.ts       # Configuration
├── package.json
└── tsconfig.json
```

## 🎯 Use Cases

### ✅ Perfect For

- **API Development** - RESTful APIs, GraphQL servers, microservices
- **Full-stack Applications** - SSR applications, universal rendering
- **Serverless Deployments** - Cloudflare Workers, Vercel Functions, Netlify Functions
- **Meta-framework Development** - Building custom frameworks
- **High-performance Applications** - Low-latency APIs, real-time applications

### ❅ Not Recommended For

- Simple static sites (use static site generators)
- Desktop applications (use Electron or Tauri)
- Mobile applications (use React Native or native development)

## 🚀 Deployment

### Supported Platforms

- **Cloudflare Workers** - Edge computing platform
- **Vercel** - Serverless functions and edge functions
- **Netlify** - Serverless functions
- **AWS Lambda** - Cloud functions
- **Docker** - Containerized deployment
- **Traditional Hosting** - Node.js, Bun, Deno runtime

### Build Commands

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to specific platform
npm run deploy:cloudflare
npm run deploy:vercel
```

## 🔧 Configuration

### Basic Configuration

```typescript
// nitro.config.ts
import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
  preset: 'node',
  devServer: {
    port: 3000
  },
  storage: {
    'redis': {
      driver: 'redis',
      options: {
        host: 'localhost',
        port: 6379
      }
    }
  }
})
```

### Environment-specific Config

```typescript
export default defineNitroConfig({
  $development: {
    devServer: { port: 3000 },
    routeRules: { '/api/**': { cors: true } }
  },
  $production: {
    preset: 'cloudflare',
    minify: true
  }
})
```

## 📊 Performance

### Benchmarks

- **Near-zero boot time** - ด้วย build-time compilation
- **Optimized bundles** - โหลดเฉพาะ code ที่จำเป็น
- **Memory efficient** - ไม่มี runtime router overhead
- **Serverless ready** - ออกแบบมาสำหรับ serverless environments

### Optimization Tips

1. **Use appropriate preset** สำหรับ deployment target
2. **Enable caching** สำหรับ static data
3. **Optimize database queries** ด้วย proper indexing
4. **Use storage layer** สำหรับ temporary data
5. **Minimize bundle size** ด้วย tree shaking

## 🧪 Testing

### Unit Testing

```typescript
import { describe, it, expect } from 'vitest'
import userHandler from '~/routes/api/users/[id].ts'

it('should return user data', async () => {
  const result = await userHandler(mockEvent)
  expect(result).toHaveProperty('user')
})
```

### Integration Testing

```typescript
it('should create and retrieve user', async () => {
  const createResponse = await $fetch('/api/users', {
    method: 'POST',
    body: { name: 'John', email: 'john@example.com' }
  })

  const getResponse = await $fetch(`/api/users/${createResponse.user.id}`)
  expect(getResponse.user).toEqual(createResponse.user)
})
```

## 🔒 Security

### Built-in Security Features

- **CORS Support** - Configurable CORS headers
- **Rate Limiting** - Prevent abuse and attacks
- **Input Validation** - Type-safe input handling
- **Error Handling** - Secure error responses
- **Authentication** - Flexible auth middleware

### Security Best Practices

1. **Validate all inputs** ก่อน processing
2. **Use HTTPS** สำหรับ production
3. **Implement rate limiting** สำหรับ API endpoints
4. **Sanitize outputs** ก่อนส่งให้ client
5. **Use environment variables** สำหรับ sensitive data

## 🤝 Contributing

### How to Contribute

1. Fork the repository
2. Create feature branch
3. Make changes with tests
4. Update documentation
5. Submit pull request

### Documentation Guidelines

- Follow established structure
- Use clear examples
- Include type definitions
- Test all code snippets
- Update CHANGELOG.md

## 📄 License

This skill documentation is licensed under the MIT License.

## 🔗 Links

### Official Resources

- [Nitro Documentation](https://nitro.build/)
- [Nitro GitHub](https://github.com/nitrojs/nitro)
- [Nuxt Framework](https://nuxt.com/)
- [H3 HTTP Framework](https://h3.unjs.io/)

### Community

- [Discord Server](https://discord.nuxt.com/)
- [Twitter](https://twitter.com/nuxt_js)
- [GitHub Discussions](https://github.com/nitrojs/nitro/discussions)

### Related Projects

- [Nuxt](https://nuxt.com/) - The Intuitive Vue Framework
- [UnJS](https://unjs.io/) - JavaScript Tools
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling

---

## 📈 Roadmap

### v1.1.0 (Planned)

- Advanced deployment patterns
- Performance benchmarks
- Real-world case studies
- Plugin development guide

### v1.2.0 (Planned)

- Migration guides
- Integration examples
- Security deep-dive
- Scaling strategies

### v2.0.0 (Planned)

- Nitro v3 features
- Latest API updates
- Enhanced performance
- Updated best practices

---

**Built with ❤️ by the Nitro community**
