import classNames from "classnames";
import { FC } from "react";
import { Pet } from "types/types";

interface props {
  pet: Pet;
  key: string;
  handleShowProfile: (pet: Pet) => void;
  size?: string;
}

export const PetCard: FC<props> = (props) => {
  const { pet, handleShowProfile, size = "normal" } = props;

  const handleReadMore = () => {
    handleShowProfile(pet);
  }

  const profileButton = (
    <button type="button" className="button" onClick={handleReadMore}>
      READ MORE
    </button>
  );

  const classes = classNames(size === "small" && "pet-card-small", "pet-card");

  return (
    <div className={classes}>
      <img src={pet.coverPhoto} />
      <div className="pet-card-info">
        <div className={`pet-name-${size}`}>{pet.name}</div>
        {profileButton}
      </div>
    </div>
  );
};
