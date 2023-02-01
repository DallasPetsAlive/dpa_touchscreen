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

  const handleMaleClick = () => {
    setGender("male");
  };

  const handleFemaleClick = () => {
    setGender("female");
  };

  const button1Props: ButtonProps = {
    text: "FEMALE",
    onClick: handleFemaleClick,
  };

  const button2Props: ButtonProps = {
    text: "MALE",
    onClick: handleMaleClick,
  };

  return (
    <QuizFrame theme="dark" title="CHOOSE A GENDER">
      <QuizColumn species={species} />
      <QuizColumn buttonProps={[button1Props, button2Props]} />
    </QuizFrame>
  );
};
