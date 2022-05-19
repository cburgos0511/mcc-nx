import React from "react";
import Link from "next/link";
import Image from 'next/image'
import s from "./home-beliefs.module.scss";

const HomeBeliefs = ({ data }) => {
  return (
    <section className={`${s.homeBeliefs}`}>
      <div className={s.homeBeliefs__img}>
        <Image src="/images/beliefs-bg.jpg" alt="Home Beliefs" height='100%' width='100%' layout="fill" />
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
