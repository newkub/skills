# Node.js Dependencies

## Core

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @types/node | Node.js types | `bun add -d @types/node` |
| dotenv | Environment variables | `bun add dotenv` |
| dotenv-expand | Expand env variables | `bun add dotenv-expand` |
| cross-env | Cross-platform env | `bun add -d cross-env` |
| env-cmd | Environment commands | `bun add -d env-cmd` |

## Web Framework

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| express | Web framework | `bun add express` |
| @types/express | Express types | `bun add -d @types/express` |
| fastify | Fast web framework | `bun add fastify` |
| koa | Lightweight framework | `bun add koa` |
| @types/koa | Koa types | `bun add -d @types/koa` |
| hapi | Enterprise framework | `bun add @hapi/hapi` |
| restify | REST API framework | `bun add restify` |
| polka | Minimal framework | `bun add polka` |
| connect | Connect middleware | `bun add connect` |
| http-server | Static server | `bun add -d http-server` |
| serve-handler | Static handler | `bun add serve-handler` |

## Middleware

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| cors | CORS middleware | `bun add cors` |
| @types/cors | CORS types | `bun add -d @types/cors` |
| helmet | Security headers | `bun add helmet` |
| compression | Compression | `bun add compression` |
| @types/compression | Compression types | `bun add -d @types/compression` |
| morgan | HTTP logger | `bun add morgan` |
| @types/morgan | Morgan types | `bun add -d @types/morgan` |
| body-parser | Body parsing | `bun add body-parser` |
| multer | File upload | `bun add multer` |
| @types/multer | Multer types | `bun add -d @types/multer` |
| cookie-parser | Cookie parsing | `bun add cookie-parser` |
| @types/cookie-parser | Cookie parser types | `bun add -d @types/cookie-parser` |
| express-rate-limit | Rate limiting | `bun add express-rate-limit` |
| express-slow-down | Slow down | `bun add express-slow-down` |
| express-validator | Validation | `bun add express-validator` |

## Authentication

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| passport | Authentication | `bun add passport` |
| @types/passport | Passport types | `bun add -d @types/passport` |
| passport-jwt | JWT strategy | `bun add passport-jwt` |
| @types/passport-jwt | JWT types | `bun add -d @types/passport-jwt` |
| passport-local | Local strategy | `bun add passport-local` |
| @types/passport-local | Local types | `bun add -d @types/passport-local` |
| passport-github | GitHub OAuth | `bun add passport-github2` |
| passport-google-oauth20 | Google OAuth | `bun add passport-google-oauth20` |
| jsonwebtoken | JWT tokens | `bun add jsonwebtoken` |
| @types/jsonwebtoken | JWT types | `bun add -d @types/jsonwebtoken` |
| bcrypt | Password hashing | `bun add bcrypt` |
| @types/bcrypt | bcrypt types | `bun add -d @types/bcrypt` |
| argon2 | Modern password hashing | `bun add argon2` |
| otpauth | OTP/TOTP | `bun add otpauth` |
| speakeasy | 2FA | `bun add speakeasy` |
| @types/speakeasy | Speakeasy types | `bun add -d @types/speakeasy` |

## Database

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| mongoose | MongoDB ODM | `bun add mongoose` |
| @types/mongoose | Mongoose types | `bun add -d @types/mongoose` |
| mongodb | MongoDB driver | `bun add mongodb` |
| pg | PostgreSQL driver | `bun add pg` |
| @types/pg | pg types | `bun add -d @types/pg` |
| postgres | Modern PostgreSQL | `bun add postgres` |
| mysql2 | MySQL driver | `bun add mysql2` |
| sqlite3 | SQLite driver | `bun add sqlite3` |
| better-sqlite3 | Better SQLite | `bun add better-sqlite3` |
| ioredis | Redis client | `bun add ioredis` |
| redis | Redis client | `bun add redis` |
| @types/redis | Redis types | `bun add -d @types/redis` |

## ORM & Query Builders

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| prisma | Next-gen ORM | `bun add -d prisma` |
| @prisma/client | Prisma client | `bun add @prisma/client` |
| drizzle-orm | TypeScript ORM | `bun add drizzle-orm` |
| drizzle-kit | Drizzle CLI | `bun add -d drizzle-kit` |
| typeorm | TypeScript ORM | `bun add typeorm` |
| sequelize | Promise-based ORM | `bun add sequelize` |
| @types/sequelize | Sequelize types | `bun add -d @types/sequelize` |
| knex.js | Query builder | `bun add knex` |
| @types/knex | Knex types | `bun add -d @types/knex` |
| kysely | Type-safe SQL | `bun add kysely` |
| @mikro-orm/core | MikroORM core | `bun add @mikro-orm/core` |

