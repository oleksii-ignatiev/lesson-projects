import { root } from './config';

export const api = Object.freeze({
    posts: {
        fetch: () => {
            return fetch( `${root}`, { 
                method: 'GET',
            })
        }
    },
    post: {
        fetch: ( id ) => {
            return fetch( `${root}/${id}`, { 
                method: 'GET'
            })    
        }
    }
});
