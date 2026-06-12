<div align="center">

# Windsurf Skills

### AI-Powered Development Knowledge Base

A comprehensive collection of **120+ skill definitions** that power the Cascade AI assistant in Windsurf IDE. Each skill provides structured knowledge, workflows, and best practices across programming languages, frameworks, libraries, cloud platforms, and development tools.

[Quick Start](#quick-start) • [Skills Catalog](#skills-catalog) • [Skill Structure](#skill-structure) • [Contributing](#notes)

</div>

> 🚀 **Status**: Active — 120+ skills covering modern development stack

---

## Features

Curated skill categories covering the full spectrum of modern software development.

| Icon | Feature | Description | Benefit | Usage |
|------|---------|-------------|---------|-------|
| <img src="https://api.iconify.design/lucide:wrench.svg?color=%23f59e0b" width="18" height="18"> | **Development Tools** | 37 skills covering CLI tools, linters, formatters, bundlers, and CI/CD utilities | Master essential development tooling with AI-guided workflows | `tool-*` |
| <img src="https://api.iconify.design/lucide:package.svg?color=%238b5cf6" width="18" height="18"> | **Libraries** | 28 skills for popular libraries including React, Vue, TanStack, Drizzle, and Effect-TS | Get contextual help for library APIs, patterns, and integrations | `lib-*` |
| <img src="https://api.iconify.design/lucide:code.svg?color=%233b82f6" width="18" height="18"> | **Languages** | 13 programming language skills covering TypeScript, Rust, Go, Python, and more | Language-specific idioms, patterns, and best practices on demand | `lang-*` |
| <img src="https://api.iconify.design/lucide:workflow.svg?color=%2310b981" width="18" height="18"> | **Development Flows** | 9 workflow skills for debugging, refactoring, code review, shipping, and validation | Structured step-by-step processes for common development tasks | `flow-*` |
| <img src="https://api.iconify.design/lucide:layers.svg?color=%23ec4899" width="18" height="18"> | **Frameworks** | 8 framework skills including Next.js, Nuxt, Tauri, Electron, Flutter, and Dioxus | Framework architecture guidance with project setup workflows | `framework-*` |
| <img src="https://api.iconify.design/lucide:cloud.svg?color=%2306b6d4" width="18" height="18"> | **Cloud Platforms** | 7 skills for AWS, Cloudflare, Vercel, esm.sh, and jsDelivr | Deployment strategies and cloud service configuration help | `cloud-*` |
| <img src="https://api.iconify.design/lucide:book-open.svg?color=%23f97316" width="18" height="18"> | **Guides** | 6 guide skills covering design patterns, math, programming, software architecture, and web dev | Foundational knowledge with practical examples and references | `guide-*` |
| <img src="https://api.iconify.design/lucide:puzzle.svg?color=%2314b8a6" width="18" height="18"> | **Extension Creation** | 3 skills for building browser, Raycast, and VS Code extensions | Step-by-step extension development with packaging and publishing | `create-*` |
| <img src="https://api.iconify.design/lucide:book-marked.svg?color=%23a855f7" width="18" height="18"> | **Glossaries** | 3 terminology glossaries for blockchain, Buddhist texts, and development jargon | Quick reference for domain-specific terminology and concepts | `glossary-*` |
| <img src="https://api.iconify.design/lucide:cpu.svg?color=%236366f1" width="18" height="18"> | **Computer Science** | 2 skills covering computer architecture and computation fundamentals | Core CS concepts explained with practical applications | `computer-*` |
| <img src="https://api.iconify.design/lucide:terminal.svg?color=%2384cc16" width="18" height="18"> | **Runtimes** | 2 runtime environment skills for Bun and Node.js | Runtime-specific APIs, configuration, and performance optimization | `runtime-*` |

> [!NOTE]
> **Key Concepts**
>
> <details>
> <summary>Key Concepts</summary>
>
> | Icon | Concept | Benefit |
> |------|---------|---------|
> | <img src="https://api.iconify.design/lucide:folder-tree.svg?color=%233b82f6" width="18" height="18"> | **Prefix-Based Classification** | Skills are organized by prefix (`lib-`, `tool-`, `lang-`, etc.) for instant category recognition and intuitive navigation |
> | <img src="https://api.iconify.design/lucide:file-text.svg?color=%2310b981" width="18" height="18"> | **SKILL.md Manifest** | Every skill has a `SKILL.md` entry point that the Cascade AI reads to load contextual knowledge |
> | <img src="https://api.iconify.design/lucide:git-branch.svg?color=%23f59e0b" width="18" height="18"> | **Guide & Reference Split** | Content is split into `guide/` for learning and `references/` for quick lookup, matching how developers consume docs |
>
> </details>
>
> <details>
> <summary>Principles</summary>
>
> | Icon | Principle | User Impact |
> |------|-----------|-------------|
> | <img src="https://api.iconify.design/lucide:target.svg?color=%23ef4444" width="18" height="18"> | **Domain-Specific Knowledge** | Each skill focuses on a single technology, providing deep expertise rather than shallow overviews |
> | <img src="https://api.iconify.design/lucide:repeat.svg?color=%238b5cf6" width="18" height="18"> | **Consistent Structure** | All skills follow the same folder layout, so you always know where to find guides, references, and workflows |
> | <img src="https://api.iconify.design/lucide:zap.svg?color=%23f59e0b" width="18" height="18"> | **AI-First Content** | Content is written for AI consumption, enabling Cascade to provide accurate, contextual answers instantly |
>
> </details>
>
> <details>
> <summary>FAQs</summary>
>
> | Question | Answer |
> |----------|--------|
> | What is a Windsurf Skill? | A structured collection of markdown files that teach the Cascade AI assistant about a specific technology, tool, or concept |
> | How does Cascade use skills? | Cascade reads `SKILL.md` and related files from skill folders to provide contextual, accurate answers when you ask about that technology |
> | Can I add my own skills? | Yes — create a new folder following the prefix convention and add a `SKILL.md` with the standard structure |
> | What prefixes are available? | `tool-`, `lib-`, `lang-`, `flow-`, `framework-`, `cloud-`, `guide-`, `create-`, `glossary-`, `computer-`, `runtime-` |
>
> </details>
>
> <details>
> <summary>Best Practices</summary>
>
> - Always start a new skill with a `SKILL.md` manifest file that describes the skill's purpose and scope
> - Split content into `guide/` for learning-oriented docs and `references/` for lookup-oriented material
> - Keep each guide file under 200 lines for optimal AI context loading and maintainability
> - Use kebab-case for all file and folder names to maintain consistency across the repository
>
> </details>

## Quick Start

Get started with the Windsurf Skills repository.

1. **Clone the repository**

```bash
# Clone the skills repository
git clone https://github.com/newkub/windsurf-skills.git
cd windsurf-skills
```

2. **Install dependencies**

```bash
# Install with Bun
bun install
```

3. **Open in Windsurf IDE**

```bash
# Open the project in Windsurf to activate Cascade with skills
windsurf .
```

4. **Verify skills are loaded**

Ask Cascade a question about any skill topic (e.g., "How do I set up a Tauri project?") to confirm skills are being used.

## Usage

### Browse Skills

Explore the skill catalog by navigating into any skill folder. Each skill contains a `SKILL.md` entry point with an overview and links to detailed guides.

```bash
# List all available skill directories
ls -d */

# View a specific skill's manifest
cat framework-tauri/SKILL.md

# Browse guide content within a skill
ls framework-tauri/guide/
```

### Use with Cascade AI

Skills are automatically loaded by the Cascade AI assistant when you work in Windsurf IDE. Ask questions naturally and Cascade will draw from the relevant skill's knowledge base.

```
# Example prompts that leverage skills:
"How do I configure Biome for my TypeScript project?"
→ Cascade uses tool-biome skill knowledge

"What's the best way to handle state in SolidJS?"
→ Cascade uses lib-solidjs skill knowledge

"Help me refactor this function"
→ Cascade uses flow-refactoring skill workflows
```

### Run Quality Checks

Use the built-in scripts to validate and format skill content.

```bash
# Type-check and lint all files
bun run check

# Format all files with Biome
bun run format

# Build and generate workflow files
bun run build
```

### Contribute a New Skill

Create a new skill by setting up the standard folder structure with the appropriate prefix.

```bash
# Create a new skill folder with the correct prefix
mkdir -p lib-my-library/{guide,references}

# Create the required SKILL.md manifest
touch lib-my-library/SKILL.md

# Add guide content
# lib-my-library/guide/key-concept.md
# lib-my-library/guide/features.md
# lib-my-library/guide/quick-start.md
# lib-my-library/guide/best-practices.md
```

## Skills Catalog

Complete listing of all skills organized by category.

### Development Tools (`tool-*`) — 37 skills

Tools for linting, formatting, bundling, testing, CI/CD, and developer productivity.

| Skill | Description |
|-------|-------------|
| `tool-agentic` | Agentic AI development tools |
| `tool-ast-grep` | AST-based code searching and refactoring |
| `tool-aube` | Aube development tool |
| `tool-biome` | Biome linter and formatter |
| `tool-bunup` | Bun-based package upgrade tool |
| `tool-cargo` | Rust's Cargo package manager |
| `tool-changesets` | Changesets for version management |
| `tool-codex` | Codex AI coding tool |
| `tool-cursor` | Cursor AI IDE |
| `tool-dprint` | dprint code formatter |
| `tool-eslint` | ESLint JavaScript linter |
| `tool-git` | Git version control workflows |
| `tool-github-actions` | GitHub Actions CI/CD |
| `tool-jspm` | JSPM package manager |
| `tool-knip` | Knip dead code detection |
| `tool-lefthook` | Lefthook Git hooks manager |
| `tool-mise` | Mise polyglot tool version manager |
| `tool-moonrepo` | Moonrepo build system |
| `tool-my-cli` | Custom CLI tool development |
| `tool-nextest` | Nextest Rust test runner |
| `tool-nvim` | Neovim editor configuration |
| `tool-oxlint` | Oxlint JavaScript linter |
| `tool-playwright` | Playwright browser testing |
| `tool-postgres` | PostgreSQL database |
| `tool-qoder` | Qoder AI development tool |
| `tool-release-it` | Release-it release automation |
| `tool-remotion` | Remotion video creation |
| `tool-renovate` | Renovate dependency updater |
| `tool-rmux` | Rmux terminal multiplexer |
| `tool-rolldown` | Rolldown JavaScript bundler |
| `tool-sccache` | Sccache compilation caching |
| `tool-semantic-release` | Semantic Release automation |
| `tool-supabase` | Supabase backend platform |
| `tool-trae` | Trae AI IDE |
| `tool-turborepo` | Turborepo monorepo management |
| `tool-windsurf` | Windsurf IDE |
| `tool-wrangler` | Cloudflare Wrangler CLI |

### Libraries (`lib-*`) — 28 skills

Popular JavaScript/TypeScript libraries and ecosystem packages.

| Skill | Description |
|-------|-------------|
| `lib-animejs` | Anime.js animation library |
| `lib-bunup` | Bunup utility library |
| `lib-drizzle` | Drizzle ORM |
| `lib-effect-ts` | Effect-TS functional programming |
| `lib-elysia` | Elysia web framework for Bun |
| `lib-mastra` | Mastra AI agent framework |
| `lib-nanostore` | Nanostores state management |
| `lib-nitro` | Nitro server engine |
| `lib-orpc` | oRPC type-safe API layer |
| `lib-pinia` | Pinia state management for Vue |
| `lib-react` | React UI library |
| `lib-shadcn-react` | shadcn/ui component library |
| `lib-solidjs` | SolidJS reactive UI |
| `lib-storybook` | Storybook UI workshop |
| `lib-svelte` | Svelte compiler and framework |
| `lib-tanstack-form` | TanStack Form |
| `lib-tanstack-hotkeys` | TanStack Hotkeys |
| `lib-tanstack-query` | TanStack Query data fetching |
| `lib-tanstack-router` | TanStack Router |
| `lib-tsdown` | tsdown TypeScript bundler |
| `lib-unocss` | UnoCSS atomic CSS engine |
| `lib-vite` | Vite build tool |
| `lib-vitest` | Vitest testing framework |
| `lib-vue` | Vue.js framework |
| `lib-workos` | WorkOS auth and user management |
| `lib-wxt` | WXT web extension toolkit |
| `lib-zod` | Zod schema validation |
| `lib-zustand` | Zustand state management |

### Programming Languages (`lang-*`) — 13 skills

Language-specific idioms, patterns, and standard library references.

| Skill | Description |
|-------|-------------|
| `lang-c-sharp` | C# programming language |
| `lang-elixir` | Elixir functional language |
| `lang-go` | Go programming language |
| `lang-graphql` | GraphQL query language |
| `lang-javascript` | JavaScript language |
| `lang-kotlin` | Kotlin programming language |
| `lang-lua` | Lua scripting language |
| `lang-python` | Python programming language |
| `lang-ruby` | Ruby programming language |
| `lang-rust` | Rust systems language |
| `lang-scalar` | Scala programming language |
| `lang-typescript` | TypeScript language |
| `lang-zig` | Zig systems language |

### Development Flows (`flow-*`) — 9 skills

Structured workflows for common development tasks.

| Skill | Description |
|-------|-------------|
| `flow-analyze-codebase` | Codebase analysis workflow |
| `flow-debugging` | Systematic debugging process |
| `flow-follow-write-skills` | Skill writing workflow |
| `flow-refactoring` | Code refactoring patterns |
| `flow-resolve-error` | Error resolution workflow |
| `flow-review` | Code review process |
| `flow-ship` | Shipping and deployment flow |
| `flow-validate` | Validation and testing flow |
| `flow-verify` | Verification and QA process |

### Frameworks (`framework-*`) — 8 skills

Full-stack, desktop, mobile, and TUI frameworks.

| Skill | Description |
|-------|-------------|
| `framework-dioxus` | Dioxus Rust UI framework |
| `framework-electron` | Electron desktop apps |
| `framework-flutter` | Flutter cross-platform apps |
| `framework-leptos` | Leptos Rust web framework |
| `framework-next` | Next.js React framework |
| `framework-nuxt` | Nuxt Vue.js framework |
| `framework-ratatui` | Ratatui Rust TUI framework |
| `framework-tauri` | Tauri desktop apps |

### Cloud Platforms (`cloud-*`) — 7 skills

Cloud providers, CDNs, and edge computing platforms.

| Skill | Description |
|-------|-------------|
| `cloud-aws-sdk` | AWS SDK integration |
| `cloud-cloudflare` | Cloudflare platform services |
| `cloud-cloudflare-sandbox` | Cloudflare sandboxed execution |
| `cloud-cloudflare-worker` | Cloudflare Workers edge runtime |
| `cloud-esm-sh` | esm.sh CDN for ES modules |
| `cloud-jsdelivr` | jsDelivr CDN |
| `cloud-vercel` | Vercel deployment platform |

### Guides (`guide-*`) — 6 skills

Foundational guides and best practices.

| Skill | Description |
|-------|-------------|
| `guide-design-patterns` | Software design patterns |
| `guide-math` | Mathematics for developers |
| `guide-programming` | Programming fundamentals |
| `guide-software-architecture` | Software architecture principles |
| `guide-vibe-coding` | Vibe coding methodology |
| `guide-webdev` | Web development guide |

### Extension Creation (`create-*`) — 3 skills

Guides for building IDE and browser extensions.

| Skill | Description |
|-------|-------------|
| `create-browser-extensions` | Browser extension development |
| `create-raycast-extensions` | Raycast extension development |
| `create-vscode-extensions` | VS Code extension development |

### Glossaries (`glossary-*`) — 3 skills

Domain-specific terminology references.

| Skill | Description |
|-------|-------------|
| `glossary-blockchain` | Blockchain terminology |
| `glossary-buddhavacana` | Buddhist text terminology |
| `glossary-dev` | Developer jargon glossary |

### Computer Science (`computer-*`) — 2 skills

Core computer science concepts.

| Skill | Description |
|-------|-------------|
| `computer-arhitecture` | Computer architecture fundamentals |
| `computer-computation` | Computation theory and practice |

### Runtimes (`runtime-*`) — 2 skills

JavaScript runtime environments.

| Skill | Description |
|-------|-------------|
| `runtime-bun` | Bun JavaScript runtime |
| `runtime-node` | Node.js runtime |

### Additional Skills

| Skill | Description |
|-------|-------------|
| `agentic-workflows` | Agentic AI workflow patterns |
| `convent-app-to-saas` | Application to SaaS conversion |
| `learn` | Learning resources and methods |
| `software-testing` | Software testing strategies |

## Skill Structure

Every skill follows a consistent folder structure for predictable navigation.

```
skill-name/
├── SKILL.md              # Entry point — skill overview and metadata
├── knowledge/            # Knowledge base
│   ├── guide/            # Learning-oriented documentation
│   │   ├── key-concept.md    # Core concepts and mental models
│   │   ├── features.md       # Feature breakdown and usage
│   │   ├── quick-start.md    # Getting started guide
│   │   ├── best-practices.md # Recommended patterns and anti-patterns
│   │   ├── configuration.md  # Configuration options
│   │   ├── integration.md    # Integration with other tools
│   │   └── architecture.md   # Internal architecture overview
│   ├── key-concepts/     # Deep dive into specific concepts
│   └── principles/       # Design principles and patterns
├── references/           # Lookup-oriented material
│   ├── website.md        # Official website and docs links
│   ├── sitemap.md        # Complete documentation sitemap
│   ├── api.md            # API reference
│   ├── cli.md            # CLI command reference
│   ├── tui-usage.md      # TUI interface reference
│   └── configuration.md  # Configuration reference
├── workflows/            # Step-by-step task workflows
├── examples/            # Code examples and snippets
└── scripts/              # TypeScript automation scripts
```

## Reference

### Available Scripts

| Command | Description | Example |
|---------|-------------|---------|
| `bun run dev` | Start development mode with file watching | `bun run dev` |
| `bun run build` | Generate workflow files | `bun run build` |
| `bun run check` | Run TypeScript type-check and Biome lint | `bun run check` |
| `bun run format` | Format all files with Biome | `bun run format` |
| `bun run prepare` | Update and sync dependencies with taze | `bun run prepare` |

### Tech Stack

| Tool | Purpose | Version |
|------|---------|---------|
| Bun | Runtime and package manager | Latest |
| TypeScript | Type-safe development | ^5.9.3 |
| Biome | Linting and formatting | ^2.4.8 |
| oxlint | Fast JavaScript linting | ^1.56.0 |
| cac | CLI argument parsing | ^7.0.0 |

### Skill Prefix Convention

| Prefix | Category | Example |
|--------|----------|---------|
| `tool-` | Development tools and CLI utilities | `tool-biome` |
| `lib-` | Libraries and packages | `lib-react` |
| `lang-` | Programming languages | `lang-rust` |
| `flow-` | Development workflows | `flow-debugging` |
| `framework-` | Application frameworks | `framework-tauri` |
| `cloud-` | Cloud platforms and services | `cloud-vercel` |
| `guide-` | Guides and best practices | `guide-design-patterns` |
| `create-` | Extension creation guides | `create-vscode-extensions` |
| `glossary-` | Terminology glossaries | `glossary-dev` |
| `computer-` | Computer science concepts | `computer-computation` |
| `runtime-` | Runtime environments | `runtime-bun` |

## Notes

> [!TIP]
> - Use `flow-*` skills as step-by-step checklists when performing complex development tasks like debugging or refactoring
> - Combine multiple skills for richer context — ask Cascade about "Tauri with React and Zustand" to leverage all three skills
> - Run `bun run check` before committing to catch lint and type errors early
> - Browse `references/` within any skill for quick command lookups and configuration options

> [!IMPORTANT]
> - Every skill folder must contain a `SKILL.md` manifest file — Cascade uses it as the entry point for loading skill knowledge
> - Follow the prefix naming convention strictly (`lib-`, `tool-`, `lang-`, etc.) to ensure proper categorization
> - Keep individual guide files under 200 lines for optimal AI context loading and readability
> - Use kebab-case for all file and folder names across the repository

> [!WARNING]
> - Do not rename skill folders without updating all cross-references in other skills and workflow files
> - Avoid placing large binary assets in skill folders as they increase clone times and context loading overhead
> - Changes to the folder structure may require updating the build scripts that generate workflow files

> [!CAUTION]
> - Never delete a `SKILL.md` file without replacing it — the skill will become invisible to Cascade
> - Do not mix content languages within the same skill file — keep each file in a single language for consistency
> - Avoid deeply nested folder structures beyond the standard `knowledge/`, `references/`, `workflows/` layout

## License

This project is licensed under the <a href="https://choosealicense.com/licenses/mit/" target="_blank" rel="noopener noreferrer">MIT License</a>.

- ✓ Commercial use, Distribution, Modification, Private use
- ⓘ License and copyright notice
- ✕ Liability, Warranty
