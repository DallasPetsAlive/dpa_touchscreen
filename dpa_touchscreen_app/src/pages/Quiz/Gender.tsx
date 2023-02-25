import { QuizColumn } from "components/QuizFrame/QuizColumn";
import { QuizFrame } from "components/QuizFrame/QuizFrame";
import { FC } from "react";
import { ButtonProps, speciesType } from "types/types";

interface genderProps {
  setGender: (gender: string) => void;
  species?: speciesType;
}

export const Gender: FC<genderProps> = (props: genderProps) => {
  const { setGender, species } = props;

  const buttonProps: Array<ButtonProps> = [
    {
      text: "FEMALE",
      onClick: () => setGender("female"),
    },
    {
      text: "MALE",
      onClick: () => setGender("male"),
    },
    {
      text: "ALL",
      onClick: () => setGender(""),
    },
  ];

  return (
    <QuizFrame
      theme={species === "dog" ? "dark" : "yellow"}
      title="CHOOSE A GENDER"
      introText={species}
    >
      <QuizColumn species={species} buttonProps={[]} side="left" key="left" />
      <QuizColumn species={undefined} buttonProps={buttonProps} key="right" />
    </QuizFrame>
  );
};
