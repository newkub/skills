# App Structure

## โครงสร้างสำหรับ Application Development แบบ Full-stack

### File Structure

```
app/
├── client/                     # Frontend application
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── assets/
│   ├── src/
│   │   ├── components/         # App components
│   │   │   ├── common/
│   │   │   ├── features/
│   │   │   └── layout/
│   │   ├── pages/              # Route pages
│   │   │   ├── Home/
│   │   │   ├── About/
│   │   │   ├── Dashboard/
│   │   │   └── Profile/
│   │   ├── hooks/              # Custom hooks
│   │   ├── services/           # API services
│   │   ├── store/              # State management
│   │   ├── utils/              # Utility functions
│   │   ├── types/              # TypeScript types
│   │   ├── styles/             # Global styles
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
├── server/                     # Backend application
│   ├── src/
│   │   ├── controllers/        # Route controllers
│   │   │   ├── auth.controller.ts
│   │   │   ├── user.controller.ts
│   │   │   └── data.controller.ts
│   │   ├── services/           # Business logic
│   │   │   ├── auth.service.ts
│   │   │   ├── user.service.ts
│   │   │   └── data.service.ts
│   │   ├── models/             # Data models
│   │   │   ├── User.ts
│   │   │   ├── Auth.ts
│   │   │   └── Data.ts
│   │   ├── middleware/         # Express middleware
│   │   │   ├── auth.middleware.ts
│   │   │   ├── validation.middleware.ts
│   │   │   └── error.middleware.ts
│   │   ├── routes/             # API routes
│   │   │   ├── auth.routes.ts
│   │   │   ├── user.routes.ts
│   │   │   └── data.routes.ts
│   │   ├── database/           # Database setup
│   │   │   ├── connection.ts
│   │   │   ├── migrations/
│   │   │   └── seeds/
│   │   ├── utils/              # Server utilities
│   │   ├── config/             # Configuration
│   │   ├── types/              # Server types
│   │   └── app.ts
│   ├── package.json
│   └── tsconfig.json
├── shared/                     # Shared code
│   ├── types/                  # Shared types
│   ├── constants/              # Shared constants
│   ├── utils/                  # Shared utils
│   └── validation/             # Shared validation
├── docs/                       # Documentation
│   ├── api/
│   ├── deployment/
│   └── development/
├── scripts/                    # Build and deploy scripts
│   ├── build.sh
│   ├── deploy.sh
│   ├── setup.sh
│   └── migrate.sh
├── docker/                     # Docker configurations
│   ├── Dockerfile.client
│   ├── Dockerfile.server
│   └── docker-compose.yml
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

### Application Layers Table

| Layer | Purpose | Technology | Files |
|-------|---------|-------------|--------|
| **Client** | Frontend UI | React/Vue/Vite | client/ |
| **Server** | Backend API | Node.js/Express | server/ |
| **Shared** | Common code | TypeScript | shared/ |
| **Database** | Data storage | PostgreSQL/MongoDB | server/src/database/ |
| **Infrastructure** | Deployment | Docker/CI | docker/, scripts/ |

### Client Architecture

#### Component Structure
| Type | Location | Purpose | Example |
|------|----------|---------|---------|
| **Common** | client/src/components/common/ | Reusable UI | Button, Input, Modal |
| **Features** | client/src/components/features/ | Feature-specific | UserProfile, DataChart |
| **Layout** | client/src/components/layout/ | Page layout | Header, Sidebar, Footer |

#### Page Structure
```typescript
// client/src/pages/Dashboard/Dashboard.tsx
import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks'
import { userService } from '@/services'

export const Dashboard: React.FC = () => {
  const { user } = useAuth()
  const [data, setData] = useState([])
  
  useEffect(() => {
    userService.getData().then(setData)
  }, [])
  
  return (
    <div className="dashboard">
      <Header user={user} />
      <Sidebar />
      <main>
        <h1>Dashboard</h1>
        <DataChart data={data} />
      </main>
    </div>
  )
}
```

### Server Architecture

#### Controller Pattern
```typescript
// server/src/controllers/user.controller.ts
import { Request, Response } from 'express'
import { UserService } from '../services'

export class UserController {
  constructor(private userService: UserService) {}
  
  async getProfile(req: Request, res: Response) {
    try {
      const userId = req.user.id
      const user = await this.userService.getById(userId)
      res.json(user)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  
  async updateProfile(req: Request, res: Response) {
    try {
      const userId = req.user.id
      const updates = req.body
      const user = await this.userService.update(userId, updates)
      res.json(user)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}
```

#### Service Layer
```typescript
// server/src/services/user.service.ts
import { UserRepository } from '../models'
import { User } from '../types'

export class UserService {
  constructor(private userRepo: UserRepository) {}
  
  async getById(id: string): Promise<User> {
    return await this.userRepo.findById(id)
  }
  
  async update(id: string, data: Partial<User>): Promise<User> {
    return await this.userRepo.update(id, data)
  }
  
  async delete(id: string): Promise<void> {
    await this.userRepo.delete(id)
  }
}
```

### Shared Code

#### Shared Types
```typescript
// shared/types/user.ts
export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'user'
  createdAt: Date
  updatedAt: Date
}

export interface CreateUserRequest {
  email: string
  name: string
  password: string
}

export interface UpdateUserRequest {
  name?: string
  role?: 'admin' | 'user'
}
```

#### Shared Validation
```typescript
// shared/validation/user.validation.ts
import { z } from 'zod'

export const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(50),
  password: z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
})

export const UpdateUserSchema = z.object({
  name: z.string().min(2).max(50).optional(),
  role: z.enum(['admin', 'user']).optional()
})
```

### Development Workflow

#### Environment Setup
```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env

# Setup database
npm run migrate
npm run seed

# Start development
npm run dev:client  # Frontend dev server
npm run dev:server  # Backend dev server
```

#### Build Process
```bash
# Build client
npm run build:client

# Build server
npm run build:server

# Build both
npm run build
```

### Deployment Configuration

#### Docker Setup
```dockerfile
# docker-compose.yml
version: '3.8'
services:
  client:
    build:
      context: .
      dockerfile: docker/Dockerfile.client
    ports:
      - "3000:3000"
    environment:
      - VITE_API_URL=http://server:4000
  
  server:
    build:
      context: .
      dockerfile: docker/Dockerfile.server
    ports:
      - "4000:4000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/app
    depends_on:
      - db
  
  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=app
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### Best Practices

1. **Separation of Concerns** - แยก client, server, และ shared code
2. **Type Safety** - ใช้ TypeScript ทั่วทั้ง application
3. **Error Handling** - มี error handling ที่สม่ำเสมอ
4. **Validation** - ใช้ schema validation ทั้ง frontend และ backend
5. **Environment Management** - จัดการ environment variables อย่างปลอดภัย
6. **Testing** - มี tests สำหรับทุก layers
7. **Documentation** - มี API docs และ development guides
