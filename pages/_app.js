import '@styles/globals.css'
import NavigationBar from '@components/NavigationBar'

function Application({ Component, pageProps }) {
  return (
    <>
      <NavigationBar/>
      <Component {...pageProps} />
    </>
  );
};

export default Application
