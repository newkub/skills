# Execute Refactor

## Description

Workflow สำหรับดำเนินการ refactor ตามแผนที่วางไว้อย่างปลอดภัย

## When to Use

- มีแผนการ refactor แล้ว
- พร้อมเริ่มดำเนินการ
- ต้องการทำทีละขั้นตอนอย่างระมัดระวัง

## Pre-execution Checklist

ก่อนเริ่ม:

- [ ] สร้าง branch ใหม่สำหรับ refactor
- [ ] Tests ทั้งหมดผ่านใน branch หลัก
- [ ] Code coverage ตรงตาม baseline
- [ ] แจ้งทีมให้รู้ว่ากำลัง refactor
- [ ] Stash หรือ commit งานที่ยังไม่เสร็จ

## Execution Steps

### Step 1: Setup Environment

```bash
# สร้าง branch
git checkout -b refactor/order-form

# ตรวจสอบว่า tests ผ่าน
bun run test

# บันทึก baseline
git log --oneline -1 > refactor-baseline.txt
```

### Step 2: Execute First Step

เลือก step แรกจากแผน:

```markdown
## Step 2.1: Extract validateOrder

**Goal**: แยก validation logic ออกจาก component
**Estimated**: 30 นาที
**Risk**: Low
```

#### 2.1 Identify Code to Extract

```typescript
// ใน OrderForm.tsx (บรรทัด 45-65)
function validateOrder(order: Order): boolean {
  if (!order.items || order.items.length === 0) {
    return false;
  }
  if (order.total <= 0) {
    return false;
  }
  return true;
}
```

#### 2.2 Create Test First (TDD Approach)

```typescript
// validation.test.ts
import { validateOrder } from './validation';

describe('validateOrder', () => {
  it('returns false for empty order', () => {
    expect(validateOrder({ items: [], total: 0 })).toBe(false);
  });

  it('returns false for negative total', () => {
    expect(validateOrder({ items: [{ id: 1 }], total: -10 })).toBe(false);
  });

  it('returns true for valid order', () => {
    expect(validateOrder({ items: [{ id: 1 }], total: 100 })).toBe(true);
  });
});
```

#### 2.3 Run Test (Should Fail)

```bash
bun run test validation.test.ts
# Expected: FAIL - function doesn't exist yet
```

#### 2.4 Extract Function

```typescript
// validation.ts
export function validateOrder(order: Order): boolean {
  if (!order.items || order.items.length === 0) {
    return false;
  }
  if (order.total <= 0) {
    return false;
  }
  return true;
}

// OrderForm.tsx
import { validateOrder } from './validation';

// แทนที่ code เดิมด้วยการเรียก function
const isValid = validateOrder(order);
```

#### 2.5 Run Tests (Should Pass)

```bash
bun run test
# Expected: PASS
```

#### 2.6 Commit

```bash
$ git add .
$ git commit -m "refactor: extract validateOrder to validation.ts

- Move validation logic from OrderForm to dedicated module
- Add unit tests for validateOrder
- Reduce OrderForm complexity"
```

### Step 3: Continue with Next Steps

ทำซ้ำกระบวนการเดิมสำหรับแต่ละ step:

```markdown
## Step 2.2: Extract validateProduct

1. [ ] เขียน test
2. [ ] Extract function
3. [ ] Run tests
4. [ ] Commit

## Step 2.3: Move to validation.ts

1. [ ] Update imports
2. [ ] Run tests
3. [ ] Commit
```

### Step 4: Handle Issues

#### ถ้า Tests แตก

```bash
# 1. หยุดทำ step ปัจจุบัน
# 2. ตรวจสอบว่าแตกตรงไหน
bun run test --verbose

# 3. ถ้าแก้ได้ง่าย: แก้แล้ว continue
# 4. ถ้าแก้ยาก: revert แล้ว rethink
git checkout -- .
git reset HEAD~1
```

#### ถ้าเจอ Code ที่ไม่ได้คาดไว้

```markdown
## Issue Log

### Issue #1

- **Found**: During Step 2.2
- **Problem**: validateProduct ใช้ external API
- **Impact**: Cannot easily extract
- **Decision**: Skip this step, document for later
- **Action**: Update plan to handle API dependency
```

### Step 5: Review Each Phase

หลังจบแต่ละ phase:

```bash
# รัน tests ทั้งหมด
bun run test

# รัน type check
bun run type-check

# รัน lint
bun run lint

# ตรวจสอบ coverage
bun run test:coverage

# สร้าง PR ถ้าจำเป็น
gh pr create --draft --title "WIP: Refactor Order Form - Phase 2"
```

## Best Practices During Execution

### 1. One Thing at a Time

- ทำแค่สิ่งที่ plan ไว้ใน step นั้น
- อย่า "while I'm here, let me fix this too"
- ถ้าเจอของที่ต้องแก้: จดไว้ ทำ step นี้ให้เสร็จก่อน

### 2. Test-Driven Refactoring

```typescript
// 1. เขียน test ก่อน
it('should do X', () => {
  expect(newFunction()).toBe(expected);
});

// 2. Run test (should fail)

// 3. Implement refactor

// 4. Run test (should pass)
```

### 3. Commit Often

```bash
# Commit ทุกครั้งที่ tests ผ่าน
$ git commit -m "refactor: extract calculateTotal from OrderForm

- Move calculation logic to dedicated function
- Add comprehensive tests
- No functional changes"
```

### 4. Document Decisions

```typescript
// NOTE: Kept this logic here instead of extracting because
// it depends on 3 other component states. Consider extracting
// when we refactor those components.
function complexValidation() {
  // ...
}
```

## Execution Template

```markdown
## Execution Log: [Date]

### Phase 1: Preparation ✅

- 09:00 - Start
- 09:15 - Step 1.1 complete (tests written)
- 09:45 - Step 1.2 complete (snapshots created)
- 10:00 - Phase 1 complete, tests passing

### Phase 2: Extract Validation 🔄

- 10:15 - Start Step 2.1
- 10:45 - Step 2.1 complete
- 11:00 - Issue found: external API dependency
- 11:15 - Decision: skip Step 2.2 for now
- 11:30 - Step 2.3 complete
- 12:00 - Phase 2 complete

### Issues Encountered

1. External API in validateProduct - deferred
2. Type conflict - resolved by updating interface

### Next Session

- Continue with Phase 3
- Research API mocking for Step 2.2
```

## Abort Criteria

หยุด refactor ถ้า:

- [ ] Tests แตกและแก้ไม่ได้ภายใน 30 นาที
- [ ] พบว่า scope ใหญ่กว่าที่คิดมาก
- [ ] Business requirements เปลี่ยน
- [ ] ทีมต้องการ focus อย่างอื่น

## Recovery from Abort

```bash
# 1. Revert กลับไปจุดล่าสุดที่ tests ผ่าน
git log --oneline
git reset --hard <last-good-commit>

# 2. Document what happened
echo "Aborted at Step X due to Y" >> refactor-notes.md

# 3. Re-plan ถ้าจะทำต่อ
```

## Next Steps

หลังจาก execute เสร็จ:

→ ไปที่ [verify-refactor.md](./verify-refactor.md) เพื่อตรวจสอบผลลัพธ์
