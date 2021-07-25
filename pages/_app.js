import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import { enableStaticRendering } from "mobx-react-lite";
import { DefaultSeo } from "next-seo";
import NextNProgress from "nextjs-progressbar";
import { loadData } from "@sdgindex/data";
import { TITLE, META_DESCRIPTION, META_IMAGE, URL } from "root/config";
import ThemeProvider from "components/ThemeProvider";
import * as gtag from "helpers/gtag";

function MyApp({ Component: NextPage, pageProps }) {
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

  // Load data
  useEffect(() => {
    loadData({ timeseries: true });
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

  const {
    Layout = ({ children }) => <>{children}</>,
    layoutProps = () => {},
  } = NextPage;

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
        <Layout {...layoutProps(pageProps)}>
          <NextPage {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
