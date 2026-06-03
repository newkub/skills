# Add New Type to Schema

## When to Add

- New data entity needs GraphQL representation
- Extending existing types with new fields

## Steps

### 1. Define Type in Schema

Add new type in your schema file:

```graphql
type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  createdAt: DateTime!
  tags: [String!]!
}
```

### 2. Add Query (if needed)

```graphql
type Query {
  post(id: ID!): Post
  posts(limit: Int, offset: Int): [Post!]!
}
```

### 3. Add Mutation (if needed)

```graphql
type Mutation {
  createPost(input: CreatePostInput!): Post!
  updatePost(id: ID!, input: UpdatePostInput!): Post
  deletePost(id: ID!): Boolean!
}

input CreatePostInput {
  title: String!
  content: String!
  tags: [String!]
}
```

### 4. Implement Resolvers

```typescript
export const resolvers = {
  Query: {
    post: async (_, { id }) => {
      return db.posts.findById(id);
    },
    posts: async (_, { limit = 10, offset = 0 }) => {
      return db.posts.findMany({ limit, offset });
    },
  },
  Mutation: {
    createPost: async (_, { input }) => {
      return db.posts.create(input);
    },
    updatePost: async (_, { id, input }) => {
      return db.posts.update(id, input);
    },
    deletePost: async (_, { id }) => {
      await db.posts.delete(id);
      return true;
    },
  },
  Post: {
    author: (post) => userLoader.load(post.authorId),
  },
};
```

### 5. Add Validation (optional)

```typescript
const createPostValidation = {
  title: { required: true, minLength: 1, maxLength: 200 },
  content: { required: true, minLength: 1 },
};
```

## Verification

```graphql
query {
  post(id: "1") {
    id
    title
    author {
      name
    }
  }
}
```