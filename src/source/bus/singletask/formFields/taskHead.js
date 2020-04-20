import React, { useState } from 'react';
import { useField, useFormikContext } from "formik";

import cx from "classnames";

export const TaskHead = (props) => {
    const [isComplete, setIsComplete] = useState(false);
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    
    const completeCX = cx({
        ['button-complete-task' ]: true, 
        [ 'completed' ]: (isComplete) ? true : false
    });

    const setComplete = () => {
        setIsComplete(!isComplete);
        setFieldValue(field.name);
    }

    return (
        
        <div className="head">
            <button className = { completeCX } onClick = {  setComplete  } >Mark as complete</button>
            <button className = "button-remove-task"/>
        </div>
       
    )
}    