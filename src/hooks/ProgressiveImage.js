import { useState, useEffect } from "react";

const useProgressiveImage = (src) => {
  const [sourceLoaded, setStateLoaded] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = setStateLoaded(src);
  }, [src]);

  return sourceLoaded;
};

export default useProgressiveImage;
