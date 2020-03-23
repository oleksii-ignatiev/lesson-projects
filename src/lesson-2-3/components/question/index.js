import React, { useState } from 'react';
import cx from 'classnames';

export const Question = (props) => {
    const question = props.question;
    const Styles = props.styles;
    const index = props.index;
    
    const [active, setActive] = useState(0);
    const toggle =(index)=>setActive(index);
    
    const accordionCX = cx({
        [ Styles['accordion-item'] ]: true, 
        [ Styles['selected'] ]: active 
    });
    
    return (
        <div className = { accordionCX } onClick = { () => toggle(index) } >
            <div className={Styles['accordion-question']}>
                <span>{ question.question }</span>
            </div>
            <p className={Styles['accordion-answer']}>
                { question.answer }
            </p>
        </div>
	)
};