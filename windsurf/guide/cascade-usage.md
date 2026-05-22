# Cascade Usage Guide

Master the Cascade agent for complex coding tasks.

## Opening Cascade

| Method | Shortcut |
|--------|----------|
| Open Cascade | `Cmd+L` (macOS) / `Ctrl+L` (Windows/Linux) |
| Inline command | `Cmd+I` / `Ctrl+I` |
| Command palette | `Cmd+Shift+P` / `Ctrl+Shift+P` → "Cascade" |

## Basic Usage Pattern

### 1. Describe Intent

Start with clear description:
```
"Add a user registration endpoint with email verification"
"Refactor the payment processing module to use the adapter pattern"
"Fix the race condition in the async file handler"
```

### 2. Review Plan

Cascade analyzes and creates a plan:
- Reads relevant files
- Creates step-by-step plan
- Shows proposed changes
- Waits for your confirmation

### 3. Execute and Review

- View changes in diff view
- Accept full or partial changes
- Request modifications

## Advanced Cascade Features

### @ Mentions

Reference specific code elements:

```
@authService authenticate the user
@UserModel.findAll fetch all users
@src/utils/ parse the entire utils folder
@middleware.ts use this middleware
```

### Mentioning Code Blocks

Select code in editor, then:
- Press `Cmd+L` to mention in Cascade
- Use Command to refactor selected code

### Flow Awareness Integration

Cascade automatically tracks:
- Recently edited files
- Terminal commands
- Clipboard content

Use "Continue my work" to leverage context:
```
"Continue my work on the auth refactor"
```

## Web Tools Integration

### Search Documentation

```
"Lookup React docs for useEffect cleanup"
"Find Next.js dynamic OG image generation"
```

### Content Collection

Cascade can:
1. Parse web pages and documentation
2. Chunk content for context
3. Apply findings to your code

### Browser Integration

Use the built-in browser to:
- View live previews
- Inspect elements
- Collect context from web
- Take screenshots

### App Deployments

One-click deployment from IDE:
1. `Cmd+L` → "Deploy your website"
2. Package and share apps
3. Get public URL

## Cascade Write Mode

### Invoking Write Mode

Press `Cmd+.` or click "Write mode" in Cascade panel.

### Write Mode Features

- Real-time terminal tracking
- Suggests edits based on terminal activity
- "Continue my work" button
- Context-aware suggestions

### Example Workflow

1. Run terminal command: `git checkout feature/login`
2. Open Cascade Write mode
3. See context: "Edited login.ts, deleted LoginForm.tsx"
4. Ask: "Continue my work"
5. Cascade resumes from context

## Rules and Workflows

### Creating Rules

Create `.windsurfrules` in project root:

```markdown
# .windsurfrules

## Rules
- Use TypeScript strict mode
- Comment every function
- Prefer functional components
- Use `cn()` for class names

## Workflows
- Always run tests after refactoring
- Use conventional commits
- Review before commit
```

### Invoking Rules

In Cascade, use slash commands:
```
/brainstorm "next steps"
/address-PR-comments
/Github pull request
```

### Auto-Generated Memories

Cascade creates memories from conversations:
- Preserves context between sessions
- Organizes by #hashtags
- Searchable by content

## Multi-Agent Workflows

### Cascade + Devin

1. Plan with Cascade locally
2. Hand off to Devin for execution
3. Manage in Agent Command Center

### Multiple Cascade Sessions

- Start new Cascade while another runs
- Never wait for completion
- Compare approaches

## Best Practices

### Do's

| Practice | Why |
|----------|-----|
| Be specific about intent | Better code generation |
| Reference files with @ | Accurate context |
| Use natural language | Better understanding |
| Review diffs carefully | Quality control |
| Leverage flow awareness | Less repetition |

### Don'ts

| Mistake | Solution |
|---------|----------|
| Vague requests | Break into smaller tasks |
| Ignoring context | Use "Continue my work" |
| Accepting blindly | Review all changes |
| Over-complicating | Simple tasks → simple prompts |

## Troubleshooting

### Cascade Not Responding

1. Check internet connection
2. Restart Windsurf
3. Clear context: `/reset`

### Poor Quality Output

1. Add more context to prompt
2. Reference specific files
3. Create project rules
4. Provide examples

### Wrong File Selection

1. Use @ to specify exact file
2. Clear cascade context
3. Start new conversation