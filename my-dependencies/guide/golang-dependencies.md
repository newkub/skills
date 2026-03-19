# Go Dependencies

## Core

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| go | Go toolchain | (built-in) |
| golang.org/x/mod | Module utilities | `go get golang.org/x/mod` |
| golang.org/x/tools | Go tools | `go get golang.org/x/tools` |

## Web Framework

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| github.com/gin-gonic/gin | Gin framework | `go get github.com/gin-gonic/gin` |
| github.com/labstack/echo/v4 | Echo framework | `go get github.com/labstack/echo/v4` |
| github.com/gofiber/fiber/v2 | Fiber framework | `go get github.com/gofiber/fiber/v2` |
| github.com/gorilla/mux | HTTP router | `go get github.com/gorilla/mux` |
| net/http | Standard library | (built-in) |
| github.com/go-chi/chi/v5 | Chi router | `go get github.com/go-chi/chi/v5` |
| github.com/fasthttp/router | FastHTTP router | `go get github.com/fasthttp/router` |
| github.com/valyala/fasthttp | Fast HTTP | `go get github.com/valyala/fasthttp` |

## Middleware

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| github.com/gin-contrib/cors | CORS | `go get github.com/gin-contrib/cors` |
| github.com/gin-contrib/gzip | Compression | `go get github.com/gin-contrib/gzip` |
| github.com/gin-contrib/logger | Logger | `go get github.com/gin-contrib/logger` |
| github.com/labstack/echo/v4/middleware | Echo middleware | `go get github.com/labstack/echo/v4` |
| github.com/gofiber/fiber/v2/middleware | Fiber middleware | `go get github.com/gofiber/fiber/v2` |
| github.com/gorilla/handlers | HTTP handlers | `go get github.com/gorilla/handlers` |
| github.com/unrolled/secure | Security | `go get github.com/unrolled/secure` |
| github.com/alexedwards/scs/v2 | Session management | `go get github.com/alexedwards/scs/v2` |

## Authentication

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| golang.org/x/crypto/bcrypt | Password hashing | `go get golang.org/x/crypto` |
| golang.org/x/crypto/argon2 | Argon2 hashing | `go get golang.org/x/crypto` |
| github.com/golang-jwt/jwt/v5 | JWT tokens | `go get github.com/golang-jwt/jwt/v5` |
| github.com/dgrijalva/jwt-go | JWT (legacy) | `go get github.com/dgrijalva/jwt-go` |
| github.com/casbin/casbin/v2 | Authorization | `go get github.com/casbin/casbin/v2` |
| github.com/alexedwards/scs/v2 | Sessions | `go get github.com/alexedwards/scs/v2` |
| github.com/markbates/goth | OAuth | `go get github.com/markbates/goth` |
| github.com/coreos/go-oidc | OpenID Connect | `go get github.com/coreos/go-oidc` |

## Database

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| database/sql | Standard SQL | (built-in) |
| github.com/lib/pq | PostgreSQL driver | `go get github.com/lib/pq` |
| github.com/jackc/pgx/v5 | Modern PostgreSQL | `go get github.com/jackc/pgx/v5` |
| github.com/go-sql-driver/mysql | MySQL driver | `go get github.com/go-sql-driver/mysql` |
| github.com/mattn/go-sqlite3 | SQLite driver | `go get github.com/mattn/go-sqlite3` |
| github.com/redis/go-redis/v9 | Redis client | `go get github.com/redis/go-redis/v9` |
| go.mongodb.org/mongo-driver | MongoDB driver | `go get go.mongodb.org/mongo-driver` |
| github.com/syndtr/goleveldb | LevelDB | `go get github.com/syndtr/goleveldb` |
| github.com/tidwall/buntdb | BuntDB | `go get github.com/tidwall/buntdb` |

