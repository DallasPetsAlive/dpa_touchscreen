import "../scss/TouchscreenApp.scss";

import { Screensaver } from "pages/Screensaver/Screensaver";
import { FC } from "react";

export const TouchscreenApp: FC = () => {
  return (
    <div className="app">
      <Screensaver />
    </div>
  );
};
