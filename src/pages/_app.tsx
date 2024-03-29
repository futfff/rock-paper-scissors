import { AuthStore } from "@/store/authStore";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Layout } from "@/features/layout/layout";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const checkAuth = AuthStore((store) => store.checkAuth);
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      checkAuth();
    }
  }, [checkAuth]);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
