import React, { useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap";

const About = () => {
  let about = useRef(null);
  useEffect(() => {
    TweenMax.from(about.childNodes, 1, {
      delay: 1,
      y: "100px",
      opacity: 0,
      ease: Power3.easeOut,
      stagger: {
        amount: 0.5,
      },
    });

    const img1 = about.childNodes[3];
    const img2 = about.childNodes[4];
    const img3 = about.childNodes[5];

    window.addEventListener("mousemove", (e) => {
      img1.setAttribute(
        "style",
        "top :" + (e.pageY - 225) + "px; left :" + (e.pageX - 200) + "px"
      );
      img2.setAttribute(
        "style",
        "top :" + (e.pageY - 225) + "px; left :" + (e.pageX - 200) + "px"
      );
      img3.setAttribute(
        "style",
        "top :" + (e.pageY - 225) + "px; left :" + (e.pageX - 200) + "px"
      );
    });
  }, []);

  return (
    <div className="about" ref={(e) => (about = e)}>
      <h2>
        Hi! I am <span>Sebastian Matute</span> and I am student of <br />
        Systems Engineering, born in <b>Barranquilla // Colombia.</b>
      </h2>
      <h3>
        With knowledge in Java, Python, HTML, CSS // SCSS, Javascript, React,
        PHP and MySQL
      </h3>
      <h4>
        I am a well-organized person, looking for new challenges and ways to
        improve my skills, responsable, hard-worker with high attention to
        detail, and always wanted to learn more about new technologies and
        things with wich I can improve as a worker // person.
      </h4>
      <div className="img-1 img"></div>
      <div className="img-2 img"></div>
      <div className="img-3 img"></div>
    </div>
  );
};

export default About;
