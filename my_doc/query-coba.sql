select * from users.users
select * from users.roles
select * from master.city
select * from master.address_type
select * from master.address
select * from users.users_address
select * from users.users_education
select * from users.business_entity
select * from users.users_experiences
select * from users.users
select * from users.users_roles
select * from users.users_media
select * from users.users_phones

truncate table users.users_media restart identity


select users.user_entity_id, users.user_name, users.user_current_role, users_roles.usro_entity_id, users_roles.usro_role_id
from users.users JOIN users.users_roles ON users.user_entity_id = users_roles.usro_entity_id

truncate table users.business_entity restart identity cascade

INSERT INTO users.users_experiences(usex_entity_id, usex_title) values (2, 'Sarjana Komedi')
select users.user_name, users_experiences.usex_title from users.users join users.users_experiences
on users.user_entity_id = users_experiences.usex_entity_id

INSERT INTO users.users_education(usdu_entity_id, usdu_school, usdu_degree, usdu_field_study, usdu_start_date, usdu_end_date, usdu_grade, usdu_activities, usdu_description) 
VALUES (2, 'Unindra', 'Bachelor', 'Informatics Engineering', '2018-06-06', '2022-08-15', '3.42', 'Saya suka ngoding', 'saya suka ngoding tapi kalo error males');
select users.user_name, users_education.usdu_school FROM users.users JOIN users.users_education
ON users.user_entity_id = users_education.usdu_entity_id 

select * from users.users join users.users_education on usdu_entity_id = user_entity_id

truncate table users.users_education restart identity

truncate table master.address restart identity cascade

ALTER TABLE users.users_address
ADD CONSTRAINT fk_etad_addr_id
FOREIGN KEY (etad_addr_id)
REFERENCES master.address (addr_id)
ON DELETE CASCADE ON UPDATE CASCADE

CREATE TABLE users.users_address(
	etad_addr_id INTEGER REFERENCES master.address(addr_id),
	etad_modified_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	etad_entity_id INTEGER REFERENCES users.users(user_entity_id),
	etad_adty_id INTEGER REFERENCES master.address_type(adty_id),
	PRIMARY KEY(etad_addr_id)
)

SELECT * FROM master.skill_type
insert into master.skill_type values('mysql'), ('php'), ('postgresql')
select * from users.users_skill

insert into users.users_skill(uski_entity_id, uski_skty_name) values (2, 'javascript')

call users.apply_jobs(9, 'hendri', 'prasmono', 'test-photo.jpg','codex academy university', 'Diploma', 'd3 informatika', '08127', 'mycv.pdf', 'pdf', 7 )
CREATE OR REPLACE PROCEDURE users.apply_jobs (
    IN user_id INT,
    IN firstname VARCHAR,
    IN lastname VARCHAR,
	IN userphoto VARCHAR,
    IN user_school VARCHAR,
    IN user_degree VARCHAR,
    IN user_field_study VARCHAR,
	IN user_phone_number VARCHAR,
	IN filename VARCHAR,
	IN filetype VARCHAR,
	IN role_id INT
)
LANGUAGE plpgsql
AS
$$
DECLARE
    update_role INT;
BEGIN
    UPDATE users.users_education
    SET usdu_school = user_school,
		usdu_degree = user_degree,
		usdu_field_study = user_field_study
    WHERE usdu_entity_id = user_id;
	
	UPDATE users.users_phones 
	SET uspo_number = user_phone_number 
	WHERE uspo_entity_id = user_id;
	
	UPDATE users.users_media
	SET usme_filename = filename,
		usme_filetype = filetype 
	WHERE usme_entity_id = user_id;
	
	UPDATE users.users_roles
	SET usro_role_id = role_id
	WHERE usro_entity_id = user_id
	RETURNING usro_role_id INTO update_role;
	
	UPDATE users.users
    SET user_first_name = firstname,
        user_last_name = lastname,
		user_photo = userphoto,
		user_current_role = update_role
    WHERE user_entity_id = user_id;
    
END;
$$;
