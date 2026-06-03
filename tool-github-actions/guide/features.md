# Features

Features ทั้งหมดของ GitHub Actions

## Core Features

| Feature | Description |
|---------|-------------|
| **Workflows** | YAML-based automation definitions |
| **Jobs** | Groups of steps that run on the same runner |
| **Steps** | Individual tasks that execute commands or actions |
| **Actions** | Reusable components from GitHub Marketplace |
| **Matrix** | Run multiple configurations in parallel |
| **Secrets** | Encrypted environment variables |

## Workflow Features

| Feature | Description |
|---------|-------------|
| **Triggers** | Push, pull_request, schedule, manual, etc. |
| **Concurrency** | Control parallel execution |
| **Environment** | Deploy to specific environments |
| **Permissions** | Control GITHUB_TOKEN permissions |
| **Conditions** | Run steps based on conditions |

## Marketplace Actions

```yaml
# Common actions
- uses: actions/checkout@v4
- uses: actions/setup-node@v4
- uses: actions/cache@v4
- uses: actions/upload-artifact@v4
- uses: actions/download-artifact@v4
```

## Advanced Features

| Feature | Description |
|---------|-------------|
| **Reusable Workflows** | Share workflows between repositories |
| **Job Summaries** | Custom markdown summaries |
| **Action Cards** | Rich workflow visualizations |
| **Environment Protection** | Require approvals for environments |
