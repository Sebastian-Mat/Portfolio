import React, { useEffect, useRef } from "react";

import "./Normalize.scss";
import "./App.scss";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import { TweenMax, Expo } from "gsap";

import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {

  let nav = useRef(null);

  useEffect(() => {
      TweenMax.from(nav.childNodes, {
      y: "-35px",
      duration: 0.5,
      delay: 1,
      ease: Expo.easeInOut,
      opacity: 0,
      stagger: {
        amount:0.1
      }
    });
  }, []);
  return (
    <Router>
      <div className="nav" ref={el => {nav = el}}>
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
      <div className="screen">
        <Switch>
          <Route path="/" component={Work} exact />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
