import ordinal from "ordinal";

export const ValentinesDay = () => {
  return (
    <div
      className="text-pink-600"
      style={{
        fontFamily: 'Dancing Script, cursive',
        stroke: '10px black',
        fontSize: '2rem',
        textShadow: '2px 2px 0px  #fff, -2px -2px 0px  #fff, 2px -2px 0px  #fff, -2px 2px 0px  #fff',
      }}>
      Happy {ordinal(6)} mensiversary!
    </div>
  )
}