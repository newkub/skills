# Best Practices

## Project Structure

- Keep entry point in `src/index.ts`
- Separate concerns into modules
- Use TypeScript for type safety
- Organize by feature/domain

## Configuration

- Use `wrangler.jsonc` for better IDE support
- Include `$schema` for validation
- Use environment-specific configs
- Never commit secrets

## Security

- Use secrets for sensitive data
- Never hardcode API keys
- Use environment variables
- Rotate secrets regularly

## Performance

- Minimize cold starts
- Use caching with KV
- Optimize bundle size
- Use streaming for large responses

## Error Handling

- Implement proper error boundaries
- Log errors with context
- Use try-catch for async operations
- Return appropriate HTTP status codes

## Testing

- Test locally with `wrangler dev`
- Use `--remote` for integration testing
- Test with production data
- Mock external services

## Deployment

- Use staging environment first
- Test routes and domains
- Verify bindings configuration
- Monitor logs after deployment

## Observability

- Use structured logging
- Log important events
- Monitor execution time
- Track error rates

## Resource Management

- Clean up unused resources
- Use appropriate storage for data:
  - KV for caching/small data
  - R2 for files/large objects
  - D1 for structured data
- Set appropriate limits

## Version Control

- Commit `wrangler.jsonc`
- Use semantic versioning
- Document breaking changes
- Keep changelog

## CI/CD

- Automate deployment
- Run tests before deploy
- Use environment variables for secrets
- Implement rollback strategy
