# PostgreSQL CLI Commands

## Basic Commands

- `psql -d dbname` - Connect to database
- `\l` - List databases
- `\dt` - List tables
- `\d table` - Describe table
- `\q` - Quit psql

## Database Operations

- `CREATE DATABASE dbname;` - Create database
- `DROP DATABASE dbname;` - Delete database
- `\c dbname` - Connect to database

## Table Operations

- `CREATE TABLE` - Create table
- `ALTER TABLE` - Modify table
- `DROP TABLE` - Delete table
- `TRUNCATE TABLE` - Clear table

## Data Operations

- `INSERT INTO` - Add records
- `SELECT` - Query data
- `UPDATE` - Modify records
- `DELETE FROM` - Remove records

## Utility Commands

- `\h` - SQL help
- `\?` - psql help
- `\i file.sql` - Execute SQL file
- `\o output.txt` - Save output
