import React from 'react';

import { useTasksFetch } from './hooks/useTasksFetch';
import { Task } from './task';


export const TasksList = (props) => {
    const { isFetching, data, error } = useTasksFetch();
    
    if (error && error.status === 404) {
        return <p>Not found!</p>
    }

    if (error && error.status !== 404) {
        return <p>Something went wrong...</p>
    }
    
    const listJSX = !isFetching && data && data.map( (currentTask) => (
        <Task key = {currentTask.hash} source = {currentTask} {...props} />
    ));

    return (
        <div className="list">
            <div className="tasks">
                { listJSX }
            </div>
        </div>
    )
}