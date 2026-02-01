# Code Review

## Rationale

Code review ช่วย improve code quality, share knowledge, และ catch bugs ก่อน production

## Bad Practice

```typescript
// ❌ Approving without review
// PR: "LGTM" (Looks Good To Me) - ไม่ได้อ่านโค้ด

// ❌ Nitpicking style
// "Use single quotes instead of double quotes"
// "Add space after comma"

// ❌ No explanation
// "This is wrong" (ไม่บอกว่าทำไม)
```

## Good Practice

```typescript
// ✅ Constructive feedback
// "Consider extracting this logic into a separate function for better testability"

// ✅ Explain reasoning
// "I suggest using async/await here because it's more readable than .then()"

// ✅ Focus on important issues
// "This could cause a memory leak - consider cleanup in useEffect"
```

## Code Review Checklist

### 1. Functionality
- [ ] Does it solve the problem?
- [ ] Are edge cases handled?
- [ ] Are errors handled properly?

### 2. Code Quality
- [ ] Is the code readable?
- [ ] Are functions small and focused?
- [ ] Is there duplicate code?

### 3. Testing
- [ ] Are there tests?
- [ ] Do tests cover edge cases?
- [ ] Are tests passing?

### 4. Performance
- [ ] Are there performance concerns?
- [ ] Are there unnecessary re-renders?
- [ ] Are queries optimized?

### 5. Security
- [ ] Is user input validated?
- [ ] Are secrets exposed?
- [ ] Are there SQL injection risks?

## Best Practices

### 1. Be Constructive
- **Focus on the code**, not the person
- **Explain why**, not just "change this"
- **Suggest improvements**, don't just criticize

### 2. Be Efficient
- **Review small PRs** (< 500 lines)
- **Review within 24 hours**
- **Ask questions** if unclear

### 3. Be Thorough
- **Check tests**
- **Check error handling**
- **Check edge cases**

## Example Review Comments

```typescript
// ❌ Bad
"This is wrong"

// ✅ Good
"This could cause a bug when the user is null. Consider adding a null check:
```typescript
if (!user) return;
```"

// ❌ Bad
"Use async/await"

// ✅ Good
"Consider using async/await here for better readability:
```typescript
const user = await findUser(id);
```"
```

## References

- [Google Code Review Guide](https://google.github.io/eng-practices/review/)
- [GitHub Code Review Best Practices](https://github.blog/developer-tips/code-review-best-practices/)
