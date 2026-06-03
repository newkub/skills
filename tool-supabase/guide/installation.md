# Installation

## Purpose

แนะนำการติดตั้ง Supabase CLI และเริ่มต้นใช้งานในโปรเจกต์

## Scope

- CLI Installation
- Docker Setup
- Project Initialization
- Verification

## CLI Installation

### macOS

```bash
# Homebrew
brew install supabase/tap/supabase

# Or via npm
npm install -g supabase
```

### Windows

```bash
# npm
npm install -g supabase

# Or scoop
scoop install supabase
```

### Linux

```bash
# npm
npm install -g supabase

# Or manual
curl -L https://github.com/supabase/cli/releases/latest/download/supabase_linux_amd64.tar.gz -o supabase.tar.gz
tar -xzf supabase.tar.gz
mv supabase ~/.local/bin/
```

## Docker Setup

### Install Docker

Download from https://docker.com

### Start Docker Desktop

```bash
# Verify Docker
docker --version
```

## Project Initialization

### 1. Login

```bash
supabase login
```

### 2. Initialize

```bash
supabase init
```

### 3. Start Local Stack

```bash
supabase start
```

### Response

```
Creating custom roles supabase/roles.sql...
Applying migration 20220810154536_initial.sql...
Seeding data supabase/seed.sql...
Started supabase local development setup.

         API URL: http://127.0.0.1:54321
      GraphQL URL: http://127.0.0.1:54321/graphql/v1
          DB URL: postgresql://postgres:postgres@127.0.0.1:54322/postgres
      Studio URL: http://127.0.0.1:54323
    Inbucket URL: http://127.0.0.1:54324
      JWT secret: super-secret-jwt-token-with-at-least-32-characters-long
        anon key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Verify Installation

### 1. Check Version

```bash
supabase --version
```

### 2. Check Status

```bash
supabase status
```

### 3. Open Studio

```bash
# Open in browser
open http://127.0.0.1:54323
```

## Link to Project

### 1. Create Project

Go to https://supabase.com/dashboard and create a project

### 2. Link

```bash
supabase link --project-ref your-project-ref
```

### 3. Enter Password

```
Enter your database password: ********
Finished supabase link.
```

## Update CLI

```bash
# npm
npm update -g supabase

# Homebrew
brew upgrade supabase
```

## Uninstall

```bash
# npm
npm uninstall -g supabase

# Remove config
rm -rf ~/.supabase
```

## Summary

| Step | Command |
|------|---------|
| **Install** | `npm install -g supabase` |
| **Login** | `supabase login` |
| **Init** | `supabase init` |
| **Start** | `supabase start` |
| **Status** | `supabase status` |
| **Link** | `supabase link --project-ref xxx` |