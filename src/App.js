import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import MortyList from './components/MortyList';
import SearchBox from './components/SearchBox';
import UbicationDetail from './components/UbicationDetail';

function App() {

  const [ ubication, setUbication ] = useState({})

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) +1
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(res => setUbication(res.data))
  }, [])
 
  console.log("ubicacion",ubication)
  return (

    <div className="App">
      <div className='Cabecera'>
        <div className='Overlay'></div>
      </div>
      <SearchBox setUbication={setUbication} />

      <UbicationDetail ubication={ubication}/>
      
      <MortyList mortys={ubication.residents} />

    </div>
  );
}

export default App;
