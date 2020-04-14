import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { commentsActions } from '../actions';

export const useCommentsFetch = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(commentsActions.fetchAsync());
    }, [dispatch]);

    const {
        data,
        isFetching,
        error
    } = useSelector((state) => state.comments);

    return {
        data,
        isFetching,
        error
    }
}