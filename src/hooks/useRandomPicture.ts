import { useEffect, useState } from "react";
import { usePictures } from "./usePictures";

export const useRandomPicture = () => {
  const pictures = usePictures();
  const [defaultPicture] = pictures;
  const [picture, setPicture] = useState(defaultPicture);

  const randomize = () => {
    setPicture(pictures[Math.floor(Math.random() * pictures.length)]);
  };

  useEffect(() => {
    setPicture(defaultPicture);
  }, [defaultPicture]);

  return {
    picture,
    randomize
  };
}