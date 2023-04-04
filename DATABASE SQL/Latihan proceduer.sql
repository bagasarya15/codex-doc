insert into humanresources.employee (
	businessentityid ,
	nationalidnumber ,
	loginid ,
	jobtitle ,
	birthdate ,
	maritalstatus,
	gender,
	hiredate,
	salariedflag,
	vacationhours,
	sickleavehours,
	currentflag,
	modifieddate,
	organizationnode) values (291,'32243473','adventure-works\bagas1','Production Teknik',
	'1998-07-25','S','M','2006-02-01','False',80,10,
	'True',CURRENT_TIMESTAMP,'/2/3/2/')
	
	delete from humanresources.employee where businessentityid=291
	select * from humanresources.employee
	
	call humanresources.CreateNewEmployee
	(291::int,'32243473'::varchar(15),'adventure-works\bagas1'::varchar(256),
	 'ProductionTeknik'::varchar(50),'1998-07-25'::date,'S'::char(1),
	 'M'::char(1),'2006-02-01'::date,False::boolean,80::int,10::int,True::boolean,
	 CURRENT_TIMESTAMP::timestamp,'/2/3/2/'::varchar(30))
	 
	 call humanresources.CreateNewEmployee
	(291,'32243473','adventure-works\bagas1',
	 'ProductionTeknik','1998-07-25','S',
	 'M','2006-02-01',False,80,10,True,
	 CURRENT_TIMESTAMP,'/2/3/2/')
	 
	
	
	
	CREATE OR REPLACE PROCEDURE HumanResources.CreateNewEmployee( 
	business_entityid HumanResources.employee.businessentityid%type,
	national_idnumber HumanResources.employee.nationalidnumber%type,
	login_id HumanResources.employee.loginid%type,
	job_title HumanResources.employee.jobtitle%type,
	birth_date HumanResources.employee.birthdate%type,
	marital_status HumanResources.employee.maritalstatus%type,
	gender_e HumanResources.employee.gender%type,
	hire_date HumanResources.employee.hiredate%type,
	salari_edflag HumanResources.employee.salariedflag%type,
	vacati_onhours HumanResources.employee.vacationhours%type,
	sick_leavehours HumanResources.employee.sickleavehours%type,
	current_flag HumanResources.employee.currentflag%type,
	modified_date HumanResources.employee.modifieddate%type,
	organization_node HumanResources.employee.organizationnode%type
)
	
	LANGUAGE plpgsql
	AS $$
	BEGIN
	INSERT INTO humanresources.employee (
	businessentityid,
	nationalidnumber ,
	loginid ,
	jobtitle ,
	birthdate ,
	maritalstatus,
	gender,
	hiredate,
	salariedflag,
	vacationhours,
	sickleavehours,
	currentflag,
	modifieddate,
	organizationnode )
	VALUES(
	CAST (business_entityid as int) ,
	CAST (national_idnumbervarchar as varchar) ,
	CAST (login_id as varchar) ,
	CAST (job_title as varchar) ,
	CAST (birth_date as date) ,
	CAST (marital_status as char) ,
	CAST (gender_e as char),
	CAST (hire_date as date),
	CAST (salari_edflag as boolean) ,
	CAST (vacati_onhours as int) ,
	CAST (sick_leavehours as int) ,
	CAST (current_flag as boolean),
	CAST (modified_date as timestamp),
	CAST (organization_node as varchar)
	);
commit;
END;
$$	
