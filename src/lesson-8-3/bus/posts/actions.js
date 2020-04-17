import { types } from './types';

import { api } from '../../api';

export const postsActions = Object.freeze({

    startFetching: () => {
        return {
            type: types.POSTS_START_FETCHING
        }
    },
    stopFetching: () => {
        return {
            type: types.POSTS_STOP_FETCHING
        }
    },
    fill: (payload) => {
        return {
            type: types.POSTS_FILL,
            payload: payload
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.POSTS_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },

    fetchAsync: () => async (dispatch) => {
        dispatch({
            type: types.POSTS_FETCH_ASYNC
        });

        dispatch(postsActions.startFetching());

        const response = await api.posts.fetch()
    
        if (response.status === 200) {
            const results = await response.json();

            dispatch(postsActions.fill(results));
        } else {
            const error = {
                status: response.status
            };

            dispatch(postsActions.setFetchingError(error));
        }
        dispatch(postsActions.stopFetching());
    }
});