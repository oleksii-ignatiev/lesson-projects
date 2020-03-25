import React from 'react';

// Components
import { Article } from '../article';

// Hooks
import { useApiLoader } from './useApiLoader';

export const News = () => {
    const { db, isFetching } = useApiLoader();
    const articleJSX = db.map(({objectId, ...props}) => (<Article key = { objectId } { ...props } />));
    const loadingDataJSX = <p>Загрузка данных</p>;
    return (
        <section>
            <h3>News</h3>
            { (isFetching) ? loadingDataJSX : articleJSX }
            { (isFetching) ? console.log('Загрузка данных') : console.log('Загрузка не идет') }
        </section>
    );
};
