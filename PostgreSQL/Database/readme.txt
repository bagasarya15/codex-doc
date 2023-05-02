//Export
pg_dump -h localhost -U postgres -d name_db > name_db.sql

//Import
pg_dump -h localhost -U postgres -d name_db < name_db.sql
psql -U nama_user -d nama_database -f file_sql.sql
