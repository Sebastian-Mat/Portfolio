import React, { useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap";
import { Link } from "react-router-dom";

const Work = (prop) => {
  let work = useRef(null);

  useEffect(() => {
    TweenMax.from(work.childNodes, 1, {
      delay: 1,
      y: "100px",
      opacity: 0,
      ease: Power3.easeOut,
      stagger: {
        amount: 0.5,
      },
    });
  }, []);

  return (
    <div className="work" ref={(e) => (work = e)}>
      {prop.info.map((item) => (
        <Link to={item.link} key={item.name}>{item.name}</Link>
      ))}
    </div>
  );
};

export default Work;
