// Core
import {useEffect, useState} from 'react';

// Api
import { api } from '../../api';

export const useApiLoader = () => {
    console.log('hook render');
    
    const [db, setDb] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isServerError, setIsServerError] = useState(false);
    const [isClientError, setIsClientError] = useState(false);
    
    
    useEffect(() => {
        (async () => {
            try {
                const response = await api.news.fetch();
                const responseStatus = Math.trunc(response.status/100);
                
                if ( responseStatus === 4 ) {
                    setIsClientError(true);
                    setIsFetching(false);
                } else if ( responseStatus === 5 ) {
                    setIsServerError(true);
                    setIsFetching(false);
                }
                
                const data = await response.json();
                setDb(data);
                setIsFetching(true);
            } catch {
                setIsServerError(true);
                setIsFetching(false);
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
        isClientError
    }
}