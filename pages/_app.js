import '@styles/globals.css'
import NavigationBar from '@components/NavigationBar'
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
