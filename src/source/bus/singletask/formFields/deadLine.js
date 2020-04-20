import React, { useState, useEffect } from 'react';
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DeadLine = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField( props ); 
    const shownDate = (field.value && new Date(field.value)) || new Date();
    useEffect( () => {
        setFieldValue(field.name, shownDate);
    },[]);

    return (
        <div className="deadline">
            <span className="label">{ props.label }</span>
            <span className="date">
                <DatePicker 
                    selected = { shownDate }
                    minDate = { new Date() }
                    dateFormat = "MMMM dd, yyyy"
                    popperPlacement = "top-end"
                    onChange = { date => setFieldValue(field.name, date) }
                />
            </span>
        </div>
    )
};