--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: insertdatausercustomer(json); Type: PROCEDURE; Schema: public; Owner: postgres
--

CREATE PROCEDURE public.insertdatausercustomer(IN data json)
    LANGUAGE plpgsql
    AS $$
DECLARE 
    new_user_id INT;
BEGIN
    WITH user_id AS (
        INSERT INTO public.users (username, password)
        SELECT x.username, x.password
        FROM json_to_recordset(data) x (username VARCHAR, password TEXT)
        RETURNING id
    )
    SELECT id INTO new_user_id FROM user_id;
    
    INSERT INTO customer (firstname, lastname, user_id)
    SELECT x.firstname, x.lastname, new_user_id
    FROM json_to_recordset(data) x (firstname VARCHAR, lastname VARCHAR, user_id INT);
END $$;


ALTER PROCEDURE public.insertdatausercustomer(IN data json) OWNER TO postgres;

--
-- Name: insertorders(json); Type: PROCEDURE; Schema: public; Owner: postgres
--

CREATE PROCEDURE public.insertorders(IN data json)
    LANGUAGE plpgsql
    AS $$
declare oDetailId int;

BEGIN
with orders_id as(
insert into public.orders(user_id,totalproduct,totalprice)
	select x.user_id,x.totalproduct,x.totalprice from json_to_recordset(data) x
	(
		user_id int,
	totalproduct int,
		totalprice int
	)
returning id)
select id into oDetailId from orders_id;

insert into order_detail(order_id,product_id,quantity) 
select oDetailId,x.product_id,x.quantity from json_to_recordset(data) x
(
order_id int,
	product_id int,
	quantity int
);

END
$$;


ALTER PROCEDURE public.insertorders(IN data json) OWNER TO postgres;

--
-- Name: insertordersp(json, json); Type: PROCEDURE; Schema: public; Owner: postgres
--

CREATE PROCEDURE public.insertordersp(IN data1 json, IN data2 json)
    LANGUAGE plpgsql
    AS $$
declare new_order_id int;

BEGIN
with order_id as(
insert into public.orders(user_id,totalproduct,totalprice)
	select x.user_id, x.totalproduct, x.totalprice from json_to_recordset(data1) x
	(
		user_id int, totalproduct int, totalprice int
	)
returning id)
select id into new_order_id from order_id;

insert into order_detail(order_id, product_id, quantity) 
select new_order_id, x.product_id, x.quantity from json_to_recordset(data2) x
(
	order_id int, product_id int,quantity int
);

END
$$;


ALTER PROCEDURE public.insertordersp(IN data1 json, IN data2 json) OWNER TO postgres;

--
-- Name: insertorderxdetail(json, json); Type: PROCEDURE; Schema: public; Owner: postgres
--

CREATE PROCEDURE public.insertorderxdetail(IN data1 json, IN data2 json)
    LANGUAGE plpgsql
    AS $$
declare new_order_id int;

BEGIN
with order_id as(
insert into public.orders(user_id,totalproduct,totalprice)
	select x.user_id, x.totalproduct, x.totalprice from json_to_recordset(data1) x
	(
		user_id int, totalproduct int, totalprice int
	)
returning id)
select id into new_order_id from order_id;

insert into order_detail(order_id, product_id, quantity) 
select new_order_id, x.product_id, x.quantity from json_to_recordset(data2) x
(
	order_id int, product_id int,quantity int
);

END
$$;


