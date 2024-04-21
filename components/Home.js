"use client";
import React, { useEffect, useState } from "react";
import IsElementXPercentInViewport from "../components/util/IsElementXPercentInViewport";
import { useSpring, animated } from "react-spring";
import { useMediaQuery } from "react-responsive";
import * as easings from "d3-ease";
const Home = () => {
  const [isToggledOpacity, setToggledOpacity] = useState(false);

  let HomeAnimation = () => {
    document.addEventListener("scroll", () => {
      // Checks which nav element should be active
      if (
        IsElementXPercentInViewport(document.querySelector("#home"), 10) ===
        true
      ) {
        setToggledOpacity(!isToggledOpacity);
      }
    });
  };

  const fade1 = useSpring({
    opacity: isToggledOpacity ? 1 : 0,
    delay: 0,
    config: { duration: 1000, easing: easings.easeCubic },
  });

  const fade2 = useSpring({
    opacity: isToggledOpacity ? 1 : 0,
    delay: 0,
    config: { duration: 1000, easing: easings.easeCubic },
    lineHeight: "25px",
  });

  useEffect(() => {
    // Add event Listener for animation events
    HomeAnimation();

    if (
      IsElementXPercentInViewport(document.querySelector("#home"), 10) === true
    ) {
      setToggledOpacity(!isToggledOpacity);
    }
    // eslint-disable-next-line
  }, []);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 901px)",
  });

  //console.log(isDesktopOrLaptop)
  return (
    <React.Fragment>
      {isDesktopOrLaptop ? (
        <animated.section
          id="home"
          className="flex flex-col text-white bg-[#262625] h-[100vh] min-h-[680px] w-full bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(/img/andyDuretteC.jpg)` }}
        >
          <div className="center-container">
            <div className="intro-container">
              <div className="intro-text pt-[80px] align-middle transition delay-100">
                <animated.div
                  style={fade1}
                  className="
                intro-heading
                text-[100px] font-extralight transition delay-100 mb-[5px] leading-[80px]
                "
                >
                  I&lsquo;m Andy
                </animated.div>
                <animated.div
                  style={fade2}
                  className="
                intro-lead-in font-[17px] italic leading-[20px] mt-[40px]  transition delay-100
                
                "
                >
                  A Full Stack Developer &#38; Designer <br />
                  specialized in React, Node Js and AWS
                </animated.div>
              </div>
            </div>
          </div>
        </animated.section>
      ) : (
        <section
          id="home"
          className="flex flex-col text-white bg-[#262625] h-[100vh] min-h-[680px] w-full bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(/img/andyDuretteMobileC.jpg)` }}
        >
          <div className="center-container">
            <div className="intro-container">
              <div className="intro-text">
                <animated.div
                  style={fade1}
                  className="
                intro-heading
                text-[100px] font-extralight transition delay-100 mb-[5px] leading-[80px]
                "
                >
                  I&lsquo;m Andy
                </animated.div>
                <animated.div
                  style={fade2}
                  className="
                intro-lead-in font-[17px] italic leading-[20px] mt-[40px]  transition delay-100
                
                "
                >
                  A React &amp; Node JS Full Stack Developer
                </animated.div>
              </div>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default Home;
