# Secrets Management Rules

## Rule 1: ใช้ OpenID Connect (OIDC) แทน secrets โดยตรง

เมื่อเป็นไปได้ ควรใช้ OpenID Connect (OIDC) แทนการใช้ secrets โดยตรง

**ตัวอย่างที่ไม่ดี:**

```yaml
- name: Deploy to AWS
  env:
    AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
    AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
  run: |
    aws s3 sync ./dist s3://my-bucket
```

**ตัวอย่างที่ดี:**

```yaml
- name: Configure AWS credentials
  uses: aws-actions/configure-aws-credentials@v4
  with:
    role-to-assume: arn:aws:iam::123456789012:role/my-github-role
    aws-region: us-east-1
```

---

## Rule 2: ตั้งค่า GITHUB_TOKEN permissions เป็น least-privileged

ต้องตั้งค่า GITHUB_TOKEN permissions ให้มีสิทธิ์น้อยที่สุด

**ตัวอย่างที่ไม่ดี:**

```yaml
permissions: write-all
```

**ตัวอย่างที่ดี:**

```yaml
permissions:
  contents: read
  pull-requests: write
```

**ตั้งค่าใน repository/organization settings:**

- เลือก "Read repository contents and package permissions" เป็น default
- ต้อง explicitly define permissions ใน workflow file ถ้าต้องการสิทธิ์เพิ่มเติม

---

## Rule 3: ใช้ environment secrets พร้อม mandatory reviews

สำหรับ secrets ที่ sensitive ควรใช้ environment secrets พร้อม mandatory reviews

**ตัวอย่าง:**

```yaml
jobs:
  deploy:
    environment: production
    runs-on: ubuntu-latest
    steps:
      - name: Deploy
        env:
          PRODUCTION_API_KEY: ${{ secrets.PRODUCTION_API_KEY }}
        run: |
          deploy.sh
```

**ตั้งค่า environment:**

1. ไปที่ Settings > Environments
2. สร้าง environment ใหม่ (เช่น `production`)
3. เพิ่ม protection rules:
   - Required reviewers
   - Wait timer
   - Deployment branches

---

## Rule 4: Rotate secrets อย่างสม่ำเสมอ

ต้อง rotate secrets อย่างสม่ำเสมอและ invalidate secrets เก่า

**ขั้นตอน:**

1. สร้าง secret ใหม่
2. อัปเดต workflow หรือ application ให้ใช้ secret ใหม่
3. ทดสอบว่าทำงานได้
4. ลบ secret เก่า

**ตรวจสอบ secrets:**

- ไปที่ Settings > Secrets and variables > Actions
- ตรวจสอบว่า secrets มีการใช้งานอยู่หรือไม่
- ใช้ GitHub API เพื่อ inventory secrets ทั้งหมด

---

## Rule 5: หลีกเลี่ยงการพิมพ์ secrets ใน logs

อย่าพิมพ์ secrets ใน logs แม้ว่า GitHub จะ redact secrets ที่รู้จัก

**ตัวอย่างที่ไม่ดี:**

```yaml
- name: Debug
  run: |
    echo "API Key: ${{ secrets.API_KEY }}"
```

**ตัวอย่างที่ดี:**

```yaml
- name: Debug
  run: |
    echo "Using API Key from secrets"
    # ใช้ secrets โดยไม่แสดงค่า
```

---

## Rule 6: หลีกเลี่ยงการใช้ structured data เป็น secrets

อย่าใช้ JSON, XML, YAML หรือ structured data อื่นเป็น secrets

**ตัวอย่างที่ไม่ดี:**

```yaml
secrets:
  DB_CONFIG: '{"host":"db.example.com","user":"admin","pass":"secret"}'
```

**ตัวอย่างที่ดี:**

```yaml
secrets:
  DB_HOST: db.example.com
  DB_USER: admin
  DB_PASSWORD: secret
```

---

## Rule 7: Scan logs สำหรับ secrets

ควร scan workflow run logs สำหรับ secrets และ sensitive information

**เครื่องมือที่แนะนำ:**

- GitGuardian
- StepSecurity
- GitHub Advanced Security

**ตัวอย่างการใช้ GitGuardian:**

```yaml
- name: GitGuardian scan
  uses: GitGuardian/ggshield-action@v1
  with:
    args: scan ci
```

---

## Checklist

- [ ] ใช้ OIDC แทน secrets โดยตรงเมื่อเป็นไปได้
- [ ] ตั้งค่า GITHUB_TOKEN permissions เป็น least-privileged
- [ ] ใช้ environment secrets พร้อม mandatory reviews สำหรับ secrets ที่ sensitive
- [ ] Rotate secrets อย่างสม่ำเสมอ
- [ ] หลีกเลี่ยงการพิมพ์ secrets ใน logs
- [ ] หลีกเลี่ยงการใช้ structured data เป็น secrets
- [ ] Scan logs สำหรับ secrets และ sensitive information
