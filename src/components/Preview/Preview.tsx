import { usePictures } from "../../hooks/usePictures";

export const Preview = () => {
  const pictures = usePictures();
  const picture = pictures[Math.floor(Math.random() * pictures.length)];

  return (
    <div className="inline-block bg-gray-50 w-80 rounded-sm shadow-lg m-2 p-3">
      <div className="bg-gray-200 h-auto">
        <img src={picture} /> 
      </div>
    </div>
  );
}