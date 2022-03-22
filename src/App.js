import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './componetes/Card'
import { CardFecth } from './componetes/CardFetch'




function App() {
  const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {

    const consultarPersonajes = () => {
      fetch("https://rickandmortyapi.com/api/character")
        .then((data) => data.json())
        .then((personajes) => {
          setPersonajes(personajes.results)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    consultarPersonajes()

  }, []);


  return (
    <div className="App">
      {
        arreglo.map((elemento) => <Card key={elemento} numero1={elemento} />)
      }
      {
        personajes.map((elemento) => <CardFecth key={elemento.id} {...elemento} />)
      }
    </div>
  );
}

export default App;
