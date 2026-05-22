# Optimization Patterns

Performance optimization patterns for code improvement.

## Remove Dead Code

### Unused variables

```yaml
id: unused-variable
language: typescript
rule:
  pattern: |
    const $VAR = $INIT
  constraints:
    VAR:
      not:
        pattern: $_
        inside:
          stopBy: end
          pattern: $VAR
fix: ''
```

### Unused imports

```yaml
id: unused-import
language: typescript
rule:
  pattern: |
    import { $UNUSED } from '$SRC'
  constraints:
    UNUSED:
      not:
        pattern: $_
        inside:
          stopBy: end
          pattern: $UNUSED
fix: ''
```

### Unreachable code after return

```yaml
id: unreachable-code
language: typescript
severity: warning
rule:
  pattern: |
    return $$$;
    $$$CODE
message: Unreachable code detected after return statement.
```

## Array/Object Optimizations

### Prefer array methods over loops

```yaml
id: prefer-array-methods
language: typescript
rule:
  pattern: |
    for (let $I = 0; $I < $ARR.length; $I++) {
      $$$BODY
    }
message: Consider using array methods like map, filter, or forEach.
```

### Use object shorthand

```yaml
id: object-shorthand
language: typescript
rule:
  pattern: |
    { $KEY: $KEY }
fix: |
  { $KEY }
```

### Prefer includes over indexOf

```yaml
id: prefer-includes
language: typescript
rule:
  pattern: |
    $ARR.indexOf($ITEM) !== -1
  or:
    pattern: |
      $ARR.indexOf($ITEM) >= 0
  or:
    pattern: |
      $ARR.indexOf($ITEM) > -1
fix: |
  $ARR.includes($ITEM)
```

## String Optimizations

### Use template literals

```yaml
id: use-template-literal
language: typescript
rule:
  pattern: |
    $STR1 + $STR2
  constraints:
    STR1:
      kind: string_literal
  or:
    pattern: |
      $STR1 + $VAR + $STR2
fix: |
  `${$STR1}${$VAR}${$STR2}`
```

### Prefer startsWith/endsWith

```yaml
id: prefer-startswith
language: typescript
rule:
  pattern: |
    $STR.indexOf($PREFIX) === 0
  or:
    pattern: |
      $STR.indexOf($PREFIX) == 0
  or:
    pattern: |
      $STR.substring(0, $N) === $PREFIX
fix: |
  $STR.startsWith($PREFIX)
```

## Async Optimizations

### Prefer Promise.all

```yaml
id: prefer-promise-all
language: typescript
rule:
  pattern: |
    const $A = await $PROMISE1;
    const $B = await $PROMISE2;
  not:
    has:
      pattern: $A
      follows:
        pattern: const $B = await $PROMISE2
message: Consider using Promise.all() for parallel execution.
```

### Remove redundant async/await

```yaml
id: redundant-async-await
language: typescript
rule:
  pattern: |
    return await $EXPR
  not:
    has:
      pattern: try
      inside:
        pattern: $$$
fix: |
  return $EXPR
```

## Memory Optimizations

### Prefer const over let

```yaml
id: prefer-const
language: typescript
rule:
  pattern: |
    let $VAR = $INIT
  not:
    has:
      pattern: $VAR = $_
      inside:
        stopBy: end
        pattern: $$$
fix: |
  const $VAR = $INIT
```

### Avoid creating functions in loops

```yaml
id: avoid-function-in-loop
language: typescript
severity: warning
rule:
  pattern: |
    for ($$$) {
      $$$BODY
      function $NAME() {
        $$$FUNC_BODY
      }
    }
message: Creating functions inside loops can cause performance issues.
```