## ORM & Query Builders

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| gorm.io/gorm | GORM ORM | `go get gorm.io/gorm` |
| gorm.io/driver/postgres | GORM PostgreSQL | `go get gorm.io/driver/postgres` |
| gorm.io/driver/mysql | GORM MySQL | `go get gorm.io/driver/mysql` |
| gorm.io/driver/sqlite | GORM SQLite | `go get gorm.io/driver/sqlite` |
| github.com/uptrace/bun | Bun ORM | `go get github.com/uptrace/bun` |
| github.com/jmoiron/sqlx | SQL extensions | `go get github.com/jmoiron/sqlx` |
| github.com/volatiletech/sqlboiler | SQLBoiler | `go get github.com/volatiletech/sqlboiler` |
| entgo.io/ent | Facebook Ent | `go get entgo.io/ent` |

## Validation

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| github.com/go-playground/validator/v10 | Validator | `go get github.com/go-playground/validator/v10` |
| github.com/asaskevich/govalidator | Validations | `go get github.com/asaskevich/govalidator` |
| github.com/go-ozzo/ozzo-validation | Validation | `go get github.com/go-ozzo/ozzo-validation` |
| gopkg.in/go-playground/validator.v9 | Validator v9 | `go get gopkg.in/go-playground/validator.v9` |

## Serialization

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| encoding/json | Standard JSON | (built-in) |
| github.com/json-iterator/go | Fast JSON | `go get github.com/json-iterator/go` |
| gopkg.in/yaml.v3 | YAML | `go get gopkg.in/yaml.v3` |
| github.com/BurntSushi/toml | TOML | `go get github.com/BurntSushi/toml` |
| github.com/mitchellh/mapstructure | Map decoding | `go get github.com/mitchellh/mapstructure` |
| google.golang.org/protobuf | Protocol Buffers | `go get google.golang.org/protobuf` |
| github.com/gogo/protobuf | Fast Protobuf | `go get github.com/gogo/protobuf` |
| github.com/golang/protobuf | Protobuf | `go get github.com/golang/protobuf` |

## Real-time

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| github.com/gorilla/websocket | WebSocket | `go get github.com/gorilla/websocket` |
| github.com/gobwas/ws | Fast WebSocket | `go get github.com/gobwas/ws` |
| github.com/coder/websocket | Modern WebSocket | `go get github.com/coder/websocket` |
| github.com/olahol/melody | WebSocket framework | `go get github.com/olahol/melody` |
| github.com/centrifugal/centrifuge | Real-time messaging | `go get github.com/centrifugal/centrifuge` |
| nats.go | NATS client | `go get github.com/nats-io/nats.go` |

## Utilities

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| github.com/google/uuid | UUID generation | `go get github.com/google/uuid` |
| github.com/satori/go.uuid | UUID (alt) | `go get github.com/satori/go.uuid` |
| github.com/oklog/ulid | ULID | `go get github.com/oklog/ulid` |
| github.com/sony/sonyflake | SonyFlake IDs | `go get github.com/sony/sonyflake` |
| github.com/itchyny/gojq | jq for Go | `go get github.com/itchyny/gojq` |
| github.com/tidwall/gjson | JSON parsing | `go get github.com/tidwall/gjson` |
| github.com/tidwall/sjson | JSON setting | `go get github.com/tidwall/sjson` |
| github.com/spf13/cast | Type casting | `go get github.com/spf13/cast` |
| github.com/thoas/go-funk | Utilities | `go get github.com/thoas/go-funk` |
| github.com/samber/lo | Lodash for Go | `go get github.com/samber/lo` |
| github.com/deckarep/golang-set | Set implementation | `go get github.com/deckarep/golang-set` |
| github.com/emirpasic/gods | Data structures | `go get github.com/emirpasic/gods` |

## Date/Time

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| time | Standard time | (built-in) |
| github.com/jinzhu/now | Time utilities | `go get github.com/jinzhu/now` |
| github.com/golang-module/carbon | Carbon for Go | `go get github.com/golang-module/carbon` |
| github.com/ijt/go-anytime | Natural time | `go get github.com/ijt/go-anytime` |

