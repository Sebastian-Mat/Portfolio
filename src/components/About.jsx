import React, { useEffect } from "react";
import { TweenMax, Power3 } from "gsap";

const About = () => {
  useEffect(() => {
    TweenMax.from("#about", 1, {
      delay: 2,
      y: "20px",
      opacity: 0,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <div className="about">
      <h1 id="about">About</h1>
    </div>
  );
};

export default About;
