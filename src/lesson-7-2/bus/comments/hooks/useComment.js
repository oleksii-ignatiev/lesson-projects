import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { commentActions } from '../commentActions';

export const useComment = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(commentActions.fetchAsync(props.id));
    }, [dispatch]);

    const {
        data,
        isFetching,
        error
    } = useSelector((state) => state.comment);

    return {
        data,
        isFetching,
        error
    }
}