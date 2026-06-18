## Vault Concepts

Vault สำหรับ secure data encryption และ storage

## Key Concepts

- **Encryption**: แปลง data เป็น ciphertext ด้วย encryption key
- **Key Management**: จัดการ encryption keys อย่าง secure
- **Access Control**: จำกัด access ไปยัง encrypted data
- **Audit Logging**: Log ทุก access attempts
- **Key Rotation**: เปลี่ยน encryption keys regularly

## Encryption Process

1. Application ส่ง sensitive data
2. Vault encrypt data ด้วย key
3. Store encrypted data
4. Retrieve และ decrypt เมื่อต้องการ

## Key Types

- **Data Encryption Keys (DEK)**: Encrypt actual data
- **Key Encryption Keys (KEK)**: Encrypt DEKs
- **Master Keys**: Root keys สำหรับ key hierarchy

## Benefits

- End-to-end encryption
- Compliance ready (SOC 2, HIPAA)
- Centralized key management
- Automatic key rotation
