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

  let babyText = "BABY";
  if (species === "dog") babyText = "PUPPY";
  else if (species === "cat") babyText = "KITTEN";

  const buttonProps: Array<ButtonProps> = [
    {
      text: babyText,
      onClick: () => setAge("baby"),
    },
    {
      text: "YOUNG",
      onClick: () => setAge("young"),
    },
    {
      text: "ADULT",
      onClick: () => setAge("adult"),
    },
    {
      text: "SENIOR",
      onClick: () => setAge("senior"),
    },
    {
      text: "ALL",
      onClick: () => setAge(""),
    },
  ];

  return (
    <QuizFrame theme={species === "dog" ? "dark" : "yellow"} title="CHOOSE AGE" introText={species}>
      <QuizColumn species={species} side="left" key="left" />
      <QuizColumn buttonProps={buttonProps} key="right" />
    </QuizFrame>
  );
};
