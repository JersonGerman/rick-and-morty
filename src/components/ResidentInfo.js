// import axios from 'axios';
import React, { useEffect } from 'react';
import { useResidents } from '../hooks/useResidents';

const ResidentInfo = ({mortyUrl}) => {

    const {getResident, resident} = useResidents();
    console.log("resident info")

    useEffect (() => {
        let isTrue = true;
        if(isTrue)
            getResident(mortyUrl);
        return {isTrue:false}
    }, [ mortyUrl, getResident ])

    const getClassStatus = (status) =>{
        if(status === "Alive"){
            return "bg-success"
        }else if(status === "Dead"){
            return "bg-danger"
        }else if(status === "unknown"){
            return "bg-secondary"
        }
    }
    return (
        
        <div className='Morty-Info card'>
            <div className='header-overlay'>
                <span className={"badge rounded-pill "+(getClassStatus(resident.status))}>{resident.status}</span>
                <span className="badge rounded-pill bg-light text-dark">{resident.species}</span>
            </div>
            <img src={resident.image} alt={resident.name} className="card-img-top"/>       
            <div className='card-body'>
                <p>{resident.name}</p>
                <p>origin:{resident.origin?.name}</p>
                <p>Episodes where appear:{resident.episode?.length}</p>
            </div>
        </div>
    );
};

export default ResidentInfo;