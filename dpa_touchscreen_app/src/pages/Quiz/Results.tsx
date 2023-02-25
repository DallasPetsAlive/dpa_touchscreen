import { Carousel } from "3d-react-carousal";
import { PetCard } from "components/PetCard/PetCard";
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
    return <QuizFrame theme="dark">...loading...</QuizFrame>;
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
    if (size === "x-large" && pet.size?.toLowerCase() !== "x-large")
      return false;

    return true;
  });

  const pets =
    results.length > 0
      ? results.map((pet) => {
          return <PetCard pet={pet} key={pet.id} />;
        })
      : [<div>No pets found</div>];

  return (
    <QuizFrame
      showIntro={true}
      theme={species === "dog" ? "dark" : "yellow"}
      introTitle="FRIENDS FUR-EVER"
      introText="results"
    >
      <Carousel
        className="carousel"
        slides={pets}
        autoplay={false}
        interval={10000}
      />
    </QuizFrame>
  );
};
