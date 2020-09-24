import React from "react";
import Link from "../Link";
import s from "./footer-nav.module.scss";

export const FooterNav = ({ items }) => {
  return (
    <nav className={s.nav}>
      {items.map((item, index) => (
        <Link href={item.slug} key={index}>
          <a className={s.nav__items}>{item.name}</a>
        </Link>
      ))}
    </nav>
  );
};
