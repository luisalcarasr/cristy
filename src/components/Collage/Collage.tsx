import { Picture } from "../Picture";

export const Collage = () => {
  return (
    <>
      {
        new Array(500).fill(0).map(() => (
          <div style={{
            userSelect: 'none',
            display: 'inline-block',
            position: 'absolute',
            top: Math.random() * (document.documentElement.clientHeight) +'px',
            left: Math.random() * (document.documentElement.clientWidth) + 'px',
            transform: `rotate(${(Math.random() * 120) - 60}deg) translate(-50%, -50%)`,
          }}>
          <Picture />
          </div>
        ))
      }
    </>
  );
}