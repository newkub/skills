# Principles of AST-grep

## Design Principles

### 1. Language-Aware Matching
**Principle**: Understand code structure, not just text
**Implementation**: Use AST instead of regular expressions
**Benefit**: More precise and reliable pattern matching
**Example**: Match function calls regardless of whitespace or formatting

### 2. Developer Experience
**Principle**: Make complex operations simple and intuitive
**Implementation**: Write patterns like ordinary code
**Benefit**: Lower learning curve and higher adoption
**Example**: `console.log($ARG)` matches console.log calls naturally

### 3. Performance First
**Principle**: Handle large codebases efficiently
**Implementation**: Rust implementation with parallel processing
**Benefit**: Fast execution and low memory usage
**Example**: Scan millions of lines in seconds

### 4. Multi-language Support
**Principle**: One tool for all programming languages
**Implementation**: Tree-sitter parser integration
**Benefit**: Consistent workflow across projects
**Example**: Same patterns work in JavaScript, Python, and Rust

### 5. Safety and Correctness
**Principle**: Ensure transformations maintain syntactic validity
**Implementation**: AST-based code generation
**Benefit**: No syntax errors from automated changes
**Example**: Refactoring preserves code structure

## Architectural Principles

### 6. Modularity
**Principle**: Separate concerns into distinct components
**Implementation**: Core engine, language support, and interfaces
**Benefit**: Maintainable and extensible architecture
**Example**: Adding new languages without changing core logic

### 7. Extensibility
**Principle**: Allow users to customize and extend functionality
**Implementation**: Plugin system and custom language support
**Benefit**: Adapt to specific project needs
**Example**: Loading custom tree-sitter parsers at runtime

### 8. Testability
**Principle**: Every feature should be thoroughly testable
**Implementation**: Snapshot testing and comprehensive test suite
**Benefit**: Reliable and maintainable codebase
**Example**: Automated rule verification

### 9. Incremental Processing
**Principle**: Process only what has changed
**Implementation**: File modification tracking and caching
**Benefit**: Faster subsequent operations
**Example**: Re-scan only modified files

### 10. Error Resilience
**Principle**: Gracefully handle errors and edge cases
**Implementation**: Error-recovering parsers and validation
**Benefit**: Robust operation in real-world scenarios
**Example**: Continue processing despite syntax errors

## User Interface Principles

### 11. Consistency
**Principle**: Uniform behavior across all interfaces
**Implementation**: Same patterns work in CLI, API, and IDE
**Benefit**: Predictable user experience
**Example**: Rule works identically in VSCode and command line

### 12. Interactivity
**Principle**: Give users control over automated operations
**Implementation**: Interactive mode with review and approval
**Benefit**: Safe automation with human oversight
**Example**: Review changes before applying them

### 13. Verbosity Control
**Principle**: Provide appropriate detail levels
**Implementation**: Multiple output formats and verbosity options
**Benefit**: Useful for both humans and machines
**Example**: JSON output for CI, colored output for humans

### 14. Discoverability
**Principle**: Make features easy to find and understand
**Implementation**: Comprehensive help and documentation
**Benefit**: Lower barrier to entry
**Example**: Built-in help and examples

### 15. Backward Compatibility
**Principle**: Avoid breaking existing workflows
**Implementation**: Careful versioning and migration paths
**Benefit**: Trust and stability for users
**Example**: Deprecated features with clear migration guidance

## Quality Principles

### 16. Precision
**Principle**: Match exactly what's intended, nothing more
**Implementation**: Strict AST matching with configurable strictness
**Benefit**: Fewer false positives and negatives
**Example**: Match only function declarations, not function calls

### 17. Performance
**Principle**: Optimize for speed and memory efficiency
**Implementation**: Streaming processing and parallel execution
**Benefit**: Handle large codebases effectively
**Example**: Process gigabytes of code in minutes

### 18. Reliability
**Principle**: Consistent and predictable behavior
**Implementation**: Comprehensive testing and validation
**Benefit**: Trust in automated operations
**Example**: Same results across different platforms

### 19. Maintainability
**Principle**: Code that's easy to understand and modify
**Implementation**: Clean architecture and documentation
**Benefit**: Long-term sustainability
**Example**: Well-documented rule format

### 20. Security
**Principle**: Safe execution with untrusted input
**Implementation**: Sandboxing and input validation
**Benefit**: Protect users from malicious code
**Example**: Safe rule execution in CI environments

## Community Principles

### 21. Open Source
**Principle**: Transparent development and community contribution
**Implementation**: MIT license and public repository
**Benefit**: Community trust and contributions
**Example**: Community-contributed rules and language support

### 22. Documentation
**Principle**: Comprehensive and accessible documentation
**Implementation**: Multiple formats and examples
**Benefit**: Easy learning and reference
**Example**: Interactive playground and tutorials

### 23. Feedback Integration
**Principle**: Listen and respond to user needs
**Implementation**: Issue tracking and feature requests
**Benefit**: Tool evolves with user requirements
**Example**: Community-requested features and improvements

### 24. Educational Value
**Principle**: Help users learn about code structure
**Implementation**: Explanatory messages and visual feedback
**Benefit**: Improved code understanding
**Example**: AST visualization and pattern explanations

### 25. Collaboration
**Principle**: Enable team workflows and sharing
**Implementation**: Shareable rules and configurations
**Benefit**: Team consistency and knowledge sharing
**Example**: Shared rule repositories and templates
