import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { postActions } from '../postActions';

export const usePost = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postActions.fetchPost(props.id));
    }, [dispatch]);

    const {
        data,
        isFetching,
        error
    } = useSelector((state) => state.post);

    return {
        data,
        isFetching,
        error
    }
}