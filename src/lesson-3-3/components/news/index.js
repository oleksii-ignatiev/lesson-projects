import React from 'react';

// Components
import { Article } from '../article';

// Hooks
import { useApiLoader } from './useApiLoader';

export const News = () => {
    
    const { db, isFetching, isServerError, isClientError } = useApiLoader();
    const articleJSX = ( !isServerError ) ? ( ( !isClientError ) ? db.map(({objectId, ...props}) => (<Article key = { objectId } { ...props } />)) : <h2>Неправильный запрос</h2> ) : <h2>Сервер не отвечает</h2>;
    const loadingDataJSX = <p>Загрузка данных</p>;
    
    return (
        <section>
            <h3>News</h3>
            { (isFetching) ? loadingDataJSX : articleJSX }
            { (isFetching) ? console.log('Загрузка данных') : console.log('Загрузка не идет') }
        </section>
    );
};
