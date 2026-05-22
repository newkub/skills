# Monorepo vs Polyrepo

## เปรียบเทียบ

| หัวข้อ | Monorepo | Polyrepo |
|--------|----------|----------|
| **Repository** | Single repo, many packages | One repo per package |
| **Code Sharing** | Easy, same codebase | Via published packages |
| **Refactoring** | Atomic across packages | Coordinated releases |
| **Build System** | Requires orchestration (Turborepo/Nx) | Independent builds |
| **Versioning** | Single version or complex | Natural per package |
| **Access Control** | Coarse (repo-level) | Fine (repo-level) |
| **CI/CD** | Complex, optimized | Simple, independent |
| **Onboarding** | Clone once, see everything | Clone relevant repos |
| **History** | Unified timeline | Scattered |
| **Tooling** | Bazel, Nx, Turborepo | Standard git |

## เมื่อไหร่ใช้อะไร

- **Monorepo**: Tight coupling, shared libraries, atomic changes
- **Polyrepo**: Independent teams, open source, loose coupling

---

**หมวดหมู่**: Architecture & Planning
