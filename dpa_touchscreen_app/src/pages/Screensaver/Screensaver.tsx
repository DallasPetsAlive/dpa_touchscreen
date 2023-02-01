import animation from "assets/DPAMOSAIC.png";
import classNames from "classnames";
import { FC } from "react";
import { Link } from "react-router-dom";
import { DPARoutes } from "routes";

export const Screensaver: FC = () => {
  const startButton = (
    <Link to={DPARoutes.quiz}>
      <button
        type="button"
        className={classNames("screensaver-cta-button", "button")}
      >
        START
      </button>
    </Link>
  );

  return (
    <div className="screensaver">
      <div className="screensaver-animation">
        <img src={animation} />
        <img className="img2" src={animation} />
      </div>
      <div className="screensaver-cta">
        <span className="cta-text">FIND YOUR BEST FRIEND</span>
        <span>{startButton}</span>
      </div>
    </div>
  );
};
