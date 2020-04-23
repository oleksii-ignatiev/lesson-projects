import { root } from './config';

export const api = Object.freeze({
    
    task: {
        create: ( data ) => {
            return fetch( `${root}/todos`, { 
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                    'x-user': 'oleksii',
                },
                body: JSON.stringify(data)
            })   
        },
        get: () => {
            return fetch( `${root}/todos`, { 
                method: 'GET',
                headers: {
                    'Content-Type':'application/json',
                    'x-user': 'oleksii',
                },
            })
        },
        getTask: (hash) => {
            return fetch( `${root}/todos/${hash}`, { 
                method: 'GET',
                headers: {
                    'Content-Type':'application/json',
                    'x-user': 'oleksii',
                },
            })
        },
        delete: (hash) => {
            return fetch( `${root}/todos/${hash}`, { 
                method: 'DELETE',
                headers: {
                    'Content-Type':'application/json',
                    'x-user': 'oleksii',
                },
            })
        },
    },
})