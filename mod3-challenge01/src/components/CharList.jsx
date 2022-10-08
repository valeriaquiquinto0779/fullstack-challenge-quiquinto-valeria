import Personaje from './Personaje'
import { getCharacters } from '../Service'
import { useEffect, useState } from 'react'

const CharList = () => {
  const [charList, setCharList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [image, setImage] = useState('')

  useEffect(() => {
    setIsLoading(true);
    getCharacters()
      .then((data) => setCharList(data.results))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className='page'>
      {isLoading && <span className='loading-text'>Loading</span>}
      <div>
        <img src={image} alt="No hay imagen"/>
      </div>

      {charList.map((personaje) => (
        <Personaje
          key={personaje.id}
          name={personaje.name}
          status={personaje.status}
          species={personaje.species}
          url={personaje.image}
          setImage={setImage}
        />
      ))}
    </div>
  )
}

export default CharList;