# How It Works

## Architecture

GitHub Actions เป็น CI/CD platform สำหรับ automate build, test, และ deployment pipeline:

```
┌─────────────────────────────────────┐
│       GitHub Actions Architecture    │
├─────────────────────────────────────┤
│  Workflows  │  Jobs  │  Steps         │
├─────────────────────────────────────┤
│  Runners  │  Actions  │  Events      │
├─────────────────────────────────────┤
│  GitHub-hosted  │  Self-hosted       │
├─────────────────────────────────────┤
│  Secrets  │  Artifacts  │  Caching   │
└─────────────────────────────────────┘
```

## Workflow

1. **Trigger** - Event triggers (push, pull_request, schedule, etc.) activate workflows
2. **Workflow** - YAML workflow file ใน `.github/workflows/` ถูก executed
3. **Jobs** - Jobs รันบน runners (GitHub-hosted หรือ self-hosted)
4. **Steps** - Steps ในแต่ละ job execute commands หรือ actions
5. **Actions** - Reusable actions ถูก executed สำหรับ specific tasks
6. **Output** - Results, artifacts, และ deployment ถูก generated

## Key Concepts

- **Workflows** - Automated processes ที่ defined ด้วย YAML files
- **Events** - Triggers ที่ activate workflows (push, PR, schedule, etc.)
- **Jobs** - Sets of steps ที่รันบน same runner
- **Steps** - Individual tasks ที่ execute commands หรือ actions
- **Actions** - Reusable units สำหรับ common tasks
- **Runners** - Servers ที่ execute workflows (GitHub-hosted หรือ self-hosted)
- **Secrets** - Encrypted environment variables สำหรับ sensitive data
- **Artifacts** - Files ที่ generated จาก workflow และ can be downloaded
- **Caching** - Cache dependencies สำหรับ faster workflow execution
