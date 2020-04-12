import { types } from './types';

const initialState = {
    data: null,
    isFetching: false,
    error: null
};

export const postsReducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
        case types.POSTS_START_FETCHING:
            return { ...state, isFetching: true };
        case types.POSTS_STOP_FETCHING:
            return { ...state, isFetching: false };
        case types.POSTS_SET_FETCHING_ERROR:
            return { ...state, error: payload, data: null };
        case types.POSTS_FILL:
            return { ...state, data: payload, error: null }
        default:
            return state;
    }
};