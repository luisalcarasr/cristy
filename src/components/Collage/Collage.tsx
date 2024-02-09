import { Picture } from "../Picture";
import { usePictures } from "../../hooks/usePictures";


export const Collage = () => {
  const pictures = usePictures()


  return (
    <>
      {
        pictures.map((picture) => (
          <div style={{
            userSelect: 'none',
            display: 'inline-block',
            position: 'absolute',
            top: Math.random() * (document.documentElement.clientHeight) +'px',
            left: Math.random() * (document.documentElement.clientWidth) + 'px',
            transform: `rotate(${(Math.random() * 120) - 60}deg) translate(-50%, -50%)`,
          }}>
          <Picture src={picture} />
          </div>
        ))
      }
    </>
  );
}