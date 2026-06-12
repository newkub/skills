# Migration

## การย้ายจาก Workflow อื่นมาใช้ Workflow-Ship

### Overview

คู่มือนี้จะแนะนำวิธีการย้ายจาก workflows หรือ processes อื่นๆ มาใช้ workflow-ship

### Migration Scenarios

#### 1. จาก Manual Process

**Current Process:**
```bash
# Manual steps
git add .
git commit -m "feat: add feature"
npm run build
npm run test
npm run dev
```

**Migration to Workflow-Ship:**
```bash
# ใช้ workflow-ship
/ship-run
```

**Benefits:**
- อัตโนมัติทั้งหมด
- วนซ้ำจนผ่าน
- แก้ไข errors อัตโนมัติ

#### 2. จาก Custom Scripts

**Current Process:**
```bash
# Custom script
./scripts/build-and-test.sh
```

**Migration to Workflow-Ship:**
```bash
# ใช้ workflow-ship
/ship-code
/run-verify
/run-dev
```

**Benefits:**
- Standardized process
- Better error handling
- Integration กับ workflows อื่นๆ

#### 3. จาก CI/CD Pipeline

**Current Process:**
```yaml
# CI/CD pipeline
steps:
  - build
  - test
  - deploy
```

**Migration to Workflow-Ship:**
```bash
# Local development
/ship-run

# CI/CD ยังคงใช้ pipeline
```

**Benefits:**
- Local testing ก่อน push
- Consistent environment
- Faster feedback

### Migration Steps

#### Step 1: Assessment

**Assess current process:**
- วิเคราะห์ current workflow
- ระบุ pain points
- วัด performance
- ระบุ integration points

**Checklist:**
- [ ] วิเคราะห์ current workflow
- [ ] ระบุ pain points
- [ ] วัด performance metrics
- [ ] ระบุ integration points

#### Step 2: Planning

**Plan migration:**
- กำหนด migration strategy
- กำหนด timeline
- กำหนด success criteria
- กำหนด rollback plan

**Checklist:**
- [ ] กำหนด migration strategy
- [ ] กำหนด timeline
- [ ] กำหนด success criteria
- [ ] กำหนด rollback plan

#### Step 3: Preparation

**Prepare environment:**
- ติดตั้ง dependencies
- ตั้งค่า configuration
- สร้าง workflows
- Test environment

**Checklist:**
- [ ] ติดตั้ง dependencies
- [ ] ตั้งค่า configuration
- [ ] สร้าง workflows
- [ ] Test environment

#### Step 4: Migration

**Migrate to workflow-ship:**
- ทำ `/ship-code`
- ทำ `/run-verify`
- ทำ `/run-dev`
- ตรวจสอบ results

**Checklist:**
- [ ] ทำ `/ship-code`
- [ ] ทำ `/run-verify`
- [ ] ทำ `/run-dev`
- [ ] ตรวจสอบ results

#### Step 5: Validation

**Validate migration:**
- ตรวจสอบ functionality
- ตรวจสอบ performance
- ตรวจสอบ integration
- รวบรวม feedback

**Checklist:**
- [ ] ตรวจสอบ functionality
- [ ] ตรวจสอบ performance
- [ ] ตรวจสอบ integration
- [ ] รวบรวม feedback

#### Step 6: Optimization

**Optimize workflow:**
- ปรับแต่ง configuration
- Optimize performance
- Add custom integrations
- Document changes

**Checklist:**
- [ ] ปรับแต่ง configuration
- [ ] Optimize performance
- [ ] Add custom integrations
- [ ] Document changes

### Common Migration Patterns

#### Pattern 1: Incremental Migration

**Description:** ย้ายทีละส่วน

**Steps:**
1. เริ่มกับ `/ship-code`
2. เพิ่ม `/run-verify`
3. เพิ่ม `/run-dev`
4. ใช้ `/ship-run` แบบครบวงจร

**Benefits:**
- Risk ต่ำ
- Easy rollback
- Gradual adoption

#### Pattern 2: Parallel Migration

**Description:** รันทั้ง old และ new processes ควบคู่กัน

**Steps:**
1. รัน old process
2. รัน workflow-ship
3. เปรียบเทียบ results
4. Switch ไป workflow-ship

**Benefits:**
- Validation ง่าย
- Risk ต่ำ
- Smooth transition

#### Pattern 3: Big Bang Migration

**Description:** ย้ายทั้งหมดในครั้งเดียว

**Steps:**
1. Stop old process
2. Start workflow-ship
3. Monitor อย่างใกล้ชิด
4. Fix issues ทันที

**Benefits:**
- Fast migration
- Single transition
- Clear cut-off

### Migration Challenges

#### Challenge 1: Resistance to Change

**Solution:**
- Demonstrate benefits
- Provide training
- Start with pilot
- Gather feedback

#### Challenge 2: Integration Issues

**Solution:**
- Test integration thoroughly
- Create adapters ถ้าจำเป็น
- Document integration points
- Monitor closely

#### Challenge 3: Performance Degradation

**Solution:**
- Measure performance
- Optimize configuration
- Use caching
- Parallelize tasks

#### Challenge 4: Learning Curve

**Solution:**
- Provide documentation
- Create examples
- Offer training
- Pair programming

### Migration Checklist

Before migration:
- [ ] Assess current process
- [ ] Plan migration strategy
- [ ] Prepare environment
- [ ] Test workflow-ship
- [ ] Create rollback plan

During migration:
- [ ] Execute migration steps
- [ ] Monitor progress
- [ ] Validate results
- [ ] Document issues
- [ ] Fix problems immediately

After migration:
- [ ] Validate functionality
- [ ] Measure performance
- [ ] Gather feedback
- [ ] Optimize workflow
- [ ] Document changes

### Best Practices

1. **Plan Thoroughly:** วางแผนอย่างละเอียด
2. **Test Extensively:** ทดสอบอย่างครบถ้วน
3. **Monitor Closely:** ตรวจสอบอย่างใกล้ชิด
4. **Document Everything:** เขียน documentation ครบถ้วน
5. **Gather Feedback:** รวบรวม feedback อย่างสม่ำเสมอ

### Next Steps

- อ่าน [Ecosystem](ecosystem.md) สำหรับระบบนิเวศ
- อ่าน [Testing](testing.md) สำหรับการทดสอบ
- อ่าน [Troubleshooting](troubleshooting.md) สำหรับการแก้ปัญหา
