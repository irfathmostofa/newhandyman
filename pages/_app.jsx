import "@/styles/globals.css";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />;
  return (
    <>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
