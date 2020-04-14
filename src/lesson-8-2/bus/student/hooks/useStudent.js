import { useSelector, useDispatch } from 'react-redux';

import { studentActions } from '../actions';

export const useStudent = () => {
    const selector = (state) => state.user;
    const { data } = useSelector(selector);
    
    const dispatch = useDispatch();

    const fillUser = (profile) => {
        const action = studentActions.fillProfile(profile)

        dispatch(action);
    }

    return {
        user: data,
        fillUser,
    }
}