---
description: Template สำหรับ Tutorial
title: '{{TUTORIAL_TITLE}}'
tags: [tutorial, '{{CATEGORY}}', '{{TAG_1}}']
goals:
  - '{{GOAL_1}}'
  - '{{GOAL_2}}'
difficulty: '{{DIFFICULTY}}'
estimated_time: '{{TIME}}'
---

## {{TUTORIAL_TITLE}}

> 📚 **Tutorial** | {{DIFFICULTY}} | {{TIME}}

**{{ORG_NAME}}** / **tutorials** / `{{FILENAME}}`

## โครงสร้าง Tutorial

| Section | รายละเอียด |
|---------|-----------|
| Introduction | แนะนำสิ่งที่จะเรียนรู้ |
| Prerequisites | สิ่งที่ต้องรู้ก่อน |
| Steps | ขั้นตอนการทำ |
| Verification | ตรวจสอบผลลัพธ์ |
| Next Steps | ขั้นตอนต่อไป |

## Header

```markdown
# {{TUTORIAL_TITLE}}

> 📚 **Tutorial** | {{DIFFICULTY}} | {{TIME}}

**{{ORG_NAME}}** / **tutorials** / `{{FILENAME}}`

## What You'll Learn

- {{LEARNING_OUTCOME_1}}
- {{LEARNING_OUTCOME_2}}
- {{LEARNING_OUTCOME_3}}

## Prerequisites

- {{PREREQ_KNOWLEDGE_1}}
- {{PREREQ_KNOWLEDGE_2}}

### Required Tools

- {{PREREQ_TOOL_1}}
- {{PREREQ_TOOL_2}}

### Setup

```bash
{{SETUP_COMMAND}}
```
```


```text

```text

```text

## Rules

### Difficulty Levels

| Level | Icon | Description |
|-------|------|-------------|
| Beginner | 🌱 | No prior knowledge |
| Intermediate | 🌿 | Some experience |
| Advanced | 🌳 | Expert level |

### Tutorial Structure

- **Introduction** - แนะนำสิ่งที่จะเรียนรู้
- **Prerequisites** - สิ่งที่ต้องรู้ก่อน
- **Learning Objectives** - เป้าหมายการเรียนรู้
- **Step-by-Step** - ขั้นตอนการทำ
- **Verification** - ตรวจสอบผลลัพธ์
- **Troubleshooting** - แก้ปัญหาเบื้องต้น
- **Next Steps** - ขั้นตอนต่อไป

### Writing Guidelines

- แต่ละ step ควรมี code/example ที่ runnable
- ใช้ screenshots/GIFs ถ้าจำเป็น
- ระบุ expected output ชัดเจน
- มี troubleshooting สำหรับ common issues

## Template

### Step-by-Step Instructions

```markdown
## Step {{NUMBER}}: {{STEP_TITLE}}

{{STEP_DESCRIPTION}}

### Code/Command

```{{LANG}}
{{CODE_SNIPPET}}
```

### Expected Output

{{EXPECTED_OUTPUT}}

### Explanation

{{EXPLANATION}}

```text

### Verification

```markdown
## Verification

ตรวจสอบว่าทำงานถูกต้อง:

```{{VERIFICATION_LANG}}
{{VERIFICATION_CODE}}
```

Expected result:

```text
{{VERIFICATION_RESULT}}
```

```text

### Troubleshooting

```markdown
## Troubleshooting

### {{PROBLEM_1}}

**Symptom:** {{SYMPTOM_1}}

**Solution:** {{SOLUTION_1}}

```{{FIX_LANG}}
{{FIX_CODE}}
```

```text

### Next Steps

```markdown
## Next Steps

- [{{NEXT_TOPIC_1}}]({{NEXT_LINK_1}})
- [{{NEXT_TOPIC_2}}]({{NEXT_LINK_2}})

## Resources

- [{{RESOURCE_1}}]({{RESOURCE_LINK_1}})
- [{{RESOURCE_2}}]({{RESOURCE_LINK_2}})
```

## Example

### Example: Getting Started with Docker

```markdown
# Getting Started with Docker

> 📚 **Tutorial** | Beginner | 30 minutes

**acme-corp** / **tutorials** / `docker-getting-started.md`

## What You'll Learn

- Run a Docker container
- Build a custom image
- Use Docker Compose

## Prerequisites

- Basic command line knowledge
- Docker Desktop installed
- Text editor

### Required Tools

- Docker Desktop 4.0+
- Terminal/Command Prompt

## Step 1: Run Your First Container

Run a simple nginx web server

### Code/Command

```bash
docker run -d -p 8080:80 --name my-nginx nginx:latest
```
```


```text

```text

### Expected Output

```text
Unable to find image 'nginx:latest' locally
latest: Pulling from library/nginx
...
Status: Downloaded newer image for nginx:latest
abc123def456
```

### Explanation

This command:

- `run` - Starts a new container
- `-d` - Runs in detached mode (background)
- `-p 8080:80` - Maps port 8080 on host to port 80 in container
- `--name my-nginx` - Names the container
- `nginx:latest` - Uses the latest nginx image

## Step 2: Verify the Container

Check that the container is running

### Code/Command

```bash
docker ps
```

### Expected Output

```text
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                  NAMES
abc123def456   nginx:latest   "/docker-entrypoint.…"   2 minutes ago   Up 2 minutes   0.0.0.0:8080->80/tcp   my-nginx
```

### Explanation

`docker ps` lists all running containers. You should see your nginx container with status "Up".

## Step 3: Access the Application

Open your browser and visit <http://localhost:8080>

You should see the nginx welcome page.

## Verification

ตรวจสอบว่าทำงานถูกต้อง:

```bash
curl http://localhost:8080
```

Expected result:

```html
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
...
```

## Troubleshooting

### Port already in use

**Symptom:** Error: "bind: address already in use"

**Solution:** Use a different port

```bash
docker run -d -p 8081:80 --name my-nginx nginx:latest
```

### Container won't start

**Symptom:** Container exits immediately

**Solution:** Check logs

```bash
docker logs my-nginx
```

## Next Steps

- [Building Custom Images](docker-custom-images.md)
- [Docker Compose Basics](docker-compose-basics.md)

## Resources

- [Docker Documentation](https://docs.docker.com)
- [Docker Hub](https://hub.docker.com)
