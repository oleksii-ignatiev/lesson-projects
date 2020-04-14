import { types } from './types';

import { api } from '../../api';

export const postActions = Object.freeze({

    startFetching: () => {
        return {
            type: types.POST_START_FETCHING
        }
    },
    stopFetching: () => {
        return {
            type: types.POST_STOP_FETCHING
        }
    },
    fill: (payload) => {
        return {
            type: types.POST_FILL,
            payload: payload
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.POST_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },

    fetchPost: (id) => async (dispatch) => {
        dispatch({
            type: types.POST_FETCH_ASYNC
        });

        dispatch(postActions.startFetching());

        const response = await api.post.fetch(id)
    
        if (response.status === 200) {
            const results = await response.json();

            dispatch(postActions.fill(results));
        } else {
            const error = {
                status: response.status
            };

            dispatch(postActions.setFetchingError(error));
        }
        dispatch(postActions.stopFetching());
    }
});