import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import { enableStaticRendering } from "mobx-react-lite";
import { DefaultSeo } from "next-seo";
import NextNProgress from "nextjs-progressbar";
import { TITLE, META_DESCRIPTION, META_IMAGE, URL } from "root/config";
import ThemeProvider from "components/ThemeProvider";
import * as gtag from "helpers/gtag";

const App = ({ Component, pageProps }) => {
  // use static rendering in SSR mode
  if (typeof window === "undefined") {
    enableStaticRendering(true);
  }

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
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <DefaultSeo
        title={TITLE}
        description={META_DESCRIPTION}
        openGraph={{ url: URL, images: [{ url: META_IMAGE }] }}
        twitter={{ cardType: "summary_large_image" }}
      />
      <NextNProgress />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
