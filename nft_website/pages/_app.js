import '../styles/globals.css'
import Head from 'next/head'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider) {
  const p = new Web3Provider(provider);
  return p;
}

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Head>
        <title>Mint Pumpkin!</title>
      </Head>
      <Component {...pageProps} />
    </Web3ReactProvider>
  )
}

export default MyApp
