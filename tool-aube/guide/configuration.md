# configuration

## aube.toml

สร้าง `aube.toml` ใน project root:

```toml
# global store path (optional)
store = "~/.local/share/aube/store"

# security settings
paranoid = false          # true = hard fail on all security gates
jailBuilds = false        # true = run lifecycle scripts in jail
trustDowngrades = false   # false = fail on trust downgrades

# build permissions for jail
[jailBuildPermissions]
# allow specific env vars per package
"@some/package" = ["API_KEY", "HOME"]

# exclude specific packages from jail
[jailBuildExclusions]
"@trusted/package" = true
```

## package.json

aube อ่าน devEngines ใน package.json:

```json
{
  "devEngines": {
    "node": ">=18"
  }
}
```

ถ้าใช้ mise กับ `idiomatic_version_file_enable_tools = true` แล้ว .nvmrc/.node-version ก็จะ trigger mise ให้ใช้ Node version ที่ตรง

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `AUBE_STORE` | global store path | `~/.local/share/aube/store` |
| `AUBE_REGISTRY` | npm registry | `https://registry.npmjs.org/` |

## Lockfile Options

```toml
# ใช้ lockfile เฉพาะ
lockfile = "aube-lock.yaml"

# หรือปล่อยให้ aube เลือกเอง (detect จากไฟล์ที่มีอยู่)
```