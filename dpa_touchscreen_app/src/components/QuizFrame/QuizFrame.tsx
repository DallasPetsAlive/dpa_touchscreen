import blueCuddlyImage from "assets/cuddly_blue.png";
import whiteCuddlyImage from "assets/cuddly_white.png";
import blueDpaLogo from "assets/dpa_blue.png";
import whiteDpaLogo from "assets/dpa_white.png";
import classNames from "classnames";
import { FC, ReactNode, useEffect, useState } from "react";
import { useIdleTimer } from "react-idle-timer";
import { Link, useNavigate } from "react-router-dom";
import { DPARoutes } from "routes";

import ModalUnstyled from "@mui/base/ModalUnstyled";
import { Box } from "@mui/system";

interface props {
  children?: ReactNode;
  theme?: "light" | "dark" | "yellow";
  showIntro?: boolean;
  title?: string;
  introTitle?: string;
  introText?: "dog" | "cat" | "main" | "results";
}

export const QuizFrame: FC<props> = (props: props) => {
  const {
    children,
    title,
    introText,
    theme = "light",
    showIntro = true,
    introTitle = "FIND YOUR BEST FRIEND",
  } = props;

  const navigate = useNavigate();

  const [remaining, setRemaining] = useState<number>(0);
  const [showConfimation, setShowConfirmation] = useState<boolean>(false);

  let introFinalText = "We know that choosing the perfect pet can be a big decision, "
    + "and we're here to help make the process a little easier. Our quiz will "
    + "ask you a few questions, and then show you pets that match your answers. "
    + "Whether you're looking for a cuddly cat or a playful pup, we're confident "
    + "that we can help you find your new best friend. So let's get started and find your perfect match!";
  if (introText === "dog") {
    introFinalText = "Ready to find your pawfect match? Tired of swiping left on dating apps? "
      + "Swipe right on your new furry friend with our dog adoption matchmaking. "
      + "Unleash the love: find your match and gain a loyal companion!";
  } else if (introText === "cat") {
    introFinalText = "Let us help you find the purrfect match with our cat adoption matchmaking! "
      + "Don't let finding the right cat be a cat-astrophe. Our adoption program uses science and "
      + "intuition to make the perfect match!";
  } else if (introText === "results") {
    introFinalText = "Ready to apply? Start the adoption application.";
  }

  const cuddlyImage = theme === "light" ? blueCuddlyImage : whiteCuddlyImage;
  const dpaImage = theme === "light" ? blueDpaLogo : whiteDpaLogo;
  let homeButtonClasses = ["home-button"];
  if (theme === "light") homeButtonClasses.push("home-button-light");
  else if (theme === "yellow") homeButtonClasses.push("home-button-yellow");

  const onIdle = () => {
    navigate(DPARoutes.home, { replace: true });
  };

  const onActive = () => {
    setShowConfirmation(false);
  };

  const onPrompt = () => {
    setShowConfirmation(true);
  };

  const { getRemainingTime, activate } = useIdleTimer({
    onIdle,
    onActive,
    onPrompt,
    promptBeforeIdle: 1000 * 60, // 1 minute
    timeout: 1000 * 60 * 5, // 5 minutes
    throttle: 500,
  });

  const handleStillHere = () => {
    activate();
    setShowConfirmation(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000));
    }, 500);
    return () => clearInterval(interval);
  });

  const homeButton = (
    <Link to={DPARoutes.home}>
      <button type="button" className={classNames("button", homeButtonClasses)}>
        HOME
      </button>
    </Link>
  );

  const intro = showIntro ? (
    <div className="intro">
      <div className="intro-title">{introTitle}</div>
      <div className="intro-text">{introFinalText}</div>
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
      <ModalUnstyled open={showConfimation} className="idle-modal">
        <Box className="idle-modal-box">
          <div className="confirmation-modal">
            <h1>Are you still there?</h1>
            <button
              type="button"
              className="button"
              onClick={() => handleStillHere()}
            >
              I'M HERE!
            </button>
            <p>Returning to the home screen in {remaining} seconds...</p>
          </div>
        </Box>
      </ModalUnstyled>
    </div>
  );
};
