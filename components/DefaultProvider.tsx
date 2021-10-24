import { createWeb3ReactRoot } from '@web3-react/core'
import React from "react"
import { DefaultProviderName } from '../lib/constants'


const Web3ReactProviderDefault = createWeb3ReactRoot(DefaultProviderName)

interface Web3ReactProviderDefaultSSRParams {
  children: React.ReactChild;
  getLibrary: () => void;
}

const Web3ReactProviderDefaultSSR = ({ children, getLibrary }: Web3ReactProviderDefaultSSRParams): JSX.Element => {
  return (
    <Web3ReactProviderDefault getLibrary={getLibrary}>
      {children}
    </Web3ReactProviderDefault>
  )
}

export default Web3ReactProviderDefaultSSR;
