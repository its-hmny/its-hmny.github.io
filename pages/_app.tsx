import { createTheme, NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Custom NextUI app theme (dark + orange as primary color)
  const theme = createTheme({ type: 'dark' });

  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
};

export default MyApp;
