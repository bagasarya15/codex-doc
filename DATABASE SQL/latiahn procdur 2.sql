CREATE OR REPLACE PROCEDURE HumanResources.CreateNewEmployee1( 
	
	
	
	business_entityid int,
	national_idnumber varchar,
	login_id varchar,
	job_title varchar,
	birth_date date,
	marital_status varchar,
	gender_e varchar,
	hire_date date,
	
	department_id int,
	department_c varchar,group_c varchar
	
-- 	firstname_c varchar,
-- 	middlename_c varchar,
-- 	lastname_c varchar,
-- 	suffix_c varchar
)
	
	LANGUAGE plpgsql
	AS 
	$$
	BEGIN
	
-- 	INSERT INTO person.person (businessentityid,firstname,middlename,lastname,suffix) 
-- 	values(business_entityid,firstname_c,middlename_c,lastname_c,suffix_c);
	
	
	INSERT INTO humanresources.employee (
	businessentityid,
	nationalidnumber ,
	loginid ,
	jobtitle ,
	birthdate ,
	maritalstatus,
	gender,
	hiredate
 )
	VALUES(
	business_entityid,
	national_idnumber ,
	login_id ,
	job_title ,
	birth_date ,
	marital_status ,
	gender_e ,
	hire_date 
	);
	
 INSERT INTO humanresources.department(departmentid,name,groupname) values(department_id,department_c,group_c);
 
 
 
commit;
END;
$$

delete from humanresources.employee where businessentityid=291

call humanresources.CreateNewEmployee1
	(291::int,'32243473'::varchar,'adventure-works\bagas1'::varchar,
	 'ProductionTeknik'::varchar,'1998-07-25'::date,'S'::char,
	 'M'::char,'2006-02-01'::date,19::int,'IT'::varchar,'Computer Science'::varchar)