import { Picture } from "../Picture";
import { usePictures } from "../../hooks/usePictures";
import { randomPosition } from "../../utils";


export const Collage = () => {
  const pictures = usePictures()


  return (
    <>
      {
        pictures.map((picture, i) => (
          <div key={picture} style={{
            userSelect: 'none',
            display: 'inline-block',
            position: 'absolute',
            top: randomPosition(i, pictures.length).y,
            left: randomPosition(i, pictures.length).x,
            transform: `rotate(${(Math.random() * 120) - 60}deg)`,
          }}>
          <Picture src={picture} />
          </div>
        ))
      }
    </>
  );
}