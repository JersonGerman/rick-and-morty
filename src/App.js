import { useEffect, useState } from "react";
import { useResidents } from './hooks/useResidents';
import {LocationInfo, SearchBox, ResidentsList, Pagination} from "./components";
import './App.css';

function App() {
  
  const [currentPage, setCurrentPage] = useState(0);
  const [nameResident, setNameResident] = useState([]);

  const {isLoading, location, getLocation} = useResidents();

  const filteredResidents = () => { 
    return location.residents?.slice(currentPage,currentPage+4);
  }

  useEffect(() =>{
    console.log(location.residents?.length )
  },[location])

  const nextPage = () => {
    if(location.residents?.length > currentPage + 4)
        setCurrentPage(currentPage + 4);
  }
  const previusPage = () => {
    if(currentPage > 0)
      setCurrentPage(currentPage - 4);  
  }
  

  return (

    <div className="App">
      <div className='Cabecera'>
        <div className='Overlay'></div>
      </div>
      <SearchBox setUbication={getLocation} />

      <LocationInfo ubication={location}/>
      <Pagination nextPage={nextPage} previusPage={previusPage} residentsSearch={location.residents} />
    
      <ResidentsList 
        loading={isLoading} 
        residents={filteredResidents} 
        setNameResident={setNameResident} 
        nameResident={nameResident}  
      />
    </div>
  );
}

export default App;
