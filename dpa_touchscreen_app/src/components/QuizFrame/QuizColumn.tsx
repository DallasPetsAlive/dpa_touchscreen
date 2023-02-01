import { FC, ReactNode } from "react";
import { ButtonProps } from "types/types";

interface props {
  species?: "dog" | "cat";
  buttonProps?: Array<ButtonProps>;
}

export const QuizColumn: FC<props> = (props: props) => {
  const { species, buttonProps } = props;

  console.log(props);

  const buttons = buttonProps
    ? buttonProps.map((buttonProp) => (
        <button type="button" className="button" onClick={buttonProp.onClick}>
          {buttonProp.text}
        </button>
      ))
    : null;

  return (
    <div className="quiz-column">
      {species}
      {buttons}
    </div>
  );
};
