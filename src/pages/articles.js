import React from "react";
import Head from "next/head";
import Header from "../components/Beliefs/Header";
import Articles from "../components/Articles";
import articles from "../data/articles";

const articlesPage = () => (
  <>
    <Head>
      <title>Articles</title>
    </Head>
    <Header subtitle="FURTHER YOUR UNDERSTANDING" title="Articles" />
    <Articles articles={articles} />
  </>
);

export default articlesPage;
