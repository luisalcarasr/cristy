export const Picture = ({src}: { src: string }) => {
  return (
    <img loading="lazy" src={src} alt=""/>
  );
}