## Real-time

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| socket.io | WebSocket framework | `bun add socket.io` |
| @types/socket.io | Socket.io types | `bun add -d @types/socket.io` |
| ws | WebSocket library | `bun add ws` |
| @types/ws | ws types | `bun add -d @types/ws` |
| sse-channel | Server-sent events | `bun add sse-channel` |
| eventsource | EventSource client | `bun add eventsource` |
| @types/eventsource | EventSource types | `bun add -d @types/eventsource` |

## Validation

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| zod | Schema validation | `bun add zod` |
| valibot | Alternative to Zod | `bun add valibot` |
| joi | Schema validation | `bun add joi` |
| @types/joi | Joi types | `bun add -d @types/joi` |
| yup | Schema validation | `bun add yup` |
| ajv | JSON schema validator | `bun add ajv` |
| class-validator | Decorator validation | `bun add class-validator` |
| class-transformer | Object transformation | `bun add class-transformer` |

## Utilities

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| lodash | Utility library | `bun add lodash` |
| @types/lodash | Lodash types | `bun add -d @types/lodash` |
| ramda | Functional utilities | `bun add ramda` |
| @types/ramda | Ramda types | `bun add -d @types/ramda` |
| underscore | Utility library | `bun add underscore` |
| dayjs | Date library | `bun add dayjs` |
| date-fns | Date utilities | `bun add date-fns` |
| luxon | Date/time library | `bun add luxon` |
| uuid | UUID generation | `bun add uuid` |
| @types/uuid | UUID types | `bun add -d @types/uuid` |
| nanoid | Nano IDs | `bun add nanoid` |
| cuid | Collision-resistant IDs | `bun add cuid` |
| slugify | URL slugs | `bun add slugify` |
| qrcode | QR code generation | `bun add qrcode` |
| @types/qrcode | QR types | `bun add -d @types/qrcode` |
| sharp | Image processing | `bun add sharp` |
| puppeteer | Browser automation | `bun add puppeteer` |
| cheerio | Server-side jQuery | `bun add cheerio` |
| node-cron | Cron jobs | `bun add node-cron` |
| @types/node-cron | Cron types | `bun add -d @types/node-cron` |
| bull | Queue system | `bun add bull` |
| @types/bull | Bull types | `bun add -d @types/bull` |
| agenda | Job scheduling | `bun add agenda` |

## Testing

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| vitest | Fast testing | `bun add -d vitest` |
| @vitest/ui | Vitest UI | `bun add -d @vitest/ui` |
| jest | Testing framework | `bun add -d jest` |
| @types/jest | Jest types | `bun add -d @types/jest` |
| supertest | HTTP assertions | `bun add -d supertest` |
| @types/supertest | Supertest types | `bun add -d @types/supertest` |
| mocha | Testing framework | `bun add -d mocha` |
| @types/mocha | Mocha types | `bun add -d @types/mocha` |
| chai | Assertion library | `bun add -d chai` |
| @types/chai | Chai types | `bun add -d @types/chai` |
| sinon | Test spies | `bun add -d sinon` |
| @types/sinon | Sinon types | `bun add -d @types/sinon` |
| nock | HTTP mocking | `bun add -d nock` |
| @faker-js/faker | Fake data | `bun add -d @faker-js/faker` |

## Logging

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| winston | Logger | `bun add winston` |
| pino | Fast logger | `bun add pino` |
| bunyan | JSON logger | `bun add bunyan` |
| @types/bunyan | Bunyan types | `bun add -d @types/bunyan` |
| log4js | Logging framework | `bun add log4js` |
| consola | Elegant console | `bun add consola` |
| debug | Debug utility | `bun add debug` |
| @types/debug | Debug types | `bun add -d @types/debug` |

## Process Management

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| pm2 | Process manager | `bun add -g pm2` |
| nodemon | Development monitor | `bun add -d nodemon` |
| ts-node | TypeScript execution | `bun add -d ts-node` |
| tsx | Fast TypeScript runner | `bun add -d tsx` |
| concurrently | Run commands | `bun add -d concurrently` |
| forever | Process runner | `bun add -g forever` |
| strong-pm | StrongLoop PM | `bun add -g strong-pm` |

## คำแนะนำ

| หมวดหมู่ | แนะนำ | เหตุผล |
|---------|-------|--------|
| **Framework** | fastify | Fast, modern |
| **Auth** | passport + jsonwebtoken | Standard |
| **Database** | mongoose (MongoDB) หรือ drizzle-orm | Modern |
| **Validation** | zod | TypeScript-native |
| **Utilities** | dayjs + nanoid | Light, fast |
| **Testing** | vitest | Fast, native TS |
| **Logging** | pino | Fast, JSON |
| **Process** | pm2 | Production ready |
