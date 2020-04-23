import React, { useState } from 'react';
import { useField, useFormikContext } from "formik";
import tags from '../tags.json';

import cx from "classnames";

export const Tag = (props) => {
    const tags = props.tags || [];
    const [active, setActive] = useState(0);
    const { setFieldValue } = useFormikContext();
    const [field] = useField( props ); 
    const toggle = (index) => setActive(index);
    
    return (
        <div className="tags">
            {tags.map( (item, index) => {
                
                const tagCX = cx({
                    'tag': true, 
                    [ item.className ]: true,
                    'selected': (active === index) ? true : false
                })
                   
                return (
                    <span key = { index } className={ tagCX } onClick = { () => { toggle(index); setFieldValue(field.name, item.body) } } >{ item.body }</span>
                )
            })}
		</div>
    )
};

