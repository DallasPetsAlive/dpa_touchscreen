import { FC } from "react";

import animation from "../../assets/DPAMOSAIC.png";

export const Screensaver: FC = () => {
  const startButton = (
    <button type="button" className="screensaver-cta-button">
      START
    </button>
  );

  return (
    <div className="screensaver">
      <div className="screensaver-animation">
        <img src={animation} alt="mosaic animation" />
      </div>
      <div className="screensaver-cta">
        <span className="cta-text">FIND YOUR BEST FRIEND</span>
        <span>{startButton}</span>
      </div>
    </div>
  );
};
