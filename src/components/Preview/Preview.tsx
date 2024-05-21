import {usePictures} from "../../hooks/usePictures.ts";
import ImageGallery from 'react-image-gallery'

export const Preview = () => {
  const pictures = usePictures();

  return (
    <div className="inline-block bg-gray-50 w-80 rounded-sm shadow-2xl m-2 p-3">
      <div className="bg-gray-200 h-auto">
        <ImageGallery autoPlay={true} items={pictures.map(i => ({
          original: i,
          thumbnail: i,
        }))}/>
      </div>
    </div>
  );
}