import { types } from './types';

import { api } from '../../api';

export const tasksActions = Object.freeze({

    startFetching: () => {
        return {
            type: types.TASKS_START_FETCHING
        }
    },
    stopFetching: () => {
        return {
            type: types.TASKS_STOP_FETCHING
        }
    },
    fill: (payload) => {
        return {
            type: types.TASKS_FILL,
            payload: payload
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.TASKS_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },

    fetchAsync: () => async (dispatch) => {
        dispatch({
            type: types.TASKS_FETCH_ASYNC
        });

        dispatch(tasksActions.startFetching());

        const response = await api.task.get();
        
            
        if (response.status === 200) {
            const results = await response.json();
            
            dispatch(tasksActions.fill(results.data));
            
        } else {
            const error = {
                status: response.status
            };

            dispatch(tasksActions.setFetchingError(error));
        }
        dispatch(tasksActions.stopFetching());
    },

// Single task actions
startTaskFetching: () => {
    return {
        type: types.TASK_START_FETCHING
    }
},
stopTaskFetching: () => {
    return {
        type: types.TASK_STOP_FETCHING
    }
},
fillTask: (payload) => {
    return {
        type: types.TASK_FILL,
        payload: payload
    }
},
setTaskFetchingError: (error) => {
    return {
        type: types.TASK_SET_FETCHING_ERROR,
        error: true,
        payload: error
    }
},

fetchTaskAsync: (hash) => async (dispatch) => {
    dispatch({
        type: types.TASK_FETCH_ASYNC
    });

    dispatch(tasksActions.startTaskFetching());

    const response = await api.task.getTask(hash);
    
        
    if (response.status === 200) {
        const results = await response.json();
        
        dispatch(tasksActions.fillTask(results.data));
    } else {
        const error = {
            status: response.status
        };

        dispatch(tasksActions.setTaskFetchingError(error));
    }
    dispatch(tasksActions.stopTaskFetching());
}

});
