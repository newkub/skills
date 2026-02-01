# PostgreSQL Data Types

## 1. Numeric Types
- **integer**: จำนวนเต็ม 4 bytes
- **bigint**: จำนวนเต็ม 8 bytes  
- **decimal/numeric**: ทศนิยมแม่นยำสูง
- **real/float**: ทศนิยมความแม่นยำปกติ

## 2. String Types
- **varchar(n)**: ข้อความความยาวคงที่
- **text**: ข้อความความยาวไม่จำกัด
- **char(n)**: ข้อความความยาวคงที่เต็ม

## 3. Date/Time Types
- **timestamp**: วันที่และเวลา
- **date**: วันที่เท่านั้น
- **time**: เวลาเท่านั้น
- **interval**: ช่วงเวลา

## 4. Boolean Type
- **boolean**: true/false หรือ yes/no

## 5. JSON Types
- **json**: ข้อมูล JSON ธรรมดา
- **jsonb**: ข้อมูล JSON แบบ binary (เร็วกว่า)

## 6. Array Types
- **type[]**: array ของ type ใดๆ
- **text[]**: array ของข้อความ
- **integer[]**: array ของจำนวนเต็ม

## 7. Special Types
- **uuid**: unique identifier
- **inet**: IP addresses
- **cidr**: network addresses
- **point/geometry**: พิกัดทางภูมิศาสตร์
