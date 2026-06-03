# Testing

## Overview

แนวทางการเขียน tests สำหรับ web applications

## Testing Pyramid

```
           ┌───────────┐
           │    E2E    │  10%
          ┌┴───────────┴┐
          │ Integration │  20%
         ┌┴─────────────┴┐
         │     Unit      │  70%
        ┌┴───────────────┴┐
```

| Test Type | Coverage | Speed | Examples |
|-----------|----------|-------|----------|
| **Unit** | 70% | Fast | Functions, components |
| **Integration** | 20% | Medium | API routes, UI flows |
| **E2E** | 10% | Slow | Critical paths |

## Test Tools

| Type | Tools |
|------|-------|
| **Unit/Component** | Vitest, Jest, RTL |
| **E2E** | Playwright, Cypress |
| **Visual** | Chromatic, Percy |
| **Accessibility** | axe-core, Lighthouse |

## Testing Patterns

### 1. AAA Pattern

```typescript
// Arrange
const userData = { name: 'John', email: 'john@example.com' }

// Act
const user = await createUser(userData)

// Assert
expect(user.id).toBeDefined()
expect(user.name).toBe('John')
```

### 2. Component Testing (React)

```tsx
import { render, screen, userEvent } from '@testing-library/react'
import { LoginForm } from './LoginForm'

test('should submit form with valid data', async () => {
  const user = userEvent.setup()
  render(<LoginForm onSubmit={mockSubmit} />)

  await user.type(screen.getByLabelText(/email/i), 'test@example.com')
  await user.type(screen.getByLabelText(/password/i), 'password123')
  await user.click(screen.getByRole('button', { name: /submit/i }))

  expect(mockSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123',
  })
})
```

### 3. E2E Testing

```typescript
import { test, expect } from '@playwright/test'

test('user can login', async ({ page }) => {
  await page.goto('/login')

  await page.getByLabel('Email').fill('test@example.com')
  await page.getByLabel('Password').fill('password123')
  await page.getByRole('button', { name: 'Sign In' }).click()

  await expect(page).toHaveURL('/dashboard')
  await expect(page.getByText('Welcome')).toBeVisible()
})
```

## Test Coverage

| Type | Target |
|------|--------|
| **Statement** | > 80% |
| **Branch** | > 75% |
| **Function** | > 80% |
| **Line** | > 80% |

## Summary

| Aspect | Practice |
|--------|----------|
| **Pyramid** | 70% unit, 20% integration, 10% E2E |
| **Patterns** | AAA, render testing |
| **Tools** | Vitest, Playwright, RTL |
| **Coverage** | > 80% statement coverage |
