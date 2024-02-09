export const Picture = ({src}: { src: string}) => {
  return (
    <div className="inline-block bg-gray-50 w-40 rounded-sm shadow-lg m-2 p-3">
      <div className="bg-gray-200 h-auto">
        <img src={src}/> 
      </div>
    </div>
  );
}