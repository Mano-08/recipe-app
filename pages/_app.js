import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { React, useState } from 'react';
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from 'next/router';
import { ThreeDots } from 'react-loader-spinner';
import NProgress from 'nprogress';
import Layout from '../components/layout/Layout';
import classes from './app.module.scss';

NProgress.configure({ showSpinner: false });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1 * 60 * 60 * 1000,
      staleTime: 1 * 60 * 60 * 1000,
    },
  },
});

export default function App({ Component, pageProps }) {
  const [LoadingPage, setLoadingPage] = useState(false);
  Router.events.on('routeChangeStart', () => {
    setLoadingPage(true);
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    setLoadingPage(false);
    NProgress.done();
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="bottom-right"
        autoClose={1650}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <Layout>
        {LoadingPage && (
        <div className={classes.routeLoader}>
          <ThreeDots
            disableTypography
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible
          />

        </div>
        )}
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
