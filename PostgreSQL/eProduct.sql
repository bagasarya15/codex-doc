CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(100) NOT NULL,
	password text not null,
	createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
	updatedAt TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE customers (
	id SERIAL PRIMARY KEY,
	firstname varchar(100) not null,
	lastname varchar(100) not null,
	user_id integer references users(id),
	createdAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp
);


create table orders (
	id serial primary key,
	user_id integer references users(id),
	totalproduct integer not null,
	totalprice numeric not null,
	createdAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp
)

create table product_categories (
	id serial primary key,
	name varchar(100) not null,
	description varchar(200) not null,
	createdAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp
);

create table products (
	id serial primary key,
	name varchar(100) not null,
	description varchar(200) not null,
	category_id integer references product_categories(id),
	price numeric not null,
	image varchar(200),
	createdAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp
);

create table order_details (
	id serial primary key,
	order_id integer references orders(id),
	product_id integer references products(id),
	quantity integer not null,
	createdAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp
);