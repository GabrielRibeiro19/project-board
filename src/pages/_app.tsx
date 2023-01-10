import type { AppProps } from "next/app";

import "../styles/global.scss";
import { Header } from "../components/Header";
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

import { Provider as NextAuthProvider } from 'next-auth/client'

const initialOptions ={
  "client-id": "Af4isjuaa1yI4qBqueeLc06zd28tY0o75P92-dmNFg98CVk4hswacppsTQYM_K7iFWWXxDJJFf9wFxqQ",
  currency: "BRL",
  intent: "capture"
};

function App({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <PayPalScriptProvider options={initialOptions}>
        <Header />
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </NextAuthProvider>
  );
}

export default App;
