import { combineReducers, createStore } from 'redux';

import { userReducer as user } from '../bus/student/reducer';
import { postsReducer as posts } from '../bus/posts/reducer';
import { postReducer as post } from '../bus/posts/postReducer';
import { commentsReducer as comments } from '../bus/comments/reducer';
import { commentReducer as comment } from '../bus/comments/commentReducer';

import { store } from './store';

export const referenceRootReducer = combineReducers({
    user,
    posts,
    post,
    comments,
    comment  
});

const referenceStore = createStore(referenceRootReducer);

describe('Redux Store', () => {
  test('shoud have a valid state shape', () => {
    expect(store.getState()).toEqual(referenceStore.getState());
  });
});