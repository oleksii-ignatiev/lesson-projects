import { root } from './config';

export const api = Object.freeze({
    posts: {
        fetch: () => {
            return fetch( `${root}/posts`, { 
                method: 'GET',
            })
        }
    },
    post: {
        fetch: ( id ) => {
            return fetch( `${root}/posts/${id}`, { 
                method: 'GET'
            })    
        }
    },
    comments: {
        fetch: ( ) => {
            return fetch( `${root}/comments`, { 
                method: 'GET'
            })    
        }
    },
    comment: {
        fetch: ( id ) => {
            return fetch( `${root}/comments/${id}`, { 
                method: 'GET'
            })    
        }
    }
});
