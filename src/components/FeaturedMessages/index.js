import React, { useState } from "react";
import s from "./featured.module.scss";
import Message from "./Message";
import AudioPlayer from "react-h5-audio-player";
import Close from "../../../svgs/cancel.svg";

const FeaturedMessages = ({ featured }) => {
  const [mp4, setMp4] = useState(null);
  const [player, setPlayer] = useState(false);

  const onHandlePlayer = (url) => {
    setMp4(url);
    setPlayer(true);
  };

  return (
    <section className={s.feature}>
      <h1 className={s.feature__h1}>Featured Messages</h1>
      {featured?.map((pc) => (
        <Message
          key={pc.message_id}
          title={pc.name}
          published={pc.date}
          speaker={pc.speaker_id}
          url={pc.s3_id}
          onHandlePlayer={onHandlePlayer}
        />
      ))}
      {player && (
        <div className={s.player}>
          <div class={s.close} onClick={() => setPlayer(false)}>
            <Close />
          </div>
          <AudioPlayer
            className={s.player__inner}
            src={`https://mcc-s3.s3.us-east-2.amazonaws.com/${mp4}.mp3`}
            autoPlay
            layout="horizontal-reverse"
            progressJumpSteps={{ backward: 15000, forward: 15000 }}
          />
        </div>
      )}
    </section>
  );
};

export default FeaturedMessages;