ALTER PROCEDURE public.insertorderxdetail(IN data1 json, IN data2 json) OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: customer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customer (
    id integer NOT NULL,
    firstname character varying(100) NOT NULL,
    lastname character varying(100) NOT NULL,
    user_id integer NOT NULL,
    createdat timestamp without time zone DEFAULT now() NOT NULL,
    updateat timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.customer OWNER TO postgres;

--
-- Name: customer_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.customer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.customer_id_seq OWNER TO postgres;

--
-- Name: customer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.customer_id_seq OWNED BY public.customer.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(100) NOT NULL,
    password text NOT NULL,
    createdat timestamp without time zone DEFAULT now() NOT NULL,
    updateat timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: customerxusers; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.customerxusers AS
 SELECT users.username,
    customer.firstname,
    customer.lastname
   FROM (public.customer
     JOIN public.users ON ((customer.user_id = users.id)));


ALTER TABLE public.customerxusers OWNER TO postgres;

--
-- Name: order_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.order_detail (
    id integer NOT NULL,
    order_id integer,
    product_id integer,
    quantity integer NOT NULL,
    createdat timestamp without time zone DEFAULT now() NOT NULL,
    updateat timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.order_detail OWNER TO postgres;

--
-- Name: order_detail_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.order_detail_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_detail_id_seq OWNER TO postgres;

--
-- Name: order_detail_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.order_detail_id_seq OWNED BY public.order_detail.id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    user_id integer NOT NULL,
    totalproduct integer NOT NULL,
    totalprice numeric NOT NULL,
    createdat timestamp without time zone DEFAULT now() NOT NULL,
    updateat timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    description character varying(200),
    category_id integer NOT NULL,
    price numeric NOT NULL,
    image character varying(200) NOT NULL,
    createdat timestamp without time zone DEFAULT now() NOT NULL,
    updateat timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.product OWNER TO postgres;

--
-- Name: product_category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product_category (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    description character varying(200),
    createdat timestamp without time zone DEFAULT now() NOT NULL,
    updateat timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.product_category OWNER TO postgres;

--
-- Name: product_category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.product_category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_category_id_seq OWNER TO postgres;

--
-- Name: product_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_category_id_seq OWNED BY public.product_category.id;


--
-- Name: product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_id_seq OWNER TO postgres;

--
-- Name: product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;


--
-- Name: selectusercustomer; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.selectusercustomer AS
 SELECT users.id,
    users.username,
    users.password,
    customer.firstname,
    customer.lastname
   FROM (public.users
     JOIN public.customer ON ((customer.user_id = users.id)));


ALTER TABLE public.selectusercustomer OWNER TO postgres;

--
-- Name: selectview; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.selectview AS
 SELECT users.id,
    users.username,
    customer.firstname,
    customer.lastname,
    product.name AS nama_product,
    product_category.name AS category,
    orders.totalproduct,
    orders.totalprice,
    order_detail.quantity
   FROM (((((public.users
     JOIN public.customer ON ((customer.user_id = users.id)))
     JOIN public.orders ON ((orders.user_id = users.id)))
     JOIN public.order_detail ON ((order_detail.order_id = orders.id)))
     JOIN public.product ON ((order_detail.product_id = product.id)))
     JOIN public.product_category ON ((product.category_id = product.id)));


ALTER TABLE public.selectview OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: customer id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer ALTER COLUMN id SET DEFAULT nextval('public.customer_id_seq'::regclass);


--
-- Name: order_detail id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_detail ALTER COLUMN id SET DEFAULT nextval('public.order_detail_id_seq'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Name: product id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);


--
-- Name: product_category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_category ALTER COLUMN id SET DEFAULT nextval('public.product_category_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customer (id, firstname, lastname, user_id, createdat, updateat) FROM stdin;
1	Admin	01	1	2023-05-03 13:38:23.928435	2023-05-03 13:38:23.928435
2	Sub	Admin	2	2023-05-03 13:43:52.912801	2023-05-03 13:43:52.912801
3	Bagas	Arya	3	2023-05-03 13:44:33.782216	2023-05-03 13:44:33.782216
4	Dany	Codex	4	2023-05-03 13:44:45.090718	2023-05-03 13:44:45.090718
5	Zufar	Codex	5	2023-05-03 13:44:55.825848	2023-05-03 13:44:55.825848
6	Ikhsan	Codex	6	2023-05-03 13:45:04.557543	2023-05-03 13:45:04.557543
7	User	01	7	2023-05-03 13:45:15.015722	2023-05-03 13:45:15.015722
8	User	02	8	2023-05-03 13:45:27.940324	2023-05-03 13:45:27.940324
9	User	03	9	2023-05-03 13:45:33.381052	2023-05-03 13:45:33.381052
10	User	04	10	2023-05-03 13:45:44.236565	2023-05-03 13:45:44.236565
11	User	05	11	2023-05-03 13:45:54.633267	2023-05-03 13:45:54.633267
12	Bagas	Codex	12	2023-05-05 02:58:46.301014	2023-05-05 02:58:46.301014
\.


--
-- Data for Name: order_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.order_detail (id, order_id, product_id, quantity, createdat, updateat) FROM stdin;
1	1	1	2	2023-05-08 02:24:55.156992	2023-05-08 02:24:55.156992
2	1	2	1	2023-05-08 02:24:55.156992	2023-05-08 02:24:55.156992
3	3	1	2	2023-05-08 10:00:38.577607	2023-05-08 10:00:38.577607
4	3	2	1	2023-05-08 10:00:38.577607	2023-05-08 10:00:38.577607
5	4	3	2	2023-05-10 07:05:32.762833	2023-05-10 07:05:32.762833
6	4	2	2	2023-05-10 07:05:32.762833	2023-05-10 07:05:32.762833
7	5	3	2	2023-05-10 15:01:30.481658	2023-05-10 15:01:30.481658
8	5	2	2	2023-05-10 15:01:30.481658	2023-05-10 15:01:30.481658
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, user_id, totalproduct, totalprice, createdat, updateat) FROM stdin;
1	3	3	14000	2023-05-08 02:24:55.156992	2023-05-08 02:24:55.156992
3	3	3	14000	2023-05-08 10:00:38.577607	2023-05-08 10:00:38.577607
4	3	4	24000	2023-05-10 07:05:32.762833	2023-05-10 07:05:32.762833
5	3	4	24000	2023-05-10 15:01:30.481658	2023-05-10 15:01:30.481658
\.


--
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product (id, name, description, category_id, price, image, createdat, updateat) FROM stdin;
1	Indomie	Indomie	1	3500	1683511155325-indomie.jpeg	2023-05-08 01:59:15.581947	2023-05-08 01:59:15.581947
2	Susu Coklat	Susu UHT	2	7000	1683511180656-ultra-ck-250.jpg	2023-05-08 01:59:40.742965	2023-05-08 01:59:40.742965
4	Segitiga Biru	Tepung	4	15000	1683511258852-tepung.jpg	2023-05-08 02:00:58.923782	2023-05-08 02:00:58.923782
5	Robot PowerBank	Power Bank	5	185000	1683511293393-powerbank.jpg	2023-05-08 02:01:33.475978	2023-05-08 02:01:33.475978
6	Tongsis	Tongsis Murah	6	10000	1683511342285-tongsis.jpg	2023-05-08 02:02:22.349796	2023-05-08 02:02:22.349796
7	Hiasan Dinding	Hiasan Untuk Dinding	7	20000	1683511378247-stiker-dinding.jpg	2023-05-08 02:02:58.325105	2023-05-08 02:02:58.325105
8	Filter Udara Vario	Sparepat Motor	8	70000	1683511416139-filter-vario.jpg	2023-05-08 02:03:36.222876	2023-05-08 02:03:36.222876
9	Sabun Kahf	Sabun Perawatan Wajah	9	35000	1683511689492-sabun.jpg	2023-05-08 02:08:09.737157	2023-05-08 02:08:09.737157
10	Jaket	Jaket	1	120000	1683511743055-swepo.jpg	2023-05-08 02:08:30.121396	2023-05-08 02:08:30.121396
3	Faster	Pulpen	3	5000	1683511767449-pulpen.jpg	2023-05-08 02:00:20.474138	2023-05-08 02:00:20.474138
22	Kucing	Kocheng	3	5000	1683792015518-civic.jpg	2023-05-11 07:59:42.364624	2023-05-11 07:59:42.364624
\.


--
-- Data for Name: product_category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product_category (id, name, description, createdat, updateat) FROM stdin;
1	Makanan	Kategori Makanan	2023-05-03 13:49:45.668632	2023-05-03 13:49:45.668632
2	Minuman	Kategori Minuman	2023-05-03 13:51:31.703791	2023-05-03 13:51:31.703791
3	ATK	Kategori ATK	2023-05-03 13:51:44.768904	2023-05-03 13:51:44.768904
4	Sembako	Kategori Sembako	2023-05-03 13:51:59.113302	2023-05-03 13:51:59.113302
5	Elektronik	Kategori Elektronik	2023-05-03 13:52:16.895328	2023-05-03 13:52:16.895328
6	Aksesoris	Kategori Aksesoris	2023-05-03 13:52:26.528026	2023-05-03 13:52:26.528026
7	Furniture	Kategori Aksesoris Kamar	2023-05-03 14:14:05.073203	2023-05-03 14:14:05.073203
8	Suku Cadang	Kategori Suku Cadang	2023-05-03 14:18:22.713397	2023-05-03 14:18:22.713397
9	Perawatan Wajah	Kategori Perawatan Wajah	2023-05-03 14:18:47.977458	2023-05-03 14:18:47.977458
10	Fashion	Kategori Fashion	2023-05-03 14:19:23.856258	2023-05-03 14:19:23.856258
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, password, createdat, updateat) FROM stdin;
1	admin	$2b$10$lEIugV9tnPw.Vl6vtdkZO.k5m4IDXkNqFvXuBL02KjYA7pJGu3ply	2023-05-03 13:38:23.928435	2023-05-03 13:38:23.928435
2	sub-admin	$2b$10$JaDkwtf3g82vNweVhx9xlefMqo5yWibnDllviKjmrIhAXGj3MoUpq	2023-05-03 13:43:52.912801	2023-05-03 13:43:52.912801
3	bagas	$2b$10$GwSKMPXVAQwbcvsky/4TvOXy8ZMK6ZhJKvMGzdJFGfXIgKQ1mzbGW	2023-05-03 13:44:33.782216	2023-05-03 13:44:33.782216
4	dany	$2b$10$MrSKbq7y/hwvtVlq/vxzuuCAlt.M2AHXqQ74Q9dmKSgSxtRNhGscq	2023-05-03 13:44:45.090718	2023-05-03 13:44:45.090718
5	zufar	$2b$10$c3/I8dOqdViac4W7PQzfoOwkOyeCF586Rdw1ylIrNTeu2L4o4iU4O	2023-05-03 13:44:55.825848	2023-05-03 13:44:55.825848
6	ikhsan	$2b$10$KmssUguLrlxioUZnblTRy.lhTzqexmfBX1Ub0J88AeTsgfzWxLece	2023-05-03 13:45:04.557543	2023-05-03 13:45:04.557543
7	user1	$2b$10$Xrv5EEQcYT5I1ktT8ABjmOBo0/0AB3KdW4Vu25c2bMzYhlKLich5q	2023-05-03 13:45:15.015722	2023-05-03 13:45:15.015722
8	user2	$2b$10$o398m9ZLcscBt/dCrYLDgeA7ZezcqE0PkttK/35GnrUrm.KAfzaQK	2023-05-03 13:45:27.940324	2023-05-03 13:45:27.940324
11	user3	$2b$10$sXkpah3WEmlUw9kcfGLfzu.r/cWAOCjv1m8CqXEGOmcA3ZLjxLlI6	2023-05-03 13:45:54.633267	2023-05-03 13:45:54.633267
9	user4	$2b$10$hqK91DNH6n56SUVKWN1ZzOxESETrK96KI0XlikPkoK10XukmYeNOu	2023-05-03 13:45:33.381052	2023-05-03 13:45:33.381052
10	user5	$2b$10$vwsuexTlNxW6uFWukPJ1uu9elJsIz5fOxYgzyZpCSfug/fLa20W7.	2023-05-03 13:45:44.236565	2023-05-03 13:45:44.236565
12	mozarela	$2b$10$.5CLMHnhvDp45sQ2XXf1jeS6I.4DSl.GrTu645XwZOPLZKOkp.8Ne	2023-05-05 02:58:46.288362	2023-05-05 02:58:46.288362
\.


--
-- Name: customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customer_id_seq', 25, true);


--
-- Name: order_detail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.order_detail_id_seq', 8, true);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_id_seq', 5, true);


--
-- Name: product_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_category_id_seq', 45, true);


--
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_id_seq', 24, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 33, true);


--
-- Name: customer customer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (id);


--
-- Name: order_detail order_detail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_detail
    ADD CONSTRAINT order_detail_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: product_category product_category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_category
    ADD CONSTRAINT product_category_pkey PRIMARY KEY (id);


--
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: customer customer_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: order_detail order_detail_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_detail
    ADD CONSTRAINT order_detail_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id);


--
-- Name: order_detail order_detail_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_detail
    ADD CONSTRAINT order_detail_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id);


--
-- Name: orders orders_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: product product_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.product_category(id);


--
-- PostgreSQL database dump complete
--

