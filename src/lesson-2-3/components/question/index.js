import React, { useState } from 'react';

export const Question = (props) => {
	const question = props.question || {};
    const [isSelected, setSelected] = useState(false);
    
    const _toggle = () => {
        setSelected( (isSelected) => !isSelected );
    }

    return (
        <div className = { `accordion-item ${isSelected ? "selected" : "" }` } onClick = { _toggle } >
            <div className='accordion-question'>
                <span>{ question.question }</span>
            </div>
            <p className='accordion-answer'>
                { question.answer }
            </p>
        </div>
	)
};