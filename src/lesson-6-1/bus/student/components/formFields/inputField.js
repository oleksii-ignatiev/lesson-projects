import React from 'react';
import { useField } from 'formik';
import cx from 'classnames';


export const InputField = ({label, ...props}) => {
    const [field, meta] = useField(props);
    const inputCX = cx({
        [ 'input-field' ]: true, 
        [ 'error' ]: ( meta.touched && meta.error ) ? true : false,
        [ 'valid' ]: ( meta.touched && !meta.error ) ? true : false
    })


    return (
        <>
            <label htmlFor = { props.id || props.name }>{ label }</label>
            <input className = { inputCX } { ...field } { ...props } />
            { meta.touched && meta.error && (
                <div className="error">{ meta.error }</div>
            ) }
        </>
    )
}