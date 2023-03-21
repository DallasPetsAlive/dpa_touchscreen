import catgif from "assets/catgif.gif";
import animation from "assets/collage_animated.gif";
import classNames from "classnames";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DPARoutes } from "routes";

export const Screensaver: FC = () => {
  const [count, setCount] = useState<number>(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 30) return 0;
        else return prevCount + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  let catGifElement = null;
  if (15 < count && count <= 20) {
    catGifElement = <img src={catgif} className="catgif" />;
  }

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
      {catGifElement}
    </div>
  );
};
