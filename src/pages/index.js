import Head from "next/head";
import Hero from "../components/Hero";
import MeetingTimes from "../components/MeetingTimes";
import HomeBeliefs from "../components/OurBeliefsSection";
import FeaturedMessages from "../components/FeaturedMessages";
import useSWR from "swr";
import pages from "../data";

export default function Home() {
  // const { data } = useSWR("/api/rss-feed");
  const { data: msg } = useSWR("/api/message");

  console.log(msg);

  const pageData = pages[0].data;

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero home data={pageData.HomeHero} />
      <MeetingTimes times={pageData.MeetingTimes} />
      <HomeBeliefs data={pageData.OurBeliefsSection} />
      <FeaturedMessages />
    </div>
  );
}
//podcast={allPodcastRssFeedEpisode}
