---
title: Review Data Pipeline
description: ตรวจสอบ ETL/ELT pipelines, data flow, data quality, และ data processing
auto_execution_mode: 3
file-patterns:
  - "**/workflows/02-infra/*-review-data-pipeline.md"
---

## Prerequisites

- เข้าใจ data pipeline concepts (ETL, ELT, streaming)
- รู้จัก data processing tools (Apache Airflow, dbt, Spark)
- เข้าใจ data quality และ validation
- รู้จัก data storage (data warehouses, lakes)

## 3.1 Precondition

- มี data pipeline code หรือ configuration
- มี access ไปยัง data sources (หรือ documentation)
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory

## 3.2 Prepare

- อ่าน pipeline definitions
- ระบุ data sources และ destinations
- เตรียม checklist ตาม data engineering best practices
- ทำความเข้าใจ data flow

## 3.3 Execute

1. ตรวจสอบ pipeline architecture
   - ETL vs ELT decisions
   - Batch vs streaming
   - Pipeline orchestration
   - Data lineage tracking

2. ตรวจสอบ data extraction
   - Source connection handling
   - Incremental extraction
   - Full refresh strategies
   - Change data capture (CDC)

3. ตรวจสอบ data transformation
   - Transformation logic
   - Business rules implementation
   - Data type conversions
   - Null handling

4. ตรวจสอบ data loading
   - Upsert vs append strategies
   - Partitioning schemes
   - Loading performance
   - Target schema management

5. ตรวจสอบ data quality
   - Data validation rules
   - Schema validation
   - Data freshness checks
   - Anomaly detection
   - Quality metrics

6. ตรวจสอบ error handling
   - Pipeline failure recovery
   - Retry mechanisms
   - Dead letter queues
   - Alerting

7. ตรวจสอบ monitoring
   - Pipeline execution metrics
   - Data volume tracking
   - Processing time monitoring
   - SLA compliance

8. ตรวจสอบ security
   - PII handling
   - Data encryption
   - Access controls
   - Audit logging

## 3.4 Validate

- [ ] Pipeline architecture เหมาะสมกับ use case
- [ ] Incremental extraction ทำงานถูกต้อง
- [ ] Transformations มี documentation
- [ ] Data quality checks ครอบคลุม
- [ ] Error handling ครบถ้วน
- [ ] Monitoring ครอบคลุม metrics สำคัญ
- [ ] Security controls ใน place
- [ ] Documentation ครบถ้วน

## 3.5 Verify

- [ ] Pipeline run ได้สำเร็จ
- [ ] Data quality checks ผ่าน
- [ ] ทดสอบ error scenarios
- [ ] Monitoring dashboards แสดงผลถูกต้อง
