import React from 'react';

// Components
import { Article } from '../article';

// Hooks
import { useApiLoader } from './useApiLoader';

export const News = () => {
    
    const { db, isFetching, isServerError } = useApiLoader();
    const articleJSX = ( !isServerError ) ? db.map(({objectId, ...props}) => (<Article key = { objectId } { ...props } />)) : <h2>Сервер не отвечает</h2>;
    const loadingDataJSX = <p>Загрузка данных</p>;
    
    return (
        <section>
            <h3>News</h3>
            { (isFetching) ? loadingDataJSX : articleJSX }
            { (isFetching) ? console.log('Загрузка данных') : console.log('Загрузка не идет') }
        </section>
    );
};
