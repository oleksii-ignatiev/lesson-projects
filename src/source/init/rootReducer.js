import { combineReducers } from 'redux';

import { tasksReducer as tasks } from '../bus/tasklist/reducer';
import { taskReducer as task } from '../bus/singletask/reducer';

export const rootReducer = combineReducers({
    tasks,
    task
});
