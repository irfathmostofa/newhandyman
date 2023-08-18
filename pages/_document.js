import { Html, Head, Main, NextScript } from "next/document";
import { Footer } from "./components/Layout/Footer";
import { Navber } from "./components/Layout/Navber";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navber />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
