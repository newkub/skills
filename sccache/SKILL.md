---
name: sccache
description: Shared Compilation Cache for C/C++ and Rust. Use for accelerating builds by caching compilation results across projects and CI/CD.
goal: Use sccache following best practices
outcome: Faster builds with distributed caching
---

# sccache Library

## When to Use

Use this library when:

- Speeding up Rust/C/C++ compilation
- Sharing build cache across CI/CD pipelines
- Using cloud storage for remote caching (S3, GCS, Azure)
- Building large projects with many dependencies
- Want to reduce build times significantly
- Using with Cargo, CMake, or other build systems

## Quick Start

1. Install: `cargo install sccache` or download binary
2. Set `RUSTC_WRAPPER=sccache`
3. Configure remote cache if needed
4. Build as normal - cache works automatically

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | Core Concepts | sccache fundamentals | Understanding the basics |
| **Knowledge** | Best Practices | Caching strategies | Optimal performance |
| **Rules** | Setup | Installation and env vars | New project setup |
| **Rules** | Local Cache | Disk-based caching | Local development |
| **Rules** | Remote Cache | S3, GCS, Azure, R2 | CI/CD optimization |
| **Rules** | Cargo Integration | Rust builds | Cargo projects |
| **Rules** | CI/CD | GitHub Actions, etc. | Automated builds |
| **Rules** | Monitoring | Cache hit rates and stats | Performance tracking |

## Core Features

- **Multi-Language**: Rust, C/C++, CUDA
- **Local Cache**: Fast disk-based caching
- **Remote Cache**: Cloud storage backends
- **Redis Support**: Distributed caching with Redis
- **Zero Config**: Works with existing build commands
- **Stats**: View cache hit rates

## Quick Reference

```bash
# Install
cargo install sccache

# Set environment
export RUSTC_WRAPPER=sccache
# or for C/C++
export CC="sccache gcc"
export CXX="sccache g++"

# Build
cargo build

# View stats
sccache --show-stats

# Zero stats
sccache --zero-stats
```

## Verification

1. Check sccache installation
2. Verify environment variables
3. Test cache during build
4. Validate remote cache if configured
5. Check stats output
6. Ensure cache persistence

## References

- [sccache Documentation](https://github.com/mozilla/sccache)
- [Configuration](https://github.com/mozilla/sccache#configuration)
- [Distributed Compiling](https://github.com/mozilla/sccache#distcc)
