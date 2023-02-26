import { FC } from "react";
import { Pet } from "types/types";

import ModalUnstyled from "@mui/base/ModalUnstyled";
import { Box } from "@mui/system";

interface props {
  pet: Pet | undefined;
  showProfile: boolean;
  handleHideProfile: () => void;
}

export const PetProfile: FC<props> = (props) => {
  const { pet, showProfile, handleHideProfile } = props;

  if (!pet) return null;

  console.log(pet);

  const breed =
    pet.species === "dog" ? <div className="pet-breed">{pet.breed}</div> : null;

  return (
    <ModalUnstyled open={showProfile} className="profile-modal">
      <Box className="profile-modal-box">
        <div>
          <h1>{pet.name}</h1>
          <button type="button" className="button" onClick={handleHideProfile}>close me</button>
        </div>
      </Box>
    </ModalUnstyled>
  );
};
