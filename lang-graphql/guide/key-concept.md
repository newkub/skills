# Core Concepts - GraphQL

## Overview

GraphQL เป็น query language สำหรับ APIs และ runtime สำหรับ execute queries ให้ผู้ใช้งานได้เฉพาะ data ที่ต้องการ

## Schema Definition Language (SDL)

```graphql
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
}
```

## Query Types

```graphql
type Query {
  user(id: ID!): User
  users: [User!]!
  post(id: ID!): Post
  posts: [Post!]!
}
```

## Mutation Types

```graphql
type Mutation {
  createUser(name: String!, email: String!): User!
  updateUser(id: ID!, name: String): User
  deleteUser(id: ID!): Boolean!
}
```

## Subscription Types

```graphql
type Subscription {
  postCreated: Post!
  userUpdated: User!
}
```

## Key Concepts

### Resolvers

Functions that connect schema fields to data sources

### Variables

Dynamic values passed to queries

```graphql
query GetUser($id: ID!) {
  user(id: $id) {
    name
    email
  }
}
```

### Fragments

Reusable units of query logic

```graphql
fragment UserFields on User {
  id
  name
  email
}
```

### Directives

Instructions to modify query execution

```graphql
query GetUser($includePosts: Boolean!) {
  user(id: "1") {
    name
    posts @include(if: $includePosts) {
      title
    }
  }
}
```
