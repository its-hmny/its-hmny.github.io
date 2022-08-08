import { createTheme, NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import SEO from '../components/SEO';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Custom NextUI app theme (dark + orange as primary color)
  const theme = createTheme({ type: 'dark' });

  // Custom SWR configuration with shared defaults
  const config = {
    fetcher: (url: string) => fetch(url).then(res => res.json()), // Default fetcher function
    refreshInterval: 2 * 60 * 1000, // Refresh the data every 2 minutes
    dedupingInterval: 2 * 60 * 1000, // Avoids double request in the same time window

    // Error handling strategy
    errorRetyCount: 3, // Tries the same request 3 times before returning an error
    errorRetryIntervale: 5000, // Interval between one try and the other

    // Revalidation strategies
    revalidateIfStale: true, // Revalidate when data become stale
    revalidateOnMount: true, // Revalidate when a new component is mounted
    revalidateOnFocus: true, // Revalidate when the user focus back on the browser window
    revalidateOnReconnect: true, // Revalidate when the browser come back online
  };

  return (
    <NextUIProvider theme={theme}>
      <SWRConfig value={config}>
        <SEO />
        <Component {...pageProps} />
      </SWRConfig>
    </NextUIProvider>
  );
};

export default MyApp;
