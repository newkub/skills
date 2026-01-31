# Integration Testing

## Rationale

Integration tests ช่วย verify ว่า components ทำงานร่วมกันได้อย่างถูกต้อง โดยเฉพาะ API endpoints และ database operations

## Bad Practice

```typescript
// ❌ Using real database in tests
test('createUser saves to database', async () => {
  const db = new Database('real-db-connection'); // ❌ ใช้ real DB
  const user = await db.insertUser({ name: 'John' });
  expect(user).toBeDefined();
});

// ❌ No cleanup
test('createUser', async () => {
  const user = await db.insertUser({ name: 'John' });
  // ❌ ไม่ลบข้อมูลหลัง test
});

// ❌ Tests depend on each other
test('createUser', async () => {
  await db.insertUser({ name: 'John' });
});

test('getUser', async () => {
  const user = await db.findUser('John'); // ❌ ขึ้นกับ test ก่อนหน้า
});
```

## Good Practice

```typescript
// ✅ Use test database
test('createUser saves to test database', async () => {
  const db = new Database('test-db'); // ✅ test DB
  const user = await db.insertUser({ name: 'John' });
  expect(user).toBeDefined();
  await db.clear(); // ✅ cleanup
});

// ✅ Setup/teardown
describe('User API', () => {
  let app: Express;
  let db: Database;

  beforeAll(async () => {
    db = new Database('test-db');
    await db.connect();
    app = createApp(db);
  });

  afterAll(async () => {
    await db.disconnect();
  });

  beforeEach(async () => {
    await db.clear();
  });

  test('POST /users creates user', async () => {
    const response = await request(app)
      .post('/users')
      .send({ name: 'John', email: 'john@example.com' })
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('John');
  });
});

// ✅ Independent tests
test('createUser', async () => {
  const user = await db.insertUser({ name: 'John' });
  expect(user).toBeDefined();
});

test('getUser returns null for non-existent user', async () => {
  const user = await db.findUser('non-existent');
  expect(user).toBeNull();
});
```

## Best Practices

### 1. Use Test Database
- **Separate test database**
- **Clear data before each test**
- **Disconnect after all tests**

### 2. Test API Endpoints
```typescript
test('GET /users/:id returns user', async () => {
  const user = await db.insertUser({ name: 'John' });

  const response = await request(app)
    .get(`/users/${user.id}`)
    .expect(200);

  expect(response.body).toEqual(user);
});

test('GET /users/:id returns 404 for non-existent user', async () => {
  await request(app)
    .get('/users/non-existent')
    .expect(404);
});
```

### 3. Test Error Cases
```typescript
test('POST /users returns 400 for invalid email', async () => {
  await request(app)
    .post('/users')
    .send({ name: 'John', email: 'invalid-email' })
    .expect(400);
});
```

## References

- [Supertest Documentation](https://github.com/visionmedia/supertest)
- [Testing Best Practices](https://testingjavascript.com/)
