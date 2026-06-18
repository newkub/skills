# Spaces

## Overview

Spaces เป็น concept หลักใน Devin Desktop ที่ใช้สำหรับ share context และ Git worktrees ระหว่าง agents ทำให้ agents ทำงานร่วมกันได้อย่างมีประสิทธิภาพ

## What is a Space?

Space เป็น isolated environment ที่:
- Contains shared context สำหรับ agents
- Manages Git worktrees สำหรับ version control
- Coordinates agent workflows
- Persists agent state และ sessions
- Enables collaboration ระหว่าง agents

## Key Features

### 1. Shared Context

Spaces provide shared context:
- File system access
- Git repository state
- Environment variables
- Configuration settings
- Agent-specific data

### 2. Git Worktrees

Spaces manage Git worktrees:
- Multiple branches per space
- Isolated work environments
- Easy branch switching
- Conflict resolution support
- Merge coordination

### 3. Agent Sessions

Spaces track agent sessions:
- Session persistence
- State management
- Activity logging
- Resource tracking
- Session handoff

### 4. Resource Management

Spaces manage resources:
- Disk space
- Memory usage
- CPU allocation
- Network bandwidth
- Agent quotas

## Space Types

### Project Space

For single project development:
- Single Git repository
- Multiple agents
- Shared codebase
- Coordinated workflows

**Use Cases:**
- Feature development
- Bug fixing
- Code refactoring
- Testing

### Multi-Project Space

For multiple related projects:
- Multiple Git repositories
- Shared dependencies
- Coordinated builds
- Cross-project workflows

**Use Cases:**
- Monorepo development
- Microservices
- Library development
- System integration

### Temporary Space

For short-lived tasks:
- Ephemeral context
- Auto-cleanup
- Quick experiments
- One-off tasks

**Use Cases:**
- Prototyping
- Debugging
- Testing
- Experiments

## Creating Spaces

### Via Devin Desktop

1. **File → New Space**
2. **Choose Space Type**
3. **Select Git Repository** (or create new)
4. **Configure Space Settings**
5. **Create Space**

### Via Command Line

```bash
# Create new space
devin space create --name my-project --type project

# Clone repository into space
devin space clone --repo https://github.com/user/repo --space my-project

# List spaces
devin space list

# Delete space
devin space delete --name my-project
```

## Space Configuration

### Settings

```json
{
  "name": "my-project",
  "type": "project",
  "git_repository": "https://github.com/user/repo",
  "branches": ["main", "develop", "feature/*"],
  "agents": {
    "max_count": 5,
    "default_model": "swe-1.6"
  },
  "resources": {
    "memory_limit": "8GB",
    "cpu_limit": "4",
    "disk_limit": "100GB"
  },
  "context": {
    "include_patterns": ["src/**", "tests/**"],
    "exclude_patterns": ["node_modules/**", ".git/**"]
  }
}
```

### Context Rules

Define what context agents can access:

```json
{
  "context_rules": {
    "include": [
      "src/**/*.ts",
      "src/**/*.tsx",
      "tests/**/*.ts",
      "package.json",
      "tsconfig.json"
    ],
    "exclude": [
      "node_modules/**",
      "dist/**",
      ".git/**",
      "*.log"
    ],
    "max_file_size": "10MB",
    "max_total_size": "1GB"
  }
}
```

## Agent Workflows in Spaces

### Single Agent Workflow

```
1. Agent starts in space
2. Reads shared context
3. Performs task
4. Writes results
5. Updates space state
```

### Multi-Agent Workflow

```
1. Agent A starts task
2. Agent A updates context
3. Agent B reads updated context
4. Agent B continues task
5. Agents coordinate via ACP
6. Final result written to space
```

### Handoff Workflow

```
1. Local agent starts in space
2. Performs initial analysis
3. Handoffs to cloud agent
4. Cloud agent continues task
5. Cloud agent returns results
6. Local agent applies results
7. Space state updated
```

## Git Worktrees

### Creating Worktrees

