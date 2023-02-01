import { QuizFrame } from "components/QuizFrame/QuizFrame";
import { FC } from "react";
import { Pet } from "types/types";

interface resultsProps {
  species: string | undefined;
  gender: string | undefined;
  age: string | undefined;
  size: string | undefined;
  data: Array<Pet>;
}

export const Results: FC<resultsProps> = (props: resultsProps) => {
  const { species, gender, age, size, data } = props;

  if (!data) {
    <QuizFrame theme="dark">...loading...</QuizFrame>;
  }

  const results = data.filter((pet) => {
    if (species === "dog" && pet.species?.toLowerCase() !== "dog") return false;
    if (species === "cat" && pet.species?.toLowerCase() !== "cat") return false;
    if (gender === "male" && pet.sex?.toLowerCase() !== "male") return false;
    if (gender === "female" && pet.sex?.toLowerCase() !== "female")
      return false;
    if (age === "baby" && pet.age?.toLowerCase() !== "baby") return false;
    if (age === "young" && pet.age?.toLowerCase() !== "young") return false;
    if (age === "adult" && pet.age?.toLowerCase() !== "adult") return false;
    if (age === "senior" && pet.age?.toLowerCase() !== "senior") return false;
    if (size === "small" && pet.size?.toLowerCase() !== "small") return false;
    if (size === "medium" && pet.size?.toLowerCase() !== "medium") return false;
    if (size === "large" && pet.size?.toLowerCase() !== "large") return false;
    if (size === "extra-large" && pet.size?.toLowerCase() !== "extra-large")
      return false;

    return true;
  });

  console.log(results);

  return (
    <QuizFrame showIntro={false} theme="dark">
      {species} {gender} {age} {size}
    </QuizFrame>
  );
};
