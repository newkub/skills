# Testing

## Jest Testing

```javascript
import { execute, gql } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefs = `
  type Query {
    hello: String
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

const query = gql`
  query {
    hello
  }
`;

test('hello query', async () => {
  const result = await execute({ schema, document: query });
  expect(result.data.hello).toBe('World');
});
```

## Apollo Client Testing

```javascript
import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import { gql } from '@apollo/client';

const GET_USER = gql`
  query GetUser {
    user {
      id
      name
    }
  }
`;

const mocks = [
  {
    request: { query: GET_USER },
    result: { data: { user: { id: '1', name: 'John' } } },
  },
];

test('renders user', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UserProfile />
    </MockedProvider>
  );

  expect(await screen.findByText('John')).toBeInTheDocument();
});
```

## Schema Validation

```javascript
import { validate } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

test('schema validation', () => {
  const schema = makeExecutableSchema({ typeDefs });
  const query = gql`
    query {
      user(id: "1") {
        id
        name
      }
    }
  `;

  const errors = validate(schema, query);
  expect(errors).toHaveLength(0);
});
```

## Resolver Testing

```javascript
test('user resolver', async () => {
  const ctx = { db: mockDb };
  
  const result = await resolvers.Query.user(null, { id: '1' }, ctx);
  
  expect(result).toEqual({
    id: '1',
    name: 'John',
    email: 'john@example.com'
  });
});
```

## Integration Testing

```javascript
import { createTestClient } from 'apollo-server-testing';

const { query, mutate } = createTestClient(server);

test('full integration', async () => {
  const res = await mutate({
    mutation: CREATE_USER,
    variables: { input: { name: 'John', email: 'john@example.com' } }
  });

  expect(res.data.createUser).toBeDefined();
});
```