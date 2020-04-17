import React, { useState } from 'react';
import { useField } from 'formik';

import  { TextInput } from './textInput';

export const CheckList = ({ ...props}) => {
    const [value, setvalue] = useState('');
    const [field, meta] = useField({...props});
    // {meta.touched && meta.error && (
    //     <div className="error">{meta.error}</div>
    // )}
    //const handleChange = () => setvalue();
    // console.log(meta);
    return (
        <>
           <label className="sub-task">
                <TextInput type="text" {...field} {...props}  />
            </label>
        </>
    )
};
