# Biome vs ESLint+Prettier

## เปรียบเทียบ

| หัวข้อ | Biome | ESLint+Prettier |
|--------|-------|-----------------|
| **Speed** | Extremely fast (Rust) | Slower (Node.js) |
| **Unified** | Lint + Format + Organize imports | Separate tools |
| **Config** | One file | Multiple configs |
| **Compatibility** | ESLint rules subset | Full ESLint ecosystem |
| **Migration** | ESLint config import | Existing setup |
| **IDE** | Growing support | Universal |
| **CI Speed** | Fast | Slower |
| **Auto-fix** | Aggressive | ESLint cautious, Prettier full |
| **Maturity** | 2023, evolving | 2014, proven |
| **Best For** | Performance, simplicity | Flexibility, ecosystem |

## เมื่อไหร่ใช้อะไร

- **Biome**: Speed critical, new projects, simple needs
- **ESLint+Prettier**: Complex rules, existing projects, maximum control
