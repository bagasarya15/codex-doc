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
-- Name: sex_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.sex_type AS ENUM (
    'M',
    'F'
);


ALTER TYPE public.sex_type OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: customer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customer (
    first_name character varying(30) NOT NULL,
    last_name character varying(30) NOT NULL,
    email character varying(60) NOT NULL,
    company character varying(60),
    street character varying(50) NOT NULL,
    city character varying(40) NOT NULL,
    state character(2) DEFAULT 'PA'::bpchar NOT NULL,
    zip integer NOT NULL,
    phone character varying(20) NOT NULL,
    birth_date date,
    sex public.sex_type NOT NULL,
    date_entered timestamp without time zone NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.customer OWNER TO postgres;

--
-- Name: customerwithcursor(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.customerwithcursor() RETURNS SETOF public.customer
    LANGUAGE plpgsql
    AS $$
DECLARE 
	cursor_customer CURSOR FOR
				SELECT * FROM customer ORDER BY id ASC ;
BEGIN
	OPEN cursor_customer;
	
	RETURN QUERY
		FETCH 10 FROM cursor_customer;
	CLOSE cursor_customer;
END;
$$;


ALTER FUNCTION public.customerwithcursor() OWNER TO postgres;

--
-- Name: product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product (
    type_id integer,
    name character varying(30) NOT NULL,
    supplier character varying(30) NOT NULL,
    description text NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.product OWNER TO postgres;

--
-- Name: get_allproduk(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.get_allproduk() RETURNS SETOF public.product
    LANGUAGE plpgsql
    AS $$
DECLARE
	name_product product;
BEGIN	
	RETURN QUERY
	SELECT * FROM product;
END;
$$;


ALTER FUNCTION public.get_allproduk() OWNER TO postgres;

--
-- Name: get_allstate(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.get_allstate() RETURNS TABLE(state character varying, total bigint)
    LANGUAGE plpgsql
    AS $$
DECLARE 
	var_r record;
BEGIN
	FOR var_r IN (
		SELECT 
			customer.state AS state,
			COUNT(customer.id) AS total
		FROM 
			customer
		GROUP BY customer.state
	) loop
	state := var_r.state;
	total := var_r.total;
		return next;
	end loop;
END;
$$;


ALTER FUNCTION public.get_allstate() OWNER TO postgres;

--
-- Name: get_customer(date); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.get_customer(date_enter date) RETURNS text
    LANGUAGE plpgsql
    AS $$
DECLARE 
	full_name text default '';
	rec_cus record;
	cur_customer CURSOR(date_entered DATE)
		FOR SELECT CONCAT(first_name, ' ',last_name) AS full_name,
		date_entered 
		FROM customer
		WHERE EXTRACT(YEAR FROM date_entered) = date_enter;
BEGIN
	OPEN cur_customer(date_enter);
	LOOP 
		FETCH cur_customer INTO rec_cus;
	EXIT WHEN NOT FOUND;
	
	IF rec_cus.full_name LIKE '%ful%' THEN
		full_name := full_name || ','|| rec_cus.full_name || ':'|| rec_cus.date_enter;
	END IF;
END LOOP;

CLOSE cur_customer;
RETURN full_name;
END;
$$;


ALTER FUNCTION public.get_customer(date_enter date) OWNER TO postgres;

--
-- Name: get_customer(integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.get_customer(date_enter integer) RETURNS text
    LANGUAGE plpgsql
    AS $$
DECLARE 
	full_name text default '';
	rec_cus record;
	cur_customer CURSOR(date_enter INT)
		FOR SELECT CONCAT(first_name, ' ',last_name) AS full_name,
		date_entered 
		FROM customer
		WHERE EXTRACT(YEAR FROM date_entered) = date_enter;
BEGIN
	OPEN cur_customer(date_enter);
	LOOP 
		FETCH cur_customer INTO rec_cus;
	EXIT WHEN NOT FOUND;
	
		full_name := full_name ||' , '|| rec_cus.full_name ||' : '|| rec_cus.date_entered;
END LOOP;

CLOSE cur_customer;
RETURN full_name;
END;
$$;


ALTER FUNCTION public.get_customer(date_enter integer) OWNER TO postgres;

--
-- Name: get_datapurchase(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.get_datapurchase() RETURNS TABLE(purchase_order_number bigint, company character varying, quantity integer, supplier character varying, name character varying, price numeric, total numeric, sales_person text)
    LANGUAGE plpgsql
    AS $$
BEGIN
	RETURN QUERY
	SELECT 
		sales_order.purchase_order_number,
		customer.company,
		sales_item.quantity,
		product.supplier,
		product.name,
		item.price,
		(sales_item.quantity * item.price ) AS total,
		CONCAT(sales_person.first_name, ' ',sales_person.last_name) AS sales_person
	FROM 
		sales_order 
		JOIN customer ON sales_order.cust_id = customer.id
		JOIN sales_item ON sales_item.sales_order_id = sales_order.id
		JOIN item ON item.id = sales_item.item_id
		JOIN sales_person ON sales_person.id = sales_order.sales_person_id
		JOIN product ON product.id = item.product_id
	ORDER BY purchase_order_number;
END;
$$;


ALTER FUNCTION public.get_datapurchase() OWNER TO postgres;

--
-- Name: get_datapurchase_uppercase(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.get_datapurchase_uppercase() RETURNS TABLE(purchase_order_number bigint, company character varying, quantity integer, supplier character varying, name character varying, price numeric, total numeric, sales_person text)
    LANGUAGE plpgsql
    AS $$
DECLARE 
	var_r record;
BEGIN
	FOR var_r IN (
		SELECT 
			sales_order.purchase_order_number AS purchase_order_number,
			customer.company AS company,
			sales_item.quantity AS quantity,
			product.supplier AS supplier,
			product.name AS name,
			item.price AS price,
			(sales_item.quantity * item.price ) AS total,
			CONCAT(sales_person.first_name, ' ',sales_person.last_name) AS sales_person
		FROM 
			sales_order 
			JOIN customer ON sales_order.cust_id = customer.id
			JOIN sales_item ON sales_item.sales_order_id = sales_order.id
			JOIN item ON item.id = sales_item.item_id
			JOIN sales_person ON sales_person.id = sales_order.sales_person_id
			JOIN product ON product.id = item.product_id
		ORDER BY purchase_order_number
	) loop
	purchase_order_number := var_r.purchase_order_number;
	company := UPPER(var_r.company);
	quantity := var_r.quantity;
	supplier := var_r.supplier;
	name := var_r.name;
	price := var_r.price;
	total := var_r.total;
	sales_person := var_r.sales_person;
		return next;
	end loop;
END;
$$;


ALTER FUNCTION public.get_datapurchase_uppercase() OWNER TO postgres;

--
-- Name: get_product_byid(integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.get_product_byid(productid integer, OUT productname character varying) RETURNS character varying
    LANGUAGE plpgsql
    AS $$
BEGIN
	SELECT name INTO productName
	FROM product
	WHERE id = productId;
	IF NOT FOUND THEN
		RAISE 'Id % Produk tidak ditemukan',productId;
	END IF;
		
END;
$$;


ALTER FUNCTION public.get_product_byid(productid integer, OUT productname character varying) OWNER TO postgres;

--
-- Name: get_productstat(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.get_productstat(OUT min_len integer, OUT max_len integer, OUT avg_len numeric) RETURNS record
    LANGUAGE plpgsql
    AS $$
BEGIN 
	SELECT min(price),
		   max(price),
		   avg(price)::numeric(5,2)
    INTO min_len, max_len, avg_len
	FROM item;
END;
$$;


ALTER FUNCTION public.get_productstat(OUT min_len integer, OUT max_len integer, OUT avg_len numeric) OWNER TO postgres;

--
-- Name: get_productstat(integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.get_productstat(productid integer, OUT min_len integer, OUT max_len integer, OUT avg_len numeric) RETURNS record
    LANGUAGE plpgsql
    AS $$
BEGIN 
	SELECT min(price),
		   max(price),
		   avg(price)::numeric(5,2)
    INTO min_len, max_len, avg_len
	FROM item
	WHERE product_id = productId;
	
	IF NOT FOUND THEN
		RAISE 'Product with id % not found',productId;
	END IF;
END;
$$;


ALTER FUNCTION public.get_productstat(productid integer, OUT min_len integer, OUT max_len integer, OUT avg_len numeric) OWNER TO postgres;

--
-- Name: get_productstat_byid(integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.get_productstat_byid(productid integer, OUT min_len integer, OUT max_len integer, OUT avg_len numeric) RETURNS record
    LANGUAGE plpgsql
    AS $$
BEGIN 
	SELECT min(price),
		   max(price),
		   avg(price)::numeric(5,2)
    INTO min_len, max_len, avg_len
	FROM item
	WHERE product_id = productId;
	
	IF NOT FOUND THEN
		RAISE 'Product with id % not found',productId;
	END IF;
END;
$$;


ALTER FUNCTION public.get_productstat_byid(productid integer, OUT min_len integer, OUT max_len integer, OUT avg_len numeric) OWNER TO postgres;

--
-- Name: get_produk(integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.get_produk(productid integer) RETURNS character varying
    LANGUAGE plpgsql
    AS $$
DECLARE
	name_product product.name%type;
BEGIN	
	SELECT name INTO name_product
	FROM product
	WHERE id=productId;
	
	IF NOT FOUND THEN
		RAISE 'Product with id % not found',productId;
	END IF;
	RETURN name_product;
END;
$$;


ALTER FUNCTION public.get_produk(productid integer) OWNER TO postgres;

--
-- Name: getallstate_cursor(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.getallstate_cursor() RETURNS TABLE(state_cus character, count_id bigint)
    LANGUAGE plpgsql
    AS $$
DECLARE 
	cursor_cus  CURSOR FOR
				SELECT state, COUNT(id) AS count_id FROM customer GROUP BY state;
BEGIN
	OPEN cursor_cus;
	
	RETURN QUERY
		FETCH ALL FROM cursor_cus;
	CLOSE cursor_cus;
END;
$$;


ALTER FUNCTION public.getallstate_cursor() OWNER TO postgres;

--
-- Name: item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item (
    product_id integer,
    size integer NOT NULL,
    color character varying(30) NOT NULL,
    picture character varying(256) NOT NULL,
    price numeric(6,2) NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.item OWNER TO postgres;

--
-- Name: item_cursor(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.item_cursor() RETURNS SETOF public.item
    LANGUAGE plpgsql
    AS $$
DECLARE 
	cursor_item CURSOR FOR
				SELECT * FROM item ORDER BY id
				OFFSET 10;
BEGIN
	OPEN cursor_item;
	
	RETURN QUERY
		FETCH 10 FROM cursor_item;
	CLOSE cursor_item;
END;
$$;


ALTER FUNCTION public.item_cursor() OWNER TO postgres;

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
-- Name: sales_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sales_item (
    item_id integer,
    sales_order_id integer,
    quantity integer NOT NULL,
    discount numeric(3,2) DEFAULT 0,
    taxable boolean DEFAULT false NOT NULL,
    sales_tax_rate numeric(5,2) DEFAULT 0 NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.sales_item OWNER TO postgres;

--
-- Name: sales_order; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sales_order (
    cust_id integer,
    sales_person_id integer,
    time_order_taken timestamp without time zone NOT NULL,
    purchase_order_number bigint NOT NULL,
    credit_card_number character varying(16) NOT NULL,
    credit_card_exper_month smallint NOT NULL,
    credit_card_exper_day smallint NOT NULL,
    credit_card_secret_code smallint NOT NULL,
    name_on_card character varying(100) NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.sales_order OWNER TO postgres;

--
-- Name: sales_person; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sales_person (
    first_name character varying(30) NOT NULL,
    last_name character varying(30) NOT NULL,
    email character varying(60) NOT NULL,
    street character varying(50) NOT NULL,
    city character varying(40) NOT NULL,
    state character(2) DEFAULT 'PA'::bpchar NOT NULL,
    zip integer NOT NULL,
    phone character varying(20) NOT NULL,
    birth_date date,
    sex public.sex_type NOT NULL,
    date_hired timestamp without time zone NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.sales_person OWNER TO postgres;

--
-- Name: data_purchase; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.data_purchase AS
 SELECT sales_order.purchase_order_number,
    customer.company,
    sales_item.quantity,
    product.supplier,
    product.name,
    item.price,
    ((sales_item.quantity)::numeric * item.price) AS total,
    concat(sales_person.first_name, ' ', sales_person.last_name) AS sales_person
   FROM (((((public.sales_order
     JOIN public.customer ON ((sales_order.cust_id = customer.id)))
     JOIN public.sales_item ON ((sales_item.sales_order_id = sales_order.id)))
     JOIN public.item ON ((item.id = sales_item.item_id)))
     JOIN public.sales_person ON ((sales_person.id = sales_order.sales_person_id)))
     JOIN public.product ON ((product.id = item.product_id)))
  ORDER BY sales_order.purchase_order_number;


ALTER TABLE public.data_purchase OWNER TO postgres;

--
-- Name: item_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.item_id_seq OWNER TO postgres;

--
-- Name: item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.item_id_seq OWNED BY public.item.id;


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
-- Name: product_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product_type (
    name character varying(30) NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.product_type OWNER TO postgres;

--
-- Name: product_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.product_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_type_id_seq OWNER TO postgres;

--
-- Name: product_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_type_id_seq OWNED BY public.product_type.id;


--
-- Name: sales_item_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sales_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sales_item_id_seq OWNER TO postgres;

--
-- Name: sales_item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sales_item_id_seq OWNED BY public.sales_item.id;


--
-- Name: sales_order_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sales_order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sales_order_id_seq OWNER TO postgres;

--
-- Name: sales_order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sales_order_id_seq OWNED BY public.sales_order.id;


--
-- Name: sales_person_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sales_person_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sales_person_id_seq OWNER TO postgres;

--
-- Name: sales_person_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sales_person_id_seq OWNED BY public.sales_person.id;


--
-- Name: customer id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer ALTER COLUMN id SET DEFAULT nextval('public.customer_id_seq'::regclass);


--
-- Name: item id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item ALTER COLUMN id SET DEFAULT nextval('public.item_id_seq'::regclass);


--
-- Name: product id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);


--
-- Name: product_type id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_type ALTER COLUMN id SET DEFAULT nextval('public.product_type_id_seq'::regclass);


--
-- Name: sales_item id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sales_item ALTER COLUMN id SET DEFAULT nextval('public.sales_item_id_seq'::regclass);


--
-- Name: sales_order id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sales_order ALTER COLUMN id SET DEFAULT nextval('public.sales_order_id_seq'::regclass);


--
-- Name: sales_person id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sales_person ALTER COLUMN id SET DEFAULT nextval('public.sales_person_id_seq'::regclass);


--
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customer (first_name, last_name, email, company, street, city, state, zip, phone, birth_date, sex, date_entered, id) FROM stdin;
Matthew	Martinez	matthewmartinez@ge.com	GE	602 Main Place	Fontana	CA	92336	117-997-7764	1931-09-04	M	2015-01-01 22:39:28	1
Melissa	Moore	melissamoore@aramark.com	Aramark	463 Park Rd	Lakewood	NJ	8701	269-720-7259	1967-08-27	M	2017-10-20 21:59:29	2
Melissa	Brown	melissabrown@verizon.com	Verizon	712 View Ave	Houston	TX	77084	280-570-5166	1948-06-14	F	2016-07-16 12:26:45	3
Jennifer	Thomas	jenniferthomas@aramark.com	Aramark	231 Elm St	Mission	TX	78572	976-147-9254	1998-03-14	F	2018-01-08 09:27:55	4
Stephanie	Martinez	stephaniemartinez@albertsons.com	Albertsons	386 Second St	Lakewood	NJ	8701	820-131-6053	1998-01-24	M	2016-06-18 13:27:34	5
Daniel	Williams	danielwilliams@tjx.com	TJX	107 Pine St	Katy	TX	77449	744-906-9837	1985-07-20	F	2015-07-03 10:40:18	6
Lauren	Anderson	laurenanderson@pepsi.com	Pepsi	13 Maple Ave	Riverside	CA	92503	747-993-2446	1973-09-09	F	2018-02-01 16:43:51	7
Michael	Jackson	michaeljackson@disney.com	Disney	818 Pine Ave	Mission	TX	78572	126-423-3144	1951-03-03	F	2017-04-02 21:57:36	8
Ashley	Johnson	ashleyjohnson@boeing.com	Boeing	874 Oak Ave	Pacoima	CA	91331	127-475-1658	1937-05-10	F	2015-01-04 08:58:56	9
Brittany	Thomas	brittanythomas@walmart.com	Walmart	187 Maple Ave	Brownsville	TX	78521	447-788-4913	1986-10-22	F	2018-05-23 08:04:32	10
Matthew	Smith	matthewsmith@ups.com	UPS	123 Lake St	Brownsville	TX	78521	961-108-3758	1950-06-16	F	2018-03-15 10:08:54	11
Lauren	Wilson	laurenwilson@target.com	Target	942 Fifth Ave	Mission	TX	78572	475-578-8519	1965-12-26	M	2017-07-16 11:01:01	12
Justin	Smith	justinsmith@boeing.com	Boeing	844 Lake Ave	Lawrenceville	GA	30044	671-957-1492	1956-03-16	F	2017-10-07 10:50:08	13
Jessica	Garcia	jessicagarcia@toyota.com	Toyota	123 Pine Place	Fontana	CA	92336	744-647-2359	1996-08-05	F	2016-09-14 12:33:05	14
Matthew	Jackson	matthewjackson@bp.com	BP	538 Cedar Ave	Katy	TX	77449	363-430-1813	1966-02-26	F	2016-05-01 19:25:17	15
Stephanie	Thomas	stephaniethomas@apple.com	Apple	804 Fourth Place	Brownsville	TX	78521	869-582-9955	1988-08-26	F	2018-10-21 22:01:57	16
Jessica	Jackson	jessicajackson@aramark.com	Aramark	235 Pine Place	Chicago	IL	60629	587-334-1054	1991-07-22	F	2015-08-28 03:11:35	17
James	Martinez	jamesmartinez@kroger.com	Kroger	831 Oak St	Brownsville	TX	78521	381-428-3119	1927-12-22	F	2018-01-27 07:41:48	18
Christopher	Robinson	christopherrobinson@ibm.com	IBM	754 Cedar St	Pharr	TX	78577	488-694-7677	1932-06-25	F	2016-08-19 16:11:31	19
\.


--
-- Data for Name: item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.item (product_id, size, color, picture, price, id) FROM stdin;
2	10	Gray	Coming Soon	199.60	1
11	12	Red	Coming Soon	155.65	2
2	11	Red	Coming Soon	128.87	3
11	11	Green	Coming Soon	117.52	4
5	8	Black	Coming Soon	165.39	5
7	11	Brown	Coming Soon	168.15	6
5	8	Gray	Coming Soon	139.48	7
5	11	Blue	Coming Soon	100.14	8
4	10	Brown	Coming Soon	117.66	9
8	10	Brown	Coming Soon	193.53	10
7	8	Light Brown	Coming Soon	154.62	11
12	10	Green	Coming Soon	188.32	12
3	12	Green	Coming Soon	101.49	13
7	9	Black	Coming Soon	106.39	14
8	12	Red	Coming Soon	124.77	15
5	8	Black	Coming Soon	86.19	16
8	12	Blue	Coming Soon	196.86	17
8	8	Blue	Coming Soon	123.27	18
7	11	Red	Coming Soon	130.76	19
9	12	Black	Coming Soon	152.98	20
11	8	Blue	Coming Soon	175.58	21
7	11	Light Brown	Coming Soon	146.83	22
4	8	Green	Coming Soon	159.82	23
12	8	Light Brown	Coming Soon	171.92	24
1	12	Light Brown	Coming Soon	128.77	25
2	10	Gray	Coming Soon	102.45	26
10	8	Green	Coming Soon	186.86	27
1	8	Blue	Coming Soon	139.73	28
9	8	Light Brown	Coming Soon	151.57	29
2	10	Green	Coming Soon	177.16	30
3	9	Gray	Coming Soon	124.87	31
8	8	Black	Coming Soon	129.40	32
5	9	Black	Coming Soon	107.55	33
5	8	Light Brown	Coming Soon	103.71	34
11	10	Green	Coming Soon	152.31	35
6	12	Red	Coming Soon	108.96	36
7	12	Blue	Coming Soon	173.14	37
3	10	Green	Coming Soon	198.44	38
1	9	Light Brown	Coming Soon	119.61	39
1	10	Black	Coming Soon	114.36	40
7	9	Light Brown	Coming Soon	181.93	41
5	10	Black	Coming Soon	108.32	42
1	12	Black	Coming Soon	153.97	43
2	12	Gray	Coming Soon	184.27	44
2	9	Blue	Coming Soon	151.63	45
6	8	Brown	Coming Soon	159.39	46
11	9	Red	Coming Soon	150.49	47
9	10	Gray	Coming Soon	139.26	48
4	8	Gray	Coming Soon	166.87	49
12	9	Red	Coming Soon	110.77	50
\.


--
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product (type_id, name, supplier, description, id) FROM stdin;
1	Grandview	Allen Edmonds	Classic broguing adds texture to a charming longwing derby crafted in America from lustrous leather	1
1	Clarkston	Allen Edmonds	Sharp broguing touches up a charming, American-made derby fashioned from finely textured leather	2
1	Derby	John Varvatos	Leather upper, manmade sole	3
1	Ramsey	Johnston & Murphy	Leather upper, manmade sole	4
1	Hollis	Johnston & Murphy	Leather upper, manmade sole	5
2	Venetian Loafer	Mezlan	Suede upper, leather sole	6
2	Malek	Johnston & Murphy	Contrast insets at the toe and sides bring updated attitude to a retro-inspired sneaker set on a sporty foam sole and triangle-lugged tread.	7
3	Air Max 270 React	Nike	The reggae inspired Nike Air 270 React fuses forest green with shades of tan to reveal your righteous spirit	8
3	Joyride	Nike	Tiny foam beads underfoot conform to your foot for cushioning that stands up to your mileage	9
2	Air Force 1	Nike	A modern take on the icon that blends classic style and fresh, crisp details	10
3	Ghost 12	Brooks	Just know that it still strikes a just-right balance of DNA LOFT softness and BioMoGo DNA responsiveness	11
3	Revel 3	Brooks	Style to spare, now even softer.	12
3	Glycerin 17	Brooks	A plush fit and super soft transitions make every stride luxurious	13
\.


--
-- Data for Name: product_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product_type (name, id) FROM stdin;
Business	1
Casual	2
Athletic	3
\.


--
-- Data for Name: sales_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sales_item (item_id, sales_order_id, quantity, discount, taxable, sales_tax_rate, id) FROM stdin;
24	70	2	0.11	f	0.00	1
8	37	2	0.16	f	0.00	2
24	90	2	0.06	f	0.00	3
34	83	2	0.13	f	0.00	4
26	55	2	0.13	f	0.00	5
19	26	1	0.19	f	0.00	6
23	2	1	0.13	f	0.00	7
48	24	2	0.15	f	0.00	8
30	11	2	0.06	f	0.00	9
1	60	2	0.18	f	0.00	10
48	2	2	0.12	f	0.00	11
35	34	2	0.07	f	0.00	12
29	13	1	0.15	f	0.00	13
15	98	2	0.13	f	0.00	14
27	35	2	0.07	f	0.00	15
30	5	1	0.05	f	0.00	16
45	33	1	0.09	f	0.00	17
31	20	1	0.18	f	0.00	18
32	88	1	0.13	f	0.00	19
47	43	1	0.09	f	0.00	20
23	20	2	0.16	f	0.00	21
44	86	2	0.18	f	0.00	22
35	75	2	0.12	f	0.00	23
24	49	1	0.08	f	0.00	24
31	37	1	0.14	f	0.00	25
21	11	2	0.14	f	0.00	26
21	71	2	0.06	f	0.00	27
48	1	1	0.06	f	0.00	28
37	87	1	0.11	f	0.00	29
38	66	1	0.13	f	0.00	30
14	7	2	0.13	f	0.00	31
26	85	2	0.20	f	0.00	32
21	83	2	0.16	f	0.00	33
8	15	2	0.18	f	0.00	34
40	32	1	0.19	f	0.00	35
49	38	1	0.15	f	0.00	36
41	13	2	0.06	f	0.00	37
36	59	1	0.10	f	0.00	38
14	46	2	0.14	f	0.00	39
30	77	2	0.19	f	0.00	40
12	78	2	0.18	f	0.00	41
5	21	1	0.18	f	0.00	42
10	13	1	0.09	f	0.00	43
39	9	2	0.20	f	0.00	44
46	51	2	0.13	f	0.00	45
47	98	1	0.15	f	0.00	46
25	83	2	0.09	f	0.00	47
36	56	2	0.12	f	0.00	48
18	8	2	0.12	f	0.00	49
35	17	1	0.14	f	0.00	50
41	70	1	0.14	f	0.00	51
9	21	1	0.07	f	0.00	52
42	46	1	0.09	f	0.00	53
18	74	1	0.10	f	0.00	54
25	14	1	0.16	f	0.00	55
44	57	1	0.13	f	0.00	56
2	84	2	0.06	f	0.00	57
18	68	2	0.08	f	0.00	58
35	64	2	0.16	f	0.00	59
49	79	1	0.07	f	0.00	60
7	3	2	0.14	f	0.00	61
42	40	2	0.15	f	0.00	62
8	48	2	0.18	f	0.00	63
27	82	2	0.08	f	0.00	64
21	63	1	0.10	f	0.00	65
42	21	2	0.08	f	0.00	66
31	23	2	0.18	f	0.00	67
29	7	1	0.11	f	0.00	68
48	29	2	0.14	f	0.00	69
15	49	2	0.15	f	0.00	70
34	37	1	0.16	f	0.00	71
22	35	1	0.19	f	0.00	72
22	29	2	0.11	f	0.00	73
38	92	2	0.08	f	0.00	74
21	11	2	0.17	f	0.00	75
13	72	1	0.09	f	0.00	76
12	7	1	0.17	f	0.00	77
41	11	2	0.13	f	0.00	78
22	26	2	0.09	f	0.00	79
43	91	1	0.13	f	0.00	80
33	60	1	0.10	f	0.00	81
39	82	2	0.20	f	0.00	82
27	72	2	0.17	f	0.00	83
10	79	2	0.12	f	0.00	84
41	78	2	0.15	f	0.00	85
11	43	1	0.05	f	0.00	86
29	76	1	0.08	f	0.00	87
25	60	1	0.15	f	0.00	88
15	83	2	0.09	f	0.00	89
7	46	1	0.07	f	0.00	90
26	24	2	0.10	f	0.00	91
43	22	2	0.08	f	0.00	92
47	99	1	0.06	f	0.00	93
29	26	1	0.12	f	0.00	94
36	36	2	0.06	f	0.00	95
41	15	1	0.08	f	0.00	96
12	47	2	0.15	f	0.00	97
38	17	1	0.05	f	0.00	98
22	32	2	0.13	f	0.00	99
12	99	2	0.11	f	0.00	100
30	27	2	0.15	f	0.00	101
38	40	1	0.15	f	0.00	102
22	36	1	0.09	f	0.00	103
14	55	2	0.07	f	0.00	104
1	69	1	0.07	f	0.00	105
47	88	1	0.10	f	0.00	106
7	72	2	0.07	f	0.00	107
46	13	1	0.18	f	0.00	108
9	10	1	0.15	f	0.00	109
35	40	1	0.13	f	0.00	110
15	82	2	0.07	f	0.00	111
47	34	1	0.14	f	0.00	112
10	53	1	0.08	f	0.00	113
49	34	2	0.06	f	0.00	114
13	43	1	0.19	f	0.00	115
6	67	1	0.08	f	0.00	116
21	11	1	0.12	f	0.00	117
26	94	1	0.13	f	0.00	118
38	66	1	0.19	f	0.00	119
40	68	2	0.16	f	0.00	120
25	84	1	0.18	f	0.00	121
11	28	1	0.18	f	0.00	122
48	20	1	0.12	f	0.00	123
26	3	1	0.12	f	0.00	124
1	75	1	0.19	f	0.00	125
6	58	1	0.12	f	0.00	126
33	43	2	0.11	f	0.00	127
15	70	1	0.15	f	0.00	128
41	72	2	0.14	f	0.00	129
8	77	2	0.18	f	0.00	130
36	85	2	0.18	f	0.00	131
42	57	2	0.18	f	0.00	132
27	71	1	0.19	f	0.00	133
20	40	1	0.18	f	0.00	134
14	23	2	0.16	f	0.00	135
15	73	1	0.12	f	0.00	136
25	60	1	0.12	f	0.00	137
30	10	2	0.11	f	0.00	138
18	90	2	0.09	f	0.00	139
17	6	2	0.13	f	0.00	140
43	17	1	0.08	f	0.00	141
20	33	2	0.11	f	0.00	142
1	94	2	0.10	f	0.00	143
49	22	2	0.09	f	0.00	144
1	55	2	0.10	f	0.00	145
24	59	1	0.14	f	0.00	146
19	45	1	0.17	f	0.00	147
13	80	2	0.10	f	0.00	148
17	50	1	0.08	f	0.00	149
45	3	2	0.13	f	0.00	150
6	92	2	0.19	f	0.00	151
25	4	1	0.08	f	0.00	152
47	81	1	0.16	f	0.00	153
39	39	2	0.17	f	0.00	154
47	79	1	0.12	f	0.00	155
6	8	1	0.17	f	0.00	156
15	60	2	0.11	f	0.00	157
49	66	1	0.15	f	0.00	158
34	44	2	0.09	f	0.00	159
20	10	1	0.10	f	0.00	160
13	35	1	0.12	f	0.00	161
10	43	1	0.13	f	0.00	162
24	51	2	0.09	f	0.00	163
11	42	2	0.14	f	0.00	164
20	54	1	0.17	f	0.00	165
42	35	1	0.10	f	0.00	166
1	47	2	0.17	f	0.00	167
35	98	1	0.11	f	0.00	168
14	25	1	0.18	f	0.00	169
23	41	2	0.13	f	0.00	170
4	74	2	0.15	f	0.00	171
32	47	2	0.11	f	0.00	172
49	72	2	0.17	f	0.00	173
37	59	2	0.11	f	0.00	174
43	98	1	0.16	f	0.00	175
26	28	1	0.15	f	0.00	176
16	87	1	0.16	f	0.00	177
6	49	2	0.07	f	0.00	178
6	14	2	0.20	f	0.00	179
27	88	1	0.19	f	0.00	180
37	38	1	0.13	f	0.00	181
44	8	1	0.18	f	0.00	182
49	13	1	0.11	f	0.00	183
30	61	2	0.09	f	0.00	184
33	45	2	0.09	f	0.00	185
24	70	2	0.05	f	0.00	186
42	49	2	0.14	f	0.00	187
43	83	1	0.16	f	0.00	188
39	77	2	0.12	f	0.00	189
1	65	1	0.19	f	0.00	190
42	77	1	0.10	f	0.00	191
2	37	2	0.11	f	0.00	192
24	59	2	0.07	f	0.00	193
42	88	1	0.17	f	0.00	194
45	21	1	0.18	f	0.00	195
10	75	2	0.05	f	0.00	196
15	9	2	0.15	f	0.00	197
24	82	2	0.09	f	0.00	198
30	87	1	0.15	f	0.00	199
22	57	1	0.19	f	0.00	200
\.


--
-- Data for Name: sales_order; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sales_order (cust_id, sales_person_id, time_order_taken, purchase_order_number, credit_card_number, credit_card_exper_month, credit_card_exper_day, credit_card_secret_code, name_on_card, id) FROM stdin;
1	2	2018-03-23 10:26:23	20183231026	5440314057399014	3	5	415	Ashley Martin	1
8	2	2017-01-09 18:58:15	2017191858	6298551651340835	10	27	962	Michael Smith	2
9	3	2018-12-21 21:26:57	201812212126	3194084144609442	7	16	220	Lauren Garcia	3
8	2	2017-08-20 15:33:17	20178201533	2704487907300646	7	10	430	Jessica Robinson	4
3	4	2017-09-19 13:28:35	20179191328	8102877849444788	4	15	529	Melissa Jones	5
14	1	2016-10-02 18:30:13	20161021830	7294221943676784	10	22	323	Lauren Moore	6
4	2	2016-03-21 07:24:30	2016321724	1791316080799942	1	24	693	Joshua Wilson	7
1	1	2018-08-04 12:22:06	2018841222	4205390666512184	5	16	758	Jennifer Garcia	8
8	4	2016-08-25 10:36:09	20168251036	3925972513042074	1	10	587	Michael Thomas	9
8	4	2018-08-10 20:24:52	20188102024	2515001187633555	10	7	354	David Martin	10
5	2	2016-11-28 15:21:48	201611281521	6715538212478349	5	25	565	Jennifer Johnson	11
5	3	2016-12-07 10:20:05	20161271020	5125085038984547	10	27	565	Brittany Garcia	12
13	3	2018-10-11 16:27:04	201810111627	5559881213107031	7	14	593	Sarah Jackson	13
14	1	2018-04-26 20:35:34	20184262035	2170089500922701	7	26	105	Daniel Harris	14
3	2	2016-11-14 04:32:50	20161114432	6389550669359545	7	19	431	Brittany Williams	15
18	3	2016-07-10 17:55:01	20167101755	7693323933630220	4	22	335	Christopher Thomas	16
12	2	2018-05-13 06:20:56	2018513620	1634255384507587	1	4	364	Megan Garcia	17
3	4	2016-03-04 20:52:36	2016342052	7720584466409961	2	7	546	Justin Taylor	18
17	1	2017-02-16 15:44:27	20172161544	7573753924723630	3	15	148	Michael White	19
19	3	2017-08-04 07:24:30	201784724	9670036242643402	10	24	803	Melissa Taylor	20
8	2	2018-07-08 15:51:11	2018781551	5865443195522495	2	2	793	James Thompson	21
18	1	2017-03-02 03:08:03	20173238	9500873657482557	6	22	793	Daniel Williams	22
7	1	2018-03-19 10:54:30	20183191054	7685678049357511	2	9	311	Joshua Martinez	23
18	1	2017-07-04 18:48:02	2017741848	2254223828631172	6	18	621	Justin Taylor	24
16	1	2018-07-23 21:44:51	20187232144	8669971462260333	10	3	404	Ashley Garcia	25
8	4	2016-05-21 16:26:49	20165211626	9485792104395686	2	4	270	Andrew Taylor	26
19	4	2018-09-04 18:24:36	2018941824	5293753403622328	8	4	362	Matthew Miller	27
9	2	2018-07-01 18:19:10	2018711819	7480694928317516	10	5	547	Justin Thompson	28
8	4	2018-09-10 20:15:06	20189102015	7284020879927491	4	15	418	Samantha Anderson	29
17	2	2016-07-13 16:30:53	20167131630	7769197595493852	1	19	404	Jessica Thomas	30
17	4	2016-09-22 22:58:11	20169222258	1394443435119786	7	5	955	James Wilson	31
17	4	2017-10-28 11:35:05	201710281135	6788591532433513	8	13	512	Michael Williams	32
12	4	2018-11-11 04:55:50	20181111455	1854718494260005	3	26	928	Melissa Jones	33
15	4	2016-08-11 23:05:58	2016811235	7502173302686796	3	11	836	Michael Thompson	34
2	3	2018-07-13 07:50:24	2018713750	5243198834590551	10	12	725	Joseph Thomas	35
9	3	2017-09-28 11:42:16	20179281142	7221309687109696	2	5	845	James Martinez	36
7	1	2016-01-09 18:15:08	2016191815	9202139348760334	4	4	339	Samantha Wilson	37
18	1	2016-03-14 17:33:26	20163141733	3066530074499665	6	23	835	David Garcia	38
12	3	2017-08-21 18:14:01	20178211814	1160849457958425	8	19	568	Samantha Miller	39
8	1	2018-09-12 19:25:25	20189121925	6032844702934349	8	13	662	Justin Brown	40
19	2	2016-11-06 03:07:33	201611637	1369214097312715	9	23	330	Joseph Jones	41
3	4	2016-06-06 01:07:15	20166617	7103644598069058	1	5	608	Brittany Thomas	42
13	4	2017-05-15 01:02:57	201751512	2920333635602602	11	14	139	Stephanie Smith	43
15	4	2016-03-27 02:18:18	2016327218	7798214190926405	5	13	809	Stephanie Taylor	44
9	2	2018-01-25 14:43:01	20181251443	4196223548846892	10	17	115	Melissa Martin	45
6	3	2017-01-08 13:54:49	2017181354	8095784052038731	8	23	416	Amanda White	46
12	2	2017-09-24 15:24:44	20179241524	6319974420646022	2	4	755	Megan Anderson	47
11	2	2018-04-09 18:53:22	2018491853	3258192259182097	11	22	730	Samantha Thompson	48
10	2	2018-01-11 22:20:29	20181112220	8336712415869878	3	18	872	Melissa Wilson	49
14	3	2018-11-10 03:08:36	2018111038	6942550153605236	9	18	250	Jessica Johnson	50
6	4	2016-06-26 16:48:19	20166261648	5789348928562200	2	7	458	Christopher Jones	51
5	1	2018-06-23 02:25:16	2018623225	8550095429571317	9	25	590	Samantha Wilson	52
18	2	2017-07-01 01:16:04	201771116	2651011719468438	11	11	107	Andrew Miller	53
12	4	2017-01-17 21:42:51	20171172142	7354378345646144	3	14	772	Andrew Moore	54
7	3	2016-01-07 22:56:31	2016172256	3429850164043973	2	6	295	Joseph Taylor	55
10	1	2016-01-27 01:14:53	2016127114	2480926933843246	7	3	704	Ashley Taylor	56
13	1	2018-09-15 08:15:17	2018915815	6626319262681476	4	8	837	Stephanie Thomas	57
9	1	2018-04-06 15:40:28	2018461540	4226037621059886	10	26	896	Stephanie Jones	58
17	3	2016-10-17 21:31:09	201610172131	7862008338119027	10	25	767	Amanda Robinson	59
12	2	2016-06-04 22:27:57	2016642227	4472081783581101	10	9	279	Justin Williams	60
9	3	2018-01-27 06:57:23	2018127657	2384491606066483	11	23	417	Joshua Garcia	61
14	2	2018-07-19 22:11:23	20187192211	2680467440231722	10	8	545	Ashley Wilson	62
19	4	2018-11-06 03:12:35	2018116312	3973342791188144	10	9	749	Megan Martinez	63
11	2	2017-01-15 14:11:54	20171151411	3042008865691398	8	3	695	Brittany White	64
10	4	2018-10-07 01:26:57	2018107126	7226038495242154	8	7	516	Stephanie White	65
12	3	2018-10-02 16:13:23	20181021613	7474287104417454	11	1	184	Daniel Davis	66
8	1	2018-08-12 23:54:52	20188122354	6454271840792089	1	19	914	Michael Robinson	67
11	2	2016-07-06 04:57:33	201676457	6767948287515839	8	7	127	Samantha Anderson	68
12	2	2018-09-06 10:34:03	2018961034	2724397042248973	11	11	686	Ashley Harris	69
16	1	2017-11-12 07:05:38	2017111275	4832060124173185	11	27	697	Brittany White	70
16	4	2016-06-08 17:38:18	2016681738	2187337846675221	5	9	895	Megan Wilson	71
3	3	2016-02-08 21:46:46	2016282146	8361948319742012	6	26	157	Jessica Taylor	72
8	1	2016-10-22 03:01:13	2016102231	1748352966511490	8	7	815	Justin Davis	73
5	4	2018-12-06 12:51:24	20181261251	3987075017699453	7	18	557	Andrew Martinez	74
4	1	2017-09-23 07:14:32	2017923714	4497706297852239	2	12	756	Justin Moore	75
5	3	2016-02-28 23:16:42	20162282316	9406399694013062	1	26	853	Joseph Moore	76
11	4	2016-05-24 14:37:36	20165241437	4754563147105980	8	8	742	Amanda Brown	77
1	2	2018-04-08 09:35:58	201848935	5031182534686567	2	11	760	Andrew Thompson	78
11	1	2017-10-07 20:45:13	20171072045	9736660892936088	5	19	240	Megan Robinson	79
19	2	2017-03-19 23:03:38	2017319233	1154891936822433	2	14	554	Christopher Davis	80
1	1	2018-04-26 11:58:53	20184261158	5672494499371853	11	18	692	James Thomas	81
1	3	2018-07-20 10:05:17	2018720105	9695318985866569	2	12	107	Jennifer Martin	82
7	3	2018-06-21 18:41:12	20186211841	2824438494479373	1	12	296	Joseph Miller	83
6	1	2016-04-07 08:47:40	201647847	5608599820055114	7	2	163	Brittany Brown	84
15	3	2016-07-22 19:25:23	20167221925	3011298350076480	1	9	352	Jessica Jackson	85
16	4	2016-10-14 10:17:30	201610141017	5250543218399397	9	16	975	David Wilson	86
3	4	2018-05-15 03:51:28	2018515351	8835896606865589	11	4	675	Andrew Garcia	87
19	3	2017-05-25 07:44:57	2017525744	9159566098395188	6	23	112	Ashley Brown	88
11	2	2017-12-02 19:07:39	2017122197	9920715756046783	2	25	490	Joshua Garcia	89
7	4	2016-05-01 04:50:28	201651450	8393790616940265	9	22	490	Matthew White	90
15	3	2018-01-21 19:54:46	20181211954	8078408967493993	6	18	316	Jessica Thomas	91
6	1	2018-04-11 11:23:58	20184111123	3921559263693643	11	17	221	Andrew Jackson	92
13	3	2018-03-05 10:26:27	2018351026	4739593984654108	10	18	925	Samantha White	93
8	4	2018-11-15 14:53:55	201811151453	8752393645304583	4	14	554	Daniel Jackson	94
10	1	2017-09-03 12:57:29	2017931257	3434269111389638	6	18	360	Megan Johnson	95
7	1	2018-06-28 12:10:58	20186281210	6543388006451934	5	19	491	Megan Thomas	96
15	3	2018-07-13 12:21:29	20187131221	4717498129166869	5	21	386	Megan Davis	97
4	1	2016-08-01 16:26:39	2016811626	1822404586758111	3	2	346	Joseph Davis	98
3	2	2016-10-27 10:53:05	201610271053	8446943405552052	11	17	266	Daniel Smith	99
18	3	2018-10-20 15:28:54	201810201528	6433477195769821	8	26	723	Lauren Smith	100
\.


--
-- Data for Name: sales_person; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sales_person (first_name, last_name, email, street, city, state, zip, phone, birth_date, sex, date_hired, id) FROM stdin;
Jennifer	Smith	jennifersmith@volkswagen.com	610 Maple Place	Hawthorne	CA	90250	215-901-2287	1941-08-09	F	2014-02-06 12:22:48	1
Michael	Robinson	michaelrobinson@walmart.com	164 Maple St	Pacoima	CA	91331	521-377-4462	1956-04-23	M	2014-09-12 17:27:23	2
Brittany	Jackson	brittanyjackson@disney.com	263 Park Rd	Riverside	CA	92503	672-708-7601	1934-07-05	F	2015-01-17 02:51:55	3
Samantha	Moore	samanthamoore@ge.com	107 Pine Place	Houston	TX	77084	893-423-2899	1926-05-05	M	2015-11-14 22:26:21	4
Jessica	Thompson	jessicathompson@fedex.com	691 Third Place	Sylmar	CA	91342	349-203-4736	1938-12-18	M	2014-12-13 06:54:39	5
\.


--
-- Name: customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customer_id_seq', 19, true);


--
-- Name: item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.item_id_seq', 50, true);


--
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_id_seq', 13, true);


--
-- Name: product_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_type_id_seq', 3, true);


--
-- Name: sales_item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sales_item_id_seq', 200, true);


--
-- Name: sales_order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sales_order_id_seq', 100, true);


--
-- Name: sales_person_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sales_person_id_seq', 5, true);


--
-- Name: customer customer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (id);


--
-- Name: item item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_pkey PRIMARY KEY (id);


--
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


--
-- Name: product_type product_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_type
    ADD CONSTRAINT product_type_pkey PRIMARY KEY (id);


--
-- Name: sales_item sales_item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sales_item
    ADD CONSTRAINT sales_item_pkey PRIMARY KEY (id);


--
-- Name: sales_order sales_order_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sales_order
    ADD CONSTRAINT sales_order_pkey PRIMARY KEY (id);


--
-- Name: sales_person sales_person_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sales_person
    ADD CONSTRAINT sales_person_pkey PRIMARY KEY (id);


--
-- Name: item item_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id);


--
-- Name: product product_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_type_id_fkey FOREIGN KEY (type_id) REFERENCES public.product_type(id);


--
-- Name: sales_item sales_item_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sales_item
    ADD CONSTRAINT sales_item_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.item(id);


--
-- Name: sales_item sales_item_sales_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sales_item
    ADD CONSTRAINT sales_item_sales_order_id_fkey FOREIGN KEY (sales_order_id) REFERENCES public.sales_order(id);


--
-- Name: sales_order sales_order_cust_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sales_order
    ADD CONSTRAINT sales_order_cust_id_fkey FOREIGN KEY (cust_id) REFERENCES public.customer(id);


--
-- Name: sales_order sales_order_sales_person_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sales_order
    ADD CONSTRAINT sales_order_sales_person_id_fkey FOREIGN KEY (sales_person_id) REFERENCES public.sales_person(id);


--
-- PostgreSQL database dump complete
--

