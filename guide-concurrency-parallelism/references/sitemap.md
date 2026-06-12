# Sitemap

## แผนผังเนื้อหาและ Resources

### Guide Structure

```
guide-concurrency-parallelism/
├── SKILL.md                          # Index file
├── guide/
│   ├── installation.md               # Environment setup
│   ├── key-concept.md                # Core concepts
│   ├── how-it-works.md               # Concurrency models
│   ├── features.md                   # Features and capabilities
│   ├── configuration.md              # Configuration options
│   ├── quick-start.md                # Quick start guide
│   ├── best-practices.md             # Best practices
│   ├── thread-safety.md              # Thread safety
│   ├── async-patterns.md             # Async/await patterns
│   ├── actor-model.md                # Actor model and CSP
│   └── troubleshooting.md            # Common issues and solutions
└── references/
    ├── website.md                    # External resources
    └── sitemap.md                    # This file
```

### Learning Path

1. **Beginner**: installation.md → quick-start.md → key-concept.md
2. **Intermediate**: how-it-works.md → features.md → configuration.md
3. **Advanced**: thread-safety.md → async-patterns.md → actor-model.md
4. **Expert**: best-practices.md → troubleshooting.md → website.md (external resources)

### Key Topics

#### Concurrency vs Parallelism
- Differences between concurrency and parallelism
- When to use each approach
- Hardware considerations

#### Thread Safety
- Race conditions
- Deadlocks
- Mutexes and locks
- Atomic operations

#### Goroutines
- Lightweight threads
- Channels
- WaitGroups
- Context

#### Async/Await
- Event loops
- Promises/futures
- Error handling
- Cancellation

#### Actor Model
- Actor principles
- Message passing
- Supervision trees
- Location transparency

#### CSP
- Communicating sequential processes
- Channels
- Process composition
- Deadlock detection

#### Lock-Free Programming
- CAS operations
- Memory ordering
- Wait-free algorithms
- ABA problem

### External Resources

- **Books**: Concurrency in Go, The Go Programming Language, Rust Programming Language
- **Courses**: Coursera Go concurrency, Rust async, Python async
- **Tools**: Go race detector, ThreadSanitizer, Helgrind
- **Communities**: Reddit golang, rust, Python

### Related Skills

- `/guide-performance-engineering` - Performance optimization
- `/guide-distributed-systems` - Distributed concurrency
- `/guide-runtime-optimization` - Runtime concurrency
- `/lang-rust` - Rust for concurrency safety
- `/lang-go` - Go for concurrency
