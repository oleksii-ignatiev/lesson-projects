import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { tasksActions } from '../actions';

export const useTasksFetch = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tasksActions.fetchAsync());
    }, [dispatch]);

    const {
        data,
        isFetching,
        error
    } = useSelector((state) => state.tasks);

    return {
        data,
        isFetching,
        error
    }
}
