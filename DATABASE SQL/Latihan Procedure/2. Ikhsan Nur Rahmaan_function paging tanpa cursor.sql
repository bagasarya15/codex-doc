CREATE OR REPLACE FUNCTION get_paging_record(page INT,limit_page INT)
RETURNS TABLE (
	nationalidnumber 	varchar,
    firstname			person.person.firstname%TYPE,
	lastname			person.person.lastname%TYPE,
	email				person.emailaddress.emailaddress%TYPE,
	phonecall			person.personphone.phonenumber%TYPE,
    jobtitle			humanresources.employee.jobtitle%TYPE,
    birthdate			text,
    hiredate			text,
	department			humanresources.department.name%TYPE) 
	LANGUAGE plpgsql AS $$
--DECLARE
    --total_rows INT;
BEGIN
    RETURN QUERY
    SELECT humanresources.employee.nationalidnumber,
           person.person.firstname,
		   person.person.lastname,
		   person.emailaddress.emailaddress,
		   person.personphone.phonenumber,
           humanresources.employee.jobtitle,
           to_char(humanresources.employee.birthdate,'dd-mm-yyyy'),
           to_char(humanresources.employee.hiredate,'dd-mm-yyyy'),
		   humanresources.department.name
    FROM humanresources.employee
	JOIN person.person ON humanresources.employee.businessentityid = person.person.businessentityid
	JOIN person.personphone ON humanresources.employee.businessentityid = person.personphone.businessentityid
	JOIN person.emailaddress ON humanresources.employee.businessentityid = person.emailaddress.businessentityid
	JOIN humanresources.employeedepartmenthistory ON humanresources.employee.businessentityid = humanresources.employeedepartmenthistory.businessentityid
    JOIN humanresources.department ON humanresources.employeedepartmenthistory.departmentid = humanresources.department.departmentid
	WHERE humanresources.employee.businessentityid > (page - 1) * limit_page AND humanresources.employeedepartmenthistory.enddate IS NULL
	LIMIT limit_page;
	
	IF NOT FOUND THEN
	RAISE 'Halaman % tidak ditemukan', page;
	END IF;
END;
$$;

SELECT * FROM humanresources.employeedepartmenthistory; -- INI businessentityid 4 dll ada 2 hasil karena pindah nama departement (ada karyawan yang pindah department)
SELECT * from humanresources.employee;
DROP FUNCTION get_paging_record(page int,limit_page int);
SELECT * FROM get_paging_record(1,20);

	--CARA LAIN
	--IF page > total_rows/10 AND total_rows< (page*10)-1 THEN
	--		RAISE 'Halaman % tidak ditemukan', page;
	--END IF;

	--CARA LAIN COUNT PAGE (taruh diatas Return Query)
    --SELECT COUNT(humanresources.employee.businessentityid) INTO total_rows FROM humanresources.employee;