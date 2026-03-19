# Rust Dependencies

## CLI Framework

| Crate | ใช้สำหรับ | ติดตั้ง |
|-------|----------|---------|
| clap | Command line parsing with derive, env, color, suggestions | `cargo add clap --features derive,env,color,suggestions` |
| argh | Derive-based argument parser (faster compile time) | `cargo add argh` |
| bpaf | Fast and flexible parser | `cargo add bpaf` |
| xflags | Simple flags parser | `cargo add xflags` |

## Async Runtime

| Crate | ใช้สำหรับ | ติดตั้ง |
|-------|----------|---------|
| tokio | Async runtime with full features | `cargo add tokio --features full,tracing` |
| async-std | Async runtime alternative | `cargo add async-std` |
| smol | Small async runtime | `cargo add smol` |
| monoio | Thread-per-core runtime (io_uring) | `cargo add monoio` |

## Error Handling

| Crate | ใช้สำหรับ | ติดตั้ง |
|-------|----------|---------|
| anyhow | Error handling and propagation | `cargo add anyhow` |
| thiserror | Custom error types | `cargo add thiserror` |
| miette | Fancy error reporting | `cargo add miette` |
| eyre | Contextual error handling | `cargo add eyre` |

## Serialization

| Crate | ใช้สำหรับ | ติดตั้ง |
|-------|----------|---------|
| serde | Serialization framework | `cargo add serde --features derive` |
| serde_json | JSON serialization | `cargo add serde_json` |
| simd-json | SIMD-accelerated JSON (faster) | `cargo add simd-json` |
| sonic-rs | Fast JSON serializer | `cargo add sonic-rs` |
| serde_yaml | YAML serialization | `cargo add serde_yaml` |
| toml | TOML parsing | `cargo add toml` |
| ron | Rusty Object Notation | `cargo add ron` |

## Logging

| Crate | ใช้สำหรับ | ติดตั้ง |
|-------|----------|---------|
| tracing | Structured logging | `cargo add tracing` |
| tracing-subscriber | Log formatting | `cargo add tracing-subscriber --features env-filter,json,fmt` |
| tracing-appender | File log appender | `cargo add tracing-appender` |
| log | Simple logging facade | `cargo add log` |
| env_logger | Environment-based logger | `cargo add env_logger` |
| flexi_logger | Flexible logger | `cargo add flexi_logger` |

## CLI UI

| Crate | ใช้สำหรับ | ติดตั้ง |
|-------|----------|---------|
| ratatui | Terminal UI framework | `cargo add ratatui` |
| crossterm | Cross-platform terminal | `cargo add crossterm` |
| termion | Terminal manipulation | `cargo add termion` |
| comfy-table | Table formatting | `cargo add comfy-table` |
| owo-colors | Zero-cost terminal colors | `cargo add owo-colors` |
| cliclack | Interactive CLI prompts | `cargo add cliclack` |
| indicatif | Progress bars | `cargo add indicatif` |
| console | Terminal utilities | `cargo add console` |
| dialoguer | Interactive prompts | `cargo add dialoguer` |
| tabled | Table formatting | `cargo add tabled` |
| colored | Terminal colors | `cargo add colored` |

## Configuration

| Crate | ใช้สำหรับ | ติดตั้ง |
|-------|----------|---------|
| directories | System directories | `cargo add directories` |
| config | Configuration management | `cargo add config` |
| envy | Environment variable deserialization | `cargo add envy` |
| figment | Modern configuration management | `cargo add figment` |

## File System

| Crate | ใช้สำหรับ | ติดตั้ง |
|-------|----------|---------|
| walkdir | Directory walking | `cargo add walkdir` |
| ignore | Fast directory walking | `cargo add ignore` |
| glob | Pattern matching | `cargo add glob` |
| wax | Modern glob alternative | `cargo add wax` |
| fs_extra | Extra filesystem utilities | `cargo add fs_extra` |
| which | Find executables | `cargo add which` |

## Process

