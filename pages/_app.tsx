import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { providers } from "ethers"
import dynamic from 'next/dynamic'

function getLibrary(provider?: any) {
  return new providers.Web3Provider(provider)
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  )
}
export default MyApp
