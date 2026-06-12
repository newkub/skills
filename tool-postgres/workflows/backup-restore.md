# Backup and Restore

## Description

Backup และ restore PostgreSQL databases

## Backup

### pg_dump

```bash
# Backup single database
pg_dump database_name > backup.sql

# Backup all databases
pg_dumpall > all_databases.sql

# Backup with custom format
pg_dump -Fc database_name -f backup.dump
```

### pg_basebackup

```bash
pg_basebackup -D /path/to/backup
```

## Restore

### Restore from SQL

```bash
psql database_name < backup.sql
```

### Restore from custom format

```bash
pg_restore -d database_name backup.dump
```

## Best Practices

1. **Regular Backups**: Backup เป็นประจำ
2. **Test Restores**: Test restores เป็นประจำ
3. **Offsite Storage**: Store backups offsite
4. **Encrypt Backups**: Encrypt sensitive backups
