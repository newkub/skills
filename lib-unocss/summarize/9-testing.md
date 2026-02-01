# Testing

| Test Type | Tool | Example |
|-----------|------|---------|
| **Unit Tests** | Jest/Vitest | `expect(css).toContain('.flex')` |
| **Visual Tests** | Playwright | `await page.screenshot()` |
| **Integration Tests** | Cypress | `cy.get('.btn').should('have.class', 'bg-blue-500')` |
| **CSS Validation** | W3C Validator | Validate generated CSS |
| **Performance Tests** | Lighthouse | Measure CSS size |
| **Accessibility Tests** | Axe | Check color contrast |
