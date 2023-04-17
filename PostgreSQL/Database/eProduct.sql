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
-- Name: insertdata(json); Type: PROCEDURE; Schema: public; Owner: postgres
--

CREATE PROCEDURE public.insertdata(IN data json)
    LANGUAGE plpgsql
    AS $$
DECLARE 
    new_user_id INT;
BEGIN
    WITH user_id AS (
        INSERT INTO public.users (username, password)
        SELECT username, password
        FROM json_to_recordset(data) customer (username VARCHAR, password TEXT)
        RETURNING id
    )
    SELECT id INTO new_user_id FROM user_id;
    
    INSERT INTO customer (firstname, lastname, user_id)
    SELECT firstname, lastname, new_user_id
    FROM json_to_recordset(data) customer (firstname VARCHAR, lastname VARCHAR, user_id INT);
END $$;


ALTER PROCEDURE public.insertdata(IN data json) OWNER TO postgres;

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
1	Bagas	Arya	1	2023-04-17 08:13:45.889797	2023-04-17 08:13:45.889797
3	Zufar	Codex	3	2023-04-17 08:37:41.856273	2023-04-17 08:37:41.856273
4	Dany	Shadiq	4	2023-04-17 02:04:33.32035	2023-04-17 02:04:33.32035
8	ikhsan	nur	11	2023-04-17 10:02:20.507375	2023-04-17 10:02:20.507375
9	ikhsan	jawa	12	2023-04-17 10:04:13.719171	2023-04-17 10:04:13.719171
10	bagas	arya	13	2023-04-17 05:11:45.673711	2023-04-17 05:11:45.673711
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
1	Indomie Goreng	Indomie Enak	1	3500	indomie.png	2023-04-16 12:48:56.245076	2023-04-16 12:48:56.245076
2	Susu Indomilk	Susu Rasa Vanila	2	2500	susu.png	2023-04-16 06:53:08.646713	2023-04-16 06:53:08.646713
6	Susu Indomilk	Susu botolan coklat enak	2	7000	image-1681705463148-106948403.jpg	2023-04-17 04:24:23.368755	2023-04-17 04:24:23.368755
7	Susu Indomilk2	Susu botolan coklat enak2	2	7000	image-1681705530821-562403546.jpg	2023-04-17 04:25:30.88631	2023-04-17 04:25:30.88631
8	Susu Indomilk2	Susu botolan coklat enak2	2	7000	image-1681705649771-375139399.jpg	2023-04-17 04:27:29.936366	2023-04-17 04:27:29.936366
\.


--
-- Data for Name: product_category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product_category (id, name, description, createdat, updateat) FROM stdin;
1	Makanan	Kategori Makanan	2023-04-15 11:47:40.613866	2023-04-15 11:47:40.613866
2	Minuman	Kategori Minuman	2023-04-15 11:48:15.469039	2023-04-15 11:48:15.469039
3	ATK	Kategori ATK	2023-04-15 11:48:15.469039	2023-04-15 11:48:15.469039
4	Sembako	Kategori Sembako	2023-04-15 11:48:15.469039	2023-04-15 11:48:15.469039
5	Testing	Testing	2023-04-15 05:17:13.023504	2023-04-15 05:17:13.023504
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, password, createdat, updateat) FROM stdin;
3	bagas-codex	$2b$10$Op7FN./.amOydOY7WFTCEeYgPD.B51C1g.lrDHEG83VganWmJ20ae	2023-04-15 06:04:40.907011	2023-04-15 06:04:40.907011
1	bagasarya150800	$2b$10$.09e4dduv4d.OfDrZbbtNOUBAz5OFVN3AWJYVEJO1vw0rNG4ooERe	2023-04-14 07:37:01.621522	2023-04-14 07:37:01.621522
4	admin	$2b$10$Toyk/Z3IdYH8El6nwd1bQOjCzVGTTRPzbIcMq5J7AwG0lGuyPlUOO	2023-04-17 02:03:40.095603	2023-04-17 02:03:40.095603
5	user	$2b$10$S7pifJBmKfb3JeVgbQrcVuZ9S9qvbv7MQ7S1AMuxi56kmDJnYSAvu	2023-04-17 02:05:16.952081	2023-04-17 02:05:16.952081
6	bagas-json	$2b$10$jsRAO7ixd2EgR1zmkBqXx.WaE8rqXQ.APgO13/7ZDrdSBbXPemZTy	2023-04-17 02:17:40.887012	2023-04-17 02:17:40.887012
11	ikhsan n	ikhsan123	2023-04-17 10:02:20.507375	2023-04-17 10:02:20.507375
12	ikhsan_jawa	ikhsan123	2023-04-17 10:04:13.719171	2023-04-17 10:04:13.719171
13	bagasarya_json	$2b$10$r7ksqUu/TEe/HAk2KwfHU.i0SFm3tHhafjeVEwXcoy7bnEvp1SbWa	2023-04-17 05:11:45.673711	2023-04-17 05:11:45.673711
\.


--
-- Name: customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customer_id_seq', 10, true);


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

SELECT pg_catalog.setval('public.product_category_id_seq', 6, true);


--
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_id_seq', 8, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 13, true);


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

