# Integration Standards

## Purpose

กำหนดวิธีการเชื่อมโยง workflows, skills, และ files เข้าด้วยกันเพื่อสร้างระบบที่สมบูรณ์

## Scope

- การเชื่อมโยงระหว่าง workflows
- การใช้ skills ร่วมกัน
- การอ้างอิงไฟล์ข้ามโปรเจกต์
- การจัดการ dependencies ระหว่าง components

## Rules

### 1. Workflow Integration

| ประเภท | วิธีการ | ตัวอย่าง | หมายเหตุ |
|---------|----------|----------|----------|
| **Sequential** | ใช้ `follow.workflows` | `/validate → /improve-code-quality` | ทำตามลำดับ |
| **Parallel** | ใช้ multiple workflows | `/test-performance + /run-test` | ทำพร้อมกัน |
| **Conditional** | ใช้ conditions ใน front matter | `if: file-patterns match` | มีเงื่อนไข |
| **Loop** | ใช้ `auto_execution_mode: 3` | Continuous execution | ทำซ้ำๆ |

### 2. Skill Integration

| รูปแบบ | การใช้ | ตัวอย่าง | ผลลัพธ์ |
|---------|----------|----------|--------|
| **Single Skill** | ใช้ skill เดียว | `@typescript` | TypeScript features |
| **Multiple Skills** | ใช้หลาย skills | `@typescript + @vitest` | Combined features |
| **Skill Chain** | ส่งผลลระหว่าง skills | `@write-skills → @improve-code-quality` | Sequential processing |
| **Skill Override** | แทนที่ skill เดิม | `@typescript` แทน `@javascript` | Replace functionality |

### 3. File Reference Integration

| ประเภท | Path Format | ตัวอย่าง | การใช้ |
|---------|------------|----------|--------|
| **Internal** | Relative path | `./1-document-structure.md` | ไฟล์ใน directory เดียวกัน |
| **Cross-Directory** | Relative path | `../2-templates/global-workflows.md` | ไฟล์ใน directory อื่น |
| **Cross-Project** | Absolute path | `/skills/lang-typescript.md` | ไฟล์ในโปรเจกต์อื่น |
| **External** | Full URL | `https://example.com/api` | External resources |

### 4. Data Integration

| ประเภท | วิธีการ | ตัวอย่าง | คำอธิบาย |
|---------|----------|----------|-----------|
| **Front Matter** | YAML fields | `title: "Workflow"` | Metadata |
| **Environment** | Env variables | `process.env.NODE_ENV` | Runtime config |
| **Config Files** | JSON/YAML | `package.json` | Project config |
| **Database** | API calls | `fetch('/api/data')` | Dynamic data |

### 5. Integration Patterns

#### 5.1 Validation → Improvement Pattern

```yaml
follow:
  workflows:
    - "/validate"
    - "/improve-code-quality"
    - "/review-workflows"
```

#### 5.2 Testing → Deployment Pattern

```yaml
follow:
  workflows:
    - "/test-performance"
    - "/run-test"
    - "/verify-deployment"
```

#### 5.3 Documentation → Review Pattern

```yaml
follow:
  workflows:
    - "/write-documentation"
    - "/review-content"
    - "/validate-structure"
```

## Template

```yaml
---
title: [Workflow Name]
description: [Thai Description]
auto_execution_mode: 3
file-patterns:
  - "[pattern]"
follow:
  skills:
    - "[skill-1]"
    - "[skill-2]"
    - "[skill-3]"
  workflows:
    - "/workflow-1"
    - "/workflow-2"
    - "/workflow-3"
  files:
    - "[file-1]"
    - "[file-2]"
    - "[file-3]"
---

## [Workflow Name]

## Purpose

[Purpose description]

## Scope

- [Scope item 1]
- [Scope item 2]

## Rules

### 1. Integration Rules

| Rule | Description | Example |
|------|-------------|---------|
| [Rule] | [Description] | [Example] |

### 2. Dependency Rules

| Dependency | Type | Required | Version |
|------------|------|----------|---------|
| [Dependency] | [Type] | [Yes/No] | [Version] |

## Template

```[language]
[Integration template]
```

## Example

```[language]
[Integration example]
```
```

