import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from "@web3-react/network-connector";

export const supportedChainIds = [
    1, // Mainnet
    42 // Kovan
]

const RPC_URLS: { [chainId: number]: string } = {
    1: process.env.NEXT_PUBLIC_ALCHEMY_MAINNET as string,
    42: process.env.NEXT_PUBLIC_ALCHEMY_KOVAN as string
  }

export const injectedConnector = new InjectedConnector({
    supportedChainIds: supportedChainIds
})
export const networkConnector = new NetworkConnector({
  urls: { 1: RPC_URLS[1], 42: RPC_URLS[42] },
  defaultChainId: 1
})
