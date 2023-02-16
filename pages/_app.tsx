import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "components/GlobalStyles/GlobalStyles";
import Header from "components/Header";
import type { AppProps } from "next/app";

const theme = {
  colors: {
    primary: '#ff0000'
  }
}

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header isDark />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App