import { ThemeProvider } from "@emotion/react";
import axios from "axios";
import GlobalStyles from "components/GlobalStyles/GlobalStyles";
import Header from "components/Header";
import { NextComponentType } from "next";
import getConfig from "next/config";
import theme from "theme/theme";

type AttibuterType = {
  slug: string
}

type Props = {
  Component: NextComponentType
  pageProps: any
  navigation: [
    {
      id: number
      attributer: AttibuterType
    }
  ]
}

function App({ Component, pageProps, navigation }: Props) {
  console.log(navigation);
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header navigation={navigation} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

const { publicRuntimeConfig } = getConfig()

App.getInitialProps = async () => {
  
  const res = await axios.get(`${publicRuntimeConfig.NEXT_PUBLIC_API_URL}/navigation`)
  const data = res.data.data

  return {
    props: {
      navigation: data
    }
  }
}

export default App