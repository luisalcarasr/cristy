import {Picture} from "../Picture";
import {usePictures} from "../../hooks/usePictures";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


export const Collage = () => {
  const pictures = usePictures()
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{350: 2, 750: 2, 900: 8}}
    >
      <Masonry>
        {
          pictures.map((picture) => (
            <div className="inline shadow p-2 bg-white m-4" style={{
              transform: `rotate(${(Math.random() * 120) - 60}deg)`,
            }}>
              <Picture src={picture}/>
            </div>
          ))
        }
      </Masonry>
    </ResponsiveMasonry>
  );
}