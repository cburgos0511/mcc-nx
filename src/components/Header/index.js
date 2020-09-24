import React, { useState, useRef, createRef, useEffect } from "react";
import { gsap } from "gsap";
import Logo from "../../../svgs/mcc-type.svg";
import HeaderNav from "./HeaderNav";
import HeaderBurger from "./HeaderBurger";
import pages from "../../data";
import { useMediaQuery } from "../../hooks";
import useScrollLock from "use-scroll-lock";

import s from "./header.module.scss";

const Header = () => {
  //Setup state to determine if menu is open or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 989px)");

  //Loop through the pages and create a state of items with refs
  //to use for our animation
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
  const handleScroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("header").style.background = "#fff";
      document.getElementById("header").style.boxShadow =
        "0 5px 30px 0 rgba(0, 0, 0, 0.2)";
    } else {
      document.getElementById("header").style.background = "transparent";
      document.getElementById("header").style.boxShadow = "0 0 0 0 transparent";
    }
  };

  useEffect(() => {
    if (isSmallScreen) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });

  //Setup a timeline to use
  const [menuTL] = useState(
    gsap.timeline({
      paused: true,
      defaults: { duration: 1, ease: "expo.out" },
    })
  );

  //Setup the Nav ref
  const navRef = useRef();

  //Setup menuTL things and account for window resize events
  useEffect(() => {
    //Create an array with just the ref of the nav items
    const itemsRefs = items.map((item) => item.ref.current);

    //Build the timeline
    if (isSmallScreen) {
      menuTL
        .fromTo(navRef.current, { opacity: 0 }, { opacity: 1 })
        .fromTo(
          itemsRefs,
          { autoAlpha: 0, y: 48 },
          { autoAlpha: 1, y: 0, stagger: 0.1 },
          "-=0.4"
        )
        .reverse();
    } else {
      menuTL.seek(0).clear().pause();
      gsap.set([navRef.current, itemsRefs], { clearProps: "all" });
    }
  }, [isSmallScreen, items, menuTL]);

  //Run menuTL base on Menu State
  useEffect(() => {
    menuTL.reversed(!isMenuOpen);
  }, [isMenuOpen, menuTL]);

  //ScrollLock the body when the menu is open
  useScrollLock(isMenuOpen);

  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="header" className={s.header}>
      <div className={s.header__wrapper}>
        <div className={s.header__logo}>
          <Logo />
        </div>
        <HeaderNav
          header
          items={items}
          ref={navRef}
          isMenuOpen={isMenuOpen}
          toggleNav={toggleNav}
        />
        <HeaderBurger toggleNav={toggleNav} isMenuOpen={isMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
