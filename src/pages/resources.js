import React from "react";
import Head from "next/head";
import Header from "../components/Beliefs/Header";
import Resources from "../components/Resources";
import resources from "../data/resources";

const resourcesPage = () => (
  <>
    <Head>
      <title>Resources</title>
    </Head>
    <Header subtitle="AIDS FOR YOUR BIBLE STUDY" title="Resources" />
    <Resources resources={resources} />
  </>
);

export default resourcesPage;
