import { Picture } from "../Picture";
import { usePictures } from "../../hooks/usePictures";


export const Collage = () => {
  const pictures = usePictures()


  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '10px',
      position: 'relative',
      width: '100%',
      height: '100%',
      padding: '20px',
      boxSizing: 'border-box',
      zIndex: -1,
    }}>
      {
        pictures.map((picture) => (
          <div key={picture} style={{
            userSelect: 'none',
            transform: `rotate(${(Math.random() * 120) - 60}deg)`,
          }}>
          <Picture src={picture} />
          </div>
        ))
      }
    </div>
  );
}