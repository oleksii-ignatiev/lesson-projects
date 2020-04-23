import React, { useState } from 'react';
import { useField, useFormikContext } from "formik";
import { api } from '../../../api';

import cx from "classnames";

export const TaskHead = (props) => {
    const [isComplete, setIsComplete] = useState(false);
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    
    const completeCX = cx({
        'button-complete-task': true, 
        'completed' : (isComplete) ? true : false
    });

    
    return (
        <div className="head">
            <button className = { completeCX } onClick = { () => {setFieldValue(field.name, true); setIsComplete(!isComplete) } } >Mark as complete</button>
            <button className = "button-remove-task" onClick = { () => { api.task.delete(props.hash); props.closeCard()} }/>
        </div>
    )
}    