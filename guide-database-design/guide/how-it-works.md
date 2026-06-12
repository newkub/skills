# How It Works

## Database Systems ทำงานอย่างไร

### Query Processing

### Parser

**How it works**:
1. Parse SQL query
2. Validate syntax
3. Build parse tree

**Example**:

```sql
SELECT * FROM users WHERE id = 1;
```

**Parse Tree**:
```
SELECT
├── *
└── FROM users
    └── WHERE id = 1
```

### Optimizer

**How it works**:
1. Generate multiple execution plans
2. Estimate costs using statistics
3. Choose lowest cost plan

**Example**:

```sql
-- Query can use index or full table scan
SELECT * FROM users WHERE email = 'john@example.com';

-- Optimizer chooses based on:
-- - Index existence
-- - Table size
-- - Selectivity
```

### Executor

**How it works**:
1. Execute chosen plan
2. Access data pages
3. Return results

### Storage Engine

### Page-Based Storage

**How it works**:
1. Data stored in fixed-size pages (typically 8KB)
2. Pages organized in B-tree
3. Pages cached in memory

**Example**:

```
Page 1: [Row 1, Row 2, Row 3]
Page 2: [Row 4, Row 5, Row 6]
...
```

### B-Tree Structure

**How it works**:
1. Root node points to intermediate nodes
2. Intermediate nodes point to leaf nodes
3. Leaf nodes contain actual data

**Example**:

```
          [Root]
         /      \
   [Node 1]   [Node 2]
   /    \      /    \
[Leaf] [Leaf] [Leaf] [Leaf]
```

### Write-Ahead Logging (WAL)

**How it works**:
1. Changes written to log before data pages
2. Log flushed to disk on commit
3. Data pages written later

**Benefits**:
- Durability
- Crash recovery
- Point-in-time recovery

**Example**:

```
Transaction:
1. Write to WAL: UPDATE users SET name = 'John' WHERE id = 1
2. Flush WAL to disk
3. Commit
4. Write to data pages (later)
```

### MVCC (Multi-Version Concurrency Control)

### How it works**:
1. Multiple versions of rows exist
2. Readers see consistent snapshot
3. Writers don't block readers

**Example**:

```sql
-- Transaction 1 (read)
BEGIN;
SELECT * FROM users WHERE id = 1;  -- Sees version 1

-- Transaction 2 (write)
BEGIN;
UPDATE users SET name = 'Jane' WHERE id = 1;  -- Creates version 2
COMMIT;

-- Transaction 1 (read again)
SELECT * FROM users WHERE id = 1;  -- Still sees version 1
COMMIT;
```

### Index Structures

### B-Tree Index

**How it works**:
1. Balanced tree structure
2. O(log n) search
3. Supports range queries

**Example**:

```
Index on email:
[alex@example.com] -> [Page 1, Row 1]
[bob@example.com] -> [Page 2, Row 1]
[john@example.com] -> [Page 3, Row 1]
```

### Hash Index

**How it works**:
1. Hash function maps keys to buckets
2. O(1) average search
3. Supports equality only

**Example**:

```
Hash on id:
hash(1) -> Bucket 1 -> [Row 1]
hash(2) -> Bucket 2 -> [Row 2]
```

### Query Execution

### Nested Loop Join

**How it works**:
1. For each row in outer table
2. Scan inner table for matches
3. O(n*m) complexity

**Example**:

```sql
SELECT * FROM users u
JOIN orders o ON u.id = o.user_id;

-- Execution:
for each user in users:
    for each order in orders:
        if user.id == order.user_id:
            return (user, order)
```

### Hash Join

**How it works**:
1. Build hash table from smaller table
2. Probe hash table with larger table
3. O(n + m) complexity

**Example**:

```sql
-- Build hash table from users
hash_table = {user.id: user for user in users}

-- Probe with orders
for order in orders:
    if order.user_id in hash_table:
        return (hash_table[order.user_id], order)
```

### Merge Join

**How it works**:
1. Sort both tables on join key
2. Merge sorted lists
3. O(n log n + m log m) complexity

**Example**:

```sql
-- Sort users by id
users_sorted = sort(users, by=id)

-- Sort orders by user_id
orders_sorted = sort(orders, by=user_id)

-- Merge
while users_sorted and orders_sorted:
    if users_sorted[0].id == orders_sorted[0].user_id:
        return (users_sorted[0], orders_sorted[0])
    elif users_sorted[0].id < orders_sorted[0].user_id:
        users_sorted.pop(0)
    else:
        orders_sorted.pop(0)
```

### Transaction Management

### Two-Phase Commit

**How it works**:
1. **Prepare phase**: Coordinator asks participants to prepare
2. **Commit phase**: Coordinator asks participants to commit

**Example**:

```
Coordinator: "Prepare to commit?"
Participant 1: "Ready"
Participant 2: "Ready"
Coordinator: "Commit"
Participant 1: "Committed"
Participant 2: "Committed"
```

### Savepoints

**How it works**:
1. Create savepoint within transaction
2. Rollback to savepoint if needed
3. Continue transaction

**Example**:

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
SAVEPOINT sp1;
UPDATE accounts SET balance = balance - 50 WHERE id = 1;
ROLLBACK TO sp1;  -- Rollback only second update
COMMIT;
```

### Replication

### Master-Slave

**How it works**:
1. Master handles writes
2. Slaves replicate from master
3. Reads can go to slaves

**Example**:

```
Write: Master -> WAL -> Slaves
Read: Slaves -> Data
```

### Master-Master

**How it works**:
1. Multiple masters handle writes
2. Changes replicated between masters
3. Conflict resolution needed

**Example**:

```
Master 1: Write -> WAL -> Master 2
Master 2: Write -> WAL -> Master 1
```

### Sharding

### Horizontal Sharding

**How it works**:
1. Split data by key (e.g., user_id)
2. Each shard has subset of data
3. Router directs queries to correct shard

**Example**:

```
Shard 1: user_id % 3 == 0
Shard 2: user_id % 3 == 1
Shard 3: user_id % 3 == 2
```

### Vertical Sharding

**How it works**:
1. Split tables by columns
2. Each shard has different tables
3. Join across shards if needed

**Example**:

```
Shard 1: users (id, name, email)
Shard 2: user_profiles (id, bio, avatar)
```
