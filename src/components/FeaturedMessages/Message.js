import React, { useState } from "react";
import s from "./message.module.scss";
import PlayButton from "../../../svgs/play-btn.svg";

const Message = ({ title, url, onHandlePlayer, description }) => {
  console.log(url);

  return (
    <div className={s.message}>
      <div className={s.message__logo} onClick={() => onHandlePlayer(url)}>
        <PlayButton />
      </div>
      <p className={s.message__wrapper__title}>{title}</p>

      <div className={s.message__info}>
        <p className={s.message__info__description}>{description}</p>
        <a href={url} target="_blank" className={s.message__info__link}>
          Listen on Anchor.fm
        </a>
      </div>
    </div>
  );
};

export default Message;
