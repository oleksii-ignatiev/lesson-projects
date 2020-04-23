import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { tasksActions } from '../../tasklist/actions';

export const useGetTask = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tasksActions.fetchTaskAsync(props.hash));
    }, [dispatch,props.hash]);
    
    const {
        data,
        error
    } = useSelector((state) => state.task);
    
    return {
        data,
        error,
    }
}