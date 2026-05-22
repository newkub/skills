# Self-hosted Runners Rules

## Rule 1: รักษาความปลอดภัย infrastructure

ต้องรักษาความปลอดภัย infrastructure สำหรับ self-hosted runners

**ข้อปฏิบัติ:**

- [ ] ใช้ firewall rules
- [ ] ใช้ network segmentation
- [ ] ใช้ VPN หรือ private network
- [ ] ใช้ secure SSH keys
- [ ] ใช้ MFA สำหรับ access
- [ ] อัปเดต OS และ patches อย่างสม่ำเสมอ
- [ ] ใช้ endpoint protection
- [ ] Monitor logs และ alerts

---

## Rule 2: ใช้ ephemeral runners

ต้องใช้ ephemeral runners สำหรับ self-hosted

**ข้อดี:**

- ลด attack surface
- ป้องกันการ persist ของ malware
- ง่ายในการ scale
- ลด maintenance overhead

**ตัวอย่างการใช้ ephemeral runners:**

```yaml
jobs:
  build:
    runs-on: [self-hosted, ephemeral]
    steps:
      - uses: actions/checkout@v4
      - run: npm build
```

**วิธีการ:**

- ใช้ container-based runners
- ใช้ virtual machines
- ใช้ orchestration (Kubernetes, Docker Swarm)

---

## Rule 3: หลีกเลี่ยง self-hosted runners บน public repositories

ต้องหลีกเลี่ยง self-hosted runners บน public repositories

**ความเสี่ยง:**

- Code injection attacks
- Supply chain attacks
- Data exfiltration
- Resource abuse

**ตัวอย่างที่ไม่ดี:**

```yaml
# Public repository
jobs:
  build:
    runs-on: self-hosted
    steps:
      - uses: actions/checkout@v4
      - run: npm build
```

**ตัวอย่างที่ดี:**

```yaml
# Private repository
jobs:
  build:
    runs-on: self-hosted
    steps:
      - uses: actions/checkout@v4
      - run: npm build
```

---

## Rule 4: Harden runner images

ต้อง harden runner images สำหรับ self-hosted runners

**ข้อปฏิบัติ:**

- [ ] ใช้ minimal base images
- [ ] ลบ unnecessary packages
- [ ] ปิด ports ที่ไม่จำเป็น
- [ ] ใช้ non-root user
- [ ] ใช้ read-only filesystems
- [ ] ใช้ seccomp profiles
- [ ] ใช้ AppArmor/SELinux
- [ ] ใช้ kernel hardening

**ตัวอย่าง Dockerfile:**

```dockerfile
FROM node:18-alpine

# ใช้ non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

USER nodejs

# ใช้ read-only filesystem
RUN mkdir -p /app && \
    chown -R nodejs:nodejs /app

WORKDIR /app
```

---

## Rule 5: ใช้ Harden-Runner action

ต้องใช้ Harden-Runner action สำหรับ runtime security

**ตัวอย่าง:**

```yaml
- name: Harden Runner
  uses: step-security/harden-runner@v2
  with:
    egress-policy: audit
    disable-sudo: true
    allowed-endpoints: >
      api.github.com:443
      github.com:443
      registry.npmjs.org:443
```

**ข้อดี:**

- Audit egress traffic
- ปิด sudo access
- จำกัด network access
- ป้องกัน supply chain attacks

---

## Rule 6: ใช้ network isolation

ต้องใช้ network isolation สำหรับ self-hosted runners

**วิธีการ:**

- ใช้ VPCs
- ใช้ private subnets
- ใช้ network policies
- ใช้ service mesh
- ใช้ egress filtering

**ตัวอย่าง:**

```yaml
# ใช้ egress filtering
- name: Harden Runner
  uses: step-security/harden-runner@v2
  with:
    egress-policy: block
    allowed-endpoints: >
      api.github.com:443
      github.com:443
```

---

## Rule 7: ใช้ secrets management

ต้องใช้ secrets management สำหรับ self-hosted runners

**วิธีการ:**

- ใช้ HashiCorp Vault
- ใช้ AWS Secrets Manager
- ใช้ Azure Key Vault
- ใช้ Google Secret Manager
- ใช้ OIDC สำหรับ authentication

**ตัวอย่าง:**

```yaml
- name: Get secrets from Vault
  uses: hashicorp/vault-action@v2
  with:
    url: https://vault.example.com
    method: token
    token: ${{ secrets.VAULT_TOKEN }}
    secrets: |
      secret/data/myapp api_key | API_KEY;
```

---

## Rule 8: ใช้ monitoring และ logging

ต้องใช้ monitoring และ logging สำหรับ self-hosted runners

**สิ่งที่ต้อง monitor:**

- CPU usage
- Memory usage
- Disk usage
- Network traffic
- Job execution time
- Error rates

**เครื่องมือ:**

- Prometheus
- Grafana
- ELK Stack
- CloudWatch
- Azure Monitor

---

## Rule 9: ใช้ auto-scaling

ต้องใช้ auto-scaling สำหรับ self-hosted runners

**ข้อดี:**

- ลด cost
- เพิ่ม performance
- ปรับตัวตาม workload
- ลด idle time

**วิธีการ:**

- ใช้ Kubernetes Horizontal Pod Autoscaler
- ใช้ AWS Auto Scaling Groups
- ใช้ Azure VM Scale Sets
- ใช้ custom scripts

---

## Rule 10: ใช้ backup และ disaster recovery

ต้องใช้ backup และ disaster recovery สำหรับ self-hosted runners

**สิ่งที่ต้อง backup:**

- Runner configurations
- Runner state
- Logs
- Secrets
- Scripts

**Disaster recovery:**

- มี plan สำหรับ failover
- มี plan สำหรับ rollback
- มี plan สำหรับ recovery
- Test plans อย่างสม่ำเสมอ

---

## Checklist

- [ ] รักษาความปลอดภัย infrastructure
- [ ] ใช้ ephemeral runners
- [ ] หลีกเลี่ยง self-hosted runners บน public repositories
- [ ] Harden runner images
- [ ] ใช้ Harden-Runner action
- [ ] ใช้ network isolation
- [ ] ใช้ secrets management
- [ ] ใช้ monitoring และ logging
- [ ] ใช้ auto-scaling
- [ ] ใช้ backup และ disaster recovery
