CREATE OR REPLACE PROCEDURE HumanResources.CreateNewEmployee1( 
	
	business_entityid int,
	
-- 	business_entityid_person int,
-- 	person_type char,
-- 	firstname_c varchar,
-- 	middlename_c varchar,
-- 	lastname_c varchar,
-- 	suffix_c varchar,
	
	national_idnumber varchar,
	login_id varchar,
	job_title varchar,
	birth_date date,
	marital_status varchar,
	gender_e varchar,
	hire_date date,
	
	department_e int, 
	shift_id smallint,
	start_date date
	
)
	
	LANGUAGE plpgsql
	AS 
	$$
	BEGIN
	
-- 	INSERT INTO person.person (businessentityid,persontype,firstname,middlename,lastname,suffix) 
-- 	values(business_entityid_person,person_type,firstname_c,middlename_c,lastname_c,suffix_c);
	
	
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

	INSERT INTO humanresources.employeedepartmenthistory ( businessentityid,departmentid,shiftid,startdate) 
	values (business_entityid,department_e,shift_id,start_date);
 
 
 	IF person.businessentityid is NULL THEN 
	RAISE 'Employee % tidak bisa ditemukan' , business_entityid;
	end if ;

commit;
END;
$$

-- delete from person.person where businessentityid=291
-- delete from humanresources.employee where businessentityid=299
-- delete from humanresources.employeedepartmenthistory where businessentityid=292

call humanresources.CreateNewEmployee1
	(20778::int,'32243473'::varchar,'adventure-works\dany'::varchar,
	 'ProductionTeknik'::varchar,'1998-07-25'::date,'S'::char,
	 'M'::char,'2006-02-01'::date,16::int,1::smallint,'2020-03-12')
	 
	 
	 select*from person.person
	 order by businessentityid DESC
	 
	 