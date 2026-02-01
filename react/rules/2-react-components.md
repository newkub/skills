# React Components

## Description
การจัดการ React components อย่างมีประสิทธิภาพและตาม best practices

## Why
Components ที่ดีช่วยให้ code สามารถ reuse ได้ ง่ายต่อการ test และ maintain

## Anti-patterns
❌ สร้าง components ใหญ่เกินไป (God components)
❌ ผสม logic และ presentation ไว้ด้วยกัน
❌ ไม่ใช้ TypeScript หรือไม่กำหนด types ที่ชัดเจน

## Best Practices
✅ แบ่ง components เป็นเล็กๆ และ reusable
✅ แยก presentation components และ container components
✅ ใช้ TypeScript และกำหนด types ที่ชัดเจน

## Rules

### 1. Component Types
แบ่ง components เป็น 2 ประเภท:

**Presentation Components:**
- รับผิดชอบแค่การแสดงผล
- ไม่มี business logic
- Reusable สูง

**Container Components:**
- รับผิดชอบ business logic
- จัดการ state และ data
- มีความเฉพาะเจาะจงสูง

### 2. Component Structure
```tsx
interface ComponentProps {
  // Define props types clearly
}

const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Hooks and logic here
  
  return (
    <div>
      {/* JSX here */}
    </div>
  );
};

export default Component;
```

### 3. Props Management
- กำหนด default values สำหรับ optional props
- ใช้ TypeScript interfaces สำหรับ props
- หลีกเลี่ยงการส่ง props ที่ไม่จำเป็น

### 4. State Management
- ใช้ `useState` สำหรับ local state
- ใช้ `useReducer` สำหรับ complex state
- หลีกเลี่ยงการใช้ state ที่ไม่จำเป็น

## Impact
ถ้าไม่ทำตาม:
- Components ยากต่อการ reuse
- Code ซับซ้อนและยากต่อการ maintain
- Performance ลดลงเนื่องจาก unnecessary re-renders

## Verification
1. ตรวจสอบว่า components มีขนาดเหมาะสม (ไม่เกิน 200 บรรทัด)
2. ตรวจสอบว่ามี TypeScript types ที่ชัดเจน
3. ทดสอบว่า components สามารถ reuse ได้

## References
- [React Components Best Practices](https://react.dev/learn/passing-props-to-a-component)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
