import React from 'react';
import { useDispatch } from 'react-redux';
import { set } from '../redux/messageReducer';

export const SaveMessageRedux = () => {
    const dispatch = useDispatch();

    return (
        <div className="SaveMessage">
            Enter Message: <input onChange={(e) => { dispatch(set(e.target.value)) }}/>
        </div>
    )
}