import Router from "next/router";
import cookie from "js-cookie";
import { STORE_PAGE_INTO_DB } from "./types";
import axios from "axios";

export const storePage = (input) => (dispatch) => {
  // axios.post('/api/page', input)
  //   .then((data) => {
  //       if(data.data.status==='error')
  //       {
  //         message.error(data.data.message)
  //       }
  //       else
  //       {
  //           message.success(data.data.message)
  //       }
  //     console.log('data is:',data);
  //     return dispatch(STORE_PAGE_INTO_DB);
  //   });
  console.log("action called");
  dispatch(STORE_PAGE_INTO_DB);
};

export default {
  storePage,
};
