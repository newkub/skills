# Integration

## ภาพรวม

วิธี integration Zod กับ frameworks และ libraries ยอดนิยม

## Express

### Request Validation

```typescript
import { z } from "zod";
import express from "express";

const userSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
});

app.post("/users", (req, res) => {
  try {
    const user = userSchema.parse(req.body);
    // user is validated
    res.json(user);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    }
  }
});
```

### Middleware

```typescript
import { z } from "zod";
import express from "express";

function validateBody<T extends z.ZodType>(schema: T) {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ errors: error.errors });
      }
    }
  };
}

app.post("/users", validateBody(userSchema), (req, res) => {
  res.json(req.body);
});
```

## React Hook Form

### Integration

```typescript
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
});

type FormData = z.infer<typeof schema>;

function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} />
      {errors.username && <span>{errors.username.message}</span>}

      <input {...register("email")} />
      {errors.email && <span>{errors.email.message}</span>}

      <button type="submit">Submit</button>
    </form>
  );
}
```

## tRPC

### Router Input Validation

```typescript
import { z } from "zod";
import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

const appRouter = t.router({
  createUser: t.procedure
    .input(z.object({
      username: z.string().min(3),
      email: z.string().email(),
    }))
    .mutation(({ input }) => {
      // input is validated
      return { id: "1", ...input };
    }),
});
```

## Next.js

### API Routes

```typescript
import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";

const schema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
});

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const data = schema.parse(body);
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
  }
}
```

### Server Actions

```typescript
import { z } from "zod";
import { revalidatePath } from "next/cache";

const schema = z.object({
  username: z.string().min(3),
});

export async function createUser(formData: FormData) {
  const data = schema.parse({
    username: formData.get("username"),
  });

  // Process data
  revalidatePath("/");
}
```

## Prisma

### Schema Validation

```typescript
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
});

async function createUser(data: unknown) {
  const validated = userSchema.parse(data);
  return prisma.user.create({ data: validated });
}
```

## GraphQL

### Input Validation

```typescript
import { z } from "zod";
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";

const userInputSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
});

const schema = new GraphQLSchema({
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: {
      createUser: {
        type: GraphQLString,
        args: {
          input: { type: GraphQLString },
        },
        resolve: (_, { input }) => {
          const validated = userInputSchema.parse(JSON.parse(input));
          // Process validated data
        },
      },
    },
  }),
});
```

## Environment Variables

### Validation

```typescript
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  API_KEY: z.string().min(32),
  PORT: z.coerce.number().default(3000),
});

export const env = envSchema.parse(process.env);
```

## JSON Schema

### Conversion

```typescript
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  age: z.number(),
});

const jsonSchema = zodToJsonSchema(schema);
```

## OpenAPI

### Documentation

```typescript
import { z } from "zod";
import { generateSchema } from "@anatine/zod-openapi";

const schema = z.object({
  username: z.string(),
  email: z.string().email(),
});

const openApiSchema = generateSchema(schema);
```
