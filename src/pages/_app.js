import { AppProviders } from "@/contexts";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  // const router = useRouter();
  // const Layout = Component.Layout || Noop;
  return (
    <AppProviders pageProps={pageProps}>
      <Component {...pageProps} />
    </AppProviders>
  );
}
