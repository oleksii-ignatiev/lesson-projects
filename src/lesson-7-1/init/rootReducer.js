import { combineReducers } from 'redux';

import { userReducer as user } from '../bus/student/reducer';
import { postsReducer as posts } from '../bus/posts/reducer';
import { postReducer as post } from '../bus/posts/postReducer';

export const rootReducer = combineReducers({
    user,
    posts,
    post,
});
