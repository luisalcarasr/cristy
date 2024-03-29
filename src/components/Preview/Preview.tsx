import { useRandomPicture } from "../../hooks/useRandomPicture";
import { throwConfetti } from "../../utils";
import { ValentinesDay } from "../Decorations/ValentinesDay";

export const Preview = () => {
  const { picture, randomize } = useRandomPicture();

  return (
    <div className="inline-block bg-gray-50 w-80 rounded-sm shadow-2xl m-2 p-3">
      <div className="bg-gray-200 h-auto">
        <img src={picture} onClick={() => randomize()} onLoad={() => throwConfetti()}/> 
      </div>
      <div className="text-center mt-2 user-select-none">
        <ValentinesDay />
      </div>
    </div>
  );
}