## Example

```yaml
---
title: Complete Code Quality Workflow
description: ปรับปรุงคุณภาพโค้ดแบบครบวงจน
auto_execution_mode: 3
file-patterns:
  - "**/*.{ts,js,tsx,jsx}"
  - "**/*.json"
  - "**/*.md"
follow:
  skills:
    - "@typescript"
    - "@vitest"
    - "@write-skills"
    - "@improve-code-quality"
  workflows:
    - "/validate"
    - "/test-performance"
    - "/improve-code-quality"
    - "/review-workflows"
    - "/write-documentation"
  files:
    - "package.json"
    - "tsconfig.json"
    - ".eslintrc.json"
---

## Complete Code Quality Workflow

## Purpose

ปรับปรุงคุณภาพโค้ดแบบครบวงจนตั้งแต่ validation จนถึง documentation

## Scope

- ทุกไฟล์ TypeScript/JavaScript
- การทดสอบและ validation
- การปรับปรุง code quality
- การเขียน documentation

## Rules

### 1. Integration Sequence

| Phase | Workflow | Purpose | Output |
|-------|----------|---------|--------|
| 1 | `/validate` | ตรวจสอบความถูกต้อง | Validation report |
| 2 | `/test-performance` | ทดสอบประสิทธิภาพ | Performance metrics |
| 3 | `/improve-code-quality` | ปรับปรุงโค้ด | Improved code |
| 4 | `/review-workflows` | ตรวจสอบผลลัพธ์ | Review report |
| 5 | `/write-documentation` | เขียนเอกสาร | Documentation |

### 2. Skill Dependencies

| Skill | Purpose | Integration |
|-------|---------|-------------|
| `@typescript` | Type checking | ใช้กับทุก phase |
| `@vitest` | Testing | Phase 2 |
| `@write-skills` | Documentation | Phase 5 |
| `@improve-code-quality` | Code improvement | Phase 3 |

### 3. File Dependencies

| File | Type | Required | Purpose |
|------|------|----------|---------|
| `package.json` | Config | ✅ | Dependencies |
| `tsconfig.json` | Config | ✅ | TypeScript config |
| `.eslintrc.json` | Config | ❌ | Linting rules |

## Template

```typescript
// Integration template
interface WorkflowResult {
  phase: string
  status: 'success' | 'error'
  output: any
  errors?: string[]
}

async function runCompleteWorkflow(
  files: string[]
): Promise<WorkflowResult[]> {
  const results: WorkflowResult[] = []
  
  // Phase 1: Validation
  const validation = await validateFiles(files)
  results.push(validation)
  
  // Phase 2: Testing
  const testing = await runTests(files)
  results.push(testing)
  
  // Phase 3: Improvement
  const improvement = await improveCode(files)
  results.push(improvement)
  
  // Phase 4: Review
  const review = await reviewResults(results)
  results.push(review)
  
  // Phase 5: Documentation
  const documentation = await generateDocs(results)
  results.push(documentation)
  
  return results
}
```

## Example

```typescript
// Complete workflow execution
const files = [
  'src/index.ts',
  'src/utils/validation.ts',
  'src/components/Button.tsx'
]

const results = await runCompleteWorkflow(files)

// Process results
results.forEach((result, index) => {
  console.log(`Phase ${index + 1}: ${result.phase}`)
  console.log(`Status: ${result.status}`)
  
  if (result.status === 'error') {
    console.log('Errors:', result.errors)
  } else {
    console.log('Output:', result.output)
  }
})
```
```

## Integration Best Practices

### 1. Dependency Management

| Practice | Description | Example |
|----------|-------------|---------|
| **Explicit Dependencies** | ระบุ dependencies ทั้งหมด | `follow.skills: ["@typescript"]` |
| **Version Pinning** | ระบุ version ที่แน่นอน | `typescript: ^5.0.0` |
| **Optional Dependencies** | ระบุ dependencies ที่ไม่จำเป็น | `@eslint: optional` |
| **Conflict Resolution** | แก้ไข conflicts | Use skill priorities |

