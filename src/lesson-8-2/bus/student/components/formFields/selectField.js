import React from 'react';
import { useField } from 'formik';
import cx from 'classnames';
// import { Styles } from '../style.scss';

export const SelectField = ({label, ...props}) => {
    const [field, meta] = useField(props);
    const selectCX = cx({
        [ 'select-field' ]: true, 
        [ 'error' ]: ( meta.touched && meta.error ) ? true : false,
        [ 'valid' ]: ( meta.touched && !meta.error ) ? true : false
    })

    return (
        <>
            <label htmlFor = { props.id || props.name }>{ label }</label>
            <select className = { selectCX } { ...field } { ...props } />
            { meta.touched && meta.error && (
                <div className="error">{ meta.error }</div>
            ) }
        </>
    )
}