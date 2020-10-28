import '../styles/globals.css'
import "../styles/antd.less";
import App from 'next/app'


// redux setup 
import { wrapper } from "../redux/createStore";
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      }
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Component {...pageProps} />
    );
  }

}

export default wrapper.withRedux(MyApp);