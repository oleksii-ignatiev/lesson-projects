import { types } from './types';

import { api } from '../../api';

export const commentActions = Object.freeze({

    startFetching: () => {
        return {
            type: types.COMMENT_START_FETCHING
        }
    },
    stopFetching: () => {
        return {
            type: types.COMMENT_STOP_FETCHING
        }
    },
    fill: (payload) => {
        return {
            type: types.COMMENT_FILL,
            payload: payload
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.COMMENT_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },

    fetchAsync: (id) => async (dispatch) => {
        dispatch({
            type: types.COMMENT_FETCH_ASYNC
        });

        dispatch(commentActions.startFetching());

        const response = await api.comment.fetch(id);
        
        if (response.status === 200) {
            const results = await response.json();

            dispatch(commentActions.fill(results));
        } else {
            const error = {
                status: response.status
            };

            dispatch(commentActions.setFetchingError(error));
        }
        dispatch(commentActions.stopFetching());
    }
});