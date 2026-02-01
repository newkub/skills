# Git Collaboration Best Practices

## Pull Request Guidelines
1. **Title**: ใช้ conventional commit format
2. **Description**: อธิบายการเปลี่ยนแปลงอย่างละเอียด
3. **Screenshots**: แนบ screenshots สำหรับ UI changes
4. **Testing**: อธิบายวิธีทดสอบ
5. **Breaking Changes**: แจ้งถ้ามี breaking changes

## Code Review Process
1. **Self-review**: ตรวจสอบ PR ของตัวเองก่อน
2. **Peer review**: ให้ทีมรีวิว
3. **Automated checks**: CI/CD tests ต้องผ่าน
4. **Discussion**: อภิปราย feedback
5. **Approval**: ต้องได้การ approve ก่อน merge

## Conflict Resolution
1. **Prevention**: sync บ่อยๆ และทำงานใน branches
2. **Communication**: ประสานกับทีมเมื่อมี conflicts
3. **Resolution**: ใช้ merge tools หรือ resolve manually
4. **Testing**: ทดสอบหลัง resolve conflicts

## Communication
- ใช้ descriptive commit messages
- อธิบาย PR อย่างชัดเจน
- ตอบคำถามและ feedback อย่างรวดเร็ว
- แจ้งทีมเมื่อมีการเปลี่ยนแปลงใหญ่
