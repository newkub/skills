## RBAC Concepts

Role-Based Access Control สำหรับ manage user access

## Key Concepts

- **Role**: กลุ่มของ permissions ที่ assign ให้ users
- **Permission**: สิทธิ์ในการทำ action ต่างๆ (read, write, delete)
- **Assignment**: การ link role กับ user หรือ group
- **Environment Role**: Role ที่ใช้ทั่วทั้ง environment
- **Organization Role**: Role ที่ specific กับ organization

## Permission Structure

Permissions มักจะอยู่ใน format `resource:action`:
- `users:read` - อ่าน user data
- `users:write` - เขียน/แก้ไข user data
- `organizations:delete` - ลบ organization

## Role Hierarchy

Roles สามารถ inherit permissions จาก roles อื่น:
- Admin role มี permissions ทั้งหมด
- Editor role มี read/write permissions
- Viewer role มี read permissions เท่านั้น

## Benefits

- Centralized access control
- Easy to manage permissions
- Scalable สำหรับ large organizations
- Audit-friendly
