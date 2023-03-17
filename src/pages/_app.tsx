import type {AppProps} from "next/app";
import {useRouter} from "next/router";
import Head from "next/head";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function App({Component, pageProps: {...pageProps}}: AppProps) {
   return (
      <QueryClientProvider client={queryClient}>
         <Component {...pageProps} />
      </QueryClientProvider>
   );
}
