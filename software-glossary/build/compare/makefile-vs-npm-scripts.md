# Makefile vs NPM Scripts

## เปรียบเทียบ

| หัวข้อ | Makefile | NPM Scripts |
|--------|----------|-------------|
| **Language** | Shell-based | JavaScript/JSON |
| **Cross-platform** | Unix-focused | Universal (Node.js) |
| **Dependencies** | Make utility | NPM/Node.js |
| **Composability** | Target dependencies | Run-s, concurrently |
| **Windows Support** | Requires MinGW/WSL | Native |
| **Environment Vars** | Exported | cross-env package |
| **Complexity** | Powerful, steep | Simple, limited |
| **Frontend** | Less common | Standard |
| **CI/CD** | Works everywhere | Requires Node |
| **Legacy** | C/C++ tradition | Modern web |

## เมื่อไหร่ใช้อะไร

- **Makefile**: Polyglot projects, Unix tooling, complex pipelines
- **NPM Scripts**: JavaScript projects, frontend, cross-platform needs
