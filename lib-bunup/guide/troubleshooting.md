# Troubleshooting

## Common Issues

### Build Fails

- **Type Errors** - ตรวจสอบ TypeScript errors
- **Missing Dependencies** - ตรวจสอบ dependencies ใน package.json
- **Entry Point Not Found** - ตรวจสอบ path ของ entry points

### Type Declarations Not Generated

- **dts: true** - ตรวจสอบว่า `dts: true` ใน config
- **TypeScript Config** - ตรวจสอบ tsconfig.json
- **Export Types** - ตรวจสอบว่า types ถูก export

### Bundle Size Too Large

- **Tree-shaking** - ตรวจสอบว่า tree-shaking ทำงาน
- **External Dependencies** - กำหนด dependencies เป็น external
- **Minification** - เปิด minification

### Performance Issues

- **Cache** - ลบ cache และ rebuild
- **Parallel Processing** - ตรวจสอบ parallel processing
- **Incremental Builds** - ตรวจสอบ incremental builds
