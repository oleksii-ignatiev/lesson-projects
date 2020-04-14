import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { postsActions } from '../actions';

export const usePostsFetch = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postsActions.fetchAsync());
    }, [dispatch]);

    const {
        data,
        isFetching,
        error
    } = useSelector((state) => state.posts);

    return {
        data,
        isFetching,
        error
    }
}