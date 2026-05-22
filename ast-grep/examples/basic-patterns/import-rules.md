# Import Rules Examples

## Rule 1: No Relative Imports from Shared

Prefer using import aliases over relative paths for shared modules.

### Rule File: `rules/no-relative-shared-import.yml`

```yaml
id: no-relative-shared-import
message: Use #shared import alias instead of relative paths for shared modules
severity: warning
language: typescript
rule:
  pattern: import $IMPORTS from '$PATH'
  regex: '\.\./\.\./shared/|\.\./shared/|shared/'
  not:
    pattern: import $IMPORTS from '#shared/$PATH'
fix: |
  import $IMPORTS from '#shared/$PATH'
files:
  - "**/*.ts"
  - "**/*.vue"
```

### Test Cases

**Invalid:**
```typescript
import { logger } from '../../../shared/utils/logger';
import { config } from '../shared/constants';
```

**Valid:**
```typescript
import { logger } from '#shared/utils/logger';
import { config } from '#shared/constants';
```

---

## Rule 2: Components Must Import from UI Directory

All component imports should come from the components/ui directory.

### Rule File: `rules/components-ui-import.yml`

```yaml
id: components-ui-import
message: Components should import from components/ui directory only
severity: warning
language: typescript
rule:
  any:
    - pattern: import $COMPONENT from '@/components/$PATH'
      not:
        pattern: import $COMPONENT from '@/components/ui/$PATH'
    - pattern: import $COMPONENT from '../$PATH'
      not:
        pattern: import $COMPONENT from '../ui/$PATH'
fix: |
  import $COMPONENT from '@/components/ui/$COMPONENT'
files:
  - "components/**/*.vue"
```

### Test Cases

**Invalid:**
```typescript
import Button from '@/components/forms/Button';
import Card from '../layout/Card';
```

**Valid:**
```typescript
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
```

---

## Rule 3: No Default Export from Utilities

Utility modules should use named exports instead of default exports.

### Rule File: `rules/no-default-export-utility.yml`

```yaml
id: no-default-export-utility
message: Utility modules should use named exports instead of default exports
severity: error
language: typescript
rule:
  pattern: export default $EXPORT
  inside:
    kind: source_file
  has:
    pattern: export { $NAMED_EXPORTS }
  not:
    pattern: export { default as $DEFAULT }
files:
  - "utils/**/*.ts"
  - "shared/**/*.ts"
```

### Test Cases

**Invalid:**
```typescript
// utils/logger.ts
export default logger;
export { log, error };
```

**Valid:**
```typescript
// utils/logger.ts
export { logger, log, error };
// or
export const logger = { log, error };
```

---

## Rule 4: Import Type Annotations

Use `import type` for type-only imports.

### Rule File: `rules/import-type-annotations.yml`

```yaml
id: import-type-annotations
message: Use import type for type-only imports
severity: info
language: typescript
rule:
  pattern: import { $TYPES } from '$PATH'
  constraints:
    TYPES: { regex: '^[A-Z][a-zA-Z]*$' }
  not:
    pattern: import type { $TYPES } from '$PATH'
fix: |
  import type { $TYPES } from '$PATH'
files:
  - "**/*.ts"
  - "**/*.vue"
```

### Test Cases

**Invalid:**
```typescript
import { User, Product } from './types';
```

**Valid:**
```typescript
import type { User, Product } from './types';
```

---

## Rule 5: No Circular Imports

Detect potential circular import patterns.

### Rule File: `rules/no-circular-import.yml`

```yaml
id: no-circular-import
message: Potential circular import detected
severity: error
language: typescript
rule:
  pattern: import $IMPORTS from '$PATH'
  regex: '\./'
  has:
    pattern: import { $CURRENT_FILE } from '$PATH'
files:
  - "**/*.ts"
```

### Test Cases

**Invalid:**
```typescript
// file-a.ts
import { something } from './file-b';

// file-b.ts  
import { something } from './file-a';
```

**Valid:**
```typescript
// file-a.ts
import { something } from './file-b';

// file-b.ts
import { something } from './file-c';
```

---

## Rule 6: Group Imports

Group and sort imports for better readability.

### Rule File: `rules/group-imports.yml`

```yaml
id: group-imports
message: Imports should be grouped and sorted
severity: info
language: typescript
rule:
  pattern: |
    import $IMPORTS1 from '$PATH1'
    import $IMPORTS2 from '$PATH2'
  regex: '\n\nimport'
  not:
    pattern: |
      import $IMPORTS1 from '$PATH1'
      
      import $IMPORTS2 from '$PATH2'
files:
  - "**/*.ts"
```

### Test Cases

**Invalid:**
```typescript
import { User } from './types';

import { logger } from '#shared/utils';
```

**Valid:**
```typescript
import { User } from './types';
import { logger } from '#shared/utils';
```

---

## Rule 7: No Unused Imports

Detect imports that are not used in the file.

### Rule File: `rules/no-unused-imports.yml`

```yaml
id: no-unused-imports
message: Remove unused imports
severity: warning
language: typescript
rule:
  pattern: import { $IMPORTS } from '$PATH'
  not:
    has:
      pattern: $IMPORTS
files:
  - "**/*.ts"
  - "**/*.vue"
```

### Test Cases

**Invalid:**
```typescript
import { User, Product, Order } from './types';

const user: User = {};
// Product and Order are not used
```

**Valid:**
```typescript
import { User, Product } from './types';

const user: User = {};
const product: Product = {};
```

---

## Rule 8: Prefer Named Exports

Encourage named exports over default exports for better tree-shaking.

### Rule File: `rules/prefer-named-exports.yml`

```yaml
id: prefer-named-exports
message: Prefer named exports over default exports for better tree-shaking
severity: info
language: typescript
rule:
  pattern: export default $EXPORT
  not:
    pattern: export { $NAMED_EXPORTS }
fix: |
  export { $EXPORT as default }
files:
  - "**/*.ts"
```

### Test Cases

**Invalid:**
```typescript
export default class UserService {
  // ...
}
```

**Valid:**
```typescript
export class UserService {
  // ...
}
export { UserService as default };
```

---

## Rule 9: Import Path Validation

Validate import paths follow project conventions.

### Rule File: `rules/validate-import-paths.yml`

```yaml
id: validate-import-paths
message: Import path should follow project conventions
severity: warning
language: typescript
rule:
  pattern: import $IMPORTS from '$PATH'
  regex: '\.\./\.\./\.\./'
  not:
    pattern: import $IMPORTS from '#$ALIAS/$PATH'
files:
  - "**/*.ts"
  - "**/*.vue"
```

### Test Cases

**Invalid:**
```typescript
import { utils } from '../../../shared/utils';
```

**Valid:**
```typescript
import { utils } from '#shared/utils';
```

---

## Rule 10: Dynamic Import Detection

Find dynamic imports that might need optimization.

### Rule File: `rules/dynamic-import.yml`

```yaml
id: dynamic-import
message: Dynamic import detected - consider code splitting
severity: info
language: typescript
rule:
  pattern: import('$PATH')
  not:
    pattern: import('$PATH').then
files:
  - "**/*.ts"
  - "**/*.vue"
```

### Test Cases

**Detected:**
```typescript
const module = import('./heavy-module');
```

**Suggestion:**
```typescript
const module = import('./heavy-module').then(m => m.default);
```

## Usage

To test these rules:

```bash
# Test specific rule
ast-grep scan --rule rules/no-relative-shared-import.yml

# Test all import rules
ast-grep scan --config sgconfig.yml

# Interactive fixing
ast-grep scan --config sgconfig.yml --interactive
```
