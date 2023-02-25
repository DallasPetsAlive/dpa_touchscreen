import { QuizColumn } from "components/QuizFrame/QuizColumn";
import { QuizFrame } from "components/QuizFrame/QuizFrame";
import { FC } from "react";
import { ButtonProps } from "types/types";

interface sizeProps {
  setSize: (size: string) => void;
}

export const Size: FC<sizeProps> = (props: sizeProps) => {
  const { setSize } = props;

  const buttonProps: Array<ButtonProps> = [
    {
      text: "SMALL",
      onClick: () => setSize("small"),
    },
    {
      text: "MEDIUM",
      onClick: () => setSize("medium"),
    },
    {
      text: "LARGE",
      onClick: () => setSize("large"),
    },
    {
      text: "X-LARGE",
      onClick: () => setSize("x-large"),
    },
    {
      text: "ALL",
      onClick: () => setSize(""),
    },
  ];

  return (
    <QuizFrame theme="dark" title="CHOOSE A SIZE" introText="dog">
      <QuizColumn species="dog" side="left" key="left" />
      <QuizColumn buttonProps={buttonProps} key="right" />
    </QuizFrame>
  );
};
