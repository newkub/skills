---
description: Best practices guide ใน Markdown
title: best-practices
tags: [markdown, best-practices, guide, recommendations]
goals:
  - แสดงตัวอย่างการเขียน best practices
  - สอนวิธี document recommendations
---

## Best Practices

````markdown
# Best Practices

This guide outlines recommended practices for using [Project Name] effectively.

## General Guidelines

### DO

- Keep configurations in version control
- Use environment variables for secrets
- Write tests for new features
- Document your changes

### DON'T

- Hardcode credentials
- Skip error handling
- Ignore deprecation warnings
- Commit large files to git

## Code Organization

### Project Structure

```text
project/
├── src/           # Source code
├── tests/         # Test files
├── docs/          # Documentation
├── config/        # Configuration
└── scripts/       # Build/deploy scripts
```

### Naming Conventions

- Use descriptive names
- Use camelCase for variables
- Use PascalCase for classes
- Use UPPER_SNAKE_CASE for constants
````

## Security Best Practices

````markdown
## Security

### Authentication

- Use strong passwords
- Enable two-factor authentication
- Rotate API keys regularly
- Use JWT with short expiration

### Data Protection

- Encrypt sensitive data at rest
- Use HTTPS for all communications
- Sanitize user inputs
- Validate all data on server side

### Secrets Management

```bash
# Good
DATABASE_URL=${DB_URL}

# Bad (Never do this)
DATABASE_URL=postgres://user:password@host/db
```
````

## Performance Best Practices

````markdown
## Performance

### Optimization Tips

1. **Caching**
   - Use Redis for session storage
   - Cache API responses
   - Implement CDN for static assets

2. **Database**
   - Use indexes for frequent queries
   - Implement connection pooling
   - Optimize N+1 queries

3. **Frontend**
   - Lazy load components
   - Optimize images
   - Use code splitting

### Monitoring

```javascript
// Track performance metrics
performance.mark('start');
await fetchData();
performance.mark('end');
performance.measure('fetchData', 'start', 'end');
```
````

## Development Best Practices

````markdown
## Development Workflow

### Git Workflow

1. Create feature branch from `main`
2. Make focused, atomic commits
3. Write descriptive commit messages
4. Open pull request for review
5. Squash and merge after approval

### Code Review Checklist

- [ ] Code follows style guide
- [ ] Tests are included
- [ ] Documentation is updated
- [ ] No security vulnerabilities
- [ ] Performance is acceptable
````
