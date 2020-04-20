import React, { useState } from 'react';
import { useField, useFormikContext } from "formik";

export const TextInput = (props) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(props);
    
    
    return (
        <>
            <input  {...props} onChange = { value => setFieldValue(field.name, value) } />
        </>
    )
};
