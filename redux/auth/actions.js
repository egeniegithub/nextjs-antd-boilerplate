
import Router from 'next/router'
import cookie from 'js-cookie'
import {SET_USER} from './types';

import axios from 'axios';

 const loginUser = () => dispatch => {
     axios.get('/api/session')
          .then(res => ({
            isLoggedIn: res.data.data.isLoggedIn,
            user: res.data.data.user,
          }))
          .then(({ isLoggedIn, user }) => {
            dispatch({
              type: SET_USER,
              payload: { isLoggedIn, user },
            });
          });

}

export default {
    loginUser
}
