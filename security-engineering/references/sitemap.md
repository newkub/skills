# Sitemap

## แผนผังเนื้อหาและ Resources

### Guide Structure

```
guide-security-engineering/
├── SKILL.md                          # Index file
├── guide/
│   ├── installation.md               # Environment setup
│   ├── key-concept.md                # Core concepts
│   ├── how-it-works.md               # Security mechanisms
│   ├── features.md                   # Features and capabilities
│   ├── configuration.md              # Configuration options
│   ├── quick-start.md                # Quick start guide
│   ├── best-practices.md             # Best practices
│   ├── auth.md                       # Authentication and authorization
│   ├── cryptography.md               # Cryptography basics
│   ├── owasp.md                      # OWASP top 10
│   └── troubleshooting.md            # Common issues and solutions
└── references/
    ├── website.md                    # External resources
    └── sitemap.md                    # This file
```

### Learning Path

1. **Beginner**: installation.md → quick-start.md → key-concept.md
2. **Intermediate**: how-it-works.md → features.md → configuration.md
3. **Advanced**: auth.md → cryptography.md → owasp.md
4. **Expert**: best-practices.md → troubleshooting.md → website.md (external resources)

### Key Topics

#### CIA Triad
- Confidentiality
- Integrity
- Availability

#### Authentication vs Authorization
- Authentication methods
- Authorization models (RBAC, ABAC)
- JWT and sessions

#### Cryptography
- Symmetric encryption (AES)
- Asymmetric encryption (RSA)
- Hashing (SHA-256)
- Password hashing (bcrypt)
- Digital signatures

#### OWASP Top 10
- Broken access control
- Cryptographic failures
- Injection
- Insecure design
- Security misconfiguration
- Vulnerable components
- Authentication failures
- Software/data integrity failures
- Logging failures
- SSRF

#### Secure Coding
- Input validation
- Output encoding
- Parameterized queries
- Security headers
- Error handling

### External Resources

- **Books**: Web Application Hacker's Handbook, Security Engineering, Cryptography Engineering
- **Courses**: Coursera web security, cryptography, computer security
- **Tools**: OWASP ZAP, Burp Suite, Nmap, Metasploit
- **Communities**: OWASP, Reddit netsec, AskNetsec

### Related Skills

- `/guide-network-programming` - Network security
- `/guide-distributed-systems` - Distributed security
- `/guide-database-design` - Database security
- `/lib-better-auth` - Authentication library
- `/cloud-cloudflare` - Security services
