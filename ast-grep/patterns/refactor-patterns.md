# Refactoring Patterns

Common code refactoring patterns using AST-grep.

## Console Logging

### Replace console.log with logger

```yaml
id: replace-console-log
language: typescript
rule:
  pattern: console.log($MSG)
fix: |
  logger.info($MSG)
```

### Remove console.debug in production

```yaml
id: remove-console-debug
language: typescript
rule:
  pattern: console.debug($$$)
fix: ''
```

## Variable Declarations

### Convert var to const

```yaml
id: var-to-const
language: typescript
rule:
  pattern: var $VAR = $INIT
constraints:
  INIT:
    not:
      pattern: $VAR++
fix: const $VAR = $INIT
```

### Convert var to let (when reassigned)

```yaml
id: var-to-let
language: typescript
rule:
  pattern: var $VAR = $INIT
  has:
    pattern: $VAR = $_
fix: let $VAR = $INIT
```

## Function Transformations

### Convert function to arrow function

```yaml
id: function-to-arrow
language: typescript
rule:
  pattern: |
    function $NAME($$$ARGS) {
      $$$BODY
    }
constraints:
  NAME:
    regex: ^[a-z]
fix: |
  const $NAME = ($$$ARGS) => {
    $$$BODY
  }
```

### Simplify return statements

```yaml
id: simplify-return
language: typescript
rule:
  pattern: |
    return $X => {
      return $Y
    }
fix: return $X => $Y
```

## Import/Export Optimization

### Remove unused imports

```yaml
id: remove-unused-import
language: typescript
rule:
  pattern: import { $UNUSED } from '$SRC'
constraints:
  UNUSED:
    not:
      pattern: $_
      inside:
        stopBy: end
        pattern: $UNUSED
```

### Consolidate imports from same source

```yaml
id: consolidate-imports
language: typescript
rule:
  pattern: |
    import { $A } from '$SRC'
    import { $B } from '$SRC'
fix: |
  import { $A, $B } from '$SRC'
```

## Error Handling

### Add error logging

```yaml
id: add-error-logging
language: typescript
rule:
  pattern: |
    catch ($ERR) {
      $$$BODY
    }
  not:
    has:
      pattern: logger.error($ERR)
      inside:
        pattern: $$$BODY
fix: |
  catch ($ERR) {
    logger.error($ERR);
    $$$BODY
  }
```

## React Patterns

### Convert class component to function

```yaml
id: class-to-function-component
language: typescript
rule:
  pattern: |
    class $NAME extends React.Component {
      render() {
        return ($$$JSX)
      }
    }
fix: |
  function $NAME() {
    return ($$$JSX)
  }
```

### Add React hooks dependency

```yaml
id: add-useeffect-deps
language: typescript
rule:
  pattern: |
    useEffect(() => {
      $$$BODY
    })
  not:
    has:
      pattern: useEffect($$$, [$$$])
fix: |
  useEffect(() => {
    $$$BODY
  }, [])
```