| Crate | ใช้สำหรับ | ติดตั้ง |
|-------|----------|---------|
| which | Find executables | `cargo add which` |

## Text Processing

| Crate | ใช้สำหรับ | ติดตั้ง |
|-------|----------|---------|
| regex | Regular expressions | `cargo add regex` |
| fancy-regex | Regex with backreferences | `cargo add fancy-regex` |
| aho-corasick | Fast multi-pattern matching | `cargo add aho-corasick` |
| memchr | Fast string searching | `cargo add memchr` |
| unicode-segmentation | Unicode text segmentation | `cargo add unicode-segmentation` |

## Data Types

| Crate | ใช้สำหรับ | ติดตั้ง |
|-------|----------|---------|
| uuid | UUID generation | `cargo add uuid --features v4,serde` |
| ulid | ULID (sortable IDs) | `cargo add ulid` |
| chrono | Date/time handling | `cargo add chrono --features serde` |
| time | Modern date/time library | `cargo add time` |
| rust_decimal | Decimal arithmetic | `cargo add rust_decimal` |
| ordered-float | Float with total ordering | `cargo add ordered-float` |
| indexmap | Hash map with order | `cargo add indexmap` |
| hashbrown | Fast hash map | `cargo add hashbrown` |

## HTTP Client

| Crate | ใช้สำหรับ | ติดตั้ง |
|-------|----------|---------|
| reqwest | HTTP client | `cargo add reqwest --features json,rustls-tls` |
| surf | Cross-platform HTTP client | `cargo add surf` |
| hyper | Low-level HTTP | `cargo add hyper` |
| url | URL parsing | `cargo add url` |

## Web Framework

| Crate | ใช้สำหรับ | ติดตั้ง |
|-------|----------|---------|
| axum | Modern web framework | `cargo add axum` |
| actix-web | High-performance web framework | `cargo add actix-web` |
| rocket | Ergonomic web framework | `cargo add rocket` |
| poem | Full-featured web framework | `cargo add poem` |
| salvo | All-in-one web framework | `cargo add salvo` |

## Concurrency

| Crate | ใช้สำหรับ | ติดตั้ง |
|-------|----------|---------|
| rayon | Data parallelism | `cargo add rayon` |
| crossbeam | Concurrent primitives | `cargo add crossbeam` |
| dashmap | Concurrent hash map | `cargo add dashmap` |
| once_cell | Lazy statics | `cargo add once_cell` |
| parking_lot | Synchronization primitives | `cargo add parking_lot` |

## Testing

| Crate | ใช้สำหรับ | ติดตั้ง |
|-------|----------|---------|
| tokio-test | Async testing | `cargo add tokio-test` |
| tempfile | Temporary files | `cargo add tempfile` |
| assert_cmd | CLI assertions | `cargo add assert_cmd` |
| predicates | Assertion predicates | `cargo add predicates` |
| pretty_assertions | Pretty test output | `cargo add pretty_assertions` |
| mockito | HTTP mocking | `cargo add mockito` |
| wiremock | HTTP mock server | `cargo add wiremock` |
| insta | Snapshot testing | `cargo add insta` |

## Benchmarking

| Crate | ใช้สำหรับ | ติดตั้ง |
|-------|----------|---------|
| criterion | Statistical benchmarking | `cargo add criterion --features html_reports,cargo_plotters` |
| pprof | Flamegraph profiling | `cargo add pprof --features flamegraph,protobuf-codec` |

## Property Testing

| Crate | ใช้สำหรับ | ติดตั้ง |
|-------|----------|---------|
| proptest | Property-based testing | `cargo add proptest` |
| quickcheck | QuickCheck testing | `cargo add quickcheck` |

## Build Scripts

| Crate | ใช้สำหรับ | ติดตั้ง |
|-------|----------|---------|
| vergen | Build info generation | `cargo add vergen --features build,git,gitcl,si,cargo` |
| cfg_aliases | Conditional compilation | `cargo add cfg_aliases` |
