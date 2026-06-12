# Sitemap

## แผนผังเนื้อหาและ Resources

### Guide Structure

```
guide-runtime-optimization/
├── SKILL.md                          # Index file
├── guide/
│   ├── installation.md               # Environment setup
│   ├── key-concept.md                # Core concepts
│   ├── how-it-works.md               # Runtime optimization pipeline
│   ├── features.md                   # Features and capabilities
│   ├── configuration.md              # Configuration options
│   ├── quick-start.md                # Quick start guide
│   ├── best-practices.md             # Best practices
│   ├── architecture.md               # Architecture patterns
│   ├── performance.md                # Performance optimization
│   └── troubleshooting.md            # Common issues and solutions
└── references/
    ├── website.md                    # External resources
    └── sitemap.md                    # This file
```

### Learning Path

1. **Beginner**: installation.md → quick-start.md → key-concept.md
2. **Intermediate**: how-it-works.md → features.md → configuration.md
3. **Advanced**: architecture.md → performance.md → best-practices.md
4. **Expert**: troubleshooting.md → website.md (external resources)

### Key Topics

#### JIT Compilation
- Tiered compilation
- Hot path detection
- Code generation
- Deoptimization

#### Memory Management
- Garbage collection algorithms
- Memory pooling
- Allocation strategies
- GC tuning

#### Optimization
- Profiling techniques
- Optimization passes
- Vectorization
- Loop optimization

#### Performance
- Benchmarking
- Profiling tools
- Performance metrics
- Regression testing

### External Resources

- **Documentation**: LLVM, V8, HotSpot JVM
- **Books**: Crafting Interpreters, Engineering a Compiler
- **Tools**: perf, VTune, Valgrind
- **Communities**: LLVM Dev, V8 Discourse, r/compilers

### Related Skills

- `/guide-compiler-design` - Compiler design fundamentals
- `/guide-systems-programming` - Low-level programming
- `/guide-algorithms-data-structures` - Data structures
- `/lang-rust` - Systems programming language
- `/lang-cpp` - C++ for performance
