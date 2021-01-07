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
    TweenMax.from("#img", 1, {
        y: "20px",
        delay: 2,
        opacity: 0,
        ease: Power3.easeOut,
      });
  }, []);

  return (
    <div className="work">
      <h1 id="work">Work</h1>
      <img id="img" src="https://images.squarespace-cdn.com/content/v1/5442b6cce4b0cf00d1a3bef2/1599085225108-P8VOM6IL9ERON0B7Z9Q9/ke17ZwdGBToddI8pDm48kJB_XQ3Dc5SllUdWbukQo69Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx6nEhjlnWL4Jp2yRUKnAHfAtKyAEGaEsOmaOT_zZoS2TtcLgPBsTCXYa-xKfKtauE/Most-Prominent-Sustainble-Streetwear-Brands.jpg?format=1500w" alt=""/>
    </div>
  );
};

export default Work;
