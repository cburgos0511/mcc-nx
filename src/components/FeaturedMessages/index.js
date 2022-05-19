import React, { useState } from "react";
import Image from 'next/image'
import s from "./featured.module.scss";
import Message from "./Message";
import AudioPlayer from "react-h5-audio-player";
import Link from "next/link";

const FeaturedMessages = ({ featured }) => {
  const [mp4, setMp4] = useState(null);
  const [player, setPlayer] = useState(false);

  const onHandlePlayer = (url) => {
    setMp4(url);
    setPlayer(true);
  };

  return (
    <section className={s.feature}>
      <h1 className={s.feature__h1}>Latest Podcast Episodes</h1>
      {featured?.map((pc) => (
        <Message
          key={pc.title}
          title={pc.title}
          published={pc.date}
          description={pc.contentSnippet}
          speaker={pc.creator}
          link={pc.link}
          player={pc.enclosure.url}
          onHandlePlayer={onHandlePlayer}
        />
      ))}
      {player && (
        <div className={s.player}>
          <div class={s.close} onClick={() => setPlayer(false)}>
            <Image src='/svgs/cancel.svg' layout="responsive" height='100%' width='100%' />
          </div>
          <AudioPlayer
            className={s.player__inner}
            src={mp4}
            autoPlay
            layout="horizontal-reverse"
            progressJumpSteps={{ backward: 15000, forward: 15000 }}
          />
        </div>
      )}
      <div className={s.feature__link}>
        <Link href="https://anchor.fm/enjoy-the-bible">
          <a className="cta" target="_blank">
            View more <span></span>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedMessages;
