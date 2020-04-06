import { types } from './types';

export const studentActions = {
    fillProfile: (profile) => {
        return {
            type: types.USER_FILL,
            payload: profile
        }
    }
}
