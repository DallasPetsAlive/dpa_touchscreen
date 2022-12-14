import "../scss/TouchscreenApp.scss";

import { FC } from "react";

import { Screensaver } from "./Screensaver/Screensaver";

export const TouchscreenApp: FC = () => {
  return (
    <div>
      <Screensaver />
    </div>
  );
};
