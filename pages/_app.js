import '../styles/globals.css'
import "../styles/antd.less";
import App from 'next/app'
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp;