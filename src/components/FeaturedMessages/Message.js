import React, { useState } from "react";
import s from "./message.module.scss";
import PlayButton from "../../../svgs/play-btn.svg";

const Message = ({ speaker, published, title, url, onHandlePlayer }) => {
  return (
    <div className={s.message}>
      <div className={s.message__logo} onClick={() => onHandlePlayer(url)}>
        <PlayButton />
      </div>
      <p className={s.message__wrapper__title}>{title}</p>
      <div className={s.message__info}>
        <p className={s.message__info__by}>By: {speaker}</p>
        <div className={s.divider} />
        <p className={s.message__info__published}>#bible</p>
      </div>
    </div>
  );
};

export default Message;
