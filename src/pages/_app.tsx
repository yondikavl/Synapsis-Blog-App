import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { EntityDetailContextProvider } from "@/components/utils/EntityDetailContext";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>Synap App</title>
      </Head>
      {pathname === "/" ? (
        <Component {...pageProps} />
      ) : (
        <EntityDetailContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </EntityDetailContextProvider>
      )}
    </>
  );
}
