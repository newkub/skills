# Full-Stack Development

Use Windsurf for full-stack web application development.

## Typical Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, Vue, Next.js |
| Backend | Node.js, Express, FastAPI |
| Database | PostgreSQL, MongoDB |
| Auth | JWT, OAuth, NextAuth |
| Deploy | Vercel, Netlify, Railway |

## Frontend Workflow

### Component Creation

```
"Create a UserCard component with:
- Avatar image
- User name and bio
- Social links
- Follow button
Use existing design system"
```

Cascade creates:
- Component file
- Props types
- Styles
- Tests

### State Management

```
"Add useAuth hook to handle:
- Login/logout
- User state
- Protected routes
Integrate with existing auth context"
```

### API Integration

```
"Connect UserList to GET /api/users endpoint:
- Fetch on mount
- Loading state
- Error handling
- Pagination support"
```

## Backend Workflow

### API Route Creation

```
"Create POST /api/users/invite endpoint:
- Accept email
- Validate format
- Create pending invitation
- Send email via existing service
- Return 201 with invitation ID"
```

Cascade creates:
- Route handler
- Input validation
- Database operation
- Email integration
- Response types

### Database Operations

```
"Add user search by email:
- Find user by exact email
- Case-insensitive search
- Return user or null
- Add database index"
```

## Full-Stack Example

### Feature: User Invitation

**Step 1: Backend**

```
"Create invitation system:
1. POST /api/invitations - create invitation
2. GET /api/invitations/:token - verify token
3. POST /api/invitations/:token/accept - accept invitation
Use Prisma with PostgreSQL"
```

**Step 2: Frontend**

```
"Create invitation flow:
1. InviteForm component - enter email
2. Pending page - show waiting state
3. AcceptInvitation page - complete signup
Style with design system"
```

**Step 3: Integration**

```
"Connect invite form to API:
- POST on submit
- Handle success/error
- Redirect to pending page
- Show toast notifications"
```

## Database Workflow

### Schema Design

```
"Design user schema with:
- id, email, name, passwordHash
- email verification status
- password reset tokens
- createdAt, updatedAt timestamps
Use Prisma format"
```

### Migration

```
"Create migration for user table:
1. Run prisma migrate dev
2. Generate TypeScript types
3. Add indexes on email"
```

## Auth Integration

### JWT Flow

```
"Implement JWT auth:
1. Login endpoint - issue token
2. Auth middleware - verify token
3. Refresh token - extend session
Use existing crypto utils"
```

### Protected Routes

```
"Add auth check to pages:
1. Redirect to login if no token
2. Fetch user from token
3. Show 401 for API if invalid
Use middleware pattern"
```

## Testing Strategy

### Backend Tests

```
"Add tests for invitation API:
- Create invitation success
- Duplicate email handling
- Invalid email format
- Token verification
Use Vitest + supertest"
```

### Frontend Tests

```
"Add tests for InviteForm:
- Renders correctly
- Submit calls API
- Shows loading state
- Handles error
Use Testing Library"
```

## Deployment

### Build Configuration

```
"Configure deployment:
1. Build: npm run build
2. Output: .next/ (Next.js)
3. Env vars: API_URL, DB_URL
4. Regions: us-east-1"
```

### Health Check

```
"Add health endpoint:
GET /api/health returns { status: 'ok' }
Use for load balancer check"
```

## Best Practices

### Project Structure

```
├── src/
│   ├── components/     # UI components
│   ├── pages/          # Page components
│   ├── api/           # API routes
│   ├── lib/           # Utilities
│   ├── types/         # TypeScript types
│   └── hooks/         # Custom hooks
├── prisma/
│   └── schema.prisma  # Database schema
├── tests/
│   ├── unit/          # Unit tests
│   └── integration/   # API tests
└── .windsurfrules     # Project rules
```

### API Design

| Pattern | Description |
|---------|-------------|
| RESTful | GET/POST/PUT/DELETE |
| Versioned | /api/v1/users |
| Consistent | Always return { data, error } |

### Error Handling

| Layer | Strategy |
|-------|----------|
| Frontend | Toast notifications |
| API | Structured error responses |
| Database | Transaction with rollback |