import React, { useRef } from 'react';
import { ListItem } from './listItem';

export const Items = ( {...props}) => {
    const inputEl = useRef();
console.log('inputEl');
console.log(inputEl);
    return (
        <div className="sub-tasks">
            <ListItem ref = { inputEl } />
        </div>
    )
};