import App from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { enableStaticRendering } from "mobx-react-lite";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { TITLE } from "/config";
import getTheme from "helpers/getTheme";

function MyApp({ Component, pageProps }) {
  // use static rendering in SSR mode
  if (typeof window === "undefined") {
    enableStaticRendering(true);
  }

  // Remove the server-side injected CSS.
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={getTheme()}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
