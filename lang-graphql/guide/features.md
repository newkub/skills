# All Features - GraphQL

## Core Features

### 1. Type System

- Scalar types (Int, Float, String, Boolean, ID)
- Object types
- Interface types
- Union types
- Enum types
- Input types

### 2. Schema Capabilities

- Query: Read data
- Mutation: Modify data
- Subscription: Real-time updates
- Directives: @include, @skip, @deprecated

### 3. Query Features

- Field selection
- Arguments
- Aliases
- Fragments
- Variables
- Directives

### 4. Naming Conventions

- Types: PascalCase
- Fields: camelCase
- Mutations: verbNoun format (createUser, updatePost)
- Subscriptions: eventNoun format (postCreated, userUpdated)

### 5. Validation

- Type checking at schema level
- Required fields (!)
- List types ([Type])
- Non-null lists [[Type!]!]

### 6. Error Handling

- Errors array in response
- Extensions for custom error data
- Union types for error resulta
