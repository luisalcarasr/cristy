import { useEffect, useState } from "react";
import { usePictures } from "./usePictures";

export const useRandomPicture = () => {
  const pictures = usePictures();
  const [picture, setPicture] = useState(pictures[Math.floor(Math.random() * pictures.length)]);

  const randomize = () => {
    setPicture(pictures[Math.floor(Math.random() * pictures.length)]);
  };

  useEffect(() => {
    setPicture(pictures[Math.floor(Math.random() * pictures.length)]);
  }, [pictures]);

  
  console.log(picture);
  
  return {
    picture,
    randomize
  };
}