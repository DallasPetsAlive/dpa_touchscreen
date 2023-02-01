import { QuizColumn } from "components/QuizFrame/QuizColumn";
import { QuizFrame } from "components/QuizFrame/QuizFrame";
import { FC } from "react";
import { ButtonProps, speciesType } from "types/types";

interface ageProps {
  setAge: (age: string) => void;
  species: speciesType;
}

export const Age: FC<ageProps> = (props: ageProps) => {
  const { setAge, species } = props;

  const handleBabyClick = () => {
    setAge("baby");
  };

  const handleYoungClick = () => {
    setAge("young");
  };

  const handleAdultClick = () => {
    setAge("adult");
  };

  const handleSeniorClick = () => {
    setAge("senior");
  };

  let babyText = "BABY";
  if (species === "dog") babyText = "PUPPY";
  else if (species === "cat") babyText = "KITTEN";

  const buttonProps: Array<ButtonProps> = [
    {
      text: babyText,
      onClick: handleBabyClick,
    },
    {
      text: "YOUNG",
      onClick: handleYoungClick,
    },
    {
      text: "ADULT",
      onClick: handleAdultClick,
    },
    {
      text: "SENIOR",
      onClick: handleSeniorClick,
    },
  ];

  return (
    <QuizFrame theme="dark" title="CHOOSE AGE">
      <QuizColumn species={species} />
      <QuizColumn buttonProps={buttonProps} />
    </QuizFrame>
  );
};
