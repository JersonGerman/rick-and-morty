import React, { useState } from 'react';

const SearchBox = ({setUbication}) => {

    const [ ubicationId, setubicationId ] = useState("")

    const searchUbication = () => {
        setUbication(ubicationId);
    }


    return (

        <div className='Search-Box row justify-content-center pb-3 rounded-3 border-secondary position-absolute start-50 translate-middle '>
            <label htmlFor='inputSearch' className="form-label w-100 fw-bold fs-3 mb-4 font-indie">Search Location</label>
            <div className='row justify-content-center'>
                <input 
                type="text" 
                onChange={e => setubicationId(e.target.value)}
                value={ubicationId}
                className="form-control w-100 col-10 rounded-pill font-indie input-text"
                placeholder="Id"
                id="inputSearch"
                />
                <button 
                    onClick={searchUbication} 
                    className="button-Search col-2 rounded-pill  fw-bold ms-1 position-absolute start-50 font-indie btn-hover">
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBox;