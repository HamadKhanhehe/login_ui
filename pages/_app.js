import Header from "@/src/components/header";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider>
        <Header />
      </SessionProvider>
      <Component {...pageProps} />
    </>
  );
}
