import { QuizColumn } from "components/QuizFrame/QuizColumn";
import { QuizFrame } from "components/QuizFrame/QuizFrame";
import { FC } from "react";
import { ButtonProps } from "types/types";

interface sizeProps {
  setSize: (size: string) => void;
}

export const Size: FC<sizeProps> = (props: sizeProps) => {
  const { setSize } = props;

  const handleSmallClick = () => {
    setSize("small");
  };

  const handleMediumClick = () => {
    setSize("medium");
  };

  const handleLargeClick = () => {
    setSize("large");
  };

  const handleXLargeClick = () => {
    setSize("extra-large");
  };

  const buttonProps: Array<ButtonProps> = [
    {
      text: "SMALL",
      onClick: handleSmallClick,
    },
    {
      text: "MEDIUM",
      onClick: handleMediumClick,
    },
    {
      text: "LARGE",
      onClick: handleLargeClick,
    },
    {
      text: "EXTRA-LARGE",
      onClick: handleXLargeClick,
    },
  ];

  return (
    <QuizFrame theme="dark" title="CHOOSE A SIZE">
      <QuizColumn species="dog" />
      <QuizColumn buttonProps={buttonProps} />
    </QuizFrame>
  );
};
