# npm workspaces vs Yarn workspaces

## เปรียบเทียบ

| หัวข้อ | npm workspaces | Yarn workspaces |
|--------|----------------|-----------------|
| **Native** | npm 7+ built-in | Yarn classic/berry |
| **Hoisting** | Configurable | No hoisting (PnP) |
| **Speed** | Baseline | Faster with PnP |
| **Commands** | npm run --workspaces | yarn workspaces run |
| **Add dependency** | npm i -w package | yarn workspace pkg add |
| **Lock file** | package-lock.json | yarn.lock |
| **Plug-n-Play** | No | Optional (berry) |
| **Maturity** | 2020, improving | 2016, stable |
| **Migration** | From npm | From Yarn |
| **Best For** | npm users, simplicity | Performance, PnP |

## เมื่อไหร่ใช้อะไร

- **npm workspaces**: npm users, simple monorepos, no extra tools
- **Yarn workspaces**: Performance, PnP, advanced features
