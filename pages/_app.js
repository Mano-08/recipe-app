import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import Layout from '../components/layout/Layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1 * 60 * 60 * 1000,
      staleTime: 1 * 60 * 60 * 1000,
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-left" toastOptions={{ toastOptions: { style: { fontSize: '1.4rem' } } }} />
      <Layout>
        <Component {...pageProps} />
      </Layout>

    </QueryClientProvider>
  );
}
