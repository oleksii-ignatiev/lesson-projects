import { combineReducers } from 'redux';

import { userReducer as user } from '../bus/student/reducer';

export const rootReducer = combineReducers({
    user
});
