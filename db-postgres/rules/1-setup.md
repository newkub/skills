# PostgreSQL Setup

## When to Use
Use this guide when setting up PostgreSQL for new projects.

## Quick Steps
1. Download PostgreSQL from official website
2. Run installer with default settings
3. Set password for postgres user
4. Install pgAdmin (optional)
5. Test connection with psql

## Verification
- Check version: `psql --version`
- Test connection: `psql -U postgres`
- List databases: `\l`

## Common Issues
- Port conflicts (default: 5432)
- Firewall blocking connections
- Incorrect user permissions