```bash
# Create new worktree
devin worktree create --branch feature/new-feature --space my-project

# List worktrees
devin worktree list --space my-project

# Switch worktree
devin worktree switch --branch feature/new-feature --space my-project

# Delete worktree
devin worktree delete --branch feature/new-feature --space my-project
```

### Worktree Management

Spaces manage worktrees:
- Automatic cleanup
- Conflict detection
- Merge assistance
- Branch protection
- Status tracking

## Space State

### State Components

```
Space State:
├── File System
│   ├── Files
│   └── Directories
├── Git State
│   ├── Branches
│   ├── Commits
│   └── Worktrees
├── Agent Sessions
│   ├── Session 1
│   ├── Session 2
│   └── Session N
├── Context
│   ├── Included files
│   └── Excluded files
└── Configuration
    ├── Settings
    └── Rules
```

### State Persistence

Space state persists:
- Across agent sessions
- Across IDE restarts
- Across system reboots
- Until space deletion

## Best Practices

### 1. Organize Spaces by Project

One space per project:
- Clear separation
- Easier management
- Better performance
- Simpler workflows

### 2. Use Appropriate Space Types

Choose right type:
- Project space for ongoing development
- Multi-project for related projects
- Temporary for experiments

### 3. Configure Context Rules

Optimize context:
- Include only necessary files
- Exclude build artifacts
- Set size limits
- Monitor usage

### 4. Manage Git Worktrees

Keep worktrees clean:
- Delete unused worktrees
- Resolve conflicts promptly
- Use branch protection
- Regular cleanup

### 5. Monitor Resource Usage

Track resources:
- Memory usage
- Disk space
- Agent count
- Session duration

## Troubleshooting

### Common Issues

**Space Not Syncing**
- Check network connection
- Verify Git repository access
- Review space configuration
- Check agent permissions

**Context Not Loading**
- Verify context rules
- Check file permissions
- Review include/exclude patterns
- Check file size limits

**Worktree Conflicts**
- Resolve Git conflicts
- Check branch status
- Review worktree configuration
- Use merge tools

**Resource Limits**
- Monitor resource usage
- Adjust limits if needed
- Clean up unused data
- Optimize context

### Debugging Spaces

Enable space debugging:
```bash
devin space debug --name my-project --level DEBUG
```

View space logs:
- Devin Desktop logs
- Space activity logs
- Agent session logs
- Git operation logs

## Space API

### Programmatic Access

```python
from devin import SpaceClient

# Connect to space
client = SpaceClient("my-project")

# Get space info
info = client.get_info()
print(f"Space: {info.name}, Type: {info.type}")

# List agents
agents = client.list_agents()
for agent in agents:
    print(f"Agent: {agent.id}, Status: {agent.status}")

# Get context
context = client.get_context()
print(f"Files: {len(context.files)}")

# Create worktree
worktree = client.create_worktree("feature/new-feature")
print(f"Worktree: {worktree.path}")
```

## Security

### Access Control

Spaces support:
- User authentication
- Agent permissions
- Resource ACLs
- Audit logging

### Data Protection

Space data is:
- Encrypted at rest
- Encrypted in transit
- Backed up regularly
- Isolated per space

### Compliance

Spaces support:
- Data retention policies
- Access logging
- Compliance reporting
- Data export

## Performance Optimization

### Context Optimization

- Minimize context size
- Use efficient patterns
- Cache frequently used files
- Exclude unnecessary files

### Resource Optimization

- Set appropriate limits
- Monitor usage
- Clean up regularly
- Use efficient agents

### Workflow Optimization

- Use parallel agents
- Optimize handoff points
- Batch operations
- Reduce ACP overhead

## Future Enhancements

Planned space improvements:
- Better resource management
- Enhanced collaboration features
- Improved performance
- More configuration options
- Better debugging tools

## Related Concepts

- [Agent Client Protocol (ACP)](agent-client-protocol.md)
- [SWE Models](swe-models.md)
- [Context Awareness](context-awareness.md)
