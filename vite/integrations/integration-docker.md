---
title: Integration - Docker
description: การใช้งาน Vite ร่วมกับ Docker สำหรับ development และ production
---

# Docker Integration

## Dockerfile สำหรับ Vite

### Multi-stage Build

```dockerfile
# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json bun.lockb ./
RUN bun install

# Copy source code
COPY . .

# Build for production
RUN bun run build

# Stage 2: Production
FROM nginx:alpine

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;

    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## Development with Docker

### docker-compose.yml

```yaml
version: '3.8'

services:
  vite-app:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
      - CHOKIDAR_USEPOLLING=true
    command: bun run dev
```

### Dockerfile for Development

```dockerfile
FROM node:20-alpine

WORKDIR /app

# Install dependencies
RUN apk add --no-cache git

# Copy package files
COPY package.json bun.lockb ./
RUN bun install

# Copy source
COPY . .

# Expose Vite port
EXPOSE 5173

# Start dev server
CMD ["bun", "run", "dev"]
```

---

## Hot Reload in Docker

### ปัญหา HMR ใน Docker

```typescript
// vite.config.ts
export default defineConfig({
  server: {
    host: true,           // รับ connection จากภายนอก container
    port: 5173,
    hmr: {
      port: 5173,
      host: '0.0.0.0'   // สำคัญสำหรับ Docker
    },
    watch: {
      usePolling: true    // จำเป็นสำหรับ Docker on Windows/Mac
    }
  }
})
```

### Docker Compose with HMR

```yaml
services:
  frontend:
    build: .
    ports:
      - "5173:5173"
    volumes:
      - .:/app:delegated
      - /app/node_modules
    environment:
      - CHOKIDAR_USEPOLLING=true
      - WATCHPACK_POLLING=true
    stdin_open: true
    tty: true
```

---

## Production Deployment

### Build and Push

```bash
# Build image
docker build -t my-vite-app:latest .

# Tag for registry
docker tag my-vite-app:latest registry.example.com/my-vite-app:latest

# Push to registry
docker push registry.example.com/my-vite-app:latest
```

### Docker Compose Production

```yaml
version: '3.8'

services:
  vite-app:
    image: my-vite-app:latest
    ports:
      - "80:80"
    restart: unless-stopped
    
  # With reverse proxy
  nginx:
    image: nginx:alpine
    ports:
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - vite-app
```

---

## Optimizing Docker Image

### ลด Image Size

```dockerfile
# Use Alpine
FROM node:20-alpine AS builder

# Only install production dependencies
RUN bun install --production

# Use multi-stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
```

### Caching Dependencies

```dockerfile
# Cache layer for dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install

# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build
```

---

## Environment Variables

### Build-time Variables

```dockerfile
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN bun run build
```

```bash
docker build --build-arg VITE_API_URL=https://api.example.com .
```

### Runtime Variables

```typescript
// ใช้ envsubst สำหรับ runtime config
window.ENV = {
  API_URL: '${VITE_API_URL}',
  VERSION: '${VITE_APP_VERSION}'
}
```

```dockerfile
# Entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
```

---

## Debugging Docker

### Logs

```bash
# View container logs
docker logs -f vite-app-container

# Execute into container
docker exec -it vite-app-container sh

# Check running processes
docker exec vite-app-container ps aux
```

### Common Issues

| Issue | Solution |
|-------|----------|
| HMR not working | Set `host: '0.0.0.0'` in vite.config |
| File changes not detected | Enable `usePolling: true` |
| Port already in use | Change port mapping in docker-compose |
| Build fails | Check node_modules volume mount |

---

## Docker Commands Cheat Sheet

```bash
# Development
docker-compose up -d              # Start containers
docker-compose down               # Stop containers
docker-compose logs -f            # Follow logs
docker-compose exec vite-app sh   # Shell into container

# Production
docker build -t vite-app .      # Build image
docker run -p 80:80 vite-app    # Run container
docker stop vite-app            # Stop container
```
