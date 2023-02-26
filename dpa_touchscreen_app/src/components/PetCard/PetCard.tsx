import { FC } from "react";
import { Pet } from "types/types";

interface props {
  pet: Pet;
  key: string;
  handleShowProfile: (pet: Pet) => void;
}

export const PetCard: FC<props> = (props) => {
  const { pet, handleShowProfile } = props;

  const handleReadMore = () => {
    handleShowProfile(pet);
  }

  const profileButton = (
    <button type="button" className="button" onClick={handleReadMore}>
      READ MORE
    </button>
  );

  return (
    <div className="pet-card">
      <img src={pet.coverPhoto} />
      <div className="pet-card-info">
        <div className="pet-name">{pet.name}</div>
        {profileButton}
      </div>
    </div>
  );
};
