import Head from "next/head";
import Hero from "../components/Hero";
import MeetingTimes from "../components/MeetingTimes";
import HomeBeliefs from "../components/OurBeliefsSection";
import FeaturedMessages from "../components/FeaturedMessages";
import { homeData } from "../data";

export default function Home({ podcast, pageData }) {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero data={pageData.HomeHero} />
      <MeetingTimes times={pageData.MeetingTimes} />
      <HomeBeliefs data={pageData.OurBeliefsSection} />
      <FeaturedMessages featured={podcast?.items.slice(0, 4)} />
    </div>
  );
}

export const getStaticProps = async () => {
  const podcast = await fetch("http://localhost:3015/api/rss-feed").then((res) => res.json());

  return {
    props: {
      podcast,
      pageData: homeData.data,
    },
    revalidate: 60000,
  };
}