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
  theme?: "light" | "dark" | "yellow";
  showIntro?: boolean;
  title?: string;
}

export const QuizFrame: FC<props> = (props: props) => {
  const { children, title, theme = "light", showIntro = true } = props;

  const cuddlyImage = theme === "light" ? blueCuddlyImage : whiteCuddlyImage;
  const dpaImage = theme === "light" ? blueDpaLogo : whiteDpaLogo;
  const homeButtonClasses =
    theme === "light" ? ["home-button", "home-button-light"] : "home-button";

  const homeButton = (
    <Link to={DPARoutes.home}>
      <button type="button" className={classNames("button", homeButtonClasses)}>
        HOME
      </button>
    </Link>
  );

  const intro = showIntro ? (
    <div className="intro">
      <div className="intro-title">FIND YOUR BEST FRIEND</div>
      <div className="intro-text">
        Puppy kitty ipsum dolor sit good dog throw wet nose paws barky dragging
        tuxedo running nest cockatiel tongue. Harness slobbery birds pet
        supplies dragging paws cockatiel bird commands treats scratch left paw
        food chew stay grooming crate cage park paws.
      </div>
    </div>
  ) : null;

  const pageTitle = title ? (
    <div className="quiz-page-title">{title}</div>
  ) : null;

  return (
    <div className={classNames("quiz", `quiz-${theme}`)}>
      <img className="cuddly" src={cuddlyImage} />
      <img className="dpa-logo" src={dpaImage} />
      {homeButton}
      <div className="quiz-frame">
        {intro}
        {pageTitle}
        <div className="quiz-frame-children">{children}</div>
      </div>
    </div>
  );
};
