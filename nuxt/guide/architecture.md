# Architecture

## Nuxt Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                       Nuxt Application                        │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │                    Source Code                          │  │
│  │  ┌──────────┐  ┌────────────┐  ┌───────────────────┐   │  │
│  │  │  pages/  │  │ components │  │   composables/    │   │  │
│  │  │ (routes) │  │  (reusable)│  │   (logic reuse)   │   │  │
│  │  └──────────┘  └────────────┘  └───────────────────┘   │  │
│  │  ┌──────────┐  ┌────────────┐  ┌───────────────────┐   │  │
│  │  │ layouts/ │  │ middleware/│  │    plugins/        │   │  │
│  │  │ (templates)│ │ (pre-route)│  │   (initialization)│   │  │
│  │  └──────────┘  └────────────┘  └───────────────────┘   │  │
│  └────────────────────────┬───────────────────────────────┘  │
│                           │                                   │
│                           ▼                                   │
│  ┌────────────────────────────────────────────────────────┐  │
│  │                    Nuxt Build                          │  │
│  │  ┌─────────────────┐  ┌─────────────────────────────┐  │  │
│  │  │   Vite/Nitro    │  │     TypeScript Compiler      │  │  │
│  │  └─────────────────┘  └─────────────────────────────┘  │  │
│  └────────────────────────┬───────────────────────────────┘  │
│                           │                                   │
│                           ▼                                   │
│  ┌────────────────────────────────────────────────────────┐  │
│  │                  Output (.output/)                      │  │
│  │  ┌──────────────┐  ┌────────────────────────────────┐  │  │
│  │  │   client/    │  │          server/               │  │  │
│  │  │  (bundle)    │  │  (Nitro server + API routes)   │  │  │
│  │  └──────────────┘  └────────────────────────────────┘  │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

## Directory Structure

```text
my-nuxt-app/
├── nuxt.config.ts       # Main configuration
├── app.vue              # App entry component
│
├── pages/               # File-based routing
│   ├── index.vue        # Route: /
│   ├── about.vue        # Route: /about
│   └── blog/
│       ├── index.vue    # Route: /blog
│       └── [slug].vue   # Route: /blog/:slug
│
├── components/          # Auto-imported components
│   ├── AppHeader.vue    # <AppHeader />
│   └── base/
│       └── Button.vue   # <BaseButton />
│
├── composables/         # Auto-imported composables
│   ├── useAuth.ts      # useAuth()
│   └── useTheme.ts     # useTheme()
│
├── layouts/             # Page templates
│   ├── default.vue
│   └── admin.vue
│
├── middleware/          # Route middleware
│   ├── auth.ts
│   └── analytics.ts
│
├── plugins/             # Startup plugins
│   ├── auth.client.ts
│   └── analytics.ts
│
├── server/              # Server-side code
│   ├── api/             # API routes
│   │   └── users.get.ts
│   ├── middleware/      # Server middleware
│   └── utils/           # Server utilities
│
├── assets/              # Build assets
│   ├── css/
│   └── images/
│
├── public/              # Static files
│   ├── favicon.ico
│   └── robots.txt
│
└── utils/               # Auto-imported utilities
    └── formatters.ts
```

## Request Flow

```
Browser Request
      │
      ▼
┌─────────────────┐
│   CDN/Server    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Nitro Server  │
│  (H3 Runtime)   │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌───────┐ ┌────────────┐
│ Pages │ │  Middleware│
│ (SSR) │ │            │
└───┬───┘ └────────────┘
    │
    ▼
┌─────────────────┐
│  Vue Components │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  HTML Response │
└─────────────────┘
```

## Rendering Modes

| Mode | Description | Use Case |
|------|-------------|----------|
| SSR | Server renders on each request | Dynamic content, SEO |
| SSG | Pre-rendered HTML at build | Static content, blogs |
| ISR | Hybrid with revalidation | Occasional updates |
| SPA | Client-side only | Dashboards, admin |

## Nuxt Module System

```
┌─────────────────────────────────────────┐
│           Nuxt Module Chain             │
├─────────────────────────────────────────┤
│                                         │
│  Module A ──► Module B ──► Module C     │
│      │            │            │        │
│      ▼            ▼            ▼        │
│  nuxt.config    hooks       template     │
│                                         │
└─────────────────────────────────────────┘
```

## State Flow

```
┌─────────────────────────────────────────────────────┐
│                  Client Hydration                   │
├─────────────────────────────────────────────────────┤
│                                                      │
│  useState() ──► Pinia ──► Composables               │
│      │              │            │                  │
│      ▼              ▼            ▼                  │
│  SSR-safe        Complex        Reusable             │
│  state           state          logic                │
│                                                      │
└─────────────────────────────────────────────────────┘
```