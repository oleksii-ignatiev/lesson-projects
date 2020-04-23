import React, { useState } from 'react';
import { useField } from 'formik';

import  { TextInput } from './textInput';

export const ListItem = (props) => {
    const [field,meta] = useField();
    

    return (
        <>
            <label className="sub-task">
                <TextInput type="text"  {...props}  />
            </label>
        </>
    )
};

        