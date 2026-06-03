# Framework Integration

## React

### Apollo Client Setup

```javascript
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
```

### Hooks Usage

```javascript
import { useQuery, useMutation, gql } from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
    }
  }
`;

function UserList() {
  const { loading, error, data } = useQuery(GET_USERS);
  const [createUser] = useMutation(CREATE_USER, {
    refetchQueries: [{ query: GET_USERS }]
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <ul>
      {data.users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## Vue

### Vue Apollo Setup

```javascript
import { createApolloClient } from '@vue/apollo-composable';

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
  }),
  cache: new InMemoryCache(),
});

const { vm } = createApolloClient({
  link: apolloClient link,
  cache: apolloClient.cache,
  typePolicies: {
    Query: {},
  },
});
```

### Composition API

```javascript
import { useQuery, useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
    }
  }
`;

export default {
  setup() {
    const { result, loading, error } = useQuery(GET_USERS);
    const { mutate: createUser } = useMutation(CREATE_USER);

    return { result, loading, error, createUser };
  },
};
```

## Next.js

### App Router (Server Components)

```javascript
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

async function getUsers() {
  const client = new ApolloClient({
    uri: process.env.GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetUsers {
        users {
          id
          name
        }
      }
    `,
  });

  return data.users;
}

export default async function Page() {
  const users = await getUsers();
  return <UserList users={users} />;
}
```

### Client Components

```javascript
'use client';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

export function ApolloWrapper({ children }) {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
```

## Svelte

### svelte-apollo

```javascript
import { client } from './apollo';
import { query, mutate } from 'svelte-apollo';

const USERS = gql`
  query GetUsers {
    users {
      id
      name
    }
  }
`;

const userQuery = query(client, { query: USERS });
```

## Angular

### Apollo Angular

```typescript
import { Apollo } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';

constructor(private apollo: Apollo) {
  apollo.setupClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });
}
```

## See Also

- [Database](../key-concepts/database.md)
- [Security](../key-concepts/security.md)