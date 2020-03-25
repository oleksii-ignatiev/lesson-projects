// Core
import {useEffect, useState} from 'react';

// Api
import { api } from '../../api';

export const useApiLoader = () => {
    console.log('hook render');
    
    const [db, setDb] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    
    useEffect(() => {
        (async () => {
            const response = await api.news.fetch();
            const data = await response.json();
            setIsFetching(true);
            setDb(data);
        })();
    }, []);

    useEffect(() => {
        setIsFetching(false);
    }, [db]);
    
    return {
        db,
        isFetching
    }
}