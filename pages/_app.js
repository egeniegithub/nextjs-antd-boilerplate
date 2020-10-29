import '../styles/globals.css'
import "../styles/antd.less";
import App from 'next/app'

import axios from 'axios';
import React from "react";
import nextCookie from 'next-cookies'

// redux setup 
import { wrapper } from "../redux/createStore";
const MyApp = (props) => {

  const tryToAuthenticate = () => {
    axios.get('/api/session', {
    }).then((res) => {
      console.log('res is :', res);
    })
  }
    React.useEffect(() => {
      tryToAuthenticate()
    }, [])

    const { Component, pageProps } = props;
    return (
      <Component {...pageProps} />
    );


  }

  MyApp.getInitialProps = async ({ Component, ctx }) => {
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      }
    };
  }
  export default wrapper.withRedux(MyApp);