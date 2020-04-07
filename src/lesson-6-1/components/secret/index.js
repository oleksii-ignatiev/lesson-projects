import React from 'react';
import { useParams } from 'react-router-dom';

export const Secret = ( ) => {
    const { value } = useParams();
    
    return (
        <>
            <p>My Secret: { value }</p>
        </>
    );
};