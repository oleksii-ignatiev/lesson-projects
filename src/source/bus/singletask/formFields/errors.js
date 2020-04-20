import React, {  } from 'react';
import { useField } from 'formik';

export const Errors = ( props) => {
    const [, meta] = useField(props);
    console.log(meta);

    return (
        <div className="errors">
        
            {Object.values(meta.error).map( (errorName) => {
                return (
                    <p className="errorMessage">{ errorName }</p>
                )
            })}
    
        </div>
    )
};