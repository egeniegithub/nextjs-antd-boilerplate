import { SET_USER } from './types';
import {HYDRATE} from 'next-redux-wrapper';



// init state 


const init = () => ({
    login: false,
})



export const modalReducer = (state = init(), action) => {

    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload};

        default:
            return state;
    }
};

export default modalReducer;
