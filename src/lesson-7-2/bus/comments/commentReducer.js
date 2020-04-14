import { types } from './types';

const initialState = {
    data: null,
    isFetching: false,
    error: null
};

export const commentReducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
        case types.COMMENT_START_FETCHING:
            return { ...state, isFetching: true };
        case types.COMMENT_STOP_FETCHING:
            return { ...state, isFetching: false };
        case types.COMMENT_SET_FETCHING_ERROR:
            return { ...state, isFetching: false, error: payload, data: null };
        case types.COMMENT_FILL:
            return { ...state, data: payload, error: null }
        default:
            return state;
    }
};