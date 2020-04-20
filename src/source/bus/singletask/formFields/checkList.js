import React, { useState, useRef, useEffect } from 'react';
import { useField } from 'formik';
import { ListItem } from './listItem'
import { Items } from './items'

export const CheckList = ( {...props}) => {
    
    const [isChanged, setState] = useState(false);
    const [field, meta] = useField({...props});
    // {meta.touched && meta.error && (
    //     <div className="error">{meta.error}</div>
    // )}
    //const handleChange = () => setvalue();
   

    console.log(props.itemList);
    let listItems= [];
    let JSX;
    const addItem = (event) => {
        setState(true);
    //     listItems.push({
    //         id:  listItems.length,
    //         isCompleted: false,
    //         title: event.target.value
    //     });
    //     console.log(event.target.value);
    //     console.log(isChanged);
    //     console.log(listItems);
    }

    useEffect( () => {
        listItems.push({
            id:  listItems.length,
            isCompleted: false,
            title: 'event.target.value'
        });
        // console.log(event.target.value);
        console.log(isChanged);
        console.log(listItems);
        JSX = <Items  list = { listItems } />;
    }, [isChanged]);
    console.log('JSX');
    console.log(JSX);

    return (
        
        <div className="checklist">
            <span className="label">{props.label}</span>
            { JSX }
            {/* <Items name = "checklist" list = { listItems } /> */}
            <div className="sub-tasks">
                <ListItem placeholder="Add more" onChange = { addItem }/>
            </div>
        </div>
           
        
    )
};
