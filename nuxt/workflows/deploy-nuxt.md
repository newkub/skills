# Deploy Nuxt

## Goal

Deploy Nuxt application ไปยัง production platforms

## Scope

ใช้สำหรับ deployment ไปยัง Vercel, Netlify, Cloudflare Pages, และ Node.js servers

## Execute

### 1. Build Application

```bash
bun run build
```

### 2. Choose Platform

#### Vercel

**Setup:**

```bash
bun install -g vercel
vercel login
```

**Deploy:**

```bash
vercel
```

**Configuration:**

สร้าง `vercel.json`:

```json
{
  "buildCommand": "bun run build",
  "outputDirectory": ".output/public",
  "framework": "nuxtjs"
}
```

**Environment Variables:**

ตั้งค่าใน Vercel dashboard:
- `NUXT_PUBLIC_API_BASE`
- `DATABASE_URL`
- ฯลฯ

#### Netlify

**Setup:**

```bash
bun install -g netlify-cli
netlify login
```

**Deploy:**

```bash
netlify deploy --prod
```

**Configuration:**

สร้าง `netlify.toml`:

```toml
[build]
  command = "bun run build"
  publish = ".output/public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Cloudflare Pages

**Setup:**

```bash
bun install -g wrangler
wrangler login
```

**Configure Nitro:**

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-pages'
  }
})
```

**Deploy:**

```bash
bun run build
npx wrangler pages deploy .output/public
```

#### Node.js Server

**Build:**

```bash
bun run build
```

**Run:**

```bash
node .output/server/index.mjs
```

**PM2:**

```bash
bun install -g pm2
pm2 start .output/server/index.mjs --name nuxt-app
```

### 3. Environment Variables

สร้าง `.env.production`:

```bash
NUXT_PUBLIC_API_BASE=https://api.example.com
DATABASE_URL=postgresql://...
SECRET_KEY=your-secret-key
```

### 4. Static Site Generation

สำหรับ static sites:

```bash
bun run generate
```

Deploy `.output/public` ไปยัง any static hosting (GitHub Pages, S3, ฯลฯ)

### 5. Docker Deployment

สร้าง `Dockerfile`:

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN bun ci
COPY . .
RUN bun run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json
RUN bun ci --production
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
```

**Build and Run:**

```bash
docker build -t nuxt-app .
docker run -p 3000:3000 nuxt-app
```

### 6. CI/CD

**GitHub Actions:**

สร้าง `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: bun ci
      - run: bun run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## Rules

- ใช้ environment variables สำหรับ sensitive data
- Build ใน CI/CD environment
- Test deployment ใน staging ก่อน production
- Monitor logs และ errors
- Set up proper caching headers
- Enable HTTPS
- Configure CORS ถ้าจำเป็น

## Expected Outcome

- Nuxt application deployed ไปยัง production
- CI/CD pipeline configured
- Environment variables set up
- HTTPS enabled
- Monitoring configured
