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

function App() {
  let nav = useRef(null);

  const info = [
    {
      name: "PMB System",
      link: "pmb-sys",
      description:
        "Little project wich can store Pharmacys and Medicaments information by Local Storage, and can export PDF and JSON bills. Made it with HTML, JS, CSS, Materialize CSS and GSAP",
      date: "2020",
      git: "https://github.com/Sebastian-Mat/PM-System",
    },
    {
      name: "Pheripher",
      link: "pheripher",
      description:
        "Landing Page made with HTML, CSS and Semantic UI to the company Pheripher",
      date: "2020",
      git: "https://github.com/Sebastian-Mat/Pheripher-LD",
    },
    {
      name: "Port Prot",
      link: "port-prot",
      description:
        "A front-end portfolio prototype made with React, CSS and Bootstrap",
      date: "2020",
      git: "https://github.com/Sebastian-Mat/React-Portfolio",
    },
  ];

  useEffect(() => {
    TweenMax.from(nav.childNodes, {
      y: "-35px",
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
      </Switch>
    </Router>
  );
}

export default App;
