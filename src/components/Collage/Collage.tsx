import {Picture} from "../Picture";
import {usePictures} from "../../hooks/usePictures";
import Masonry from "react-responsive-masonry"
import {useEffect, useState} from "react";
import {shuffle} from "lodash";


export const Collage = () => {
  const pictures = usePictures()
  const [shuffledPictures, setShuffledPictures] = useState<string[]>(pictures)

  useEffect(() => {
    const intervalId = (setInterval(() => {
      setShuffledPictures(shuffle(pictures))
      return () => clearInterval(intervalId);
    }, 10 * 1000))

  }, [pictures]);


  return (
    <Masonry columnsCount={8}>
      {
        (shuffledPictures.length === 0 ? pictures : shuffledPictures).map((picture) => (
          <Picture src={picture}/>
        ))
      }
    </Masonry>
  );
}