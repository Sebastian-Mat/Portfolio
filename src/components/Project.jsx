import React, { useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";

const Project = (prop) => {
  let project = useRef(null);

  useEffect(() => {
    TweenMax.from(project.childNodes, {
      y: "100px",
      duration: 1,
      delay: 0.5,
      ease: Power3.easeOut,
      opacity: 0,
      stagger: {
        amount: 0.1,
      },
    });
  }, []);

  return (
    <div
      className="project"
      ref={(el) => {
        project = el;
      }}
    >
      <h1>{prop.info.name}</h1>
      <h4>{prop.info.year}</h4>
      <h2>{prop.info.description}</h2>
      <a href={prop.info.git} className="repo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>
      <div className="pagination">
        <div className="pag">
          <Link to={prop.info.prev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </Link>
        </div>
        <div className="pag">
          <Link to={prop.info.next}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
