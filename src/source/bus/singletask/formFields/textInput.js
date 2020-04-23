import React, { useState } from 'react';
import { useField, useFormikContext } from "formik";

export const TextInput = (props) => {
    const [field] = useField(props);
    
    return (
        <>
            <input {...props} />
        </>
    )
};
