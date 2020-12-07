import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import { enableStaticRendering } from "mobx-react-lite";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import NextNProgress from "nextjs-progressbar";
import { TITLE, META_DESCRIPTION, META_IMAGE, URL } from "/config";
import getTheme from "helpers/getTheme";
import * as gtag from "helpers/gtag";

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

  // Track pages
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta property="og:title" content={TITLE} />
        <meta name="twitter:title" content={TITLE} />

        {META_IMAGE && (
          <>
            <meta name="twitter:image" content={META_IMAGE} />
            <meta property="og:image" content={META_IMAGE} />
          </>
        )}

        {META_DESCRIPTION && (
          <>
            <meta name="description" content={META_DESCRIPTION} />
            <meta property="og:description" content={META_DESCRIPTION} />
            <meta name="twitter:description" content={META_DESCRIPTION} />
          </>
        )}

        {URL && <meta property="og:url" content={URL} />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <NextNProgress />
      <ThemeProvider theme={getTheme()}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
