# Best Practices

## Agent Design

### Single Responsibility
- One agent per domain/use case
- Keep agent classes focused
- Avoid monolithic agents
- Split complex agents into smaller ones

### State Management
- Keep state minimal and necessary
- Use type-safe state schemas
- Validate state changes
- Avoid circular state dependencies

### Callable Methods
- Keep methods short and focused
- Use descriptive names
- Handle errors gracefully
- Document side effects

## Configuration

### Wrangler Setup
- Use semantic version tags for migrations
- One DO binding per agent class
- Enable `nodejs_compat` flag
- Configure AI binding if needed

### TypeScript Configuration
- Do NOT enable `experimentalDecorators`
- Use strict mode
- Enable path aliases if needed
- Configure proper module resolution

## Error Handling

### Validation
- Validate inputs in callable methods
- Use `validateStateChange` for state validation
- Throw descriptive errors
- Log errors for debugging

### Retries
- Use `this.retry()` for transient failures
- Configure appropriate backoff
- Set reasonable retry limits
- Log retry attempts

### Timeouts
- Set appropriate timeouts for callable methods
- Handle timeout errors gracefully
- Provide fallback behavior
- Notify clients of timeouts

## Performance

### State Optimization
- Minimize state size
- Use efficient data structures
- Avoid unnecessary state updates
- Batch state changes when possible

### Connection Management
- Reuse WebSocket connections
- Implement connection pooling
- Handle connection lifecycle properly
- Clean up idle connections

### Query Optimization
- Use efficient SQLite queries
- Index frequently accessed data
- Avoid N+1 queries
- Cache computed values

## Security

### Authentication
- Validate WebSocket tokens
- Implement proper auth flows
- Use secure token storage
- Rotate tokens regularly

### Authorization
- Check permissions before operations
- Use readonly connections when appropriate
- Implement rate limiting
- Audit sensitive operations

### Data Protection
- Encrypt sensitive data at rest
- Use secure communication channels
- Implement proper CORS policies
- Sanitize user inputs

## Testing

### Unit Testing
- Test callable methods in isolation
- Mock external dependencies
- Test state validation logic
- Verify error handling

### Integration Testing
- Test agent lifecycle
- Verify state synchronization
- Test routing behavior
- Validate configuration

### E2E Testing
- Test full user flows
- Verify WebSocket communication
- Test error scenarios
- Validate deployment

## Deployment

### Migration Strategy
- Always add new migration tags
- Never edit old migrations
- Test migrations locally
- Plan rollback strategy

### Monitoring
- Use observability events
- Track agent lifecycle
- Monitor performance metrics
- Set up alerts for errors

### Versioning
- Use semantic versioning
- Document breaking changes
- Provide migration guides
- Maintain backward compatibility when possible
