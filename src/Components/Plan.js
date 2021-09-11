import React from 'react';

const Plan = ( { items, sendData } ) => {
    return (
        <>
            {
                items.map( (val, index) => {
                    return(
                        <React.Fragment key={ index }>
                           <li key={ index } className="shadow p-2 my-2 col-sm-9">{val}<br/><span>is Your Friend</span></li>
                           <button className="btn-danger my-2 offset-1 col-sm-2" onClick={ () => sendData(index) }>X</button> 
                        </React.Fragment>
                    )
                })
            }
        </>
    )
}

export default Plan
