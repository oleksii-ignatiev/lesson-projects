import React from 'react';

export const Header = (props) => {
    
    return (
        <div className="controls">
            <button className="button-create-task" onClick = { props.openCard } >New Task</button>
        </div>
    )
}