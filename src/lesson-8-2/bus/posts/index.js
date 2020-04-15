import React from 'react';
import { Link } from "react-router-dom";

import { usePostsFetch } from './hooks/usePostsFetch';

export const Posts = () => {
    const { isFetching, data, error } = usePostsFetch();

    if (error && error.status === 404) {
        return <p>Not found!</p>
    }

    if (error && error.status !== 404) {
        return <p>Something went wrong...</p>
    }

    const spinnerJSX = isFetching && (
        <p>Loading data from API...</p>
    );

    const listJSX = !isFetching && data && data.map(({title, id}) => (
        
        <li key={ id }>
            <Link  to={`post/${ id }`} >{ title }</Link>
        </li>
    ));

    return (
        <>
            <h1>Posts</h1>
            {spinnerJSX}
            {listJSX}
        </>
    )
}