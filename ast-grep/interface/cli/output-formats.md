# Output Formats

## Human-readable

```
src/app.ts:5:3
  console.log("debug");
  ^^^^^^^^^^^^^^^^^^^^
  Use logger instead of console.log

src/utils.ts:10:7
  var data = fetchData();
  ^^^^^^^^^^^^^^^^^^^^
  Prefer let/const over var
```

## JSON

```json
[
  {
    "file": "src/app.ts",
    "range": { "start": { "row": 4, "column": 2 }, "end": { "row": 4, "column": 20 } },
    "text": "console.log(\"debug\");",
    "ruleId": "no-console",
    "severity": "warning",
    "message": "Use logger instead of console.log"
  }
]
```
