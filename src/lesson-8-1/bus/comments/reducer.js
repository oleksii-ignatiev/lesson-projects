import { types } from './types';

const initialState = {
    data: null,
    isFetching: false,
    error: null
};

export const commentsReducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
        case types.COMMENTS_START_FETCHING:
            return { ...state, isFetching: true };
        case types.COMMENTS_STOP_FETCHING:
            return { ...state, isFetching: false };
        case types.COMMENTS_SET_FETCHING_ERROR:
            return { ...state, isFetching: false, error: payload, data: null };
        case types.COMMENTS_FILL:
            return { ...state, data: payload, error: null }
        default:
            return state;
    }
};