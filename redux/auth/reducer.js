import { SET_USER } from './types';
import {HYDRATE} from 'next-redux-wrapper';



// init state 


const init = () => ({
    user: {
        name: null,
        email: null,
        phone: null,
        country: null,
        city: null,
    }
})



export const userReducer = (state = init(), action) => {

    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload};

        case SET_USER:
            return {
                ...state,
                user: action.payload,
            }

        default:
            return state;
    }
};

export default userReducer;
