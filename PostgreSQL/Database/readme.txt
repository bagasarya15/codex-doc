//Export
pg_dump -h localhost -U postgres -d name_db > name_db.sql

//Import
pg_dump -h localhost -U postgres -d name_db < name_db.sql