import React from 'react';
import MortyInfo from './MortyInfo';

const MortyList = ({mortys}) => {
    return (
        <div className='Morty-List mt-5'>
            {
                mortys?.map(residents =>(
                    <div className="Card" key={residents}>
                        <MortyInfo mortyUrl={residents} />
                    </div>
                   /*  <div key={residents}  >
                        {residents}
                    </div> */
                ))
            }
        </div>
    );
};

export default MortyList;