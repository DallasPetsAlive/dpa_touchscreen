import { FC, useRef, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import ImageGallery from "react-image-gallery";
import QRCode from "react-qr-code";
import { Pet } from "types/types";

import ModalUnstyled from "@mui/base/ModalUnstyled";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

interface props {
  pet: Pet | undefined;
  showProfile: boolean;
  handleHideProfile: () => void;
}

export const PetProfile: FC<props> = (props) => {
  const { pet, showProfile, handleHideProfile } = props;
  const photosListRef = useRef<ImageGallery>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  if (!pet) return null;

  const breed =
    pet.species === "dog" ? <div className="pet-breed">{pet.breed}</div> : null;

  let description = pet.description
    ? pet.description.replace(new RegExp("\r?\n", "g"), "<br />")
    : "";

  const photos = pet.photos
    ? pet.photos.map((photo) => photo.replace("%20", "_"))
    : [];

  const photosFinal = photos.map((photo) => ({
    original: photo + "?width=1000&height=1000&scale.option=fill",
  }));

  const onImageClick = () => {
    if (!isFullscreen && photosList) {
      photosListRef?.current?.fullScreen();
      setIsFullscreen(true);
    } else {
      photosListRef.current?.exitFullScreen();
      setIsFullscreen(false);
    }
  };

  const photosList = pet.photos ? (
    <ImageGallery
      items={photosFinal}
      showPlayButton={false}
      showFullscreenButton={false}
      showNav
      showBullets
      showThumbnails={false}
      autoPlay
      additionalClass="photo-gallery"
      slideInterval={7000}
      onClick={onImageClick}
      ref={photosListRef}
    />
  ) : null;

  const adoptQrCode = pet.adoptLink ? (
    <div className="adopt-qr-code">
      <QRCode value={pet.adoptLink} size={200} />
    </div>
  ) : null;

  return (
    <ModalUnstyled open={showProfile} className="profile-modal">
      <Box className="profile-modal-box">
        <Grid container spacing={2}>
          {/* row 1 */}
          <Grid item xs={2} />
          <Grid item xs={8}>
            <h1>{pet.name}</h1>
          </Grid>
          <Grid item xs={2} className="close-x-grid">
            <Button
              variant="text"
              onClick={handleHideProfile}
              className="close-x"
            >
              X
            </Button>
          </Grid>
          {/* row 2 */}
          <Grid item xs={6} className="photos">
            {photosList}
          </Grid>
          <Grid item xs={6} className="description">
            <Box className="description-box">
              <p>{ReactHtmlParser(description)}</p>
            </Box>
            <div className="qr-codes">
              {adoptQrCode}
              <span>
                &#8592;<span className="label">Scan me for Adoption App</span>
              </span>
            </div>
          </Grid>
        </Grid>
      </Box>
    </ModalUnstyled>
  );
};
