import { FC } from "react";
import { Pet } from "types/types";

interface props {
  pet: Pet;
  onHide: () => void;
}

export const PetProfile: FC<props> = (props) => {
  const { pet } = props;

  console.log(pet);

  const breed =
    pet.species === "dog" ? <div className="pet-breed">{pet.breed}</div> : null;

  return (
    <div className="pet-modal">
      <img src={pet.coverPhoto} />
      <div className="pet-card-info">
        <div className="pet-name">{pet.name}</div>
        {breed}
      </div>
    </div>
  );
};
