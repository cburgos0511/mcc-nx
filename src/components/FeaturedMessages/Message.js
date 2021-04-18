import React from "react";
import s from "./message.module.scss";
import PlayButton from "../../../svgs/play-btn.svg";

const Message = ({ title, link, onHandlePlayer, description, player }) => {
  return (
    <div className={s.message}>
      <div className={s.message__logo} onClick={() => onHandlePlayer(player)}>
        <PlayButton />
      </div>
      <p className={s.message__wrapper__title}>{title}</p>

      <div className={s.message__info}>
        <p className={s.message__info__description}>{description}</p>
        <a href={link} target="_blank" className={s.message__info__link}>
          Listen on Anchor.fm
        </a>
      </div>
    </div>
  );
};

export default Message;
