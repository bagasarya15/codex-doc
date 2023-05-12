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
        INSERT INTO public.users (username, password, role_id)
        SELECT x.username, x.password, x.role_id
        FROM json_to_recordset(data) x (username VARCHAR, password TEXT, role_id INTEGER)
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

--
-- Name: updateorder(json, json); Type: PROCEDURE; Schema: public; Owner: postgres
--

CREATE PROCEDURE public.updateorder(IN data json, IN data2 json)
    LANGUAGE plpgsql
    AS $$
declare
    rows record;
	r record;
	dt record;
begin
   begin 
      select * from json_to_recordset(data2) as y(id int, totalproduct int,totalprice int) into dt;
      update orders set totalproduct=dt.totalproduct, totalprice=dt.totalprice where id=dt.id returning id
	  into rows;     
    FOR r IN select * from json_to_recordset(data) as x(id int, quantity int)
    LOOP
      update order_detail set quantity=r.quantity where id=r.id;	  
	  if not found or rows is null then 
	     rollback;
	       raise 'Id tidak ditemukan';
	  else
         commit;
	  end if;
	 END LOOP;
	end;
end;
$$;


ALTER PROCEDURE public.updateorder(IN data json, IN data2 json) OWNER TO postgres;

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
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    description character varying(100)
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.roles_id_seq OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    password text NOT NULL,
    role_id integer,
    createdat timestamp without time zone DEFAULT now() NOT NULL,
    updatedat timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

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
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customer (id, firstname, lastname, user_id, createdat, updateat) FROM stdin;
1	Bagas	Arya P	1	2023-05-12 03:48:41.996018	2023-05-12 03:48:41.996018
2	Zufar	Abyan Handito	2	2023-05-12 03:54:34.631875	2023-05-12 03:54:34.631875
3	Dany	Codex	3	2023-05-12 04:04:25.541343	2023-05-12 04:04:25.541343
\.


--
-- Data for Name: order_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.order_detail (id, order_id, product_id, quantity, createdat, updateat) FROM stdin;
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, user_id, totalproduct, totalprice, createdat, updateat) FROM stdin;
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
49	Lemon Water	You C	2023-05-12 03:43:54.002351	2023-05-12 03:43:54.002351
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, name, description) FROM stdin;
1	admin	Role untuk admin
2	user	Role untuk users
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, password, role_id, createdat, updatedat) FROM stdin;
1	bagas	$2b$10$yEaqRTyS3bS3gzsMpSQSMuZMrkLt.pYoqX2.2pPcjkAxk/MMYn39G	1	2023-05-12 03:48:41.996018	2023-05-12 03:48:41.996018
2	zufar	$2b$10$ziBM/H9llUIRaEEcdw/8CunTkB0tDZmckXD4HS.Ai9ilzUQIofnb2	1	2023-05-12 03:54:34.631875	2023-05-12 03:54:34.631875
3	dany	$2b$10$ai5XUJBlDtBpK.UeGFP02eFKIbZLTuBLlloLnAS6kxnSCvq0XJLca	2	2023-05-12 04:04:25.541343	2023-05-12 04:04:25.541343
\.


--
-- Name: customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customer_id_seq', 3, true);


--
-- Name: order_detail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.order_detail_id_seq', 1, false);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_id_seq', 1, false);


--
-- Name: product_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_category_id_seq', 49, true);


--
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_id_seq', 24, true);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.roles_id_seq', 2, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


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
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


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
-- Name: product product_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.product_category(id);


--
-- Name: users users_role_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.roles(id);


--
-- PostgreSQL database dump complete
--

