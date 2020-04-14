import React from 'react';
import { useParams } from 'react-router-dom';

import { useComment } from '../hooks/useComment';

export const Comment = ( ) => {
    const { id } = useParams();
    const { isFetching, data, error } = useComment({id});

    if (error && error.status === 404) {
        return <p>Comment is not found!</p>
    }

    if (error && error.status !== 404) {
        return <p>Something went wrong...</p>
    }

    const spinnerJSX = isFetching && (
        <p>Loading comment from API...</p>
    );
    
    let commentJSX;
    if (!isFetching && data) { 
         
        const { postId, name, body, email } = { ... data };
        commentJSX = 
            <>
                <h2>Comment title: { name }</h2>
                <h4>Comment body: { body }</h4>
                <p>Comment to post: { postId }</p>
                <p>Author is: { email }</p>
            </>
    };
   
    return (
        <>
            <h1>Comment: {id}</h1>
            {spinnerJSX}
            {commentJSX}
        </>
    )
}