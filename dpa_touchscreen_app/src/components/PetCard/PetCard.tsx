import { FC } from "react";
import { Pet } from "types/types";

interface props {
  pet: Pet;
  key: string;
}

export const PetCard: FC<props> = (props) => {
  const { pet } = props;

  const breed =
    pet.species === "dog" ? <div className="pet-breed">{pet.breed}</div> : null;

  return (
    <div className="pet-card">
      <img src={pet.coverPhoto} />
      <div className="pet-card-info">
        <div className="pet-name">{pet.name}</div>
        {breed}
      </div>
    </div>
  );
};
