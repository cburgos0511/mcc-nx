import React, { createRef, useState } from "react";
import pages from "../../data";

import s from "./footer.module.scss";
import { FooterNav } from "./FooterNav";

const Footer = () => {
  const [items] = useState(
    pages.map((page) => {
      return {
        slug: page.uid,
        name: page.name,
        id: page.id,
        ref: createRef(),
      };
    })
  );

  return (
    <footer className={s.footer}>
      <FooterNav items={items} />
      <div className={s.footer__info}>
        <a
          target="_blank"
          href="https://goo.gl/maps/CAGFMyVTzXn5eEmX9"
          className={s.footer__info__address}
        >
          9001 Q Street, Omaha, NE 68127
        </a>
        {/* <p>hello@millardcommunity.church</p> */}
      </div>
    </footer>
  );
};
export default Footer;
