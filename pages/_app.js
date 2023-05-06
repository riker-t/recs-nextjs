import '@styles/globals.css'
import BottomNavigationBar from '@components/BottomNav';

function Application({ Component, pageProps }) {
  return (
    <>
      <BottomNavigationBar/>
      <Component {...pageProps} />
    </>
  );
};

export default Application
