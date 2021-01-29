import React, { useEffect, useRef } from "react";

import "./Normalize.scss";
import "./App.scss";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import { TweenMax, Power3 } from "gsap";

import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";

function App() {
  let nav = useRef(null);

  const info = [
    {
      name: "PMB Sys",
      link: "/pmb-sys",
      description:
        "Little project wich can store Pharmacys and Medicaments information by Local Storage, and can export PDF and JSON bills. Made it with HTML, JS, CSS, Materialize CSS and GSAP",
      year: "2020",
      git: "https://github.com/Sebastian-Mat/PMB-System",
      next: "/pheripher",
      prev: "/mm-bb"
    },
    {
      name: "Pheripher",
      link: "/pheripher",
      description:
        "Landing Page made with HTML, CSS and Semantic UI to the company Pheripher",
      year: "2020",
      git: "https://github.com/Sebastian-Mat/Pheripher-LP",
      next: "/port-prot",
      prev: "/pmb-sys"
    },
    {
      name: "Port Prot",
      link: "/port-prot",
      description:
        "A front-end portfolio prototype made with React, CSS and Bootstrap",
      year: "2020",
      git: "https://github.com/Sebastian-Mat/React-Portfolio",
      next: "/mm-bb",
      prev: "/pheripher"
    },
    {
      name: "MMBB",
      link: "/mm-bb",
      description:
        "Landing Page made with Materialize CSS, CSS, GSAP for a company concept called Lommejobber",
      year: "2020",
      git: "https://github.com/Sebastian-Mat/Lommejobber-LP",
      next: "/pmb-sys",
      prev: "/port-prot"
    },
  ];

  useEffect(() => {
    TweenMax.from(nav.childNodes, {
      y: "-100px",
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
    <Router>
      <div
        className="nav"
        ref={(el) => {
          nav = el;
        }}
      >
        <NavLink to="/About" id="link">
          About
        </NavLink>
        <NavLink to="/" id="link" exact>
          Work
        </NavLink>
        <NavLink to="/Contact" id="link">
          Touch
        </NavLink>
      </div>
      <Switch>
        <Route path="/" exact>
          <Work info={info} />
        </Route>
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        {info.map((item) => (
          <Route path={item.link} key={item.name}>
            <Project info={item} />
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
