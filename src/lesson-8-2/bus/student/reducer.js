import { types } from './types';

const initialState = {
    data: {
        firstName: '',
        lastName: '',
        age: 7,
        email: '',
        sex: 'femail',
        speciality: 'developer'
    }
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 
        types.USER_FILL:
            return {
                ...state,
                data: action.payload
            }

        default:
            return state;
    }
}
