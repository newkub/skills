# Sitemap

## แผนผังเนื้อหาและ Resources

### Guide Structure

```
guide-database-design/
├── SKILL.md                          # Index file
├── guide/
│   ├── installation.md               # Environment setup
│   ├── key-concept.md                # Core concepts
│   ├── how-it-works.md               # Database internals
│   ├── features.md                   # Features and capabilities
│   ├── configuration.md              # Configuration options
│   ├── quick-start.md                # Quick start guide
│   ├── best-practices.md             # Best practices
│   ├── schema-design.md              # Schema design principles
│   ├── indexing.md                   # Indexing strategies
│   ├── query-optimization.md         # Query optimization
│   └── troubleshooting.md            # Common issues and solutions
└── references/
    ├── website.md                    # External resources
    └── sitemap.md                    # This file
```

### Learning Path

1. **Beginner**: installation.md → quick-start.md → key-concept.md
2. **Intermediate**: how-it-works.md → features.md → configuration.md
3. **Advanced**: schema-design.md → indexing.md → query-optimization.md
4. **Expert**: best-practices.md → troubleshooting.md → website.md (external resources)

### Key Topics

#### Relational vs NoSQL
- Differences between SQL and NoSQL
- When to use each approach
- CAP theorem implications

#### ACID Properties
- Atomicity, Consistency, Isolation, Durability
- Transaction management
- Isolation levels

#### Normalization
- 1NF, 2NF, 3NF
- When to normalize
- When to denormalize

#### Schema Design
- Data types
- Relationships (1:1, 1:N, N:M)
- Constraints
- Naming conventions

#### Indexing
- B-tree, hash, GIN, GiST indexes
- Composite indexes
- Partial indexes
- Index maintenance

#### Query Optimization
- EXPLAIN ANALYZE
- Join optimization
- Subquery optimization
- Pagination strategies

#### Replication
- Master-slave replication
- Master-master replication
- Replication lag
- Failover strategies

### External Resources

- **Books**: Database Design for Mere Mortals, SQL Antipatterns, Designing Data-Intensive Applications
- **Courses**: Coursera database design, PostgreSQL administration, MongoDB University
- **Tools**: pgAdmin, DBeaver, DataGrip, Prisma
- **Communities**: Reddit PostgreSQL, MySQL, MongoDB

### Related Skills

- `/guide-software-design` - Software architecture
- `/guide-distributed-systems` - Distributed databases
- `/guide-performance-engineering` - Query optimization
- `/lib-drizzle` - ORM for TypeScript
- `/lib-prisma` - Popular ORM
