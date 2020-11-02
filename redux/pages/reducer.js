import { STORE_PAGE_INTO_DB } from './types';
import {HYDRATE} from 'next-redux-wrapper';



// init state 


const init = () => ({
  requestedPage : {},
})



export const pageReducer = (state = init(), action) => {

    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload};
        case STORE_PAGE_INTO_DB:
            return{...state,requestedPage:action.payload};
        default:
            return state;
    }
};

export default pageReducer;
