import React from 'react';
import { useField } from 'formik';

export const TextInput = (props) => {
    const [field, meta] = useField(props);
    console.log(field);
    console.log(props);
    return (
        <>
            <input {...field} {...props} />
        </>
    )
};
