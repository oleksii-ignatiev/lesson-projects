import React from 'react';
import { Link } from "react-router-dom";

import { useCommentsFetch } from './hooks/useCommentsFetch';

export const Comments = () => {
    const { isFetching, data, error } = useCommentsFetch();

    if (error && error.status === 404) {
        return <p>Not found!</p>
    }

    if (error && error.status !== 404) {
        return <p>Something went wrong...</p>
    }

    const spinnerJSX = isFetching && (
        <p>Loading data from API...</p>
    );

    const listJSX = !isFetching && data && data.map(({name, id}) => (
        
        <li key={ id }>
            <Link  to={`/comments/${ id }`} >{ name }</Link>
        </li>
    ));

    return (
        <>
            <h1>Comments</h1>
            {spinnerJSX}
            {listJSX}
        </>
    )
}