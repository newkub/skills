# Federation

## Gateway Pattern

\\\
┌─────────────┐
│   Gateway   │
└──────┬──────┘
       │
       ├────→ Service A (Users)
       ├────→ Service B (Posts)
       └────→ Service C (Comments)
\\\

## Schema Stitching

Combine multiple schemas into one unified API:

\\\javascript
import { mergeSchemas } from '@graphql-tools/schema';

const schema = mergeSchemas({
  schemas: [usersSchema, postsSchema, commentsSchema],
});
\\\

## Apollo Federation

### Supergraph Architecture

\\\
┌─────────────────────────────────┐
│         Apollo Router           │
│         (Supergraph)            │
└──────┬──────────┬──────────┬────┘
       │          │          │
       ▼          ▼          ▼
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Subgraph│ │ Subgraph│ │ Subgraph│
│ (Users) │ │ (Posts) │ │ (Review)│
└─────────┘ └─────────┘ └─────────┘
\\\

### Entity References

\\\graphql
# Users subgraph
type User @key(fields: \
id\) {
  id: ID!
  name: String!
  posts: [Post!]!
}

# Posts subgraph
type Post @key(fields: \id\) {
  id: ID!
  title: String!
  author: User!
}
\\\

### Resolver Extensions

\\\javascript
// posts/src/resolvers.js
const resolvers = {
  Post: {
    __resolveReference(post) {
      return posts.find(p => p.id === post.id);
    }
  }
};
\\\

## Best Practices

1. **Own Your Data**: Each service owns its data
2. **Fetch What You Need**: Use \@key\ for entity references
3. **Avoid Chained References**: Minimize service dependencies
4. **Use @require**: Declare dependencies explicitly
