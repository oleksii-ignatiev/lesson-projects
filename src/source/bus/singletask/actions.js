import { types } from './types';

import { api } from '../../api';

export const formActions = Object.freeze({

    startEditing: () => {
        return {
            type: types.FORM_START_EDITING
        }
    },
    // startFetching: () => {
    //     return {
    //         type: types.FORM_START_FETCHING
    //     }
    // },
    // stopFetching: () => {
    //     return {
    //         type: types.FORM_STOP_FETCHING
    //     }
    // },
    fill: (payload) => {
        return {
            type: types.FORM_POST_DATA,
            payload: payload
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.FORM_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },

    fetchAsync: (type) => async (dispatch) => {
        dispatch({
            type: type
        });

        dispatch(formActions.startFetching());
        let response;
        switch (type) {
            case 'FORM_POST_DATA': response = await api.post.create();
            case 'FORM_GET_DATA': response = await api.post.get();
            case 'FORM_UPDATE_DATA': response = await api.post.update();
            case 'FORM_POST_DATA': response = await api.post.create();
            case 'FORM_POST_DATA': response = await api.post.create();
            case 'FORM_POST_DATA': response = await api.post.create();
            case 'FORM_POST_DATA': response = await api.post.create();

        }
            
        if (response.status === 200) {
            const results = await response.json();

            dispatch(formActions.fill(results));
        } else {
            const error = {
                status: response.status
            };

            dispatch(formActions.setFetchingError(error));
        }
        // dispatch(formActions.stopFetching());
    }
});
