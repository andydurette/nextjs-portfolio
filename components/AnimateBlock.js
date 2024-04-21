import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import IsElementXPercentInViewport from "../components/util/IsElementXPercentInViewport";

const AnimateBlock = (props) => {
  const [isToggledOpacity, setToggledOpacity] = useState(false);
  const [isToggledMarginBottom, setToggledMarginBottom] = useState(false);
  const [isToggledMarginTop, setToggledMarginTop] = useState(false);

  let springValue = {
    opacity: isToggledOpacity ? 1 : 0,
    marginBottom: isToggledMarginBottom ? 0 : -200,
    marginTop: isToggledMarginTop ? 0 : 200,
    delay: props.fadeDelay,
  };

  let fade = useSpring({ ...springValue });

  let ExpertiseAnimation = () => {
    document.addEventListener("scroll", () => {
      // Checks which nav element should be active
      if (
        IsElementXPercentInViewport(
          document.querySelector("#expertise"),
          10
        ) === true
      ) {
        setToggledMarginBottom(!isToggledMarginBottom);
        setToggledMarginTop(!isToggledMarginTop);
        setToggledOpacity(!isToggledOpacity);
      }
    });
  };

  useEffect(() => {
    // Add event Listener for animation events
    ExpertiseAnimation();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <animated.img
        style={fade}
        key={props.skill}
        src={props.src}
        alt={props.alt}
        loading="lazy"
      />
      <span className="tooltiptext">{props.toolTipText}</span>
    </>
  );
};

export default AnimateBlock;
