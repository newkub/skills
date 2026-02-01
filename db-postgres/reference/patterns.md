# PostgreSQL Design Patterns

## 1. Audit Trail Pattern
```sql
-- Create audit table
CREATE TABLE users_audit (
    id SERIAL,
    user_id INTEGER,
    action VARCHAR(10),
    old_data JSONB,
    new_data JSONB,
    changed_by INTEGER,
    changed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create trigger function
CREATE OR REPLACE FUNCTION audit_trigger()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO users_audit (user_id, action, new_data, changed_by)
        VALUES (NEW.id, 'INSERT', row_to_json(NEW), NEW.id);
        RETURN NEW;
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO users_audit (user_id, action, old_data, new_data, changed_by)
        VALUES (NEW.id, 'UPDATE', row_to_json(OLD), row_to_json(NEW), NEW.id);
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO users_audit (user_id, action, old_data, changed_by)
        VALUES (OLD.id, 'DELETE', row_to_json(OLD), OLD.id);
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;
```

## 2. Soft Delete Pattern
```sql
-- Add soft delete columns
ALTER TABLE users ADD COLUMN deleted_at TIMESTAMP WITH TIME ZONE;
ALTER TABLE users ADD COLUMN deleted_by INTEGER;

-- Create view for active users
CREATE VIEW active_users AS
SELECT * FROM users WHERE deleted_at IS NULL;

-- Soft delete function
CREATE OR REPLACE FUNCTION soft_delete_user(user_id INTEGER, deleted_by_user INTEGER)
RETURNS VOID AS $$
BEGIN
    UPDATE users 
    SET deleted_at = NOW(), deleted_by = deleted_by_user
    WHERE id = user_id;
END;
$$ LANGUAGE plpgsql;
```

## 3. Hierarchical Data Pattern
```sql
-- Recursive CTE for organization hierarchy
WITH RECURSIVE org_hierarchy AS (
    SELECT 
        id, 
        name, 
        parent_id, 
        0 as level,
        ARRAY[id] as path
    FROM departments 
    WHERE parent_id IS NULL
    
    UNION ALL
    
    SELECT 
        d.id, 
        d.name, 
        d.parent_id, 
        oh.level + 1,
        oh.path || d.id
    FROM departments d
    JOIN org_hierarchy oh ON d.parent_id = oh.id
)
SELECT 
    name, 
    level, 
    path
FROM org_hierarchy
ORDER BY path;
```

## 4. Event Sourcing Pattern
```sql
-- Events table
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    aggregate_id UUID NOT NULL,
    event_type VARCHAR(50) NOT NULL,
    event_data JSONB NOT NULL,
    event_version INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Materialized view for current state
CREATE MATERIALIZED VIEW user_current_state AS
SELECT 
    aggregate_id as user_id,
    (event_data->>'email') as email,
    (event_data->>'username') as username,
    MAX(created_at) as last_updated
FROM events
WHERE event_type = 'UserCreated'
GROUP BY aggregate_id, event_data;
```

## 5. Multi-tenancy Pattern
```sql
-- Add tenant_id to all tables
ALTER TABLE users ADD COLUMN tenant_id INTEGER NOT NULL;

-- Row Level Security policy
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation ON users
USING (tenant_id = current_setting('app.current_tenant_id')::INTEGER);

-- Set tenant context
SET app.current_tenant_id = 123;
```

## 6. Caching Pattern
```sql
-- Materialized view for expensive aggregations
CREATE MATERIALIZED VIEW daily_sales_summary AS
SELECT 
    DATE(created_at) as sale_date,
    COUNT(*) as order_count,
    SUM(total) as total_revenue
FROM orders
GROUP BY DATE(created_at);

-- Refresh function
CREATE OR REPLACE FUNCTION refresh_daily_sales()
RETURNS VOID AS $$
BEGIN
    REFRESH MATERIALIZED VIEW daily_sales_summary;
END;
$$ LANGUAGE plpgsql;
```

## 7. Versioning Pattern
```sql
-- Versioned table structure
CREATE TABLE documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content JSONB NOT NULL,
    version INTEGER NOT NULL DEFAULT 1,
    valid_from TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    valid_to TIMESTAMP WITH TIME ZONE DEFAULT 'infinity',
    is_current BOOLEAN DEFAULT true
);

-- Function to create new version
CREATE OR REPLACE FUNCTION create_document_version(
    doc_id UUID,
    new_content JSONB
) RETURNS UUID AS $$
DECLARE
    new_version_id UUID;
BEGIN
    -- Invalidate current version
    UPDATE documents 
    SET valid_to = NOW(), is_current = false
    WHERE id = doc_id AND is_current = true;
    
    -- Create new version
    INSERT INTO documents (id, content, version, valid_from)
    VALUES (doc_id, new_content, 
            (SELECT COALESCE(MAX(version), 0) + 1 FROM documents WHERE id = doc_id),
            NOW())
    RETURNING id INTO new_version_id;
    
    RETURN new_version_id;
END;
$$ LANGUAGE plpgsql;
```
