create or replace function get_employee3(searchstr text)
returns table(
	 nationalidnumber varchar,
	 firstname person.person.firstname%type,
	 lastname person.person.lastname%type,
	 email person.emailaddress.emailaddress%type,
	 phonenumber person.personphone.phonenumber%type,
	 jobtitle humanresources.employee.jobtitle%type,
	 birthdate text,
	 hiredate text,
	 department humanresources.department.name%type
)
language plpgsql
as
$$
begin
return query
	SELECT humanresources.employee.nationalidnumber,
           person.person.firstname,
		   person.person.lastname,
		   person.emailaddress.emailaddress,
		   person.personphone.phonenumber,
           humanresources.employee.jobtitle,
           to_char(humanresources.employee.birthdate,'dd-mm-yyyy'),
           to_char(humanresources.employee.hiredate, 'dd-mm-yyyy'),
		   humanresources.department.name
	--into nationalidnumber,firstname,lastname,email,phonenumber,jobtitle,birthdate,hiredate,department
    FROM humanresources.employee
	JOIN person.person ON humanresources.employee.businessentityid = person.person.businessentityid
	JOIN humanresources.employeedepartmenthistory ON humanresources.employee.businessentityid = humanresources.employeedepartmenthistory.businessentityid
    JOIN humanresources.department ON humanresources.employeedepartmenthistory.departmentid = humanresources.department.departmentid
	JOIN person.personphone ON humanresources.employee.businessentityid = person.personphone.businessentityid
	JOIN person.emailaddress ON humanresources.employee.businessentityid = person.emailaddress.businessentityid
	where humanresources.employee.nationalidnumber ilike ('%'||searchstr||'%') or person.person.firstname ilike ('%'||searchstr||'%') or person.person.lastname ilike ('%'||searchstr||'%') 
	or person.emailaddress.emailaddress ilike ('%'||searchstr||'%') or person.personphone.phonenumber ilike ('%'||searchstr||'%') or humanresources.employee.jobtitle ilike ('%'||searchstr||'%') 
	or to_char(humanresources.employee.birthdate,'dd-mm-yyyy') ilike ('%'||searchstr||'%') or to_char(humanresources.employee.hiredate, 'dd-mm-yyyy') ilike ('%'||searchstr||'%') or humanresources.department.name ilike ('%'||searchstr||'%');
end;
$$;


select * from get_employee3('05-12');
drop function get_employee3;

select * from humanresources.employee;


select * from person.emailaddress;







