# Sitemap

## แผนผังเนื้อหาและ Resources

### Guide Structure

```
guide-distributed-systems/
├── SKILL.md                          # Index file
├── guide/
│   ├── installation.md               # Environment setup
│   ├── key-concept.md                # Core concepts
│   ├── how-it-works.md               # Distributed algorithms
│   ├── features.md                   # Features and capabilities
│   ├── configuration.md              # Configuration options
│   ├── quick-start.md                # Quick start guide
│   ├── best-practices.md             # Best practices
│   ├── cap-theorem.md                # CAP theorem
│   ├── consensus.md                  # Consensus algorithms
│   ├── patterns.md                   # Distributed patterns
│   └── troubleshooting.md            # Common issues and solutions
└── references/
    ├── website.md                    # External resources
    └── sitemap.md                    # This file
```

### Learning Path

1. **Beginner**: installation.md → quick-start.md → key-concept.md
2. **Intermediate**: how-it-works.md → features.md → configuration.md
3. **Advanced**: cap-theorem.md → consensus.md → patterns.md
4. **Expert**: best-practices.md → troubleshooting.md → website.md (external resources)

### Key Topics

#### CAP Theorem
- Consistency
- Availability
- Partition tolerance
- Trade-offs

#### Consistency Models
- Strong consistency
- Eventual consistency
- Causal consistency
- Read your writes

#### Consensus Algorithms
- Raft
- Paxos
- Leader election
- Log replication

#### Distributed Transactions
- Two-phase commit
- Three-phase commit
- Saga pattern
- Distributed locks

#### Event Sourcing
- Event store
- Event replay
- Temporal queries
- Event-driven architecture

#### CQRS
- Write model
- Read model
- Command handlers
- Query handlers

#### Service Discovery
- Service registration
- Health checking
- Load balancing
- DNS integration

#### Service Mesh
- Traffic management
- Security (mTLS)
- Observability
- Resilience

### External Resources

- **Books**: Designing Data-Intensive Applications, Distributed Systems, Release It!, SRE
- **Courses**: MIT 6.824, Coursera cloud computing, Udemy microservices
- **Tools**: etcd, Consul, Istio, Kubernetes, Kafka
- **Communities**: Reddit distributedsystems, kubernetes, istio

### Related Skills

- `/guide-software-design` - Distributed architecture
- `/guide-concurrency-parallelism` - Distributed concurrency
- `/guide-database-design` - Distributed databases
- `/guide-network-programming` - Distributed communication
- `/cloud-cloudflare` - Distributed platform
