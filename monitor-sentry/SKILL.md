---
name: sentry
description: Error tracking and performance monitoring platform. Use for capturing errors, tracking performance, and monitoring application health.
goal: Use Sentry following best practices
outcome: Comprehensive error tracking and performance insights
---

# Sentry Library

## When to Use

Use this library when:

- Tracking application errors and crashes
- Monitoring performance and slow transactions
- Need error context (breadcrumbs, user info)
- Want alerts for critical issues
- Analyzing error trends and impact
- Building reliable production applications

## Quick Start

1. Create project at sentry.io
2. Install SDK: `npm install @sentry/react` (or @sentry/node)
3. Initialize with DSN
4. Add error boundaries and performance monitoring

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | [Core Concepts](knowledge/core-concept.md) | Sentry fundamentals | Understanding the basics |
| **Knowledge** | [Best Practices](knowledge/best-practices.md) | Error handling patterns | Effective monitoring |
| **Rules** | [Setup](rules/1-setup.md) | SDK initialization | New project setup |
| **Rules** | [Error Tracking](rules/2-error-tracking.md) | Capturing exceptions | Error monitoring |
| **Rules** | [Performance](rules/3-performance.md) | Transactions and spans | Performance monitoring |
| **Rules** | [Breadcrumbs](rules/4-breadcrumbs.md) | Context and debugging | Error context |
| **Rules** | [Releases](rules/5-releases.md) | Source maps and versions | Debugging production |
| **Rules** | [Alerts](rules/6-alerts.md) | Notification rules | Issue response |

## Core Features

- **Error Tracking**: Automatic error capture with stack traces
- **Performance Monitoring**: Track transactions and slow queries
- **Breadcrumbs**: Contextual events leading to errors
- **Release Tracking**: Source maps and version correlation
- **Distributed Tracing**: Track requests across services
- **Alerts**: Real-time notifications for critical issues

## Quick Reference

```bash
# Install
npm install @sentry/react
npm install @sentry/node

# Initialize
Sentry.init({
  dsn: 'your-dsn-here',
  integrations: [Sentry.browserTracingIntegration()],
  tracesSampleRate: 1.0,
})

// Capture error
Sentry.captureException(error)

// Performance monitoring
const transaction = Sentry.startTransaction({ name: 'checkout' })
```

## Verification

1. Check Sentry SDK installation
2. Verify DSN configuration
3. Test error capture
4. Validate performance monitoring
5. Check source maps upload
6. Ensure alerts are configured

## References

- [Sentry Documentation](https://docs.sentry.io/)
- [Sentry for JavaScript](https://docs.sentry.io/platforms/javascript/)
- [GitHub Repository](https://github.com/getsentry/sentry-javascript)
