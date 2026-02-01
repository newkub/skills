# Security

| Concern | Prevention | Example |
|---------|-------------|---------|
| **CSS Injection** |  sanitize dynamic classes | Validate user input |
| **Arbitrary Values** | จำกัด arbitrary value usage | Use defined theme |
| **External Icons** | ตรวจสอบ icon sources | Use trusted collections |
| **Build Security** |  scan dependencies | npm audit |
| **Content Security** |  CSP headers | `style-src 'self'` |
| **Code Review** | ตรวจสอบ UnoCSS config | Review shortcuts |
