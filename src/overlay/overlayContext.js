import React, { useState } from "react";

export const OverlayContext = React.createContext();

const OverlayProvider = ({ children }) => {
  const [overlayState, setOverlay] = useState(false);

  return (
    <OverlayContext.Provider value={{ overlayState, setOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
};

export default OverlayProvider;
