import classNames from "classnames";
import { QuizFrame } from "components/QuizFrame/QuizFrame";
import { FC } from "react";
import { speciesType } from "types/types";

interface speciesProps {
  setSpecies: (species: speciesType) => void;
}

export const Species: FC<speciesProps> = (props: speciesProps) => {
  const { setSpecies } = props;

  const handleDogClick = () => {
    setSpecies("dog");
  };

  const handleCatClick = () => {
    setSpecies("cat");
  };

  const dogButton = (
    <button
      type="button"
      className={classNames("dog-button", "button")}
      onClick={handleDogClick}
    >
      WOOF
    </button>
  );

  const catButton = (
    <button
      type="button"
      className={classNames("cat-button", "button")}
      onClick={handleCatClick}
    >
      MEOW
    </button>
  );

  return (
    <QuizFrame>
      <div className="species-page">
        {dogButton}
        {catButton}
      </div>
    </QuizFrame>
  );
};
