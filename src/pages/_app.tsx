import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartDrawer } from '@/components/CartDrawer/CartDrawer';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (

    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Component {...pageProps} />
          <CartDrawer />
        </Provider>
      </QueryClientProvider>
    </>
  );
}
