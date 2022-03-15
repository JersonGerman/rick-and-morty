import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MortyInfo = ({mortyUrl}) => {

    const [ card, setCard ] = useState({})

    useEffect (() => {
        axios.get(mortyUrl)
            .then(res => setCard(res.data))
    }, [mortyUrl])

    return (
        
        <div className='Morty-Info card'>
            <img src={card.image} alt={card.name} className="card-img-top"/>
            <div className='card-body'>
                <p>{card.name}</p>
                <p>origin:{card.origin?.name}</p>
                <p>Episodes where appear:{card.episode?.length}</p>
            </div>
        </div>
    );
};

export default MortyInfo;