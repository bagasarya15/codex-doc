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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: employee; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employee (
    id integer NOT NULL,
    nationalid bigint NOT NULL,
    firstname character varying(50) NOT NULL,
    lastname character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    phonecall character varying(30) NOT NULL,
    jobtitle character varying(50) NOT NULL,
    birthdate date NOT NULL,
    hiredate date NOT NULL,
    departement character varying(50) NOT NULL
);


ALTER TABLE public.employee OWNER TO postgres;

--
-- Name: cursoremploye(integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.cursoremploye(off_page integer) RETURNS SETOF public.employee
    LANGUAGE plpgsql
    AS $$
DECLARE -- Untuk deklarasi 
	cursor_employe CURSOR FOR
				SELECT * FROM employee ORDER BY id
				OFFSET (off_page -1 ) * 10;
BEGIN -- Memulai logic
	OPEN cursor_employe;
	
	RETURN QUERY
		FETCH 10 FROM cursor_employe;
	CLOSE cursor_employe;
	
	IF NOT FOUND THEN
		RAISE 'Halaman % tidak ditemukan', off_page;
	END IF;
END; -- Menutup logic
$$;


ALTER FUNCTION public.cursoremploye(off_page integer) OWNER TO postgres;

--
-- Name: insertdata(bigint, character varying, character varying, character varying, character varying, character varying, date, date, character varying); Type: PROCEDURE; Schema: public; Owner: postgres
--

CREATE PROCEDURE public.insertdata(IN national_id bigint, IN first_name character varying, IN last_name character varying, IN email_employe character varying, IN phone character varying, IN job character varying, IN birth date, IN hire date, IN depart character varying)
    LANGUAGE plpgsql
    AS $$
BEGIN
  INSERT INTO employee(
  	 nationalid, firstname, lastname, email, phonecall, jobtitle, birthdate, hiredate, departement
  ) VALUES ( 
  	national_id ,
	first_name ,
	last_name ,
	email_employe ,
	phone ,
	job ,
	birth ,
	hire ,
	depart
  );
END;
$$;


ALTER PROCEDURE public.insertdata(IN national_id bigint, IN first_name character varying, IN last_name character varying, IN email_employe character varying, IN phone character varying, IN job character varying, IN birth date, IN hire date, IN depart character varying) OWNER TO postgres;

--
-- Name: insertdata(integer, bigint, character varying, character varying, character varying, character varying, character varying, date, date, character varying); Type: PROCEDURE; Schema: public; Owner: postgres
--

CREATE PROCEDURE public.insertdata(IN id_employee integer, IN national_id bigint, IN first_name character varying, IN last_name character varying, IN email_employe character varying, IN phone character varying, IN job character varying, IN birth date, IN hire date, IN depart character varying)
    LANGUAGE plpgsql
    AS $$
BEGIN
  INSERT INTO employee(
  	 id,nationalid, firstname, lastname, email, phonecall, jobtitle, birthdate, hiredate, departement
  ) VALUES ( 
	  id_employee,
  	national_id ,
	first_name ,
	last_name ,
	email_employe ,
	phone ,
	job ,
	birth ,
	hire ,
	depart
  );
END;
$$;


ALTER PROCEDURE public.insertdata(IN id_employee integer, IN national_id bigint, IN first_name character varying, IN last_name character varying, IN email_employe character varying, IN phone character varying, IN job character varying, IN birth date, IN hire date, IN depart character varying) OWNER TO postgres;

--
-- Name: insertdata(integer, bigint, character varying, character varying, character varying, character varying, character varying, date, date, character varying, character varying, character varying, boolean); Type: PROCEDURE; Schema: public; Owner: postgres
--

CREATE PROCEDURE public.insertdata(IN id_employee integer, IN national_id bigint, IN first_name character varying, IN last_name character varying, IN email_employe character varying, IN phone character varying, IN job character varying, IN birth date, IN hire date, IN depart character varying, IN name_tb2 character varying, IN level_tb2 character varying, IN status_tb2 boolean)
    LANGUAGE plpgsql
    AS $$
BEGIN
  INSERT INTO employee(
  	 id,nationalid, firstname, lastname, email, phonecall, jobtitle, birthdate, hiredate, departement
  ) VALUES ( 
	id_employee,
  	national_id ,
	first_name ,
	last_name ,
	email_employe ,
	phone ,
	job ,
	birth ,
	hire ,
	depart
  );
  
  INSERT INTO employe_codex (id, name, level, status)
  	VALUES (id_employee, name_tb2, level_tb2, status_tb2);
END;
$$;


ALTER PROCEDURE public.insertdata(IN id_employee integer, IN national_id bigint, IN first_name character varying, IN last_name character varying, IN email_employe character varying, IN phone character varying, IN job character varying, IN birth date, IN hire date, IN depart character varying, IN name_tb2 character varying, IN level_tb2 character varying, IN status_tb2 boolean) OWNER TO postgres;

--
-- Name: notcursoremploye(integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.notcursoremploye(page integer) RETURNS SETOF public.employee
    LANGUAGE plpgsql
    AS $$
BEGIN
	RETURN QUERY
		SELECT * FROM employee OFFSET (page -1 ) * 10 LIMIT 10;
		
	IF NOT FOUND THEN
		RAISE 'Halaman % tidak ditemukan', page;
	END IF;
END;
$$;


ALTER FUNCTION public.notcursoremploye(page integer) OWNER TO postgres;

--
-- Name: updatedata(integer, character varying, character varying); Type: PROCEDURE; Schema: public; Owner: postgres
--

CREATE PROCEDURE public.updatedata(IN id_employee integer, IN first_name character varying, IN last_name character varying)
    LANGUAGE plpgsql
    AS $$
BEGIN

  UPDATE employee SET firstname = first_name, lastname = last_name WHERE id = id_employee;
	
END;
$$;


ALTER PROCEDURE public.updatedata(IN id_employee integer, IN first_name character varying, IN last_name character varying) OWNER TO postgres;

--
-- Name: employe_codex; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employe_codex (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    level character varying(50) NOT NULL,
    status boolean DEFAULT false NOT NULL
);


ALTER TABLE public.employe_codex OWNER TO postgres;

--
-- Name: employe_codex_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.employe_codex_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employe_codex_id_seq OWNER TO postgres;

--
-- Name: employe_codex_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.employe_codex_id_seq OWNED BY public.employe_codex.id;


--
-- Name: employee_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.employee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employee_id_seq OWNER TO postgres;

--
-- Name: employee_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.employee_id_seq OWNED BY public.employee.id;


--
-- Name: employe_codex id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employe_codex ALTER COLUMN id SET DEFAULT nextval('public.employe_codex_id_seq'::regclass);


--
-- Name: employee id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee ALTER COLUMN id SET DEFAULT nextval('public.employee_id_seq'::regclass);


--
-- Data for Name: employe_codex; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employe_codex (id, name, level, status) FROM stdin;
102	Mozarela	Legend	t
\.


--
-- Data for Name: employee; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employee (id, nationalid, firstname, lastname, email, phonecall, jobtitle, birthdate, hiredate, departement) FROM stdin;
2	201234567	John	Doe	johndoe@gmail.com	081234567890	Marketing Manager	1980-07-12	2015-03-01	Marketing
3	212345678	Jane	Smith	janesmith@gmail.com	082345678901	HR Manager	1985-02-23	2019-01-15	Human Resources
4	223456789	Michael	Lee	michaellee@gmail.com	081234567890	Sales Manager	1982-11-05	2016-09-23	Sales
5	234567890	Sarah	Johnson	sarahjohnson@gmail.com	089012345678	Product Manager	1979-04-30	2014-02-01	Product Development
6	245678901	Andrew	Wong	andrewwong@gmail.com	082345678901	Finance Manager	1987-09-15	2020-07-01	Finance
7	256789012	Jessica	Tan	jessicatan@gmail.com	081234567890	Operations Manager	1986-01-17	2017-11-12	Operations
8	267890123	William	Ng	williamng@gmail.com	085678901234	IT Manager	1984-06-08	2015-08-01	IT
9	278901234	Evelyn	Lim	evelynlim@gmail.com	082345678901	Marketing Manager	1981-12-03	2017-02-01	Marketing
10	290123456	Kevin	Chen	kevinchen@gmail.com	089012345678	HR Manager	1978-09-20	2013-05-15	Human Resources
11	301234567	Grace	Liu	graceliu@gmail.com	081234567890	Sales Manager	1983-04-19	2018-10-01	Sales
12	312345678	Alex	Chandra	alexchandra@gmail.com	082345678901	Chief Executive Officer	1975-03-21	2012-01-01	Management
13	323456789	Samantha	Tjahjadi	samanthatjahjadi@gmail.com	081234567890	Chief Operating Officer	1989-11-15	2016-05-01	Operations
14	334567890	Nicholas	Hartono	nicholashartono@gmail.com	085678901234	Chief Financial Officer	1977-08-12	2013-07-01	Finance
15	345678901	Stephanie	Wijaya	stephaniewijaya@gmail.com	081234567890	Chief Marketing Officer	1986-04-25	2018-09-01	Marketing
16	356789012	Matthew	Tandiono	matthewtandiono@gmail.com	082345678901	Chief Information Officer	1978-12-03	2015-02-01	IT
17	367890123	Melissa	Hendra	melissahendra@gmail.com	089012345678	Chief Human Resources Officer	1983-07-18	2019-03-01	Human Resources
18	378901234	Jonathan	Surya	jonathansurya@gmail.com	081234567890	Chief Sales Officer	1981-02-06	2016-10-01	Sales
19	390123456	Karen	Gunawan	karengunawan@gmail.com	085678901234	Chief Product Officer	1987-09-30	2020-01-01	Product Development
20	401234567	Richard	Halim	richardhalim@gmail.com	082345678901	Chief Operations Officer	1980-05-19	2014-11-01	Operations
21	412345678	Michelle	Wibowo	michellewibowo@gmail.com	089012345678	Chief Marketing Officer	1984-10-11	2017-04-01	Marketing
22	423456789	Bobby	Tan	bobbytan@gmail.com	081234567890	Chief Financial Officer	1979-01-08	2015-08-01	Finance
23	434567890	Jessica	Lim	jessicalim@gmail.com	085678901234	Chief Marketing Officer	1988-06-17	2019-12-01	Marketing
24	445678901	David	Huang	davidhuang@gmail.com	082345678901	Chief Information Officer	1976-09-23	2011-03-01	IT
25	456789012	Natalie	Gunawan	nataliegunawan@gmail.com	089012345678	Chief Human Resources Officer	1982-05-11	2017-02-01	Human Resources
26	467890123	William	Kurniawan	williamkurniawan@gmail.com	081234567890	Chief Sales Officer	1985-12-29	2018-07-01	Sales
27	478901234	Elisabeth	Santoso	elisabethsantoso@gmail.com	085678901234	Chief Product Officer	1984-03-12	2016-09-01	Product Development
28	490123456	Vincent	Santoso	vincentsantoso@gmail.com	082345678901	Chief Operations Officer	1974-11-26	2013-06-01	Operations
29	501234567	Jessica	Tanuwijaya	jessicatanuwijaya@gmail.com	089012345678	Chief Marketing Officer	1989-08-05	2021-01-01	Marketing
30	512345678	Tiffany	Ng	tiffanyng@gmail.com	081234567890	Chief Information Officer	1977-06-28	2012-12-01	IT
31	523456789	Steven	Lie	stevenlie@gmail.com	085678901234	Chief Financial Officer	1981-02-19	2015-03-01	Finance
32	534567790	Samantha	Wijaya	samanthawijaya@gmail.com	082345678901	Chief People Officer	1980-11-14	2014-08-01	Human Resources
33	545677901	Evan	Sutanto	evansutanto@gmail.com	089012345678	Chief Executive Officer	1973-04-23	2005-01-01	Management
34	556789012	Stephanie	Tan	stephanietan@gmail.com	081234567890	Chief Operating Officer	1983-09-03	2010-10-01	Operations
35	567890123	Robert	Wongso	robertwongso@gmail.com	085678901234	Chief Marketing Officer	1987-12-16	2020-02-01	Marketing
36	578901233	Jennifer	Surya	jennifersurya@gmail.com	082345678901	Chief Financial Officer	1978-07-02	2016-06-01	Finance
37	534567890	Samantha	Wijaya	samanthawijaya@gmail.com	082345678901	Chief People Officer	1980-11-14	2014-08-01	Human Resources
38	545678901	Evan	Sutanto	evansutanto@gmail.com	089012345678	Chief Executive Officer	1973-04-23	2005-01-01	Management
39	556689012	Stephanie	Tan	stephanietan@gmail.com	081234567890	Chief Operating Officer	1983-09-03	2010-10-01	Operations
40	567890122	Robert	Wongso	robertwongso@gmail.com	085678901234	Chief Marketing Officer	1987-12-16	2020-02-01	Marketing
41	578901234	Jennifer	Surya	jennifersurya@gmail.com	082345678901	Chief Financial Officer	1978-07-02	2016-06-01	Finance
42	590123456	Alex	Setiawan	alexsetiawan@gmail.com	089012345678	Chief Product Officer	1986-02-07	2019-09-01	Product Development
43	246802463	Andi	Saputra	andisaputra@gmail.com	081234567890	Chief Financial Officer	1978-02-17	2016-03-01	Finance
44	256802564	Ratih	Widya	ratihwidya@gmail.com	082345678901	Chief Marketing Officer	1984-09-13	2021-02-01	Marketing
45	266802665	Denny	Wijaya	dennywijaya@gmail.com	089012345678	Chief Executive Officer	1977-06-03	2010-10-01	Management
46	276802766	Mia	Tjandra	miatjandra@gmail.com	085678901234	Chief Operating Officer	1983-12-28	2015-06-01	Operations
47	286802867	Yudi	Pratama	yudipratama@gmail.com	081234567890	Chief Information Officer	1989-08-13	2020-11-01	IT
48	296802968	Siska	Sari	siskasari@gmail.com	082345678901	Chief People Officer	1975-05-21	2008-12-01	Human Resources
49	306803069	Indra	Gunawan	indragunawan@gmail.com	085678901234	Chief Product Officer	1990-04-28	2023-01-01	Product Development
50	316803170	Rina	Hadi	rinahadi@gmail.com	089012345678	Chief Technology Officer	1972-10-10	2002-11-01	Technology
51	600000001	Jessica	Tan	jessica.tan@gmail.com	081234567890	Sales Manager	1985-01-15	2015-03-01	Sales
52	600000002	Eric	Liu	eric.liu@gmail.com	085678901234	IT Manager	1990-07-20	2012-09-01	IT
53	600000003	Steven	Wong	steven.wong@gmail.com	089012345678	HR Director	1975-11-27	2010-01-01	Human Resources
54	600000004	Jennifer	Chen	jennifer.chen@gmail.com	081234567890	Marketing Manager	1988-03-12	2016-06-01	Marketing
55	600000005	Karen	Ng	karen.ng@gmail.com	083456789012	Finance Manager	1982-09-25	2018-02-01	Finance
56	600000006	Jason	Lee	jason.lee@gmail.com	087654321098	Product Manager	1980-12-08	2014-11-01	Product Management
57	600000007	Stephanie	Goh	stephanie.goh@gmail.com	081234567890	Sales Director	1978-06-18	2019-05-01	Sales
58	600000008	William	Wu	william.wu@gmail.com	082345678901	Operations Manager	1992-02-14	2020-12-01	Operations
59	600000009	Alice	Chong	alice.chong@gmail.com	082123456789	Marketing Director	1979-04-22	2011-03-01	Marketing
60	600000010	Andrew	Gan	andrew.gan@gmail.com	081234567890	IT Director	1987-02-14	2022-01-01	IT
61	600000011	Yvonne	Tan	yvonne.tan@gmail.com	081234567890	HR Manager	1985-01-15	2015-03-01	Human Resources
62	600000012	Ryan	Chen	ryan.chen@gmail.com	085678901234	Operations Manager	1990-07-20	2012-09-01	Operations
63	600000013	Emily	Wong	emily.wong@gmail.com	089012345678	Sales Manager	1975-11-27	2010-01-01	Sales
64	600000014	David	Lee	david.lee@gmail.com	081234567890	IT Manager	1988-03-12	2016-06-01	IT
65	600000015	Grace	Lau	grace.lau@gmail.com	083456789012	Product Manager	1999-03-12	2020-09-25	Sales
66	700000001	Willy	Sutanto	willy.sutanto@gmail.com	087654321098	IT Manager	1984-07-10	2016-05-01	IT
67	700000002	Natalie	Tan	natalie.tan@gmail.com	082345678901	Marketing Director	1977-05-08	2010-08-01	Marketing
68	700000003	Erick	Lim	erick.lim@gmail.com	081234567890	Finance Manager	1990-11-17	2015-02-01	Finance
69	700000004	Stephanie	Wu	stephanie.wu@gmail.com	083456789012	Operations Director	1979-01-01	2018-09-01	Operations
70	700000005	Bryan	Ng	bryan.ng@gmail.com	089012345678	Product Manager	1988-09-30	2012-11-01	Product Management
71	700000006	Jasmine	Chen	jasmine.chen@gmail.com	081234567890	Sales Manager	1982-02-22	2019-03-01	Sales
72	700000007	Victor	Tjandra	victor.tjandra@gmail.com	082123456789	IT Director	1976-04-12	2021-02-01	IT
73	700000008	Diana	Lee	diana.lee@gmail.com	081234567890	HR Manager	1989-06-23	2013-07-01	Human Resources
74	700000009	Frank	Goh	frank.goh@gmail.com	085678901234	Operations Manager	1981-10-05	2017-12-01	Operations
75	700000010	Michelle	Tan	michelle.tan@gmail.com	081234567890	Sales Director	1978-03-16	2020-05-01	Sales
76	700000020	Willy	Sutanto	willy.sutanto@gmail.com	087654321098	IT Manager	1984-07-10	2016-05-01	IT
77	700000021	Natalie	Tan	natalie.tan@gmail.com	082345678901	Marketing Director	1977-05-08	2010-08-01	Marketing
78	700000023	Erick	Lim	erick.lim@gmail.com	081234567890	Finance Manager	1990-11-17	2015-02-01	Finance
79	700000024	Stephanie	Wu	stephanie.wu@gmail.com	083456789012	Operations Director	1979-01-01	2018-09-01	Operations
80	700000025	Bryan	Ng	bryan.ng@gmail.com	089012345678	Product Manager	1988-09-30	2012-11-01	Product Management
81	700000026	Jasmine	Chen	jasmine.chen@gmail.com	081234567890	Sales Manager	1982-02-22	2019-03-01	Sales
82	700000027	Victor	Tjandra	victor.tjandra@gmail.com	082123456789	IT Director	1976-04-12	2021-02-01	IT
83	700000028	Diana	Lee	diana.lee@gmail.com	081234567890	HR Manager	1989-06-23	2013-07-01	Human Resources
84	700000029	Frank	Goh	frank.goh@gmail.com	085678901234	Operations Manager	1981-10-05	2017-12-01	Operations
85	700000030	Michelle	Tan	michelle.tan@gmail.com	081234567890	Sales Director	1978-03-16	2020-05-01	Sales
86	800000001	Ari	Kurniawan	ari.kurniawan@gmail.com	081234567890	Marketing Manager	1986-11-28	2014-03-01	Marketing
87	800000002	Siti	Wulandari	siti.wulandari@gmail.com	085678901234	Finance Director	1975-09-02	2011-06-01	Finance
88	800000003	Hendra	Santoso	hendra.santoso@gmail.com	081234567890	IT Support	1995-04-07	2020-11-01	IT
89	800000004	Devi	Putri	devi.putri@gmail.com	087654321098	Operations Manager	1979-12-16	2019-07-01	Operations
90	800000005	Adi	Saputra	adi.saputra@gmail.com	082345678901	Product Manager	1988-03-02	2013-08-01	Product Management
91	800000006	Siska	Wijaya	siska.wijaya@gmail.com	081234567890	Sales Manager	1982-07-15	2018-01-01	Sales
92	800000007	Tony	Santana	tony.santana@gmail.com	083456789012	IT Manager	1976-09-20	2015-10-01	IT
93	800000008	Dini	Sari	dini.sari@gmail.com	081234567890	HR Director	1989-02-11	2021-03-01	Human Resources
94	800000009	Budi	Prasetyo	budi.prasetyo@gmail.com	082123456789	Operations Director	1981-05-25	2012-09-01	Operations
95	800000010	Rina	Susanti	rina.susanti@gmail.com	081234567890	Sales Manager	1978-08-08	2016-04-01	Sales
96	900000001	Andi	Gunawan	andi.gunawan@gmail.com	081234567890	IT Support	1993-02-17	2020-05-01	IT
97	900000002	Rani	Maulida	rani.maulida@gmail.com	081234567890	Marketing Manager	1987-07-19	2013-10-01	Marketing
98	900000003	Fauzi	Ahmad	fauzi.ahmad@gmail.com	085678901234	Finance Manager	1990-11-30	2017-03-01	Finance
99	900000004	Eva	Fitri	eva.fitri@gmail.com	082345678901	Operations Manager	1983-12-24	2019-02-01	Operations
100	900000005	Joko	Santoso	joko.santoso@gmail.com	081234567890	Product Manager	1992-09-07	2021-01-01	Product Management
101	20184350	Zufar	Codex	google@gmail.com	081285711519	Junior IT	2000-08-15	2023-03-20	Code-X
102	20234500	Muhammad	Dhani	dhan@gmail.com	0812	FullSTack	2000-10-10	2023-03-20	Code-X
\.


--
-- Name: employe_codex_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.employe_codex_id_seq', 1, false);


--
-- Name: employee_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.employee_id_seq', 100, true);


--
-- Name: employe_codex employe_codex_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employe_codex
    ADD CONSTRAINT employe_codex_pkey PRIMARY KEY (id);


--
-- Name: employee employee_nationalid_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_nationalid_key UNIQUE (nationalid);


--
-- Name: employee employee_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

