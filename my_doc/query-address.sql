CREATE OR REPLACE PROCEDURE users.add_address (
    IN first_address VARCHAR,
    IN second_address VARCHAR,
    IN code_pos VARCHAR,
	IN city_id INT,
	IN user_id INT,
    IN address_type_id INT
)
LANGUAGE plpgsql
AS
$$
DECLARE 
    new_address_id INT;
BEGIN
    INSERT INTO master.address(addr_line1, addr_line2, addr_postal_code, addr_city_id)
	VALUES(first_address, second_address, code_pos, city_id)
    RETURNING addr_id INTO new_address_id;
	
	INSERT INTO users.users_address(etad_addr_id, etad_entity_id, etad_adty_id)
	VALUES (new_address_id, user_id, address_type_id);
END;
$$;

call users.add_address('Jalan Depok 1', 'Test', '16439', 1, 2, 1)


select * from users.users
select * from master.city
select * from master.address_type
select * from master.address
select * from users.users_address
select * from users.users_education
select * from users.business_entity
select * from users.users_experiences
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


