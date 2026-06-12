# Patterns และ Best Practices สำหรับ Markdown

## Document Structure Pattern

### Standard Document Structure

```markdown
# Title

## Introduction
- Overview
- Purpose
- Scope

## Main Content
- Sections
- Subsections
- Details

## Conclusion
- Summary
- Next steps
- References
```

### README Pattern

```markdown
# Project Name

## Description
Brief description of the project

## Features
- Feature 1
- Feature 2

## Installation
Steps to install

## Usage
How to use

## Contributing
Guidelines for contributors

## License
License information
```

## Section Organization Pattern

### Problem-Solution Pattern

```markdown
## Problem
Description of the problem

## Solution
Steps to solve

## Example
Code example

## Notes
Additional information
```

### Concept-Example Pattern

```markdown
## Concept
Explanation of the concept

## Example
Practical example

## Use Cases
When to use

## Best Practices
Tips and tricks
```

## Code Documentation Pattern

### Function Documentation

```markdown
## Function Name

Brief description

### Parameters
- `param1`: Description
- `param2`: Description

### Returns
Description of return value

### Example
```typescript
example()
```

### Notes
Additional information
```

### API Documentation

```markdown
## Endpoint

### Method
GET /api/resource

### Parameters
- `id`: Resource ID

### Response
```json
{
  "data": {}
}
```

### Example
```bash
curl https://api.example.com/resource
```
```

## Tutorial Pattern

### Step-by-Step Tutorial

```markdown
# Tutorial Title

## Prerequisites
What you need before starting

## Step 1: First Step
Description
```bash
command
```

## Step 2: Second Step
Description
```bash
command
```

## Verification
How to verify it works

## Troubleshooting
Common issues and solutions
```

## Reference Pattern

### Quick Reference

```markdown
# Quick Reference

## Commands
- `command1`: Description
- `command2`: Description

## Options
- `--option1`: Description
- `--option2`: Description

## Examples
```bash
example command
```
```

## Comparison Pattern

### Feature Comparison

```markdown
## Comparison

| Feature | Option A | Option B |
|---------|----------|----------|
| Speed   | Fast     | Slow     |
| Cost    | High     | Low      |

## When to Use Each
- Option A: When speed matters
- Option B: When cost matters
```

## FAQ Pattern

### FAQ Structure

```markdown
# FAQ

## Common Questions

### Question 1?
Answer to question 1

### Question 2?
Answer to question 2

## Troubleshooting
Common issues and solutions
```

## Changelog Pattern

### Changelog Format

```markdown
# Changelog

## [Version] - Date

### Added
- New feature 1
- New feature 2

### Changed
- Changed feature 1
- Changed feature 2

### Fixed
- Fixed bug 1
- Fixed bug 2

### Removed
- Removed feature 1
```
