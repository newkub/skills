# Security Patterns

Security-focused AST-grep patterns for vulnerability detection.

## Injection Vulnerabilities

### SQL Injection Detection

```yaml
id: sql-injection-risk
language: typescript
severity: error
rule:
  pattern: |
    $QUERY = "SELECT * FROM " + $TABLE
  or:
    pattern: |
      $QUERY = `SELECT * FROM ${$TABLE}`
message: Potential SQL injection vulnerability. Use parameterized queries.
```

### Command Injection

```yaml
id: command-injection
language: typescript
severity: error
rule:
  pattern: |
    exec($CMD + $$$)
  or:
    pattern: |
      execSync($CMD + $$$)
  or:
    pattern: |
      spawn($CMD + $$$)
message: Potential command injection. Validate input before execution.
```

### Unsafe eval usage

```yaml
id: unsafe-eval
language: typescript
severity: error
rule:
  pattern: eval($EXPR)
  or:
    pattern: new Function($EXPR)
  or:
    pattern: setTimeout($EXPR, $$$)
  or:
    pattern: setInterval($EXPR, $$$)
constraints:
  EXPR:
    not:
      kind: string_literal
message: Dangerous use of eval-like function with dynamic content.
```

## Hardcoded Secrets

### Detect API keys

```yaml
id: hardcoded-api-key
language: typescript
severity: warning
rule:
  pattern: |
    $KEY = "$VALUE"
constraints:
  KEY:
    regex: (?i)(api[_-]?key|apikey|api_secret|access_token|auth_token)
  VALUE:
    kind: string_literal
    regex: ^[a-zA-Z0-9_-]{16,}$
message: Potential hardcoded API key detected.
```

### Detect passwords

```yaml
id: hardcoded-password
language: typescript
severity: error
rule:
  pattern: |
    password = "$PASS"
  or:
    pattern: |
      $VAR = { password: "$PASS" }
constraints:
  PASS:
    not:
      regex: ^(password|pass|secret|123456|admin)$
message: Hardcoded password detected. Use environment variables.
```

## Insecure Practices

### Insecure HTTP

```yaml
id: insecure-http
language: typescript
severity: warning
rule:
  pattern: |
    fetch("http://$$$")
  or:
    pattern: |
      axios.get("http://$$$")
  or:
    pattern: |
      new URL("http://$$$")
message: Using insecure HTTP. Consider using HTTPS.
```

### Disabled TLS verification

```yaml
id: disabled-tls-check
language: typescript
severity: error
rule:
  pattern: |
    rejectUnauthorized: false
  or:
    pattern: |
      NODE_TLS_REJECT_UNAUTHORIZED: "0"
message: TLS verification is disabled. This is a security risk.
```

## Sensitive Data Exposure

### Logging sensitive data

```yaml
id: log-sensitive-data
language: typescript
severity: warning
rule:
  pattern: |
    console.log($$$, $SENSITIVE, $$$)
  or:
    pattern: |
      logger.info($$$, $SENSITIVE, $$$)
constraints:
  SENSITIVE:
    any:
      - pattern: password
      - pattern: token
      - pattern: secret
      - pattern: creditCard
      - pattern: ssn
message: Potentially logging sensitive data.
```

### Exposing stack traces

```yaml
id: expose-stack-trace
language: typescript
severity: warning
rule:
  pattern: |
    res.send($ERR.stack)
  or:
    pattern: |
      res.json({ error: $ERR.stack })
  or:
    pattern: |
      return { stack: $ERR.stack }
message: Stack trace exposure can leak sensitive information.
```

## Input Validation

### Missing input validation

```yaml
id: missing-input-validation
language: typescript
severity: warning
rule:
  pattern: |
    app.$METHOD($ROUTE, ($REQ, $RES) => {
      $$$BODY
    })
  not:
    has:
      pattern: |
        $REQ.body.$VALIDATION
      or:
        pattern: |
          $REQ.params.$VALIDATION
      or:
        pattern: |
          $REQ.query.$VALIDATION
      inside:
        stopBy: end
        pattern: $$$BODY
message: Route handler missing input validation.
```

### Unsafe deserialization

```yaml
id: unsafe-deserialization
language: typescript
severity: error
rule:
  pattern: |
    JSON.parse($DATA)
  constraints:
    DATA:
      not:
        kind: string_literal
  not:
    has:
      pattern: |
        try {
          $$$
        }
      inside:
        stopBy: end
        pattern: $$$
message: Unsafe JSON parsing. Wrap in try-catch and validate schema.
```
