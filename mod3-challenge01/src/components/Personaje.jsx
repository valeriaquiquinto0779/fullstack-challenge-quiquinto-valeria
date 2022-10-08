///color-personaje
const Personaje = ({name, status, species, url, setImage}) => {
  return (
    <div
      className='color-square'
      onClick={() => setImage(url)}
    >
      <img src={url} alt="" />
      <p>{name}</p>
      <p>{status}</p>
      <p>{species}</p>
    </div>
  );
};
export default Personaje;