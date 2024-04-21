import React, { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import IsElementXPercentInViewport from "../components/util/IsElementXPercentInViewport";
import { useAtom, useAtomValue } from "jotai";
import {
  portfolioAtom,
  mobileNavAtom,
  activeAtom,
  inMobileAtom,
  scrollAtom,
} from "../jotai/index";

const Nav = () => {
  /********************************************* Start of Initialize context state elements *********************************************/

  // Call Context
  const portfolioState = useAtomValue(portfolioAtom);
  // Handle mobile class for operating menu
  let [mobileNavs, setMobileNavs] = useAtom(mobileNavAtom);
  // Handles checking wheather the nav should change look based on window scroll position
  let [scrolls, setScrolls] = useAtom(scrollAtom);
  // Handle setting active class one navbar element
  let [active, setActive] = useAtom(activeAtom);
  // Navigation Accessibility
  let [inMobile, setInMobile] = useAtom(inMobileAtom);

  /********************************************* End of Initialize context state elements *********************************************/

  // Navigation mobile menu controller upon clicking the hamburger menu
  const onClickHandler = (e) => {
    e.preventDefault();
    if (e.target.href !== undefined) {
      setMobileNavs((mobileNavs = false));
    } else {
      setMobileNavs(mobileNavs === false ? true : false);
    }
  };

  // Homepage specific styles controller based upon scroll effects

  let ActiveSetter = () => {
    document.addEventListener("scroll", () => {
      // Checks which nav element should be active
      if (
        IsElementXPercentInViewport(document.querySelector("#home"), 10) ===
        true
      ) {
        setActive((active = "home"));
      } else if (
        IsElementXPercentInViewport(
          document.querySelector("#expertise"),
          10
        ) === true
      ) {
        setActive((active = "expertise"));
      } else if (
        IsElementXPercentInViewport(
          document.querySelector("#portfolio"),
          10
        ) === true
      ) {
        setActive((active = "portfolio"));
      } else if (
        IsElementXPercentInViewport(document.querySelector("#contact"), 10) ===
        true
      ) {
        setActive((active = "contact"));
      }

      // Checks nav style should change
      if (window.scrollY >= 120) {
        setScrolls((scrolls = true));
      } else {
        setScrolls((scrolls = false));
      }
    });
  };

  // MobileNav specific styles controller based upon scroll effects
  const inMobileCheck = () => {
    if (window.innerWidth < 900) {
      setInMobile((inMobile = true));
    } else {
      setInMobile((inMobile = false));
      setMobileNavs((mobileNavs = false));
    }
  };

  /********************************************* Call lifecycle methods *********************************************/

  useEffect(() => {
    // Check initial window to adjust state
    if (window.scrollY >= 120) setScrolls(scrolls === false ? true : false);
    if (window.innerWidth < 900) setScrolls(scrolls === false ? true : false);
    // Add event Listener for both events
    ActiveSetter();
    //tab check
    inMobileCheck();
    window.addEventListener("resize", inMobileCheck);
    // eslint-disable-next-line
  }, []);

  return (
    <nav
      className={
        (mobileNavs === false ? "" : "mobile-menu") +
        " " +
        (scrolls === false ? "" : "scrolled")
      }
    >
      <button
        className="icon"
        id="myMenuFunction"
        onClick={onClickHandler}
        aria-label={mobileNavs === false ? "Menu Closed" : "Menu Open"}
      >
        <svg
          className="inline-svg"
          version="1.1"
          x="0px"
          y="0px"
          width="40px"
          height="40px"
          viewBox="0 0 23.5 25"
        >
          <title>Mobile Menu</title>
          <g className="svg-menu-toggle">
            <path
              className="bar"
              d="M20.945,8.75c0,0.69-0.5,1.25-1.117,1.25H3.141c-0.617,0-1.118-0.56-1.118-1.25l0,0c0-0.69,0.5-1.25,1.118-1.25h16.688C20.445,7.5,20.945,8.06,20.945,8.75L20.945,8.75z"
            ></path>
            <path
              className="bar"
              d="M20.923,15c0,0.689-0.501,1.25-1.118,1.25H3.118C2.5,16.25,2,15.689,2,15l0,0c0-0.689,0.5-1.25,1.118-1.25 h16.687C20.422,13.75,20.923,14.311,20.923,15L20.923,15z"
            ></path>
            <path
              className="bar"
              d="M20.969,21.25c0,0.689-0.5,1.25-1.117,1.25H3.164c-0.617,0-1.118-0.561-1.118-1.25l0,0 c0-0.689,0.5-1.25,1.118-1.25h16.688C20.469,20,20.969,20.561,20.969,21.25L20.969,21.25z"
            ></path>
            <rect fill="none"></rect>
          </g>
        </svg>
      </button>
      <div id="anchors">
        <AnchorLink
          href="#home"
          onClick={onClickHandler}
          active={active === "home" ? "active" : ""}
          tabIndex={mobileNavs === false && inMobile !== false ? "-1" : "0"}
        >
          HOME
        </AnchorLink>
        <AnchorLink
          href="#expertise"
          onClick={onClickHandler}
          active={active === "expertise" ? "active" : ""}
          tabIndex={mobileNavs === false && inMobile !== false ? "-1" : "0"}
        >
          EXPERTISE
        </AnchorLink>
        <AnchorLink
          href="#portfolio"
          onClick={onClickHandler}
          active={active === "portfolio" ? "active" : ""}
          tabIndex={mobileNavs === false && inMobile !== false ? "-1" : "0"}
        >
          PORTFOLIO
        </AnchorLink>
        <AnchorLink
          href="#contact"
          onClick={onClickHandler}
          active={active === "contact" ? "active" : ""}
          tabIndex={mobileNavs === false && inMobile !== false ? "-1" : "0"}
        >
          CONTACT
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Nav;
