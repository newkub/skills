# best-practices

## ใช้ aubr สำหรับ Scripts

```bash
# แทน aube run test ใช้ aubr test
aubr test      # auto-install ก่อนถ้าจำเป็น
aubr build
aubr lint
```

## CI Configuration

```bash
# สำหรับ CI ใช้ aube ci
aube ci        # clean install, lockfile as source of truth
```

## Docker

```bash
# Dockerfile
RUN mise use -g aube
COPY package.json pnpm-lock.yaml ./
RUN aube ci
COPY . .
RUN aube install --prod
```

## Workspaces

```bash
# install ใน workspace
aube install -r

# run ใน workspace
aube run test -r

# add ไปยัง specific workspace
aube add zod --filter @acme/api
```

## Security

```toml
# aube.toml - paranoid mode
paranoid = true
jailBuilds = true

[jailBuildPermissions]
"@vue/compiler-sfc" = ["HOME"]
```

## Lockfile Management

- ควรมี lockfile เดียวต่อ project
- commit lockfile ขึ้น git เสมอ
- ถ้ามีหลาย lockfiles ให้เลือก canonical แล้วลบตัวอื่น