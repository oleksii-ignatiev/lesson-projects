import React, { useState } from 'react';
import { useField } from 'formik';

import  { TextInput } from './textInput';

export const ListItem = ({ ...props}) => {
    const [value, setvalue] = useState(null);
   // const [field, meta] = useField({...props});

    // console.log('ListItem');
    // console.log(field);
    // console.log(props);
    return (
        <>
            <label className="sub-task">
                <TextInput type="text" {...props}  />
            </label>
        </>
    )
};

        