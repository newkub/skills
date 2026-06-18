# Prompt Engineering

## Purpose

เทคนิคการเขียน prompt ที่มีประสิทธิภาพสำหรับ Windsurf

## Components of a High Quality Prompt

### 1. Clear Goal

State what you want clearly:
```
Create a REST API endpoint for user authentication
```

### 2. Context

Provide relevant context:
```
In this Express.js application, create a REST API endpoint for user authentication using JWT
```

### 3. Specific Requirements

Detail what you need:
```
Create a POST /api/auth/login endpoint that:
- Accepts email and password
- Validates credentials against database
- Returns JWT token on success
- Returns 401 on invalid credentials
- Includes error handling
```

### 4. Examples

Show expected output:
```
Example request:
POST /api/auth/login
{ "email": "user@example.com", "password": "secret" }

Example response:
{ "token": "eyJhbGciOiJIUzI1NiIs..." }
```

## Examples

### Code Generation

**Good:**
```
Create a React component for a user profile card that displays:
- User avatar (circular, 100x100)
- User name (bold, large)
- User email (gray, smaller)
- Follow button (right-aligned)
Use Tailwind CSS for styling
```

**Bad:**
```
Make a user profile component
```

### Refactoring

**Good:**
```
Refactor this function to use async/await instead of callbacks:
[paste code]
Keep the same functionality and error handling
```

**Bad:**
```
Fix this function
```

### Debugging

**Good:**
```
The API call to /api/users is returning 500 error. Check:
1. The endpoint implementation in server.js
2. Database connection
3. Error handling
Explain what's wrong and how to fix it
```

**Bad:**
```
Why is this broken?
```

## Best Practices

### Be Specific

- Use precise language
- Avoid ambiguity
- Specify exact requirements

### Provide Context

- Include relevant code
- Mention framework/language
- Reference related files

### Use Examples

- Show expected input/output
- Provide sample data
- Demonstrate desired behavior

### Break Down Complex Tasks

- Split into steps
- Use Plan mode for complexity
- Review before execution

### Iterate

- Start with basic prompt
- Refine based on results
- Add more detail as needed

## Common Mistakes

### Too Vague

❌ "Make it faster"
✅ "Optimize this function to reduce time complexity from O(n²) to O(n)"

### Missing Context

❌ "Fix this bug"
✅ "The login form doesn't submit when clicking the button. Check the form validation in LoginForm.tsx"

### Overly Complex

❌ "Create a full e-commerce platform with payment processing, inventory management, and analytics"
✅ "Create a product listing page with pagination and filtering"

### No Examples

❌ "Parse this data format"
✅ "Parse this CSV format: name,email,age\nJohn,john@example.com,30"

## Tips for Different Modes

### Chat Mode

- Conversational style
- Ask questions
- Explore options

### Cascade Code Mode

- Direct instructions
- Specific requirements
- Clear deliverables

### Cascade Plan Mode

- High-level goals
- Let Cascade plan details
- Review and adjust

### Cascade Ask Mode

- Questions about code
- Explanations
- Analysis requests

## Summary

| Principle | Description |
|-----------|-------------|
| **Clear Goal** | State what you want |
| **Context** | Provide relevant info |
| **Specific** | Use precise language |
| **Examples** | Show expected output |
| **Iterate** | Refine based on results |
