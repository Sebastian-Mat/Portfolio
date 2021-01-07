import React, { useEffect } from "react";
import { TweenMax, Power3 } from "gsap";

const Contact = () => {
  useEffect(() => {
    TweenMax.from("#contact", 1, {
      delay: 2,
      y: "20px",
      opacity: 0,
      ease: Power3.easeOut,
    });
  }, []);
  return (
    <div className="contact">
      <h1 id="contact">Contact</h1>
    </div>
  );
};

export default Contact;
