import '@monorepo/token/lib/index.css';
import {Providers} from 'join-react-context';
import Head from 'next/head';
import React, {useEffect} from 'react';

import {initSentry} from '@src/utils/sentry';
import {logBuildInformation} from '@src/config';

// if (typeof window !== 'undefined') {
//   TagManager.initialize(GTM_ENV);
// }

initSentry();

const App = ({Component, pageProps}: any) => {
  useEffect(() => {
    logBuildInformation();
  }, []);

  return (
    <Providers providers={<></>}>
      <Head>
        <title>Riiid for Classrooms</title>
        <meta name="description" content="A platform that puts teachers first" />
      </Head>
      <Component {...pageProps} />
    </Providers>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App;
