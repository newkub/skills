# How It Works

## PostgreSQL Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                 PostgreSQL Architecture                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                    Clients                             │   │
│  │   psql  │  JDBC  │  Python  │  Node.js  │  Go          │   │
│  └──────────────────────────────────────────────────────┘   │
│                           │                                 │
│                           ▼                                 │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                 PostgreSQL Server                      │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  │   │
│  │  │  Parser     │→ │   Rewriter   │→ │   Planner   │  │   │
│  │  │  (SQL)      │  │             │  │  (Optimizer) │  │   │
│  │  └─────────────┘  └─────────────┘  └──────┬──────┘  │   │
│  │                                           │          │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────▼──────┐   │   │
│  │  │  Executor   │→ │   Storage   │  │   Index    │   │   │
│  │  │             │  │   Manager   │  │   Manager  │   │   │
│  │  └─────────────┘  └─────────────┘  └────────────┘   │   │
│  └──────────────────────────────────────────────────────┘   │
│                           │                                 │
│                           ▼                                 │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              PostgreSQL Storage                       │   │
│  │   Tables   │   Indexes   │   WAL   │   System Catalogs │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Query Processing Flow

```
1. PARSE
   └── SQL string → Parse tree (Parser)

2. REWRITE
   └── Parse tree → Rewritten tree (Rules/Views)

3. PLAN
   └── Rewritten tree → Query plan (Planner/Optimizer)

4. EXECUTE
   └── Query plan → Results (Executor)
```

## MVCC (Multi-Version Concurrency Control)

```
┌─────────────────────────────────────────────────────────────┐
│                      MVCC Flow                               │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Transaction A (Read)          Transaction B (Write)       │
│  ┌─────────────────┐            ┌─────────────────┐         │
│  │ SELECT * FROM   │            │ UPDATE users    │         │
│  │ users;          │            │ SET name='X'    │         │
│  │                 │            │ WHERE id=1;     │         │
│  │ Sees: Old data  │            │                 │         │
│  │ (id=1, name='A')│            │ Creates new row │         │
│  └─────────────────┘            └─────────────────┘         │
│         │                               │                   │
│         └───────────────────────────────┘                  │
│                      PostgreSQL                              │
│         Manages versions automatically                       │
│                                                              │
│  Old row kept until VACUUM                                  │
│  (id=1, name='A') ← Transaction A sees this                  │
│  (id=1, name='X') ← Transaction B sees this                  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Transaction Isolation Levels

| Level | Dirty Read | Non-repeatable Read | Phantom Read |
|-------|------------|---------------------|--------------|
| Read Uncommitted | Not possible | Possible | Possible |
| Read Committed | Not possible | Possible | Possible |
| Repeatable Read | Not possible | Not possible | Not possible* |
| Serializable | Not possible | Not possible | Not possible |

## Write Ahead Log (WAL)

```
┌─────────────────────────────────────────────────────────────┐
│                    WAL Mechanism                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. Client sends UPDATE query                                │
│                    │                                         │
│                    ▼                                         │
│  2. Write to WAL (before data file)                         │
│     ┌──────────────────────────────────────────────┐         │
│     │ WAL: "Transaction 123, UPDATE users..."    │         │
│     └──────────────────────────────────────────────┘         │
│                    │                                         │
│                    ▼                                         │
│  3. Update data files (async)                                │
│     ┌──────────────────────────────────────────────┐         │
│     │ Table: users (id=1, name='X')               │         │
│     └──────────────────────────────────────────────┘         │
│                    │                                         │
│                    ▼                                         │
│  4. WAL flushed to disk on commit                            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Connection Pooling

```
┌─────────────────────────────────────────────────────────────┐
│                  Connection Pooling                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Application                  PostgreSQL                     │
│  ┌─────────────┐              ┌─────────────┐               │
│  │ Pool        │─────────────▶│ Max         │               │
│  │ (e.g., pgbouncer)│        │ connections │               │
│  │             │              │ = 100        │               │
│  │ Max 10      │              └─────────────┘               │
│  │ clients     │                                            │
│  └─────────────┘                                            │
│                                                              │
│  Benefits:                                                   │
│  • Reduces connection overhead                                │
│  • Prevents "too many connections" error                     │
│  • Reuses connections                                         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```