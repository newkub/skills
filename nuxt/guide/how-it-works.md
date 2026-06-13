# How It Works

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        Nuxt Application                      │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │   Pages     │  │ Components  │  │    Composables      │ │
│  │  (Routes)   │  │ (Reusable)  │  │   (Logic Reuse)     │ │
│  └──────┬──────┘  └──────┬──────┘  └──────────┬──────────┘ │
│         │                │                     │            │
│         └────────────────┼─────────────────────┘            │
│                          ▼                                   │
│                 ┌────────────────┐                           │
│                 │   Nuxt Core   │                           │
│                 │  (HMR, Types,  │                           │
│                 │   Auto-imports)│                           │
│                 └────────┬───────┘                           │
│                          ▼                                   │
│  ┌─────────────────────────────────────────────────────────┐│
│  │              Rendering Modes                             ││
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────────────┐ ││
│  │  │   SSR   │ │   SSG   │ │   SPA   │ │      ISR       │ ││
│  │  └────┬────┘ └────┬────┘ └────┬────┘ └────────┬────────┘ ││
│  └───────┼───────────┼───────────┼────────────────┼──────────┘│
│          ▼           ▼           ▼                ▼           │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                    Vue.js Runtime                        ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

## Request Lifecycle

```
Browser ──► CDN/Server ──► Nuxt App ──► Pages/Components
              │               │              │
              │          ┌────▼────┐    ┌────▼────┐
              │          │ Plugins │    │ Middleware│
              │          │  (Init) │    │(Pre-route)│
              │          └────┬────┘    └────┬────┘
              │               │              │
              │          ┌────▼──────────────▼────┐
              │          │    Vue Components      │
              │          └────┬───────────────────┘
              │               │
              │          ┌────▼────┐
              └──────────│  HTML   │
                         │   DOM   │
                         └─────────┘
```

## File-Based Routing

```text
pages/
├── index.vue          ──► / (root)
├── about.vue          ──► /about
├── blog/
│   ├── index.vue      ──► /blog
│   ├── [slug].vue     ──► /blog/:slug (dynamic)
│   └── [year]/
│       └── [month].vue ──► /blog/:year/:month
└── [catchall].vue    ──► /* (wildcard)
```

## Auto-Import System

```text
components/
├── MyComponent.vue        ──► <MyComponent />
├── AppHeader.vue          ──► <AppHeader />
└── base/
    └── Button.vue         ──► <BaseButton />

composables/
├── useAuth.ts             ──► useAuth()
└── useFetchData.ts        ──► useFetchData()
```

## Nuxt Configuration Flow

```text
nuxt.config.ts
       │
       ├── modules[] ──► Extend functionality
       ├── plugins[] ──► Run at startup
       ├── app.vue ──► Main app template
       ├── middleware[] ──► Run before routes
       └── routeRules[] ──► Define rendering per route
```

## Key Files

| File | Purpose |
|------|---------|
| `nuxt.config.ts` | Main configuration |
| `app.vue` | App entry template |
| `pages/` | File-based routes |
| `components/` | Auto-imported components |
| `composables/` | Auto-imported composables |
| `layouts/` | Page templates |
| `server/` | Server routes/API |
| `public/` | Static assets |