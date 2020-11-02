import { combineReducers } from "redux";


import auth from "./auth/reducer";
import modals from "./modals/reducer";
import pages from './pages/reducer';





export default () =>
    combineReducers({
        auth,
        modals,
        pages,
    });
