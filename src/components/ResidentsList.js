import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({loading, residents}) => {

    return (
        
        <div className='Morty-List mt-0'>
            {
                loading ? 'Cargando...'
                : 
                residents()?.map(residents =>(
                    <div className="Card" key={residents}>
                        <ResidentInfo 
                            mortyUrl={residents} 
                        />
                    </div>
                ))
                
            }
        </div>
    );
};

export default ResidentsList;