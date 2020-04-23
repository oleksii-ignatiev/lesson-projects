import { types } from './types';

const initialState = {
    data: [],
    error: null,
    isFetching: false,
    
};

export const tasksReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.TASKS_START_FETCHING:
            return { ...state, isFetching: true };
        case types.TASKS_STOP_FETCHING:
            return { ...state, isFetching: false };
        case types.TASKS_SET_FETCHING_ERROR:
            return { ...state, error: payload, data: null };
        case types.TASKS_FILL:
            return { ...state, data: payload, error: null };

        default:
            return state;
    }
}
