import React from 'react';
import { useParams } from 'react-router-dom';

import { usePost } from '../hooks/usePost';

export const Post = ( ) => {
    const { id } = useParams();
    const { isFetching, data, error } = usePost({id});

    if (error && error.status === 404) {
        return <p>Post is not found!</p>
    }

    if (error && error.status !== 404) {
        return <p>Something went wrong...</p>
    }

    const spinnerJSX = isFetching && (
        <p>Loading post from API...</p>
    );
    
    let postJSX;
    if (!isFetching && data) { 
         
        const { userId, title, body } = { ... data };
        postJSX = 
            <>
                <h2>Title: { title }</h2>
                <h4>Post body: { body } </h4>
                <p>Author is: { userId }</p>
            </>
    };
   
    return (
        <>
            <h1>Post: {id}</h1>
            {spinnerJSX}
            {postJSX}
        </>
    )
}