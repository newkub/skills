# Architecture ของ UnoCSS

## Internal Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                      UnoCSS Architecture                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────────────────────┐ │
│  │   Presets   │  │    Rules     │  │       Transformers         │ │
│  │  ┌───────┐  │  │  ┌────────┐  │  │  ┌─────────────────────┐   │ │
│  │  │ Uno   │  │  │  │ Static │  │  │  │ @apply directives   │   │ │
│  │  │ Attr  │  │  │  │Dynamic │  │  │  │ variant groups      │   │ │
│  │  │ Icons │  │  │  │ Custom │  │  │  │ compile classes     │   │ │
│  │  │ Typos │  │  │  └────────┘  │  │  └─────────────────────┘   │ │
│  │  └───────┘  │  └──────────────┘  └────────────────────────────┘ │
│  └──────┬──────┘        │                        │                  │
│         │               │                        │                  │
│         ▼               ▼                        ▼                  │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                     Core Engine                               │   │
│  │                                                               │   │
│  │  ┌────────┐   ┌──────────┐   ┌──────────┐   ┌────────────┐  │   │
│  │  │Scanner │──▶│Extractor │──▶│ Resolver │──▶│ Generator  │  │   │
│  │  └────────┘   └──────────┘   └──────────┘   └────────────┘  │   │
│  │                                                               │   │
│  └───────────────────────────┬───────────────────────────────────┘   │
│                              │                                       │
│                              ▼                                       │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                  Output (CSS / JSON)                          │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Core Engine

`@unocss/core` คือหัวใจของ UnoCSS:

| Component | หน้าที่ |
|-----------|---------|
| **Scanner** | อ่าน content จาก filesystem/inline |
| **Extractor** | แยก tokens (class names) จาก content |
| **Resolver** | Match tokens กับ rules/presets |
| **Generator** | สร้าง CSS string output |

## Preset System

```
┌────────────────────────────────────────────┐
│              Preset Pipeline               │
├────────────────────────────────────────────┤
│                                            │
│  Preset ──▶ rules[]                        │
│         ──▶ variants[]                     │
│         ──▶ shortcuts{}                    │
│         ──▶ theme{}                        │
│         ──▶ preflights[]                   │
│         ──▶ layers{}                       │
│         ──▶ options{}                      │
│                                            │
│  Merge all presets → Final Config          │
│                                            │
└────────────────────────────────────────────┘
```

- Presets แต่ละตัว export rules, variants, theme, etc.
- UnoCSS merge presets ทั้งหมดเข้าด้วยกัน
- Custom rules/shortcuts ถูก merge ท้ายสุด (override ได้)

## Layers System

CSS output ถูกจัดเป็น layers:

```
┌─────────────────────────────────────┐
│  @layer pre       (preflights)     │
│  @layer shortcuts (user shortcuts) │
│  @layer default   (rules output)   │
│  @layer post      (post-rules)     │
└─────────────────────────────────────┘
```

| Layer | หน้าที่ |
|-------|---------|
| **pre** | Preflights (CSS reset, base styles) |
| **shortcuts** | User-defined shortcuts |
| **default** | Main utility rules |
| **post** | Post-rules (overrides) |

## Plugin Architecture

```
┌───────────────────────────────────────────────┐
│           Build Tool Integration              │
├───────────────────────────────────────────────┤
│                                               │
│  ┌─────────┐  ┌──────────┐  ┌─────────────┐ │
│  │  Vite   │  │ Webpack  │  │   PostCSS   │ │
│  │ Plugin  │  │  Plugin  │  │   Plugin    │ │
│  └────┬────┘  └────┬─────┘  └──────┬──────┘ │
│       │            │               │         │
│       └────────────┼───────────────┘         │
│                    │                         │
│                    ▼                         │
│           ┌────────────────┐                 │
│           │  @unocss/core  │                 │
│           │   Generator    │                 │
│           └────────────────┘                 │
│                                               │
└───────────────────────────────────────────────┘
```

- แต่ละ plugin ทำหน้าที่เป็น bridge ระหว่าง build tool กับ core
- Plugin ส่ง content ให้ core, รับ CSS output กลับ
- Cache ถูกจัดการที่ plugin level

## Config Resolution

```
┌──────────────────────────────────────────────────┐
│              Config Resolution                    │
├──────────────────────────────────────────────────┤
│                                                  │
│  1. Load config file (uno.config.ts)             │
│  2. Resolve presets (merge rules, theme)         │
│  3. Merge user rules/shortcuts                   │
│  4. Resolve transformers                         │
│  5. Build final config object                    │
│                                                  │
│  Priority: User Config > Presets > Defaults      │
│                                                  │
└──────────────────────────────────────────────────┘
```

## Package Structure

| Package | คำอธิบาย |
|---------|----------|
| `@unocss/core` | Core engine |
| `@unocss/config` | Config loader |
| `@unocss/extractor-pug` | Pug extractor |
| `@unocss/preset-uno` | Default preset |
| `@unocss/preset-attributify` | Attributify preset |
| `@unocss/preset-icons` | Icons preset |
| `@unocss/preset-typography` | Typography preset |
| `@unocss/preset-web-fonts` | Web fonts preset |
| `@unocss/transformer-directives` | CSS directives |
| `@unocss/transformer-variant-group` | Variant groups |
| `unocss` | Meta package (รวมทั้งหมด) |
