import React, { useContext } from 'react';
import { StoreContext } from '../../App';

export const SaveMessage = () => {
    const { dispatch } = useContext(StoreContext);

    return (
        <div className="SaveMessage">
            Enter Message: <input onChange={(e) => { dispatch({ type: 'set', payload: e.target.value } )}}/>
        </div>
    )
}