## Logging

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| log | Standard logging | (built-in) |
| github.com/sirupsen/logrus | Structured logs | `go get github.com/sirupsen/logrus` |
| go.uber.org/zap | Fast logging | `go get go.uber.org/zap` |
| github.com/rs/zerolog | Zero-allocation | `go get github.com/rs/zerolog` |
| github.com/inconshreveable/log15 | Structured logs | `go get github.com/inconshreveable/log15` |
| log/slog | Standard structured | (built-in Go 1.21+) |

## Configuration

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| github.com/spf13/viper | Configuration | `go get github.com/spf13/viper` |
| github.com/kelseyhightower/envconfig | Environment | `go get github.com/kelseyhightower/envconfig` |
| github.com/caarlos0/env/v10 | Environment parsing | `go get github.com/caarlos0/env/v10` |
| gopkg.in/yaml.v3 | YAML config | `go get gopkg.in/yaml.v3` |
| github.com/BurntSushi/toml | TOML config | `go get github.com/BurntSushi/toml` |
| github.com/joho/godotenv | .env files | `go get github.com/joho/godotenv` |

## Testing

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| testing | Standard testing | (built-in) |
| github.com/stretchr/testify | Test assertions | `go get github.com/stretchr/testify` |
| github.com/onsi/ginkgo | BDD testing | `go get github.com/onsi/ginkgo` |
| github.com/onsi/gomega | Matchers | `go get github.com/onsi/gomega` |
| github.com/golang/mock | Mocking | `go get github.com/golang/mock` |
| go.uber.org/mock | Uber mocking | `go get go.uber.org/mock` |
| github.com/agiledragon/gomonkey | Monkey patching | `go get github.com/agiledragon/gomonkey` |
| github.com/cweill/gotests | Test generator | `go install github.com/cweill/gotests/...` |
| gotest.tools/gotestsum | Test runner | `go install gotest.tools/gotestsum@latest` |

## CLI

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| github.com/spf13/cobra | CLI framework | `go get github.com/spf13/cobra` |
| github.com/urfave/cli/v2 | CLI framework | `go get github.com/urfave/cli/v2` |
| github.com/alecthomas/kong | CLI parser | `go get github.com/alecthomas/kong` |
| github.com/charmbracelet/bubbletea | TUI framework | `go get github.com/charmbracelet/bubbletea` |
| github.com/charmbracelet/lipgloss | Styling | `go get github.com/charmbracelet/lipgloss` |
| github.com/pterm/pterm | Pretty terminal | `go get github.com/pterm/pterm` |
| github.com/fatih/color | Colors | `go get github.com/fatih/color` |
| github.com/olekukonko/tablewriter | Tables | `go get github.com/olekukonko/tablewriter` |
| github.com/cheggaaa/pb/v3 | Progress bar | `go get github.com/cheggaaa/pb/v3` |
| github.com/schollz/progressbar/v3 | Progress bar | `go get github.com/schollz/progressbar/v3` |

## Concurrency

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| sync | Standard sync | (built-in) |
| sync/atomic | Atomic operations | (built-in) |
| golang.org/x/sync | Extended sync | `go get golang.org/x/sync` |
| github.com/panjf2000/ants | Goroutine pool | `go get github.com/panjf2000/ants` |
| github.com/alitto/pond | Worker pool | `go get github.com/alitto/pond` |

## คำแนะนำ

| หมวดหมู่ | แนะนำ | เหตุผล |
|---------|-------|--------|
| **Framework** | gin หรือ fiber | Fast, popular |
| **Database** | pgx หรือ bun | Modern, fast |
| **ORM** | bun หรือ gorm | Bun is fastest |
| **Auth** | golang-jwt + crypto/bcrypt | Standard |
| **Validation** | go-playground/validator | Most popular |
| **WebSocket** | gorilla/websocket | Standard |
| **Logging** | zap หรือ zerolog | Fastest |
| **Config** | viper | Most flexible |
| **Testing** | testify | Standard |
| **CLI** | cobra หรือ bubbletea | Modern TUI |
| **Utils** | samber/lo | Lodash-like |
