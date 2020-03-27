// Core
import {useEffect, useState} from 'react';

// Api
import { api } from '../../api';

export const useApiLoader = () => {
    console.log('hook render');
    
    const [db, setDb] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isServerError, setIsServerError] = useState(false);
    
    
    useEffect(() => {
        (async () => {
            try {
                const response = await api.news.fetch();
                const data = await response.json();
                setDb(data);
                setIsFetching(true);
            } catch {
                setIsServerError(true);
            }
        })();
    }, []);

    useEffect(() => {
        setIsFetching(false);
    }, [db]);
    
    return {
        db,
        isFetching,
        isServerError,
    }
}