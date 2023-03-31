CREATE TABLE employe_codex(
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	level VARCHAR(50) NOT NULL,
	status BOOLEAN NOT NULL DEFAULT FALSE
)

SELECT * FROM employe_codex
CREATE OR REPLACE PROCEDURE insertData(
	id_employee int,
	national_id bigint,
	first_name varchar,
	last_name varchar,
	email_employe varchar,
	phone varchar,
	job varchar,
	birth date,
	hire date,
	depart varchar,
	
	
	name_tb2 varchar,
	level_tb2 varchar,
	status_tb2 boolean
)
LANGUAGE plpgsql
AS 
$$
BEGIN
  INSERT INTO employee(
  	 id,nationalid, firstname, lastname, email, phonecall, jobtitle, birthdate, hiredate, departement
  ) VALUES ( 
	id_employee,
  	national_id ,
	first_name ,
	last_name ,
	email_employe ,
	phone ,
	job ,
	birth ,
	hire ,
	depart
  );
  
  INSERT INTO employe_codex (id, name, level, status)
  	VALUES (id_employee, name_tb2, level_tb2, status_tb2);
END;
$$;


call insertData(
	102::int,
	20234500::bigint,
	'Muhammad'::varchar,
	'Dhani'::varchar,
	'dhan@gmail.com'::varchar,
	'0812'::varchar,
	'FullSTack'::varchar,
	'2000-10-10'::date,
	'2023-03-20'::date,
	'Code-X'::varchar,
	'Mozarela'::varchar,
	'Legend'::varchar,
	TRUE::boolean
);
----------------------------------------------------------------------------------------
CREATE OR REPLACE PROCEDURE updateData(
	id_employee int,
	first_name varchar,
	last_name varchar
)
LANGUAGE plpgsql
AS 
$$
BEGIN

  UPDATE employee SET firstname = first_name, lastname = last_name WHERE id = id_employee;
	
END;
$$;

call updateData(
	101::int,
	'Zufar'::varchar,
	'Codex'::varchar
);

SELECT * FROM employee WHERE id = 101;