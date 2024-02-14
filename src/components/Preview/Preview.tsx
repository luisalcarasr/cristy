import { useRandomPicture } from "../../hooks/useRandomPicture";
import { ValentinesDay } from "../Decorations/ValentinesDay";

export const Preview = () => {
  const { picture, randomize} = useRandomPicture();
  const onClickHandler = () => {
    randomize()
  };

  
  return (
    <div className="inline-block bg-gray-50 w-80 rounded-sm shadow-lg m-2 p-3">
      <div className="bg-gray-200 h-auto">
        <img src={picture} onClick={onClickHandler}/> 
      </div>
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, -80%)',
      }}>
        <ValentinesDay />
      </div>
    </div>
  );
}