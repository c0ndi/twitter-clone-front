import type {AppProps} from "next/app";
import Head from "next/head";
import '@/styles/globals.css';

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import {useLoading} from "@/hooks/useLoading";
import {useAuth} from "@/hooks/useAuth";

import Navbar from "@/components/shared/Navbar";
import Loading from "@/components/shared/Loading";

const queryClient = new QueryClient()

export default function App({Component, pageProps: {...pageProps}}: AppProps) {
   return (
      <QueryClientProvider client={queryClient}>
         <Component {...pageProps} />
      </QueryClientProvider>
   );
}
