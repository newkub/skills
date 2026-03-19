# Analyze Code

## Description

Workflow สำหรับวิเคราะห์ code ก่อนเริ่มการ refactor เพื่อเข้าใจปัญหาและกำหนดขอบเขต

## When to Use

- เริ่มต้นกระบวนการ refactor
- ไม่แน่ใจว่าควร refactor อะไร
- ต้องการประเมินขนาดของงาน

## Steps

### 1. ระบุเป้าหมาย

กำหนดว่าต้องการ refactor เพื่ออะไร:

- [ ] อ่านง่ายขึ้น (Readability)
- [ ] ทดสอบง่ายขึ้น (Testability)
- [ ] ลดซ้ำซ้อน (Remove Duplication)
- [ ] ปรับปรุงประสิทธิภาพ (Performance)
- [ ] ลดความซับซ้อน (Reduce Complexity)
- [ ] เตรียมสำหรับ feature ใหม่ (Prepare for Changes)

### 2. สำรวจ Code

ใช้คำสั่งต่อไปนี้เพื่อวิเคราะห์:

```bash
# หาไฟล์ที่ใหญ่เกินไป
find ./src -type f -name "*.ts" -exec wc -l {} + | sort -n | tail -20

# หา duplicate code
jscpd ./src --min-lines 5 --min-tokens 25

# วิเคราะห์ complexity
npx complexity-report ./src/**/*.ts

# หา unused code
npx unimported
npx depcheck
```

### 3. ระบุ Code Smells

ตรวจสอบตาม [code-smells.md](../guide/code-smells.md):

| Code Smell | สัญญาณ | ความรุนแรง |
|:---|:---|:---|
| Long Method | เกิน 20-30 บรรทัด | HIGH |
| Large Class | เกิน 200 บรรทัด | HIGH |
| Duplicate Code | พบซ้ำ 3+ ที่ | HIGH |
| Long Parameter List | เกิน 4 parameters | MEDIUM |
| Feature Envy | ใช้ข้อมูล class อื่น | MEDIUM |
| Primitive Obsession | ใช้ primitive แทน domain types | MEDIUM |

### 4. ทำความเข้าใจ Dependencies

วาดแผนภาพ dependencies:

```text
src/
├── components/
│   ├── OrderForm.tsx     → uses: models/Order, utils/validation
│   └── ProductList.tsx   → uses: models/Product, utils/format
├── models/
│   ├── Order.ts          → used by: components/OrderForm, services/api
│   └── Product.ts        → used by: components/ProductList
└── utils/
    ├── validation.ts     → used by: components/OrderForm
    └── format.ts         → used by: components/ProductList
```

### 5. ประเมินความเสี่ยง

| Factor | Low | Medium | High |
|:---|:---|:---|:---|
| Test Coverage | >80% | 50-80% | <50% |
| Code Complexity | Simple | Moderate | Complex |
| Dependencies | Few | Some | Many |
| Business Critical | No | Maybe | Yes |
| Team Knowledge | Expert | Familiar | New |

### 6. สร้างรายงาน

```markdown
## Code Analysis Report

### Target Files

- `src/components/OrderForm.tsx` (350 lines)
- `src/utils/validation.ts` (180 lines)

### Issues Found

1. **Long Method** in `OrderForm.tsx:processOrder()` - 65 lines
2. **Duplicate Code** - validation logic ซ้ำกัน 3 ไฟล์
3. **Feature Envy** - `OrderForm` ใช้ `validation.ts` มากเกินไป

### Risk Assessment: MEDIUM

- Test coverage: 65%
- Dependencies: 5 files
- Business critical: Yes (order processing)

### Recommended Actions

1. Extract validation logic เป็น class แยก
2. Split `processOrder()` เป็น 3 methods
3. เขียน tests เพิ่มก่อน refactor
```

## Output

หลังจาก analyze จะได้:

1. **Scope**: รู้ว่าต้อง refactor อะไรบ้าง
2. **Priority**: รู้ว่าอะไรสำคัญกว่า
3. **Risks**: รู้ความเสี่ยงที่ต้องระวัง
4. **Effort Estimate**: ประมาณการเวลา

## Next Steps

หลังจาก analyze เสร็จ:

→ ไปที่ [create-plan.md](./create-plan.md) เพื่อสร้างแผนการ refactor

## Tools

- **Complexity**: `npx complexity-report`
- **Duplicates**: `jscpd`
- **Coverage**: `npx jest --coverage`
- **Dependencies**: `npx madge`
- **Unused**: `npx unimported`
