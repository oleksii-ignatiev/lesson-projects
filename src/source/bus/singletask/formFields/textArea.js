import React from 'react';
import { useField } from 'formik';

export const TextArea = ({ ...props}) => {
    const [field, meta] = useField(props);

    return (
        <>
            <div className="description">
                <label className="label">Description</label>
                <textarea className="text" {...field} {...props} />
            </div>   
        </>
    )
};
