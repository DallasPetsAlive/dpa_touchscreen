import blueCuddlyImage from "assets/cuddly_blue.png";
import whiteCuddlyImage from "assets/cuddly_white.png";
import blueDpaLogo from "assets/dpa_blue.png";
import whiteDpaLogo from "assets/dpa_white.png";
import classNames from "classnames";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { DPARoutes } from "routes";

interface props {
  children?: ReactNode;
  theme?: "light" | "dark";
}

export const QuizFrame: FC<props> = (props: props) => {
  const { children, theme = "light" } = props;

  const cuddlyImage = theme === "light" ? blueCuddlyImage : whiteCuddlyImage;
  const dpaImage = theme === "light" ? blueDpaLogo : whiteDpaLogo;
  const homeButtonClasses =
    theme === "light" ? ["home-button", "home-button-light"] : "home-button";

  const homeButton = (
    <Link to={DPARoutes.home}>
      <button type="button" className={classNames(homeButtonClasses)}>
        HOME
      </button>
    </Link>
  );

  return (
    <div className="quiz">
      <img
        className={classNames("cuddly", "cuddly-" + theme)}
        src={cuddlyImage}
      />
      <img
        className={classNames("dpa-logo", "dpa-logo-" + theme)}
        src={dpaImage}
      />
      {homeButton}
      <div className="quiz-frame">{children}</div>
    </div>
  );
};
