# Vercel - Features

คุณสมบัติและ capabilities ของ Vercel

## Deployment Features

### 1. Instant Deployments

```bash
# Deploy with single command
vercel

# Deploy to production
vercel --prod
```

### 2. Preview Deployments

```text
Every PR automatically gets:
- Unique preview URL
- Deployment status checks
- Shareable link
```

### 3. Git Integration

```bash
# Automatic on push
git push origin main

# Or manual
vercel --prod
```

## Framework Features

### Next.js Support

```typescript
// App Router (Next.js 13+)
// app/page.tsx
export default function Page() {
  return <h1>Hello World</h1>;
}

// Server Components
async function Component() {
  const data = await fetch('https://api.example.com');
  return <div>{data.name}</div>;
}

// API Routes
// app/api/users/route.ts
export async function GET() {
  return Response.json({ users: [] });
}
```

### ISR (Incremental Static Regeneration)

```typescript
// pages/blog/[id].tsx
export async function getStaticProps({ params }) {
  const post = await fetchPost(params.id);
  
  return {
    props: { post },
    revalidate: 60 // Seconds
  };
}
```

### Image Optimization

```tsx
import Image from 'next/image';

export default function Page() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero"
      width={800}
      height={600}
      priority
    />
  );
}
```

## Serverless Features

### Edge Functions

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set('X-Custom', 'value');
  return response;
}

export const config = {
  matcher: '/((?!api|_next/static).*)',
};
```

### Serverless Functions

```typescript
// pages/api/users.ts
export default async function handler(req, res) {
  const users = await db.users.findMany();
  res.status(200).json(users);
}
```

### Streaming Responses

```typescript
// app/api/stream/route.ts
export async function GET() {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      for (let i = 0; i < 10; i++) {
        controller.enqueue(encoder.encode(`chunk ${i}\n`));
        await new Promise(r => setTimeout(r, 500));
      }
      controller.close();
    }
  });
  
  return new Response(stream);
}
```

## Storage Features

### Vercel KV

```typescript
import { kv } from '@vercel/kv';

// Set value
await kv.set('user:123', JSON.stringify({ name: 'John' }));

// Get value
const user = await kv.get('user:123');

// Delete
await kv.del('user:123');
```

### Vercel Postgres

```typescript
import { sql } from '@vercel/postgres';

// Query
const { rows } = await sql`SELECT * FROM users`;

// Parameterized
const { rows } = await sql`SELECT * FROM users WHERE id = ${id}`;
```

### Vercel Blob

```typescript
import { put, del, list } from '@vercel/blob';

// Upload
const blob = await put('file.txt', 'Hello', {
  access: 'public'
});

// List
const { blobs } = await list();

// Delete
await del('file.txt');
```

## Performance Features

### Built-in Analytics

```typescript
// app/page.tsx
import { Analytics } from '@vercel/analytics';

export default function Page() {
  return (
    <>
      <h1>My Page</h1>
      <Analytics />
    </>
  );
}
```

### Speed Insights

```typescript
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Page() {
  return (
    <>
      <h1>My Page</h1>
      <SpeedInsights />
    </>
  );
}
```

### Edge Caching

```typescript
// Set cache headers
export const config = {
  revalidate: 60, // ISR
};

export default function Page() {
  return <h1>Cached Page</h1>;
}
```

## Configuration Features

### vercel.json

```json
{
  "version": 2,
  "builds": [
    { "src": "package.json", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "/api/$1" }
  ],
  "regions": ["iad1", "sfo1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" }
      ]
    }
  ]
}
```

### Environment Variables

```bash
# Add via CLI
vercel env add DATABASE_URL

# Pull locally
vercel env pull
```

## Developer Experience

### CLI Features

| Command | Description |
|---------|-------------|
| `vercel dev` | Local dev server |
| `vercel login` | Authenticate |
| `vercel link` | Link to project |
| `vercel logs` | View function logs |
| `vercel inspect` | View deployment |
| `vercel domains` | Manage domains |

### Local Development

```bash
# Start dev server with local env
vercel dev

# Specify port
vercel dev --port 3000

# Withturbo
vercel dev --turbo
```

### TypeScript Support

```typescript
// Automatic types for environment
interface Env {
  DATABASE_URL: string;
  API_KEY: string;
}

// Access with type safety
const dbUrl = process.env.DATABASE_URL;
```

## Security Features

### Password Protection

```json
// vercel.json
{
  "passwords": [
    {
      "path": "/staging",
      "password": "secret123"
    }
  ]
}
```

### Headers

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

### Edge Security

```typescript
// Rate limiting at edge
export const config = {
  rateLimit: {
    window: '10s',
    max: 100
  }
};
```

## Integrations

### Database Connectors

| Database | Package |
|----------|---------|
| PostgreSQL | `@vercel/postgres` |
| MySQL | `@vercel/mysql` |
| Redis | `@upstash/redis` |
| MongoDB | `mongodb` |
| PlanetScale | `@planetscale/database` |

### Monitoring

| Service | Purpose |
|---------|---------|
| Sentry | Error tracking |
| Datadog | APM |
| New Relic | Performance |
| Vercel | Built-in analytics |

### CMS Integration

```typescript
// Contentful
import { createClient } from 'contentful-management';

// Sanity
import { createClient } from '@sanity/client';

// Strapi
const response = await fetch('https://api.strapi.io/...');
```

## Team Features

### Collaboration

```text
- Team members
- Roles (Owner, Developer, Viewer)
- Access control
- SSO integration
```

### Git Integration

```text
- GitHub
- GitLab
- Bitbucket
- Automatic deployments
- Status checks
```

## Comparison

| Feature | Vercel | Netlify | AWS Amplify |
|---------|--------|---------|------------|
| Preview Deployments | ✅ | ✅ | ✅ |
| Edge Functions | ✅ | ✅ | ❌ |
| Built-in Analytics | ✅ | ❌ | ❌ |
| Image Optimization | ✅ | ✅ | ❌ |
| Serverless Functions | ✅ | ✅ | ✅ |
| Global CDN | ✅ | ✅ | ✅ |
| Free Tier | 100GB | 100GB | 5GB |

## สรุป

- Vercel มี deployment features ที่ครบถ้วน
- Next.js ได้รับการ support เป็นพิเศษ
- Storage options (KV, Postgres, Blob)
- Built-in analytics และ performance insights
- CLI ที่ powerful สำหรับ dev workflow