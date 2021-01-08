import React, { useEffect } from "react";
import { TweenMax, Power3 } from "gsap";

const Work = () => {
  useEffect(() => {
    TweenMax.from("#work", 1, {
      y: "20px",
      delay: 2,
      opacity: 0,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <div className="work">
      <h1 id="work">Work</h1>
    </div>
  );
};

export default Work;
