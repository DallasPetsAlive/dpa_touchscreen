import catface from "assets/cat-face.png";
import dogface from "assets/dog-face.png";
import classNames from "classnames";
import { FC } from "react";
import { ButtonProps } from "types/types";

interface props {
  species?: "dog" | "cat" | undefined;
  buttonProps?: Array<ButtonProps>;
  side?: "left" | "right";
}

export const QuizColumn: FC<props> = (props: props) => {
  const { species, buttonProps, side = "right" } = props;

  const buttons = buttonProps
    ? buttonProps.map((buttonProp, index) => (
        <button
          type="button"
          className={classNames("button", `button-${(index % 3) + 1}`)}
          onClick={buttonProp.onClick}
        >
          {buttonProp.text}
        </button>
      ))
    : null;

  let speciesImage = null;
  if (species) {
    if (species === "cat") {
      speciesImage = <img src={catface} />;
    } else {
      speciesImage = <img src={dogface} />;
    }
  }

  return (
    <div className={classNames("quiz-column", `quiz-column-${side}`)}>
      {speciesImage}
      {buttons}
    </div>
  );
};
