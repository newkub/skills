# Integration

## Purpose

แนวทางการรวม Zod กับ frameworks, libraries และ tools ต่างๆ

## Scope

- API frameworks (Express, Hono, Fastify)
- Form libraries (React Hook Form, Formik)
- Data fetching (tRPC, TanStack Query)
- Database ORMs
- Validation middleware

## Express.js

### Request Validation

```typescript
import express from "express";
import * as z from "zod";

const app = express();

const CreateUserSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
});

app.post("/users", async (req, res) => {
  const result = CreateUserSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      errors: result.error.flatten(),
    });
  }

  const user = await db.users.create(result.data);
  return res.status(201).json(user);
});
```

### Middleware for Validation

```typescript
import { z } from "zod";

function validateBody(schema: z.ZodSchema) {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ errors: result.error.flatten() });
    }
    req.body = result.data;
    next();
  };
}

// Usage
app.post("/users", validateBody(CreateUserSchema), async (req, res) => {
  // req.body is validated and typed
});
```

## Hono

```typescript
import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

const app = new Hono();

const UserSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
});

// With middleware
app.post("/users", zValidator("json", UserSchema), async (c) => {
  const user = c.req.valid("json");
  // user is typed and validated
  return c.json(user, 201);
});
```

## Fastify

```typescript
import Fastify from "fastify";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

const UserSchema = z.object({
  name: z.string(),
  email: z.email(),
});

const fastify = Fastify();

// Add schema
fastify.post("/users", {
  schema: {
    body: zodToJsonSchema(UserSchema),
  },
}, async (req) => {
  const user = UserSchema.parse(req.body);
  return user;
});
```

## React Hook Form

### with Zod Resolver

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Invalid email"),
  age: z.number().min(18).max(100),
});

type FormData = z.infer<typeof schema>;

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register("name")} />
      <span>{errors.name?.message}</span>

      <input {...register("email")} />
      <span>{errors.email?.message}</span>

      <input type="number" {...register("age", { valueAsNumber: true })} />
      <span>{errors.age?.message}</span>

      <button type="submit">Submit</button>
    </form>
  );
}
```

### Type-Safe Form Components

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
});

type FormInputs = z.infer<typeof FormSchema>;

function Form() {
  const { register, handleSubmit } = useForm<FormInputs>({
    resolver: zodResolver(FormSchema),
  });

  // inputs are automatically typed
}
```

## tRPC

### With Zod Input

```typescript
import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

const userRouter = t.router({
  create: t.procedure
    .input(z.object({
      name: z.string().min(2),
      email: z.email(),
    }))
    .mutation(async ({ input }) => {
      // input is fully typed
      return db.users.create(input);
    }),

  getById: t.procedure
    .input(z.object({
      id: z.string().uuid(),
    }))
    .query(async ({ input }) => {
      return db.users.findUnique({ where: { id: input.id } });
    }),
});
```

### Middleware for Auth

```typescript
const t = initTRPC.create();

const isAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({ ctx: { user: ctx.user } });
});

const protectedProcedure = t.procedure.use(isAuthed);

export const appRouter = t.router({
  profile: protectedProcedure.query(({ ctx }) => {
    return ctx.user;
  }),
});
```

## TanStack Query

### Type-Safe Data Fetching

```typescript
import { useQuery, useMutation } from "@tanstack/react-query";
import * as z from "zod";

const CreateUserSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
});

type CreateUserInput = z.infer<typeof CreateUserSchema>;

function useCreateUser() {
  return useMutation({
    mutationFn: async (data: CreateUserInput) => {
      // Validate before sending
      const valid = CreateUserSchema.parse(data);
      return fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(valid),
      }).then((res) => res.json());
    },
  });
}
```

## Zod + OpenAPI

### Generate OpenAPI Schema

```typescript
import { z } from "zod";
import { extendApi } from "@zodios/openapi";

const UserSchema = extendApi(
  z.object({
    id: z.string().uuid(),
    name: z.string(),
    email: z.email(),
  }),
  {
    description: "User object",
    example: {
      id: "123e4567-e89b-12d3-a456-426614174000",
      name: "John Doe",
      email: "john@example.com",
    },
  }
);
```

## Database ORMs

### With Drizzle

```typescript
import { drizzle } from "drizzle-orm/postgres-js";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { z } from "zod";

// Define table
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull(),
});

// Create Zod schema from table
export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
});

// Type-safe queries
const user = await db.select().from(users).where(eq(users.id, userId));
```

### With Prisma

```typescript
import { PrismaClient } from "@prisma/client";
import * as z from "zod";

const prisma = new PrismaClient();

// Define schema
const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
});

// Type-safe operations
async function getUser(id: string) {
  const data = await prisma.user.findUnique({ where: { id } });
  return UserSchema.parse(data); // Validates against schema
}
```

## Environment Variables

```typescript
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(["development", "production", "test"]),
  API_KEY: z.string().min(32),
  CORS_ORIGINS: z.string().transform((val) => val.split(",")).optional(),
});

const env = envSchema.parse(process.env);

export const config = {
  db: { url: env.DATABASE_URL },
  server: { port: env.PORT, cors: env.CORS_ORIGINS },
};
```