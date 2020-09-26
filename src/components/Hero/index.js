import React from "react";

import s from "./hero.module.scss";

const Hero = ({ data, home }) => {
  const modifier = home ? s.heroHome : "";

  return (
    <section className={`${s.hero} ${modifier}`}>
      {home && <div className={s.heroImg}></div>}
      <div className={s.hero__wrapper}>
        {home && (
          <div className={s.homeHeroContent}>
            <h1>Millard Community Church</h1>

            <div className={s.homeHeroContent__about}>
              <h4>About US</h4>
              <p>{data.about}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
