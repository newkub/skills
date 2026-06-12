# Security

## Security Considerations

- **Dependency Scanning** - ตรวจสอบ dependencies สำหรับ vulnerabilities
- **Source Verification** - verify sources ก่อน install
- **Minify Safety** - minification ไม่ควร expose sensitive data
- **Environment Variables** - ไม่ bundle environment variables ลงใน output

## Best Practices

- **Audit Dependencies** - ใช้ `bun audit` เป็นประจำ
- **Update Regularly** - อัปเดต dependencies เป็นประจำ
- **Review Code** - review code ก่อน publish
- **Use npm provenance** - ใช้ npm provenance สำหรับ verification
