import { types } from '../tasklist/types';

const initialState = {
    data: [],
    error: null,
    isFetching: false,
    
};

export const taskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.TASK_START_FETCHING:
            return { ...state, isFetching: true };
        case types.TASK_STOP_FETCHING:
            return { ...state, isFetching: false };
        case types.TASK_SET_FETCHING_ERROR:
            return { ...state, error: payload, data: null };
        case types.TASK_FILL:
            return { ...state, data: payload, error: null }

        default:
            return state;
    }
}