import { types } from './types';

const initialState = {
    data: null,
    isFetching: false,
    error: null
};

export const postReducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
        case types.POST_START_FETCHING:
            return { ...state, isFetching: true };
        case types.POST_STOP_FETCHING:
            return { ...state, isFetching: false };
        case types.POST_SET_FETCHING_ERROR:
            return { ...state, error: payload, data: null };
        case types.POST_FILL:
            return { ...state, data: payload, error: null }
        default:
            return state;
    }
};