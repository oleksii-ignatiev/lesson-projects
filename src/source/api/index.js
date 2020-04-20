import { root } from './config';

export const api = Object.freeze({
    
    post: {
        create: ( data ) => {
            return fetch( `${root}/todos`, { 
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                    'x-user': 'oleksii',
                },
                body: JSON.stringify(data
                //     {
                //     "completed": false,
                //     "title": "Test title",
                //     "description": "description",
                //     "deadline": "21 Apr 2020",
                //     "tag": "Sketch",
                //     "checklist": [
                //         {
                //             "title": "learn ui",
                //             "completed": false
                //         }
                //     ]
                // }
                )
                
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
        }
    },
})