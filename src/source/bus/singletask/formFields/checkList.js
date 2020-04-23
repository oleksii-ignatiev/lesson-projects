import React from 'react';
import { useField, useFormikContext } from "formik";
import { ListItem } from './listItem'

export const CheckList = (props) => {
    // const { setFieldValue } = useFormikContext();
    // const updateValues = () => {
    //     setFieldValue(props.name);
    // }

    return (
        
        <div className="checklist" >
            <span className="label">{props.label}</span>
            <div className="sub-tasks">
                <ListItem name = "subTask0" />
                <ListItem name = "subTask1" />
                <ListItem placeholder="Add more" /* onChange = { addItem } *//>
            </div>
        </div>
           
        
    )
};
