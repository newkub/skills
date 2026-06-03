# Check GraphQL Schema

## When to Check

- Validate schema syntax
- Check type relationships
- Verify resolvers are implemented

## Steps

### 1. Basic Validation

Use `graphql` CLI to validate schema:

```bash
npx graphql validate schema.gql
```

### 2. Introspection Query

Check schema via GraphQL introspection:

```graphql
query IntrospectionQuery {
  __schema {
    queryType { name }
    mutationType { name }
    subscriptionType { name }
    types {
      ...FullType
    }
    directives {
      name
      description
    }
  }
}

fragment FullType on __Type {
  kind
  name
  fields(includeDeprecated: true) {
    name
    args {
      ...InputValue
    }
    type {
      ...TypeRef
    }
    isDeprecated
  }
}
```

### 3. Check Specific Type

```graphql
{
  __type(name: "User") {
    name
    fields {
      name
      type {
        name
        kind
      }
    }
  }
}
```

### 4. Code Analysis

Check resolver implementation coverage:

```bash
npx graphql-codegen
```

### 5. Common Issues

| Issue | Solution |
|-------|----------|
| Missing resolver | Add resolver for type/field |
| Type mismatch | Check return type matches schema |
| Circular reference | Use DataLoader for batching |
| N+1 queries | Implement batch loading |

### 6. Schema Stitching Check

If using federation:

```bash
npx rover subgraph check your-graph@variant \
  --schema ./schemas/posts.graphql
```

## Tools

- [GraphQL Inspector](https://graphql-inspector.com/)
- [Apollo Schema Validation](https://www.apollographql.com/docs/studio/schema-validation)
- [GraphQL Voyager](https://github.com/APIs-guru/graphql-voyager)