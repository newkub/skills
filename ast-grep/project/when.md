# When to Use AST-grep

## Ideal Use Cases

### 1. Large-scale Code Refactoring
**When**: Migrating APIs, updating frameworks, or restructuring codebases
**Why**: AST-grep ensures syntactic correctness and handles edge cases
**Example**: Upgrading from React class components to functional components

### 2. Code Quality Enforcement
**When**: Establishing coding standards or enforcing best practices
**Why**: Automated, consistent rule application across entire codebase
**Example**: Enforcing consistent error handling patterns

### 3. Security Auditing
**When**: Identifying security vulnerabilities or compliance issues
**Why**: Pattern-based detection of security anti-patterns
**Example**: Finding hardcoded secrets or SQL injection patterns

### 4. Performance Optimization
**When**: Identifying performance bottlenecks or optimization opportunities
**Why**: Structural analysis of code patterns affecting performance
**Example**: Detecting inefficient loops or memory leaks

### 5. API Migration
**When**: Updating library usage or handling breaking changes
**Why**: Safe, automated transformation of API calls
**Example**: Migrating from deprecated library methods

## Development Scenarios

### 6. Code Reviews
**When**: Automating code review checks
**Why**: Consistent, objective rule application
**Example**: Checking for proper error handling before PR approval

### 7. Documentation Generation
**When**: Extracting code structure for documentation
**Why**: AST provides accurate structural information
**Example**: Generating API documentation from function signatures

### 8. Testing Infrastructure
**When**: Creating test templates or boilerplate code
**Why**: Pattern-based code generation
**Example**: Generating unit tests for all functions matching a pattern

### 9. Legacy Code Modernization
**When**: Updating old code patterns to modern equivalents
**Why**: Safe transformation of complex patterns
**Example**: Converting callback-based code to async/await

### 10. Multi-language Projects
**When**: Maintaining consistency across different languages
**Why**: Single tool works across all supported languages
**Example**: Enforcing similar naming conventions in JS and Python

## Team Collaboration

### 11. Onboarding New Developers
**When**: Teaching code patterns and conventions
**Why**: Visual pattern matching helps learning
**Example**: Showing examples of proper component structure

### 12. Code Standardization
**When**: Multiple teams working on same codebase
**Why**: Automated enforcement prevents drift
**Example**: Ensuring consistent import organization

### 13. Technical Debt Reduction
**When**: Systematically addressing known issues
**Why**: Bulk fixes reduce manual effort
**Example**: Replacing all deprecated methods at once

## CI/CD Integration

### 14. Continuous Integration
**When**: Running automated checks on every commit
**Why**: Fast, reliable code analysis
**Example**: Failing builds when anti-patterns are detected

### 15. Release Preparation
**When**: Preparing code for production release
**Why**: Final quality checks and optimizations
**Example**: Ensuring no debug code remains in production

### 16. Dependency Updates
**When**: Updating third-party libraries
**Why**: Automated migration to new APIs
**Example**: Updating all React hooks to latest patterns

## When NOT to Use AST-grep

### 17. Simple Text Operations
**When**: Basic text search/replace is sufficient
**Alternative**: Use `sed`, `awk`, or standard text tools
**Example**: Changing a string literal across files

### 18. Semantic Analysis
**When**: You need deep program understanding
**Alternative**: Use static analysis tools or linters
**Example**: Detecting unreachable code or type errors

### 19. Runtime Behavior
**When**: Analyzing how code executes
**Alternative**: Use profilers or debuggers
**Example**: Finding performance bottlenecks at runtime

### 20. Small, One-off Changes
**When**: Manual editing is faster
**Alternative**: Use IDE find/replace
**Example**: Fixing a single instance of a pattern

## Decision Framework

### Use AST-grep when:
- Pattern is structural, not textual
- Change affects multiple files
- Syntactic correctness is critical
- Pattern repeats across codebase
- You need language-aware matching

### Consider alternatives when:
- Change is simple text replacement
- Only affects one or two files
- You need semantic analysis
- Runtime behavior matters more
- Pattern is unique and non-repeating