### 2. Error Handling

| Strategy | Description | Implementation |
|----------|-------------|---------------|
| **Graceful Degradation** | ทำงานต่อแม้ error | Skip failed phase |
| **Rollback** | คืนค่าเมื่อ error | Revert changes |
| **Retry Logic** | ลองใหม่เมื่อ fail | 3 retry attempts |
| **Error Reporting** | รายงาน errors | Log to file |

### 3. Performance Optimization

| Technique | Description | Impact |
|------------|-------------|--------|
| **Parallel Execution** | ทำงานพร้อมกัน | 50% faster |
| **Caching** | เก็บผลลัพธ์ | 80% cache hit |
| **Lazy Loading** | โหลดเมื่อต้อง | Reduce memory |
| **Batch Processing** | ประมวลผลเป็นกลุ่ม | Better throughput |

### 4. Monitoring & Logging

| Metric | Type | Target |
|--------|------|--------|
| **Execution Time** | Performance | < 5 minutes |
| **Success Rate** | Reliability | > 95% |
| **Error Rate** | Quality | < 1% |
| **Resource Usage** | Efficiency | < 80% CPU |

## Integration Scripts

### 1. Workflow Orchestrator

```bash
#!/bin/bash

# Workflow orchestrator
orchestrate_workflow() {
    local workflow="$1"
    local files="${@:2}"
    
    echo "🚀 Starting workflow: $workflow"
    
    # Extract follow configuration
    local skills=$(yq '.follow.skills[]' "$workflow")
    local workflows=$(yq '.follow.workflows[]' "$workflow")
    local files_config=$(yq '.follow.files[]' "$workflow")
    
    # Execute skills
    for skill in $skills; do
        echo "📚 Loading skill: $skill"
        source "skills/$skill.sh"
    done
    
    # Execute workflows
    for wf in $workflows; do
        echo "⚡ Executing workflow: $wf"
        execute_workflow "$wf" "$files"
    done
    
    echo "✅ Workflow completed: $workflow"
}
```

### 2. Dependency Resolver

```bash
#!/bin/bash

# Dependency resolver
resolve_dependencies() {
    local workflow="$1"
    local resolved=()
    local visited=()
    
    resolve_recursive() {
        local current="$1"
        
        if [[ " ${visited[*]} " =~ " $current " ]]; then
            echo "⚠️ Circular dependency detected: $current"
            return 1
        fi
        
        visited+=("$current")
        
        # Get dependencies
        local deps=$(yq '.follow.workflows[]' "$current" 2>/dev/null || echo "")
        
        for dep in $deps; do
            resolve_recursive "$dep"
        done
        
        resolved+=("$current")
    }
    
    resolve_recursive "$workflow"
    
    # Return resolved dependencies in reverse order
    printf '%s\n' "${resolved[@]}" | tac
}
```

### 3. Integration Tester

```bash
#!/bin/bash

# Integration tester
test_integration() {
    local workflow="$1"
    local test_files="${@:2}"
    
    echo "🧪 Testing integration: $workflow"
    
    # Test skill loading
    local skills=$(yq '.follow.skills[]' "$workflow" 2>/dev/null || echo "")
    for skill in $skills; do
        if [[ ! -f "skills/$skill.md" ]]; then
            echo "❌ Skill not found: $skill"
            return 1
        fi
    done
    
    # Test workflow references
    local workflows=$(yq '.follow.workflows[]' "$workflow" 2>/dev/null || echo "")
    for wf in $workflows; do
        if [[ ! -f "workflows/$wf.md" ]]; then
            echo "❌ Workflow not found: $wf"
            return 1
        fi
    done
    
    # Test file references
    local files=$(yq '.follow.files[]' "$workflow" 2>/dev/null || echo "")
    for file in $files; do
        if [[ ! -f "$file" ]]; then
            echo "❌ File not found: $file"
            return 1
        fi
    done
    
    echo "✅ Integration test passed"
    return 0
}
```
