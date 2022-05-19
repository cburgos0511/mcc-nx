import React from "react";
import Image from 'next/image'
import s from "./hero.module.scss";
import { useMediaQuery } from '../../hooks'

const Hero = ({ data }) => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <section className={`${s.hero} ${s.heroHome}`}>
      <div className={s.heroImg}>
        <Image src='/images/home-hero.jpg' width='100%' height='100%' layout='fill' />
      </div>
      <div className={s.hero__wrapper}>
        <div className={s.homeHeroContent}>
          <h1>Millard Community Church</h1>
          <div className={s.homeHeroContent__about}>
            <h4>About US</h4>
            <p>{data.about}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
