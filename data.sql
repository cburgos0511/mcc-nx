--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.4

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

ALTER TABLE IF EXISTS ONLY public.message DROP CONSTRAINT IF EXISTS message_speaker_speaker_id_fk;
ALTER TABLE IF EXISTS ONLY public.message DROP CONSTRAINT IF EXISTS message_series_series_id_fk;
DROP INDEX IF EXISTS public.user_user_id_uindex;
DROP INDEX IF EXISTS public.topic_topic_id_uindex;
DROP INDEX IF EXISTS public.speaker_speaker_id_uindex;
DROP INDEX IF EXISTS public.series_series_id_uindex;
DROP INDEX IF EXISTS public.message_message_id_uindex;
ALTER TABLE IF EXISTS ONLY public."user" DROP CONSTRAINT IF EXISTS user_pk;
ALTER TABLE IF EXISTS ONLY public.topic DROP CONSTRAINT IF EXISTS topic_pk;
ALTER TABLE IF EXISTS ONLY public.speaker DROP CONSTRAINT IF EXISTS speaker_pk;
ALTER TABLE IF EXISTS ONLY public.series DROP CONSTRAINT IF EXISTS series_pk;
ALTER TABLE IF EXISTS ONLY public.message DROP CONSTRAINT IF EXISTS message_pk;
DROP TABLE IF EXISTS public."user";
DROP TABLE IF EXISTS public.topic;
DROP TABLE IF EXISTS public.speaker;
DROP TABLE IF EXISTS public.series;
DROP TABLE IF EXISTS public.message;
DROP SCHEMA IF EXISTS public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: message; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.message (
    name text NOT NULL,
    date date DEFAULT now() NOT NULL,
    speaker_id uuid NOT NULL,
    topics text,
    duration text,
    file_size integer,
    series_id uuid,
    verses text,
    message_id uuid NOT NULL,
    s3_id text
);


--
-- Name: series; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.series (
    series_id uuid NOT NULL,
    name text,
    start_date date,
    end_date date
);


--
-- Name: speaker; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.speaker (
    speaker_id uuid NOT NULL,
    first_name text,
    last_name text
);


--
-- Name: topic; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.topic (
    topic_id uuid NOT NULL,
    name text
);


--
-- Name: user; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."user" (
    first_name text NOT NULL,
    last_name text NOT NULL,
    user_id uuid NOT NULL
);


--
-- Data for Name: message; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.message (name, date, speaker_id, topics, duration, file_size, series_id, verses, message_id, s3_id) FROM stdin;
Test	2020-10-04	8e952448-0681-11eb-adc1-0242ac120002	Test	90	1	3eff017c-06b0-11eb-adc1-0242ac120002	\N	7217e134-0681-11eb-adc1-0242ac120002	DVIDS--Audio--The-Contracting-Experience--Episode-8-Mission-Focused-Business-Leaders--Maj.-Gen.-Cameron-Holt-(Part-1)
Romans 1	2020-10-04	20834054-0a58-11eb-adc1-0242ac120002	Romans	89	1	68fe5e54-0a58-11eb-adc1-0242ac120002	\N	c4c7f76d-95dc-4778-addf-c250f2639b44	test
Romans 4	2020-10-15	20834054-0a58-11eb-adc1-0242ac120002	Romans	56	1	68fe5e54-0a58-11eb-adc1-0242ac120002	\N	6a0fe00a-0a4f-11eb-adc1-0242ac120002	test
Romans 3	2020-10-13	20834054-0a58-11eb-adc1-0242ac120002	Romans	54	1	68fe5e54-0a58-11eb-adc1-0242ac120002	\N	6a0fdeca-0a4f-11eb-adc1-0244ac120002	test
Romans 2	2020-10-10	20834054-0a58-11eb-adc1-0242ac120002	Romans	60	1	68fe5e54-0a58-11eb-adc1-0242ac120002	\N	6a0fdc2c-0a4f-11eb-adc1-0246ac120002	test
Revelation 18	2010-10-04	3059c678-0a59-11eb-adc1-0242ac120002	End Times	30	1	a20b376e-0a5b-11eb-adc1-0242ac120002	\N	6a0fe6ea-0a4f-11eb-adc1-0242ac120002	test
Revelation 10	2010-10-04	3059c678-0a59-11eb-adc1-0242ac120002	Revelation	45	1	a20b376e-0a5b-11eb-adc1-0242ac120002	\N	6a0fe7f8-0a4f-11eb-adc1-0242ac120002	test
Revelation 9	2010-10-04	3059c678-0a59-11eb-adc1-0242ac120002	Revelation	48	1	a20b376e-0a5b-11eb-adc1-0242ac120002	\N	9e013d50-0a4f-11eb-adc1-0242ac120002	test
Revelation 19	2010-10-04	3059c678-0a59-11eb-adc1-0242ac120002	End Times	90	1	a20b376e-0a5b-11eb-adc1-0242ac120002	\N	6a0fe5e6-0a4f-11eb-adc1-0242ac120002	test
Mark 11	2019-11-21	4c9a9c82-0a58-11eb-adc1-0242ac120002	Mark	65	1	9b26dfc0-0a5b-11eb-adc1-0242ac120002	\N	6a0fe262-0a4f-11eb-adc1-0242ac120002	test
Mark 13	2019-12-28	4c9a9c82-0a58-11eb-adc1-0242ac120002	Mark	82	1	9b26dfc0-0a5b-11eb-adc1-0242ac120002	\N	6a0fe4b0-0a4f-11eb-adc1-0242ac120002	test
Mark 10	2019-11-20	4c9a9c82-0a58-11eb-adc1-0242ac120002	Mark	54	1	9b26dfc0-0a5b-11eb-adc1-0242ac120002	\N	6a0fe168-0a4f-11eb-adc1-0242ac120002	test
Mark 12	2019-12-22	4c9a9c82-0a58-11eb-adc1-0242ac120002	Mark	76	1	9b26dfc0-0a5b-11eb-adc1-0242ac120002	\N	6a0fe398-0a4f-11eb-adc1-0242ac120002	test
\.


