import { root } from './config';

export const api = Object.freeze({
    // post: {
    //     fetch: () => {
    //         return fetch( `${root}/posts`, { 
    //             method: 'GET',
    //         })
    //     }
    // },
    post: {
        create: (  ) => {
            return fetch( `${root}/todos`, { 
                method: 'POST',
                // mode: 'no-cors',
                headers: {
                    'Content-Type':'application/json',
                    'x-user': 'oleksii',
                },
                body: JSON.stringify({
                    "completed": false,
                    "title": "Test title",
                    "description": "description",
                    "deadline": "21 Apr 2020",
                    "tag": "Sketch",
                    "checklist": [
                        {
                            "title": "learn ui",
                            "completed": false
                        }
                    ]
                })
                
            })   
        }
    },
})