import React from 'react';
import tags from '../singletask/tags.json';
import cx from "classnames";

export const Task = (props) => {
 
    const getClassName = (tag) => {
        
        return tags.filter(tagObj => tagObj.body === tag)[0].className
    }
    const open = () => {
        props.openCard();
        props.fillCurrentTask(props.source);
    }
    
    const taskCX = cx({
        'task': true, 
        'completed': (props.source.completed) ? true : false
    }) 
    return (
        
        <div className={ taskCX } onClick={ open } >
            <span className="title">{ props.source.title }</span>
            <div className="meta">
                <span className="deadline">{ (new Date(Date.parse(props.source.deadline))).toLocaleString( 'en-EN',{ year: 'numeric', month: 'long', day: 'numeric'}) }</span>
                <span className={"tag " + getClassName(props.source.tag) } >{ props.source.tag }</span>
            </div>
        </div>
    )
}