# API Design

## REST vs GraphQL API Design

### REST API Design

### Principles

1. **Resource-Based URLs**: Nouns, not verbs
2. **HTTP Methods**: GET, POST, PUT, DELETE
3. **Stateless**: No server state
4. **Cacheable**: HTTP caching support
5. **Uniform Interface**: Consistent API

### URL Design

```
# ✅ Good: Resource-based
GET /api/users
GET /api/users/1
POST /api/users
PUT /api/users/1
DELETE /api/users/1

# ❌ Bad: Action-based
GET /api/getUsers
GET /api/getUserById?id=1
POST /api/createUser
POST /api/updateUser?id=1
POST /api/deleteUser?id=1
```

### HTTP Methods

| Method | Safe | Idempotent | Use Case |
|--------|------|------------|----------|
| **GET** | Yes | Yes | Retrieve resource |
| **POST** | No | No | Create resource |
| **PUT** | No | Yes | Update resource (full) |
| **PATCH** | No | No | Update resource (partial) |
| **DELETE** | No | Yes | Delete resource |

### Status Codes

| Code | Meaning | Use Case |
|------|---------|----------|
| **200** | OK | Success |
| **201** | Created | Resource created |
| **204** | No Content | Successful, no content |
| **400** | Bad Request | Invalid input |
| **401** | Unauthorized | Authentication required |
| **403** | Forbidden | Authorization required |
| **404** | Not Found | Resource not found |
| **409** | Conflict | Conflict with current state |
| **500** | Internal Server Error | Server error |

### Example (Go)

``json:"id"`
    Name  string `json:"name"`
    Email string `json:"email"`
}

var users = []User{
    {ID: 1, Name: "John", Email: "john@example.com"},
    {ID: 2, Name: "Jane", Email: "jane@example.com"},
}

func getUsers(w http.ResponseWriter, r *http.Request) {
    json.NewEncoder(w).Encode(users)
}

func getUser(w http.ResponseWriter, r *http.Request) {
    id := r.URL.Path[len("/users/"):]
    
    for _, user := range users {
        if fmt.Sprintf("%d", user.ID) == id {
            json.NewEncoder(w).Encode(user)
            return
        }
    }
    
    w.WriteHeader(http.StatusNotFound)
}

func createUser(w http.ResponseWriter, r *http.Request) {
    var user User
    if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
        w.WriteHeader(http.StatusBadRequest)
        return
    }
    
    user.ID = len(users) + 1
    users = append(users, user)
    
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(user)
}

func main() {
    http.HandleFunc("/users", getUsers)
    http.HandleFunc("/users/", getUser)
    http.HandleFunc("/users", createUser).Methods("POST")
    
    http.ListenAndServe(":8080", nil)
}
```

### GraphQL API Design

### Schema Definition

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
    content: String
    author: User!
}

type Query {
    user(id: ID!): User
    users: [User!]!
}

type Mutation {
    createUser(name: String!, email: String!): User
}
```

### Query Example

```graphql
query {
  user(id: 1) {
    name
    email
    posts {
      title
    }
  }
}
```

### Mutation Example

```graphql
mutation {
  createUser(name: "John", email: "john@example.com") {
    id
    name
    email
  }
}
```

### Subscription Example

```graphql
subscription {
  userUpdated {
    id
    name
    email
  }
}
```

### GraphQL Server (Go)

````

### REST vs GraphQL Comparison

| Aspect | REST | GraphQL |
|--------|------|---------|
| **Endpoints** | Multiple endpoints | Single endpoint |
| **Data Fetching** | Over-fetching/under-fetching | Exact data |
| **Caching** | HTTP caching | Complex caching |
| **Versioning** | URL versioning | Schema versioning |
| **Real-time** | Polling, WebSocket | Subscriptions |
| **Complexity** | Simple for CRUD | Complex queries |
| **Tooling** | Mature ecosystem | Growing ecosystem |

### When to Use REST

- Simple CRUD operations
- Standardized API needed
- HTTP caching important
- Public APIs
- Mobile apps with simple needs

### When to Use GraphQL

- Complex data requirements
- Multiple data sources
- Mobile apps (reduce over-fetching)
- Real-time features
- Flexible schema needed

### API Versioning

### REST Versioning

```
# URL versioning
/api/v1/users
/api/v2/users

# Header versioning
GET /api/users
Version: v1
```

### GraphQL Versioning

```graphql
# Schema versioning
type Query {
    userV1(id: ID!): UserV1
    userV2(id: ID!): UserV2
}
```

### Pagination

### REST Pagination

```
# Offset-based
GET /api/users?offset=0&limit=10

# Cursor-based
GET /api/users?cursor=abc123&limit=10
```

### GraphQL Pagination

```graphql
type Query {
  users(first: 10, after: "cursor"): UserConnection!
}

type UserConnection {
  edges: [UserEdge!]!
  pageInfo: PageInfo!
}

type PageInfo {
  hasNextPage: Boolean!
  endCursor: String
}
```

### Error Handling

### REST Errors

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "error": "Invalid email format"
}
```

### GraphQL Errors

```graphql
{
  "data": null,
  "errors": [
    {
      "message": "Invalid email format",
      "path": ["createUser", "email"]
    }
  ]
}
```

