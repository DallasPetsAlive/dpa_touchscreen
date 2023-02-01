import catface from "assets/cat-face.png";
import dogface from "assets/dog-face.png";
import classNames from "classnames";
import { QuizFrame } from "components/QuizFrame/QuizFrame";
import { FC } from "react";
import { speciesType } from "types/types";

interface speciesProps {
  setSpecies: (species: speciesType) => void;
}

export const Species: FC<speciesProps> = (props: speciesProps) => {
  const { setSpecies } = props;

  const dogSide = (
    <div>
      <img src={dogface} />
      <button
        type="button"
        className={classNames("dog-button", "button")}
        onClick={() => setSpecies("dog")}
      >
        WOOF
      </button>
    </div>
  );

  const catSide = (
    <div>
      <img src={catface} onClick={() => setSpecies("cat")} />
      <button
        type="button"
        className={classNames("cat-button", "button")}
        onClick={() => setSpecies("cat")}
      >
        MEOW
      </button>
    </div>
  );

  return (
    <QuizFrame>
      <div className="species-page">
        {dogSide}
        {catSide}
      </div>
    </QuizFrame>
  );
};
