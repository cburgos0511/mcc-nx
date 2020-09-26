import React from "react";
import Link from "next/link";
import s from "./home-beliefs.module.scss";

const HomeBeliefs = ({ data }) => {
  return (
    <section className={`${s.homeBeliefs}`}>
      <div className={s.homeBeliefs__img}>
        <div className={s.homeBeliefs__img__img} />
      </div>
      <div className={s.homeBeliefs__wrapper}>
        <div className={`${s.verse}`}>
          <div className={`${s.verse__bg}`}></div>
          <blockquote>{data.verse}</blockquote>
        </div>
        <div className={s.content}>
          <h4>{data.heading}</h4>
          <p>{data.content}</p>
          <Link href="/beliefs">
            <a className="cta">
              Learn More <span></span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBeliefs;
