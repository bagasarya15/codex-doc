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

truncate table users.users_address restart identity

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


