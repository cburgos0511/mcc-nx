import React from "react";
import Link from "../Link";
import s from "./header-nav.module.scss";

const HeaderNav = React.forwardRef(({ items, isMenuOpen, toggleNav }, ref) => {
  const openClass = isMenuOpen ? s.open : "";

  return (
    <nav className={`${s.nav} ${openClass}`} ref={ref}>
      {items.map((item, index) => (
        <Link activeClassName={s.active} href={item.slug}>
          <a className={s.nav__item}>{item.name}</a>
        </Link>
      ))}
    </nav>
  );
});

export default HeaderNav;
