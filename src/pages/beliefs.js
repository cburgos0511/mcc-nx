import React from "react";
import Head from "next/head";
import Header from "../components/Beliefs/Header";
import PrincipalsAndBeliefs from "../components/Beliefs/PrinciplesAndBeliefs";
import pages from "../data";
const Beliefs = () => {
  const data = pages[1].data;
  return (
    <>
      <Head>
        <title>Beliefs</title>
      </Head>
      <Header subtitle="WHAT WE BELIEVE" title="Principles & Practices" />
      <PrincipalsAndBeliefs principles={data} />
    </>
  );
};

export default Beliefs;