--
-- Data for Name: series; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.series (series_id, name, start_date, end_date) FROM stdin;
68fe5e54-0a58-11eb-adc1-0242ac120002	Romans	2020-10-11	\N
a20b376e-0a5b-11eb-adc1-0242ac120002	Revelation	2019-11-01	\N
9b26dfc0-0a5b-11eb-adc1-0242ac120002	Mark	2019-11-01	\N
3eff017c-06b0-11eb-adc1-0242ac120002	Testing	2020-10-01	2020-10-05
\.


--
-- Data for Name: speaker; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.speaker (speaker_id, first_name, last_name) FROM stdin;
8e952448-0681-11eb-adc1-0242ac120002	Cruz	Burgos
20834054-0a58-11eb-adc1-0242ac120002	Jerod	Santo
3059c678-0a59-11eb-adc1-0242ac120002	Mark	Mancuso
4c9a9c82-0a58-11eb-adc1-0242ac120002	Cory	Eikmeier
3059c678-0a59-11eb-adc1-0242ac120009	Dan	Backens
\.


--
-- Data for Name: topic; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.topic (topic_id, name) FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."user" (first_name, last_name, user_id) FROM stdin;
Cruz	Burgos	9b4f4649-5bce-4dc6-9118-d0a320a8348e
\.


--
-- Name: message message_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_pk PRIMARY KEY (message_id);


--
-- Name: series series_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.series
    ADD CONSTRAINT series_pk PRIMARY KEY (series_id);


--
-- Name: speaker speaker_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.speaker
    ADD CONSTRAINT speaker_pk PRIMARY KEY (speaker_id);


--
-- Name: topic topic_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.topic
    ADD CONSTRAINT topic_pk PRIMARY KEY (topic_id);


--
-- Name: user user_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pk PRIMARY KEY (user_id);


--
-- Name: message_message_id_uindex; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX message_message_id_uindex ON public.message USING btree (message_id);


--
-- Name: series_series_id_uindex; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX series_series_id_uindex ON public.series USING btree (series_id);


--
-- Name: speaker_speaker_id_uindex; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX speaker_speaker_id_uindex ON public.speaker USING btree (speaker_id);


--
-- Name: topic_topic_id_uindex; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX topic_topic_id_uindex ON public.topic USING btree (topic_id);


--
-- Name: user_user_id_uindex; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX user_user_id_uindex ON public."user" USING btree (user_id);


--
-- Name: message message_series_series_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_series_series_id_fk FOREIGN KEY (series_id) REFERENCES public.series(series_id);


--
-- Name: message message_speaker_speaker_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_speaker_speaker_id_fk FOREIGN KEY (speaker_id) REFERENCES public.speaker(speaker_id);


--
-- PostgreSQL database dump complete
--

